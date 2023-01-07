import React, { useState, useEffect } from 'react'
import {
	View,
	Image,
	StyleSheet,
	TextInput,
	TouchableOpacity,
} from 'react-native'
import { WalletText } from './UI'
import { THEME } from '../Theme'
import fixNum from '../../services/funcWallet/fixNum'
import { PercentButtons } from './PercentButtons'

export const SelectCoinSwap = ({
	onSwapCoins,
	onOpenFirstSwap,
	onOpenSecondSwap,
	chooseCoinSwapFirst,
	chooseCoinSwapSecond,
	style,
}) => {
	const [firstAmount, setFirstAmount] = useState('0')
	return (
		<View style={[styles.wrap, style]}>
			<View style={{ marginBottom: 10 }}>
				<View style={[styles.header, { paddingHorizontal: 20 }]}>
					<WalletText color='brown'>Asset</WalletText>
					<WalletText color='brown'>
						Balance: {fixNum(chooseCoinSwapFirst.market_data.balance)}
					</WalletText>
				</View>
				<View style={styles.item}>
					<View style={styles.itemTop}>
						<View>
							<TextInput
								value={firstAmount}
								onChangeText={setFirstAmount}
								placeholderTextColor={THEME.BROWN_TEXT}
								style={styles.input}
								placeholder='0.00'
								keyboardType='numeric'
							/>
							<WalletText colro='white' size='m'>
								Enter an amount
							</WalletText>
						</View>
						<View>
							<TouchableOpacity
								activeOpacity={0.7}
								onPress={onOpenFirstSwap}
								style={styles.chooseCoin}>
								<Image
									style={styles.image}
									source={{ uri: chooseCoinSwapFirst.image.thumb }}
								/>
								<WalletText size='m' color='white' style={{ marginLeft: 7 }}>
									{chooseCoinSwapFirst.symbol.toUpperCase()}
								</WalletText>
								<Image
									style={{ marginLeft: 7 }}
									source={require('../../assets/check-dark.png')}
								/>
							</TouchableOpacity>
						</View>
					</View>

					<View style={styles.itemBottom}></View>
				</View>
			</View>
			<TouchableOpacity
				onPress={onSwapCoins}
				activeOpacity={0.7}
				style={{ margin: 0, marginRight: 'auto', marginLeft: 'auto' }}>
				<View style={styles.btn}>
					<Image source={require('../../assets/icons/arrows.png')} />
				</View>
			</TouchableOpacity>
			<View style={{ marginBottom: 10, marginTop: 12 }}>
				<View style={[styles.header, { paddingHorizontal: 20 }]}>
					<WalletText color='brown'>You Receive</WalletText>
				</View>
				<View style={styles.item}>
					<View style={styles.itemTop}>
						<View>
							<TextInput
								keyboardType='numeric'
								placeholderTextColor={THEME.BROWN_TEXT}
								style={styles.input}
								placeholder='0.00'
							/>
							<WalletText colro='white' size='m'>
								Enter an amount
							</WalletText>
						</View>
						<View>
							<TouchableOpacity
								onPress={onOpenSecondSwap}
								activeOpacity={0.7}
								style={styles.chooseCoin}>
								<Image
									style={styles.image}
									source={{ uri: chooseCoinSwapSecond.image.thumb }}
								/>
								<WalletText size='m' color='white' style={{ marginLeft: 7 }}>
									{chooseCoinSwapSecond.symbol.toUpperCase()}
								</WalletText>
								<Image
									style={{ marginLeft: 7 }}
									source={require('../../assets/check-dark.png')}
								/>
							</TouchableOpacity>
						</View>
					</View>
				</View>
				<PercentButtons
					setValue={setFirstAmount}
					chooseCoin={chooseCoinSwapFirst}
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	image: {
		width: 25,
		height: 25,
	},
	btn: {
		backgroundColor: '#51515130',
		borderRadius: 50,
		width: 40,
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: '#44444480',
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
		paddingVertical: 10,
		borderRadius: 5,
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
	input: {
		color: THEME.BROWN_TEXT,
		fontSize: 16,
		fontFamily: 'ub-regular',
	},
})
