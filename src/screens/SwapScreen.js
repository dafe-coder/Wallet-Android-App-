import React, { useRef } from 'react'
import {
	ScrollView,
	Image,
	View,
	StyleSheet,
	TouchableOpacity,
} from 'react-native'
import { WalletTitle, WalletText, WalletButton } from '../Components/UI'
import { SelectCoinSwap, SwapDetails, WalletBottomSheet } from '../Components'
import { useSelector, useDispatch } from 'react-redux'
import {
	setChooseCoinSwapSecond,
	setChooseCoin,
} from './../store/actions/walletActions'
import useIsReady from '../../hooks/useIsReady'
import { BusyIndicator } from '../Components/Loader'
import useWalletService from '../../services/WalletService'
import { THEME } from './../Theme'
import { SvgIcon } from '../Components/svg/svg'
import { WalletModal, ChangeCurrentNetwork } from './../Components/modal/'

export const SwapScreen = ({ navigation }) => {
	const { getToken } = useWalletService()
	const isReady = useIsReady()
	const dispatch = useDispatch()

	const { currentNetwork, dataUser } = useSelector((state) => state.storage)
	const firstSwapRef = useRef(null)
	const secondSwapRef = useRef(null)
	const { chooseCoin, chooseCoinSwapSecond, allCoins, addressWallet } =
		useSelector((state) => state.wallet)

	const [tokenIsLoading, setTokenIsLoading] = React.useState(true)
	const [openModal, setOpenModal] = React.useState(false)
	const [network, setNetwork] = React.useState('Ethereum')

	const chooseNetwork = (name) => {
		setNetwork(name)
		setOpenModal(false)
	}

	React.useEffect(() => {
		navigation.setOptions({
			headerLeft: () => (
				<View style={{ paddingBottom: 10 }}>
					<WalletText>Swap in:</WalletText>
					<TouchableOpacity
						onPress={() => setOpenModal(true)}
						activeOpacity={0.7}
						style={{ flexDirection: 'row', alignItems: 'center' }}>
						<WalletTitle color='white'>{network}</WalletTitle>
						<SvgIcon
							style={{ marginLeft: 8, transform: [{ rotate: '90deg' }] }}
							type='play'
						/>
					</TouchableOpacity>
				</View>
			),
		})
	}, [navigation, network])

	if (!isReady) {
		return <BusyIndicator></BusyIndicator>
	}
	const onOpenFirstSwap = () => {
		firstSwapRef.current?.expand()
	}
	const onCloseFirstSwap = async (coin) => {
		firstSwapRef.current?.close()
		if (
			coin.id.toLowerCase() !== 'ethereum' &&
			coin.id.toLowerCase() !== 'eth' &&
			coin.id.length < 15
		) {
			await getToken(setTokenIsLoading, coin.id).then((data) => {
				const coinInfo = {
					...coin,
					contract_address: data.platforms[
						currentNetwork.title.toLowerCase() == 'polygon'
							? 'polygon-pos'
							: 'ethereum'
					]
						? data.platforms[
								currentNetwork.title.toLowerCase() == 'polygon'
									? 'polygon-pos'
									: 'ethereum'
						  ]
						: '',
				}
				dispatch(setChooseCoin(coinInfo))
			})
		} else {
			dispatch(setChooseCoin(coin))
		}
	}
	const onOpenSecondSwap = () => {
		secondSwapRef.current?.expand()
	}
	const onCloseSecondSwap = async (coin) => {
		secondSwapRef.current?.close()
		if (
			coin.id.toLowerCase() !== 'ethereum' &&
			coin.id.toLowerCase() !== 'eth' &&
			coin.id.length < 15
		) {
			await getToken(setTokenIsLoading, coin.id).then((data) => {
				const coinInfo = {
					...coin,
					contract_address: data.platforms[
						currentNetwork.title.toLowerCase() == 'polygon'
							? 'polygon-pos'
							: 'ethereum'
					]
						? data.platforms[
								currentNetwork.title.toLowerCase() == 'polygon'
									? 'polygon-pos'
									: 'ethereum'
						  ]
						: '',
				}
				dispatch(setChooseCoinSwapSecond(coinInfo))
			})
		} else {
			dispatch(setChooseCoinSwapSecond(coin))
		}
	}

	const onSwapCoins = () => {
		const frst = chooseCoin
		const scnd = chooseCoinSwapSecond
		dispatch(setChooseCoin(scnd))
		dispatch(setChooseCoinSwapSecond(frst))
	}
	return (
		<ScrollView
			style={{
				flex: 1,
				paddingTop: 29,
				paddingHorizontal: 16,
				paddingBottom: 30,
			}}>
			<View style={styles.itemProfile}>
				<View style={styles.profileImg}>
					<Image resizeMode='cover' source={{ uri: dataUser[0].image }} />
				</View>
				<View>
					<WalletText size='m' color='disabled'>
						Wallet 1
					</WalletText>
					<WalletText fw='bold' size='m'>
						{addressWallet.slice(0, 6) + '...' + addressWallet.slice(-4)}
					</WalletText>
				</View>
			</View>
			{chooseCoin != null && chooseCoinSwapSecond != null ? (
				<SelectCoinSwap
					onSwapCoins={onSwapCoins}
					chooseCoinSwapFirst={chooseCoin}
					chooseCoinSwapSecond={chooseCoinSwapSecond}
					onOpenFirstSwap={onOpenFirstSwap}
					onOpenSecondSwap={onOpenSecondSwap}
				/>
			) : (
				<></>
			)}
			{chooseCoin != null && chooseCoinSwapSecond != null ? (
				<SwapDetails
					chooseCoinSwapFirst={chooseCoin}
					chooseCoinSwapSecond={chooseCoinSwapSecond}
				/>
			) : (
				<></>
			)}
			<View style={{ alignItems: 'center', marginBottom: 160, marginTop: 32 }}>
				<WalletButton
					size='m'
					onPress={() => navigation.navigate('ConfirmSwap')}>
					Swap
				</WalletButton>
			</View>
			<WalletModal
				styleBody={{ maxWidth: 280, paddingVertical: 30 }}
				isVisible={openModal}>
				<ChangeCurrentNetwork network={network} onPress={chooseNetwork} />
			</WalletModal>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	itemProfile: {
		padding: 24,
		backgroundColor: THEME.GREY,
		borderRadius: 24,
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 24,
	},
	profileImg: {
		width: 40,
		height: 40,
		borderRadius: 50,
		backgroundColor: THEME.DISABLED_TEXT,
		marginRight: 12,
		overflow: 'hidden',
	},
})
