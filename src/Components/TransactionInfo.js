import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { THEME } from './../Theme'
import { WalletText } from './UI'
import fixNum from '../../services/funcWallet/fixNum'
import { SvgIcon } from './svg/svg'

export const TransactionInfo = ({ chooseCoin, amountSend, style, onPress }) => {
	return (
		<View style={[styles.item, style]}>
			<View style={styles.itemTop}>
				<View style={styles.itemCenter}>
					<WalletText color='brown'>Transaction Fee</WalletText>
					<TouchableOpacity
						activeOpacity={0.7}
						style={{ marginLeft: 7 }}
						onPress={onPress}>
						<SvgIcon type='info' width={16} height={16} />
					</TouchableOpacity>
				</View>
				<View style={{ alignItems: 'flex-end' }}>
					<WalletText color='white'>0.0031 ETH≈ 8.1%</WalletText>
					<WalletText color='brown' style={{ fontSize: 12, marginTop: 3 }}>
						≈ {amountSend}$
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
