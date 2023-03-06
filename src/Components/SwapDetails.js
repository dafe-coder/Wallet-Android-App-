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
}) => {
	const [priceTokenEnd, setPriceTokenEnd] = useState('')
	const { allCoins, swapAmountSecond, swapAmountFirst } = useSelector(
		(state) => state.wallet
	)
	const { currentNetwork } = useSelector((state) => state.storage)
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
		<View style={{ marginBottom: 26 }}>
			<View
				style={{
					marginBottom: 7,
					flexDirection: 'row',
					justifyContent: 'space-between',
					paddingHorizontal: 20,
				}}>
				<WalletText color='disabled'>Swap Details</WalletText>
				<WalletText color='disabled'>
					{chooseCoinSwapFirst.symbol.toUpperCase()}\
					<Text style={{ color: THEME.DARK }}>
						{chooseCoinSwapSecond.symbol.toUpperCase()}
					</Text>
				</WalletText>
			</View>
			<View style={styles.wrap}>
				<View style={styles.item}>
					<WalletText color='disabled'>Rate</WalletText>
					<WalletText color='dark'>
						1 {chooseCoinSwapFirst.symbol.toUpperCase()} ~ {priceTokenEnd}{' '}
						{chooseCoinSwapSecond.symbol.toUpperCase()}
					</WalletText>
				</View>
				<View style={styles.item}>
					<WalletText color='disabled'>Fee</WalletText>
					<WalletText color='dark'>
						≈{' '}
						{currentNetwork.title.toLowerCase() !== 'polygon'
							? eth != null
								? fixNum(1 / eth.market_data.current_price.usd)
								: +' ETH'
							: matic != null
							? fixNum(0.01 / matic.market_data.current_price.usd) + ' MATIC'
							: ''}
					</WalletText>
				</View>
				<View style={styles.item}>
					<WalletText color='disabled'>Price impact</WalletText>
					<WalletText color='dark'>{'<'}0.01%</WalletText>
				</View>
				<View style={[styles.item, { borderBottomWidth: 0 }]}>
					<WalletText color='disabled'>Minimum received</WalletText>
					<WalletText color='dark'>
						{confirm
							? swapAmountSecond +
							  ' ' +
							  chooseCoinSwapSecond.symbol.toUpperCase()
							: '<0.01%'}
					</WalletText>
				</View>
				{confirm ? (
					<View
						style={[
							styles.item,
							{ borderBottomWidth: 0, alignItems: 'flex-start' },
						]}>
						<WalletText size='m' color='dark'>
							Transaction cost
						</WalletText>
						<View>
							<WalletText style={{ marginBottom: 5 }} size='m' color='dark'>
								-
								{currentNetwork.title.toLowerCase() !== 'polygon'
									? eth != null && swapAmountFirst != ''
										? fixNum(
												(1 / eth.market_data.current_price.usd +
													Number(swapAmountFirst)) *
													eth.market_data.current_price.usd
										  )
										: ''
									: matic != null && swapAmountFirst != ''
									? fixNum(
											(0.01 / matic.market_data.current_price.usd +
												Number(swapAmountFirst)) *
												matic.market_data.current_price.usd
									  )
									: ''}
								${' '}
								<Text style={{ color: THEME.VIOLET }}>
									{currentNetwork.title.toLowerCase() !== 'polygon'
										? eth != null && swapAmountFirst != ''
											? fixNum(
													1 / eth.market_data.current_price.usd +
														Number(swapAmountFirst)
											  )
											: ''
										: matic != null && swapAmountFirst != ''
										? fixNum(
												0.01 / matic.market_data.current_price.usd +
													Number(swapAmountFirst)
										  )
										: ''}
								</Text>
							</WalletText>
							<View
								style={{
									justifyContent: 'center',
									alignItems: 'center',
									borderRadius: 50,
									borderWidth: 1,
									borderColor: '#DACEF0',
									paddingVertical: 2,
									paddingHorizontal: 5,
									width: null,
								}}>
								<WalletText style={{ fontSize: 12, color: THEME.VIOLET }}>
									7% Refund
								</WalletText>
							</View>
						</View>
					</View>
				) : (
					<></>
				)}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	wrap: {
		borderRadius: 10,
		backgroundColor: THEME.GREY_LIGHT_BG,
	},
	item: {
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderBottomWidth: 1,
		borderBottomColor: THEME.GREY_LIGHT,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
})
