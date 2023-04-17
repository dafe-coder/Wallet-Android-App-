import React from 'react'
import {
	ScrollView,
	Image,
	View,
	StyleSheet,
	TouchableOpacity,
} from 'react-native'
import { WalletTitle, WalletText, WalletButton } from '../Components/UI'
import { SelectCoinSwap } from '../Components'
import { useSelector } from 'react-redux'
import useIsReady from '../../hooks/useIsReady'
import { BusyIndicator, LoadingText } from '../Components/Loader'
import { THEME } from './../Theme'
import { SvgIcon } from '../Components/svg/svg'
import { WalletModal, ChangeCurrentNetwork, Gas } from './../Components/modal/'
import { swapCoins } from './../../services/funcWallet/swap'

export const SwapScreen = ({ navigation, route }) => {
	const isReady = useIsReady()

	const { dataUser } = useSelector((state) => state.storage)
	const { allCoinsSwap, addressWallet } = useSelector((state) => state.wallet)

	const [openModal, setOpenModal] = React.useState(false)
	const [loaderSwap, setLoaderSwap] = React.useState(false)
	const [openGas, setOpenGas] = React.useState(false)
	const [network, setNetwork] = React.useState('Ethereum')
	const [frstData, setFirstData] = React.useState(null)
	const [secondData, setSecondData] = React.useState(null)
	const [firstAmount, setFirstAmount] = React.useState('0')

	React.useEffect(() => {
		if (allCoinsSwap.length) {
			const filtered = allCoinsSwap.filter(
				(item) =>
					!item.market_data.chain ||
					item.market_data.chain == network.toLowerCase()
			)
			setFirstData(filtered[0])
			setSecondData(
				filtered.find((item) => item.symbol.toLowerCase() === 'usdt')
			)
		}
	}, [allCoinsSwap, network])

	React.useEffect(() => {
		if (route.params !== undefined) {
			setFirstData(route.params.itemFirst)
			setSecondData(route.params.itemSecond)
		}
	}, [route.params])

	const onSwapCoins = () => {
		const frst = frstData
		const scnd = secondData
		setFirstData(scnd)
		setSecondData(frst)
	}

	const chooseNetwork = (name) => {
		setNetwork(name)
		setOpenModal(false)
	}

	React.useEffect(() => {
		navigation.setOptions({
			headerLeft: () => (
				<View style={{ paddingBottom: 10, paddingLeft: 11 }}>
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

	const createAddress = (chooseCoin) => {
		if (network == 'Ethereum' && chooseCoin.symbol.toLowerCase() === 'eth') {
			return '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'
		} else if (
			network == 'Polygon' &&
			chooseCoin.symbol.toLowerCase() === 'matic'
		) {
			return '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'
		} else {
			return (
				chooseCoin.contract_address ||
				chooseCoin.platforms[network == 'Ethereum' ? 'ethereum' : 'polygon-pos']
			)
		}
	}

	const onOpenGas = () => {
		setOpenGas(true)
	}

	const goSuccessPage = (hash) => {
		navigation.navigate('SwapSuccess', { hash, network: network })
	}

	const sendCoinsToSwap = () => {
		if (!loaderSwap) {
			const privateKey = atob(dataUser[0].privateKey)
			let fromTokenAddress = createAddress(frstData)
			let toTokenAddress = createAddress(secondData)
			swapCoins(
				privateKey,
				fromTokenAddress,
				toTokenAddress,
				firstAmount,
				setLoaderSwap,
				network,
				goSuccessPage,
				onOpenGas,
				frstData
			)
		}
	}

	if (!isReady) {
		return <BusyIndicator></BusyIndicator>
	}

	return (
		<ScrollView
			style={{
				flex: 1,
				paddingTop: 29,
				paddingHorizontal: 24,
				paddingBottom: 30,
			}}>
			<View style={styles.itemProfile}>
				<View style={styles.profileImg}>
					<Image
						style={{ width: '100%', height: '100%' }}
						resizeMode='cover'
						source={{ uri: dataUser[0] && dataUser[0].avatar }}
					/>
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
			<SelectCoinSwap
				network={network}
				onSwapCoins={onSwapCoins}
				frstData={frstData}
				secondData={secondData}
				firstAmount={firstAmount}
				setFirstAmount={setFirstAmount}
			/>
			<View style={{ alignItems: 'center', marginBottom: 160, marginTop: 32 }}>
				<WalletButton
					disabled={firstAmount == ''}
					size='m'
					onPress={sendCoinsToSwap}>
					{loaderSwap ? <LoadingText /> : 'Swap'}
				</WalletButton>
			</View>
			<WalletModal
				styleBody={{ maxWidth: 280, paddingVertical: 30 }}
				isVisible={openModal}>
				<ChangeCurrentNetwork network={network} onPress={chooseNetwork} />
			</WalletModal>
			<WalletModal
				styleBody={{
					paddingVertical: 40,
					paddingHorizontal: 70,
				}}
				isVisible={openGas}>
				<Gas onPress={() => setOpenGas(false)} />
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
