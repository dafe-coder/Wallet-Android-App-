import React, { useEffect, useState, useRef } from 'react'
import {
	View,
	StyleSheet,
	TouchableOpacity,
	Image,
	ScrollView,
} from 'react-native'
import { WalletText, WalletButton } from '../Components/UI'
import { THEME } from '../Theme'
import { SwapDetails } from './../Components'
import { useSelector, useDispatch } from 'react-redux'
import { SvgIcon } from './../Components/svg/svg'
import {
	setChooseCoinSwapSecond,
	setChooseCoin,
	setSwapAmountFirst,
	setSwapAmountSecond,
	setLoader,
	setUpdateWallet,
} from './../store/actions/walletActions'
import { swapCoins } from '../../services/funcWallet/swap'
import { WalletBottomSheet } from './../Components'
import { Gas, Success } from '../Components/modal'

export const ConfirmSwapScreen = ({ navigation }) => {
	const infoSuccess = useRef(null)
	const gasRef = useRef(null)
	const dispatch = useDispatch()
	const {
		chooseCoin,
		chooseCoinSwapSecond,
		swapAmountFirst,
		swapAmountSecond,
	} = useSelector((state) => state.wallet)
	const { dataUser, currentAccount, currentNetwork } = useSelector(
		(state) => state.storage
	)
	const [privateKey, setPrivateKey] = useState('')
	const [loaderSwap, setLoaderSwap] = useState(false)

	const onOpenSuccess = () => {
		infoSuccess.current?.expand()
	}
	const onCloseSuccess = () => {
		infoSuccess.current?.close()
		dispatch(setUpdateWallet())
		navigation.reset({
			index: 0,
			routes: [{ name: 'Home' }],
		})
	}
	const onOpenGas = () => {
		gasRef.current?.expand()
	}
	const onCloseGas = () => {
		gasRef.current?.close()
	}

	useEffect(() => {
		if (dataUser.length >= 1) {
			setPrivateKey(
				atob(dataUser.filter((d) => d.name == currentAccount)[0].privateKey)
			)
		}
	}, [dataUser])

	const onSwapCoins = () => {
		const frst = chooseCoin
		const scnd = chooseCoinSwapSecond
		dispatch(setChooseCoin(scnd))
		dispatch(setChooseCoinSwapSecond(frst))

		const frstAmount = swapAmountFirst
		const scndAmount = swapAmountSecond
		dispatch(setSwapAmountFirst(scndAmount))
		dispatch(setSwapAmountSecond(frstAmount))
	}

	useEffect(() => {
		dispatch(setLoader(loaderSwap))
	}, [loaderSwap])

	const createAddress = (chooseCoin) => {
		if (currentNetwork == 'Ethereum' && chooseCoin.contract_address === 'eth') {
			return '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'
		} else if (
			currentNetwork == 'Polygon' &&
			chooseCoin.symbol.toLowerCase() === 'matic'
		) {
			return '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'
		} else {
			return chooseCoin.contract_address
		}
	}

	const sendCoinsToSwap = () => {
		if (!loaderSwap) {
			let fromTokenAddress = createAddress(chooseCoin)
			let toTokenAddress = createAddress(chooseCoinSwapSecond)

			swapCoins(
				privateKey,
				fromTokenAddress,
				toTokenAddress,
				swapAmountFirst,
				setLoaderSwap,
				currentNetwork,
				onOpenSuccess,
				onOpenGas,
				chooseCoin
			)
		}
	}

	return (
		<ScrollView style={{ flex: 1 }}>
			<View
				style={{
					flex: 1,
					paddingTop: 62,
					paddingHorizontal: 16,
					justifyContent: 'space-between',
				}}>
				<View>
					<View style={[styles.itemSwap, { alignItems: 'center' }]}>
						<View style={{ alignItems: 'center', flexBasis: '45%' }}>
							<Image
								style={{
									width: 26,
									height: 26,
									borderRadius: 50,
									overflow: 'hidden',
									marginBottom: 4,
								}}
								source={{ uri: chooseCoin.image.thumb }}
							/>
							<WalletText>
								{swapAmountFirst + ' ' + chooseCoin.symbol.toUpperCase()}
							</WalletText>
						</View>
						<TouchableOpacity activeOpacity={0.7} onPress={onSwapCoins}>
							<View style={styles.swapBtn}>
								<SvgIcon type='swap-horizontal' />
							</View>
						</TouchableOpacity>
						<View style={{ alignItems: 'center', flexBasis: '45%' }}>
							<Image
								style={{
									width: 26,
									height: 26,
									borderRadius: 50,
									overflow: 'hidden',
									marginBottom: 4,
								}}
								source={{ uri: chooseCoinSwapSecond.image.thumb }}
							/>
							<WalletText>
								{swapAmountSecond +
									' ' +
									chooseCoinSwapSecond.symbol.toUpperCase()}
							</WalletText>
						</View>
					</View>
					{chooseCoin != null && chooseCoinSwapSecond != null ? (
						<SwapDetails
							confirm
							chooseCoinSwapFirst={chooseCoin}
							chooseCoinSwapSecond={chooseCoinSwapSecond}
						/>
					) : (
						<></>
					)}
				</View>
				<WalletButton onPress={sendCoinsToSwap} style={{ marginBottom: 60 }}>
					Swap
				</WalletButton>
				<WalletBottomSheet ref={infoSuccess} snapPoints={['48%']}>
					<Success onPress={onCloseSuccess} />
				</WalletBottomSheet>
				<WalletBottomSheet ref={gasRef} snapPoints={['48%']}>
					<Gas onPress={onCloseGas} />
				</WalletBottomSheet>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	swapBtn: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#ECE9F2',
		width: 40,
		height: 40,
		borderRadius: 50,
	},
	itemSwap: {
		backgroundColor: THEME.GREY_LIGHT_BG,
		paddingVertical: 17,
		borderRadius: 15,
		marginBottom: 48,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
})
