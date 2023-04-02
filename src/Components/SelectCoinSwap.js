import React, { useState, useEffect } from 'react'
import {
	View,
	Image,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	Text,
} from 'react-native'
import { WalletText } from './UI'
import { THEME } from '../Theme'
import fixNum from '../../services/funcWallet/fixNum'
import { PercentButtons } from './PercentButtons'
import { SvgIcon } from './svg/svg'
import { useDispatch } from 'react-redux'
import {
	setSwapAmountFirst,
	setSwapAmountSecond,
} from './../store/actions/walletActions'

export const SelectCoinSwap = ({
	onSwapCoins,
	onOpenFirstSwap,
	onOpenSecondSwap,
	chooseCoinSwapFirst,
	chooseCoinSwapSecond,
	style,
}) => {
	const dispatch = useDispatch()
	const [firstAmount, setFirstAmount] = useState('0')
	const [secondAmount, setSecondAmount] = useState('0')

	useEffect(() => {
		setSecondAmount(
			fixNum(
				(firstAmount * chooseCoinSwapFirst.market_data.current_price.usd) /
					chooseCoinSwapSecond.market_data.current_price.usd
			)
		)
		dispatch(
			setSwapAmountSecond(
				fixNum(
					(firstAmount * chooseCoinSwapFirst.market_data.current_price.usd) /
						chooseCoinSwapSecond.market_data.current_price.usd
				)
			)
		)
		dispatch(setSwapAmountFirst(firstAmount))
	}, [firstAmount, chooseCoinSwapFirst, chooseCoinSwapSecond])

	const onMax = () => {
		setFirstAmount(fixNum(chooseCoinSwapFirst.market_data.balance))
	}

	return (
		<View style={[styles.wrap, style]}>
			<View style={[styles.item, styles.itemTopBlock]}>
				<View
					style={{
						justifyContent: 'space-between',
						flexDirection: 'row',
						alignItems: 'center',
					}}>
					<WalletText color='disabled'>You sell</WalletText>
					<View style={{ flexDirection: 'row' }}>
						<WalletText
							color='disabled'
							style={{ flexDirection: 'row', alignItems: 'center' }}>
							Balance:{'  '}
							<Text style={{ color: THEME.WHITE }}>
								{fixNum(chooseCoinSwapFirst.market_data.balance)}
							</Text>
						</WalletText>
						<TouchableOpacity
							style={{ marginLeft: 5 }}
							onPress={onMax}
							activeOpacity={0.7}>
							<WalletText color='white'>Max</WalletText>
						</TouchableOpacity>
					</View>
				</View>
				<View
					style={{
						justifyContent: 'space-between',
						flexDirection: 'row',
						marginTop: 10,
					}}>
					<TouchableOpacity
						activeOpacity={0.7}
						onPress={onOpenFirstSwap}
						style={styles.chooseCoin}>
						<Image
							style={styles.image}
							source={{ uri: chooseCoinSwapFirst.image.thumb }}
						/>
						<WalletText fw='med' color='dark' style={{ marginHorizontal: 7 }}>
							{chooseCoinSwapFirst.symbol.toUpperCase()}
						</WalletText>

						<SvgIcon
							style={{
								transform: [{ rotate: '90deg' }],
							}}
							width={13}
							height={13}
							type='play'
							fill={THEME.VIOLET}
						/>
					</TouchableOpacity>
					<TextInput
						value={firstAmount}
						onChangeText={setFirstAmount}
						placeholderTextColor={THEME.WHITE}
						style={styles.input}
						placeholder='0.0'
						keyboardType='numeric'
						cursorColor={THEME.VIOLET}
					/>
				</View>
				<View style={{ marginTop: 16 }}>
					<WalletText color='disabled'>{chooseCoinSwapFirst.name}</WalletText>
				</View>
			</View>
			<TouchableOpacity
				onPress={onSwapCoins}
				activeOpacity={0.9}
				style={[
					styles.swapBtn,
					{ margin: 0, marginRight: 'auto', marginLeft: 'auto' },
				]}>
				<View style={styles.btn}>
					<SvgIcon type='swap' />
				</View>
			</TouchableOpacity>
			<View style={[styles.item, { marginTop: 25 }]}>
				<View
					style={{
						justifyContent: 'space-between',
						flexDirection: 'row',
						alignItems: 'center',
					}}>
					<WalletText color='disabled'>You buy</WalletText>
					<View style={{ flexDirection: 'row' }}>
						<WalletText
							color='disabled'
							style={{ flexDirection: 'row', alignItems: 'center' }}>
							<Text style={{ color: THEME.WHITE }}>{fixNum(secondAmount)}</Text>
						</WalletText>
					</View>
				</View>
				<View style={{ flexDirection: 'row', marginTop: 10 }}>
					<TouchableOpacity
						onPress={onOpenSecondSwap}
						activeOpacity={0.7}
						style={styles.chooseCoin}>
						<Image
							style={styles.image}
							source={{ uri: chooseCoinSwapSecond.image.thumb }}
						/>
						<WalletText color='dark' style={{ marginHorizontal: 7 }}>
							{chooseCoinSwapSecond.symbol.toUpperCase()}
						</WalletText>
						<SvgIcon
							style={{
								transform: [{ rotate: '90deg' }],
							}}
							width={13}
							height={13}
							type='play'
							fill={THEME.VIOLET}
						/>
					</TouchableOpacity>
				</View>
				<View style={{ marginTop: 16 }}>
					<WalletText color='disabled'>{chooseCoinSwapSecond.name}</WalletText>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	swapBtn: {
		position: 'absolute',
		zIndex: 10,
	},
	wrap: {
		backgroundColor: THEME.GREY,
		borderRadius: 24,
		paddingHorizontal: 20,
		paddingVertical: 24,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	image: {
		width: 25,
		height: 25,
	},
	btn: {
		backgroundColor: THEME.VIOLET,
		borderRadius: 50,
		width: 36,
		height: 36,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: -13,
	},
	chooseCoin: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: THEME.WHITE,
		borderRadius: 24,
		paddingHorizontal: 10,
		paddingVertical: 6,
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 7,
	},
	itemTopBlock: {
		backgroundColor: THEME.PRIMARY,
	},
	item: {
		borderColor: THEME.DISABLED_TEXT,
		borderWidth: 1,
		paddingHorizontal: 20,
		paddingVertical: 20,
		borderRadius: 24,
		width: '100%',
		flexBasis: '100%',
	},
	textGreen: {
		color: THEME.SUCCESS,
	},
	input: {
		maxWidth: 130,
		minWidth: 50,
		textAlign: 'right',
		color: THEME.WHITE,
		fontSize: 24,
		lineHeight: 24,
		fontFamily: 'mt-semi-bold',
		borderLeftColor: THEME.VIOLET,
		borderLeftWidth: 2,
		paddingLeft: 5,
		height: 30,
		textAlignVertical: 'bottom',
		paddingTop: 0,
		paddingBottom: 0,
	},
})
