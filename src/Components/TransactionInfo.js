import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { THEME } from './../Theme'
import { WalletText } from './UI'
import fixNum from '../../services/funcWallet/fixNum'
import { SvgIcon } from './svg/svg'
import { useSelector } from 'react-redux'

export const TransactionInfo = ({ chooseCoin, amountSend, style, onPress }) => {
	const { allCoins } = useSelector((state) => state.wallet)
	const [eth, setEth] = useState(null)

	useEffect(() => {
		setEth(allCoins.filter((c) => c.symbol.toUpperCase() == 'ETH')[0])
	}, [allCoins])

	return (
		<View style={[styles.item, style]}>
			<View style={styles.itemTop}>
				<View style={styles.itemCenter}>
					<WalletText color='dark'>Transaction Fee</WalletText>
					<TouchableOpacity
						activeOpacity={0.7}
						style={{ marginLeft: 7 }}
						onPress={onPress}>
						<SvgIcon type='info' width={16} height={16} />
					</TouchableOpacity>
				</View>
				<View style={{ alignItems: 'flex-end' }}>
					<WalletText color='white'>
						≈ {eth != null ? fixNum(1 / eth.market_data.current_price.usd) : ''}{' '}
						ETH
					</WalletText>
					<WalletText color='dark' style={{ fontSize: 12, marginTop: 3 }}>
						≈ {fixNum(amountSend)}$
					</WalletText>
				</View>
			</View>
			<View style={styles.itemBottom}>
				<WalletText size='m' color='white'>
					Total
				</WalletText>
				<WalletText color='white' size='m' style={{ fontFamily: 'ub-medium' }}>
					≈
					{fixNum(
						Number(amountSend) / chooseCoin.market_data.current_price.usd
					)}{' '}
					ETH
				</WalletText>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	itemCenter: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	item: {
		backgroundColor: THEME.BROWN_DARK,
		borderRadius: 5,
	},
	itemTop: {
		paddingHorizontal: 20,
		paddingVertical: 15,
		borderBottomColor: THEME.BROWN,
		borderBottomWidth: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
	},
	itemBottom: {
		paddingHorizontal: 20,
		paddingVertical: 15,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
	},
})
