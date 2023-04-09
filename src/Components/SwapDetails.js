import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { WalletText } from './UI/WalletText'
import { THEME } from '../Theme'
import fixNum from './../../services/funcWallet/fixNum'
import { useSelector } from 'react-redux'

export const SwapDetails = ({
	chooseCoinSwapFirst,
	chooseCoinSwapSecond,
	confirm,
	currentNetwork,
}) => {
	const [priceTokenEnd, setPriceTokenEnd] = useState('')
	const { allCoins, swapAmountSecond, swapAmountFirst } = useSelector(
		(state) => state.wallet
	)
	const [eth, setEth] = useState(null)
	const [matic, setMatic] = useState(null)

	useEffect(() => {
		setEth(allCoins.filter((c) => c.symbol.toUpperCase() == 'ETH')[0])
		setMatic(allCoins.filter((c) => c.symbol.toUpperCase() == 'MATIC')[0])
	}, [allCoins])
	useEffect(() => {
		if (chooseCoinSwapFirst != null)
			setPriceTokenEnd(
				fixNum(
					chooseCoinSwapFirst.market_data.current_price.usd /
						chooseCoinSwapSecond.market_data.current_price.usd
				)
			)
	}, [chooseCoinSwapFirst, chooseCoinSwapSecond])

	return (
		<View style={{ marginBottom: 26, marginTop: 32 }}>
			<View
				style={{
					marginBottom: 7,
					flexDirection: 'row',
					justifyContent: 'space-between',
				}}>
				<WalletText color='disabled'>Swap Details</WalletText>
			</View>
			<View style={styles.wrap}>
				<View style={styles.item}>
					<WalletText color='white'>Slippage</WalletText>
					<WalletText color='disabled'>2%</WalletText>
				</View>
				<View style={styles.item}>
					<WalletText color='white'>Rate</WalletText>
					<WalletText color='disabled'>
						1 {chooseCoinSwapFirst.symbol.toUpperCase()} ~ {priceTokenEnd}{' '}
						{chooseCoinSwapSecond.symbol.toUpperCase()}
					</WalletText>
				</View>
				<View style={styles.item}>
					<WalletText color='white'>Fee</WalletText>
					<WalletText color='disabled'>
						≈{' '}
						{currentNetwork.toLowerCase() !== 'polygon'
							? eth != null
								? fixNum(1 / eth.market_data.current_price.usd)
								: +' ETH'
							: matic != null
							? fixNum(0.01 / matic.market_data.current_price.usd) + ' MATIC'
							: ''}
					</WalletText>
				</View>
				<View style={styles.item}>
					<WalletText color='white'>Price impact</WalletText>
					<WalletText color='disabled'>{'<'}0.01%</WalletText>
				</View>
				<View style={styles.item}>
					<WalletText color='white'>Arrival Time</WalletText>
					<WalletText color='disabled'>{'<'}30 min</WalletText>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	wrap: {},
	item: {
		paddingVertical: 8,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
})
