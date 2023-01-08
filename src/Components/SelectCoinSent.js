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

export const SelectCoinSent = ({ style, onChooseCoin }) => {
	const dispatch = useDispatch()
	const [value, setValue] = useState('')
	const [topValue, setTopValue] = useState('')
	const [swap, setSwap] = useState(false)
	const { chooseCoin } = useSelector((state) => state.wallet)

	const onMax = () => {
		setValue(fixNum(chooseCoin.market_data.balance_crypto.usd))
	}
	useEffect(() => {
		if (!swap) {
			dispatch(setAmountSend(value))
			setTopValue(
				fixNum(Number(value) / chooseCoin.market_data.current_price.usd)
			)
		} else {
			dispatch(
				setAmountSend(chooseCoin.market_data.current_price.usd * Number(value))
			)
			setTopValue(
				fixNum(chooseCoin.market_data.current_price.usd * Number(value))
			)
		}
	}, [value])

	useEffect(() => {
		const top = topValue
		setValue(fixNum(top))
	}, [swap])

	return (
		<View style={[styles.wrap, style]}>
			<View style={{ marginBottom: 27 }}>
				<View style={[styles.header, { paddingHorizontal: 20 }]}>
					<WalletText color='brown'>Select Token</WalletText>
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
							<SvgIcon type='check' fill={THEME.GOLD_DARK} />
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
							style={styles.input}
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
				<WalletText color='brown'>Amount</WalletText>
			</View>
			<View style={[styles.item]}>
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
									style={styles.input}
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
	},
	logo: {
		width: 35,
		height: 35,
		borderRadius: 50,
		backgroundColor: THEME.WHITE,
	},
	maxBtn: {
		backgroundColor: THEME.GOLD,
		paddingHorizontal: 12,
		paddingVertical: 3,
		borderRadius: 50,
	},
})
