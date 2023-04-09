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
import { SvgIcon } from './svg/svg'
import { useSelector } from 'react-redux'
import { useNavigation, useRoute } from '@react-navigation/native'
import { SwapDetails } from './SwapDetails'

export const SelectCoinSwap = ({ network, style }) => {
	const route = useRoute()
	const navigation = useNavigation()

	const { allCoins, chooseCoin, chooseCoinSwapSecond } = useSelector(
		(state) => state.wallet
	)

	const [firstAmount, setFirstAmount] = useState('0')
	const [secondAmount, setSecondAmount] = useState('0')
	const [frstData, setFirstData] = useState(null)
	const [secondData, setSecondData] = useState(null)

	React.useEffect(() => {
		if (allCoins.length) {
			const filtered = allCoins.filter(
				(item) =>
					!item.market_data.chain ||
					item.market_data.chain == network.toLowerCase()
			)
			setFirstData(filtered[0])
			setSecondData(
				filtered.find((item) => item.symbol.toLowerCase() === 'usdt')
			)
		}
	}, [allCoins, network])

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

	useEffect(() => {
		if (frstData !== null && secondData !== null) {
			setSecondAmount(
				fixNum(
					(firstAmount * frstData.market_data.current_price.usd) /
						secondData.market_data.current_price.usd
				)
			)
			setFirstAmount(firstAmount)
		}
	}, [firstAmount, frstData, secondData])

	const onMax = () => {
		setFirstAmount(fixNum(frstData.market_data.balance))
	}

	if (frstData !== null && secondData !== null) {
		return (
			<>
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
										{fixNum(frstData.market_data.balance)}
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
								onPress={() =>
									navigation.navigate('ChooseCryptos', {
										from: 'swapFirst',
										coinSwap: secondData,
										network,
									})
								}
								style={styles.chooseCoin}>
								<Image
									style={styles.image}
									source={{ uri: frstData.image.thumb }}
								/>
								<WalletText
									fw='med'
									color='dark'
									style={{ marginHorizontal: 7 }}>
									{frstData.symbol.toUpperCase()}
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
							<WalletText color='disabled'>{frstData.name}</WalletText>
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
									<Text style={{ color: THEME.WHITE }}>
										{fixNum(secondAmount)}
									</Text>
								</WalletText>
							</View>
						</View>
						<View style={{ flexDirection: 'row', marginTop: 10 }}>
							<TouchableOpacity
								onPress={() =>
									navigation.navigate('ChooseCryptos', {
										from: 'swapSecond',
										coinSwap: frstData,
										network,
									})
								}
								activeOpacity={0.7}
								style={styles.chooseCoin}>
								<Image
									style={styles.image}
									source={{ uri: secondData.image.thumb }}
								/>
								<WalletText color='dark' style={{ marginHorizontal: 7 }}>
									{secondData.symbol.toUpperCase()}
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
							<WalletText color='disabled'>{secondData.name}</WalletText>
						</View>
					</View>
				</View>
				<SwapDetails
					currentNetwork={network}
					chooseCoinSwapFirst={frstData}
					chooseCoinSwapSecond={secondData}
				/>
			</>
		)
	} else {
		return <></>
	}
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
