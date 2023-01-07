import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { WalletText } from './UI/WalletText'
import { THEME } from '../Theme'
export const SwapDetails = ({ chooseCoinSwapFirst, chooseCoinSwapSecond }) => {
	const priceTokenEnd =
		chooseCoinSwapFirst.marketData.balance *
		chooseCoinSwapFirst.marketData.crypto_price.usd
	console.log(priceTokenEnd)
	return (
		<View style={{ marginBottom: 26 }}>
			<View
				style={{
					marginBottom: 7,
					flexDirection: 'row',
					justifyContent: 'space-between',
					paddingHorizontal: 20,
				}}>
				<WalletText color='brown'>Swap Details</WalletText>
				<WalletText color='brown'>
					ETH\<Text style={{ color: THEME.WHITE }}>DAI</Text>
				</WalletText>
			</View>
			<View style={styles.wrap}>
				<View style={styles.item}>
					<WalletText color='brown'>Rate</WalletText>
					<WalletText color='white'>
						1 {chooseCoinSwapFirst.symbol.toUpperCase()} ~ {priceTokenEnd}{' '}
						{chooseCoinSwapSecond.symbol.toUpperCase()}
					</WalletText>
				</View>
				<View style={styles.item}>
					<WalletText color='brown'>Fee</WalletText>
					<WalletText color='white'>0.007 ETH </WalletText>
				</View>
				<View style={styles.item}>
					<WalletText color='brown'>Price impact</WalletText>
					<WalletText color='white'>0.01%</WalletText>
				</View>
				<View style={[styles.item, { borderBottomWidth: 0 }]}>
					<WalletText color='brown'>Minimum received</WalletText>
					<WalletText color='white'>0.01%</WalletText>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	wrap: {
		borderRadius: 10,
		backgroundColor: THEME.BROWN_DARK,
	},
	item: {
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderBottomWidth: 1,
		borderBottomColor: THEME.BROWN,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
})
