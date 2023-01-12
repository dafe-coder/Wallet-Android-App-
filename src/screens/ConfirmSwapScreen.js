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
export const ConfirmSwapScreen = ({ navigation }) => {
	const [swap, setSwap] = useState(false)
	const dispatch = useDispatch()
	const {
		chooseCoin,
		chooseCoinSwapSecond,
		allCoins,
		swapAmountFirst,
		swapAmountSecond,
	} = useSelector((state) => state.wallet)

	useEffect(() => {
		dispatch(
			setChooseCoinSwapSecond(
				allCoins.filter((d) => d.symbol.includes('btc'))[0]
			)
		)
	}, [allCoins])

	useEffect(() => {
		const frst = swapAmountFirst
		const scnd = swapAmountSecond
		dispatch(setSwapAmountFirst(scnd))
		dispatch(setSwapAmountSecond(frst))
	}, [swap])

	const onSwapCoins = () => {
		setSwap((state) => !state)
		const frst = chooseCoin
		const scnd = chooseCoinSwapSecond
		dispatch(setChooseCoin(scnd))
		dispatch(setChooseCoinSwapSecond(frst))
	}
	return (
		<ScrollView
			style={{
				flex: 1,
				paddingTop: 62,
				paddingBottom: 50,
				paddingHorizontal: 16,
			}}>
			<View style={[styles.itemSwap, { alignItems: 'center' }]}>
				<View style={{ alignItems: 'center' }}>
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
				<View style={{ alignItems: 'center' }}>
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
						{swapAmountSecond + ' ' + chooseCoinSwapSecond.symbol.toUpperCase()}
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
			<WalletButton>Swap</WalletButton>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	swapBtn: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(41, 39, 32, 0.5)',
		borderColor: '#515151',
		borderWidth: 1,
		width: 40,
		height: 40,
		borderRadius: 50,
	},
	itemSwap: {
		backgroundColor: THEME.BROWN_DARK,
		paddingVertical: 17,
		borderRadius: 5,
		marginBottom: 48,
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
})
