import React, { useState, useEffect } from 'react'
import {
	View,
	Image,
	StyleSheet,
	TextInput,
	TouchableOpacity,
} from 'react-native'
import { WalletText } from './UI'
import { THEME } from './../Theme'
import fixNum from './../../services/funcWallet/fixNum'
import { useSelector, useDispatch } from 'react-redux'
import { SvgIcon } from './svg/svg'
import { setAmountSend } from '../store/actions/walletActions'

export const SelectCoinSent = ({ setBtnDisabled, style, onChooseCoin }) => {
	const dispatch = useDispatch()
	const [value, setValue] = useState('')
	const [topValue, setTopValue] = useState('')
	const [swap, setSwap] = useState(false)
	const [maxAmount, setMaxAmount] = useState(false)
	const { chooseCoin, addressTo } = useSelector((state) => state.wallet)

	const onMax = () => {
		if (!swap) {
			setValue(fixNum(chooseCoin.market_data.balance_crypto.usd))
		} else {
			setValue(fixNum(chooseCoin.market_data.balance))
		}
	}

	useEffect(() => {
		setMaxAmount(
			(!swap && value > chooseCoin.market_data.balance_crypto.usd) ||
				(swap && value > chooseCoin.market_data.balance)
		)
	}, [swap, value, chooseCoin])

	useEffect(() => {
		if (value != '' && value > 0 && addressTo != '') {
			setBtnDisabled(maxAmount)
		} else {
			setBtnDisabled(true)
		}
	}, [maxAmount, value, addressTo])

	useEffect(() => {
		if (!swap && value != '') {
			dispatch(setAmountSend(value))
			setTopValue(
				fixNum(Number(value) / chooseCoin.market_data.current_price.usd)
			)
		} else if (swap && value != '') {
			dispatch(
				setAmountSend(chooseCoin.market_data.current_price.usd * Number(value))
			)
			setTopValue(
				fixNum(chooseCoin.market_data.current_price.usd * Number(value))
			)
		}
	}, [value])

	useEffect(() => {
		if (value != '') {
			const top = topValue
			setValue(fixNum(top))
		} else {
			setValue('')
		}
	}, [swap])

	return (
		<View style={[styles.wrap, style]}>
			<View style={{ marginBottom: 27 }}>
				<View style={[styles.header, { paddingHorizontal: 20 }]}>
					<WalletText color='dark'>Select Token</WalletText>
				</View>
				<View style={styles.item}>
					<View style={styles.itemTop}>
						<TouchableOpacity
							activeOpacity={0.7}
							style={styles.chooseCoin}
							onPress={onChooseCoin}>
							<Image
								style={styles.logo}
								source={{ uri: chooseCoin.image.thumb }}
							/>
							<WalletText
								color='white'
								size='m'
								style={{ marginLeft: 10, marginRight: 7 }}>
								{chooseCoin.symbol}
							</WalletText>
							<SvgIcon type='check' fill={THEME.VIOLET_DARK} />
						</TouchableOpacity>
					</View>

					<View style={{ alignItems: 'flex-end' }} pointerEvents='none'>
						<View>
							<WalletText color='white' size='m'>
								≈ ${fixNum(chooseCoin.market_data.balance_crypto.usd)}{' '}
								{/* <Text style={styles.textGreen}> (0.1%)</Text> */}
							</WalletText>
						</View>
						<TextInput
							placeholderTextColor={THEME.BROWN_TEXT}
							style={[styles.input, { height: null }]}
							placeholder={
								'≈ ' +
								fixNum(chooseCoin.market_data.balance) +
								' ' +
								chooseCoin.symbol.toUpperCase()
							}
						/>
					</View>
				</View>
			</View>
			<View style={[styles.header, { paddingHorizontal: 20 }]}>
				<WalletText color='dark'>Amount</WalletText>
			</View>
			<View
				style={[
					styles.item,
					maxAmount ? { borderWidth: 1, borderColor: THEME.RED } : {},
				]}>
				<View style={{ marginRight: 10 }}>
					<TouchableOpacity activeOpacity={0.7} onPress={() => setSwap(!swap)}>
						<View style={styles.swapBtn}>
							<SvgIcon type='swap' />
						</View>
					</TouchableOpacity>
				</View>
				<View
					style={{
						flexGrow: 1,
						flexDirection: 'row',
						justifyContent: 'space-between',
					}}>
					<View>
						<View>
							<WalletText color='white' size='m'>
								{swap ? '$' : ''}
								{topValue != '' ? topValue : 0.0}{' '}
								{!swap ? chooseCoin.symbol.toUpperCase() : ''}
							</WalletText>
							<View style={{ flexDirection: 'row', alignItems: 'center' }}>
								<TextInput
									placeholderTextColor={THEME.BROWN_TEXT}
									style={[styles.input]}
									value={value}
									placeholder={
										!swap
											? '≈ $0.00'
											: `≈ 0.00 ${chooseCoin.symbol.toUpperCase()}`
									}
									onChangeText={setValue}
									keyboardType='numeric'
								/>
							</View>
						</View>
					</View>
					<View style={{ justifyContent: 'center' }}>
						<TouchableOpacity activeOpacity={0.7} onPress={onMax}>
							<View style={styles.maxBtn}>
								<WalletText
									style={{ color: THEME.PRIMARY, fontFamily: 'ub-medium' }}>
									MAX
								</WalletText>
							</View>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	swapBtn: {
		backgroundColor: THEME.BROWN_DARK,
		borderRadius: 50,
		width: 37,
		height: 37,
		justifyContent: 'center',
		alignItems: 'center',
	},
	chooseCoin: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 7,
	},
	item: {
		backgroundColor: THEME.BROWN,
		paddingHorizontal: 20,
		paddingVertical: 15,
		borderRadius: 5,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	itemTop: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 2,
	},
	textGreen: {
		color: THEME.SUCCESS,
	},
	itemBottom: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	input: {
		color: THEME.BROWN_TEXT,
		fontSize: 16,
		fontFamily: 'ub-regular',
		height: 25,
	},
	logo: {
		width: 35,
		height: 35,
		borderRadius: 50,
		backgroundColor: THEME.WHITE,
	},
	maxBtn: {
		backgroundColor: THEME.VIOLET,
		paddingHorizontal: 12,
		paddingVertical: 3,
		borderRadius: 50,
	},
})
