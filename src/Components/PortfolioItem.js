import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { WalletText } from './UI/WalletText'
import { THEME } from './../Theme'
import fixNum from './../../services/funcWallet/fixNum'
export const PortfolioItem = ({
	img,
	title,
	currentPrice,
	balance,
	changePercent,
	onOpenPortfolioCoin,
	coin,
}) => {
	return (
		<TouchableOpacity
			style={styles.item}
			activeOpacity={0.7}
			onPress={() => onOpenPortfolioCoin(coin)}>
			<View style={{ flexDirection: 'row' }}>
				<Image style={styles.logo} source={{ uri: img }} />
				<View style={{ marginLeft: 10 }}>
					<WalletText size='m' fw='bold'>
						{title.toUpperCase()}
					</WalletText>
					<WalletText
						style={{ fontSize: 12, lineHeight: 15, marginTop: 4 }}
						color='white'>
						${fixNum(currentPrice)}
					</WalletText>
				</View>
			</View>
			<View style={{ alignItems: 'flex-end' }}>
				<WalletText fw='bold'>{fixNum(balance)}</WalletText>
				<WalletText
					style={
						changePercent > 0 ? { color: THEME.SUCCESS } : { color: THEME.RED }
					}>
					{changePercent}%
				</WalletText>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	logo: {
		height: 44,
		width: 44,
	},
	item: {
		borderRadius: 15,
		paddingVertical: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 4,
	},
})
