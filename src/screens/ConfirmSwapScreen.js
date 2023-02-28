import React, { useEffect, useState } from 'react'
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
} from './../store/actions/walletActions'
import { swapCoins } from '../../services/funcWallet/swap'

export const ConfirmSwapScreen = ({ navigation }) => {
	const dispatch = useDispatch()
	const {
		chooseCoin,
		chooseCoinSwapSecond,
		swapAmountFirst,
		swapAmountSecond,
	} = useSelector((state) => state.wallet)
	const { dataUser, currentAccount } = useSelector((state) => state.storage)
	const [privateKey, setPrivateKey] = useState('')

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
		console.log(chooseCoin)
	}, [chooseCoinSwapSecond])

	const sendCoinsToSwap = () => {
		swapCoins(
			privateKey,
			chooseCoin.contract_address != 'eth'
				? chooseCoin.contract_address
				: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
			'0xdac17f958d2ee523a2206206994597c13d831ec7'
		)
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
