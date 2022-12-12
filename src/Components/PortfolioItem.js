import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { WalletText } from './UI/WalletText'
import { THEME } from './../Theme'

export const PortfolioItem = ({
	img,
	title,
	currentPrice,
	balance,
	changePercent,
}) => {
	return (
		<View style={styles.item}>
			<View style={{ flexDirection: 'row' }}>
				<Image source={img} />
				<View style={{ marginLeft: 10 }}>
					<WalletText>{title}</WalletText>
					<WalletText style={{ color: THEME.GREY }}>{currentPrice}</WalletText>
				</View>
			</View>
			<View style={{ alignItems: 'flex-end' }}>
				<WalletText>{balance}</WalletText>
				<WalletText
					style={
						changePercent > 0 ? { color: THEME.SUCCESS } : { color: THEME.RED }
					}>
					{changePercent}%
				</WalletText>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	item: {
		backgroundColor: THEME.BROWN,
		borderRadius: 5,
		paddingHorizontal: 20,
		paddingVertical: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 8,
	},
})
