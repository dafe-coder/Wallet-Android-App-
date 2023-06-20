import React from 'react'
import { TouchableOpacity, View, StyleSheet, ScrollView } from 'react-native'
import { Header } from '../Components'
import { ChooseCrypto, SwapAmount, SwapDetails } from './../Components/'
import { useSelector, useDispatch } from 'react-redux'
import { SvgIcon } from './../Components/svg/svg'
import { WalletButton, WalletText } from './../Components/UI/'
import { useLocation } from 'react-router-native'
import {
	setChooseCoinOne,
	setChooseCoinTwo,
} from '../store/slices/transactionSlice'
import { WalletModal, SuccessSwap, TransactionFail } from '../Components/modal/'
import { swapCoins } from './../../services/funcWallet/swap'
import { LoaderSwap } from '../Components/Loader/LoaderSwap'

export const Swap = () => {
	const dispatch = useDispatch()
	const { state } = useLocation()
	const { allCoins, contractAddressCoin } = useSelector((state) => state.wallet)
	const [successOpen, setSuccessOpen] = React.useState(false)
	const [gasOpen, setGasOpen] = React.useState(false)
	const { currentNetwork, dataUser, currentAccount } = useSelector(
		(state) => state.storage
	)
	const { chooseCoinOne, chooseCoinTwo } = useSelector(
		(state) => state.transaction
	)
	const [showDetails, setShowDetails] = React.useState(false)
	const [coinValue, setCoinValue] = React.useState(0)
	const [insufficientBtn, setInsufficientBtn] = React.useState(false)
	const [privateKey, setPrivateKey] = React.useState('')
	const [loaderSwap, setLoaderSwap] = React.useState(false)
	const [hash, setHash] = React.useState('')
	React.useEffect(() => {
		console.log(hash)
	}, [hash])

	React.useEffect(() => {
		if (dataUser.length >= 1) {
			setPrivateKey(
				atob(dataUser.filter((d) => d.name == currentAccount)[0].privateKey)
			)
		}
	}, [dataUser])

	React.useEffect(() => {
		if (coinValue !== '' && coinValue !== 0) {
			setShowDetails(true)
		} else {
			setShowDetails(false)
		}
	}, [coinValue])

	React.useEffect(() => {
		if (allCoins !== null) {
			if (currentNetwork == 'Ethereum') {
				const eth = allCoins.find((item) => item.symbol.toLowerCase() === 'eth')
				if (eth !== undefined && eth.market_data.balance_crypto > 5) {
					setInsufficientBtn(false)
				} else {
					setInsufficientBtn(true)
				}
			} else {
				const polygon = allCoins.find(
					(item) => item.symbol.toLowerCase() === 'matic'
				)
				if (polygon !== undefined && polygon.market_data.balance_crypto > 2) {
					setInsufficientBtn(false)
				} else {
					setInsufficientBtn(true)
				}
			}
		}
	}, [currentNetwork, allCoins])

	React.useEffect(() => {
		if (state !== null) {
			if (state.from === 'SwapFirst') {
				dispatch(setChooseCoinOne(state.item))
				if (chooseCoinTwo == null) {
					dispatch(setChooseCoinTwo(allCoins[1]))
				}
			} else if (state.from === 'SwapSecond') {
				dispatch(setChooseCoinTwo(state.item))
			}
		} else if (allCoins !== null && allCoins.length) {
			dispatch(setChooseCoinOne(allCoins[0]))
			dispatch(setChooseCoinTwo(allCoins[1]))
		}
	}, [state, allCoins])

	const onSwap = () => {
		if (chooseCoinOne !== null && chooseCoinTwo !== null) {
			const frst = chooseCoinOne
			const scnd = chooseCoinTwo
			dispatch(setChooseCoinOne(scnd))
			dispatch(setChooseCoinTwo(frst))
		}
	}

	function setCurrentNetwork(network) {
		switch (network) {
			case 'Ethereum':
				return 'ethereum'
			case 'Polygon':
				return 'polygon-pos'
			default:
				break
		}
	}

	const createAddress = (chooseCoin) => {
		if (currentNetwork == 'Ethereum' && chooseCoin.contract_address === 'eth') {
			return '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'
		} else if (
			currentNetwork == 'Polygon' &&
			chooseCoin.symbol.toLowerCase() === 'matic'
		) {
			return '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'
		} else {
			return chooseCoin.contract_address !== ''
				? chooseCoin.contract_address
				: contractAddressCoin[setCurrentNetwork(currentNetwork)]
		}
	}

	const goSwapCoins = () => {
		if (!insufficientBtn && !loaderSwap) {
			let fromTokenAddress = createAddress(chooseCoinOne)
			let toTokenAddress = createAddress(chooseCoinTwo)

			swapCoins(
				privateKey,
				fromTokenAddress,
				toTokenAddress,
				coinValue,
				setLoaderSwap,
				currentNetwork,
				setSuccessOpen,
				setGasOpen,
				chooseCoinOne,
				setHash
			)
		}
	}

	return (
		<ScrollView contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 24 }}>
			<Header backPath='/wallet' title='Swap' page='swap' />
			{chooseCoinOne !== null ? (
				<>
					<ChooseCrypto chooseCoin={chooseCoinOne} from='SwapFirst' />
					<SwapAmount
						value={coinValue}
						setValue={setCoinValue}
						chooseCoin={chooseCoinOne}
						type='in'
						style={{ marginVertical: 10 }}
					/>
				</>
			) : (
				<LoaderSwap />
			)}

			<View style={{ marginVertical: 15, alignItems: 'center' }}>
				<TouchableOpacity
					activeOpacity={0.7}
					style={styles.swapBtn}
					onPress={onSwap}>
					<SvgIcon type='swap-arrows' />
				</TouchableOpacity>
			</View>
			{chooseCoinTwo !== null ? (
				<View>
					<ChooseCrypto chooseCoin={chooseCoinTwo} from='SwapSecond' />
					<SwapAmount
						chooseCoin={chooseCoinTwo}
						type='out'
						style={{ marginVertical: 10 }}
					/>
				</View>
			) : (
				<LoaderSwap />
			)}

			<View style={{ marginTop: 'auto', marginBottom: 25 }}>
				<WalletButton
					loading={loaderSwap}
					onPress={goSwapCoins}
					style={{ marginTop: 15 }}
					type={insufficientBtn ? 'error' : 'primary'}>
					{insufficientBtn ? 'Insufficient Funds' : 'Confirm'}
				</WalletButton>
				{chooseCoinOne !== null && chooseCoinTwo !== null && (
					<WalletText center size='s' style={{ marginTop: 23 }}>
						{chooseCoinOne.symbol.toUpperCase()} ={' '}
						{chooseCoinOne.market_data.current_price.toFixed(2)} USD{' '}
						{' ' + '   '}1 {chooseCoinTwo.symbol.toUpperCase() + ' '}=
						{' ' + chooseCoinTwo.market_data.current_price.toFixed(2)} USD
					</WalletText>
				)}
			</View>
			{showDetails ? (
				<View style={{ marginBottom: 25 }}>
					<WalletText style={{ marginBottom: 15 }} fw='bold'>
						Swap Details
					</WalletText>
					<SwapDetails />
				</View>
			) : (
				<></>
			)}
			<WalletModal isVisible={successOpen}>
				<SuccessSwap close={setSuccessOpen} />
			</WalletModal>
			<WalletModal isVisible={gasOpen}>
				<TransactionFail close={setGasOpen} />
			</WalletModal>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	swapBtn: {
		borderRadius: 50,
		width: 30,
		height: 30,
		backgroundColor: 'white',
		justifyContent: 'center',
		alignItems: 'center',
	},
})
