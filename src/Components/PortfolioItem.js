import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { WalletText } from './UI/WalletText'
import { THEME } from './../Theme'
import { useDispatch } from 'react-redux'
import { setPortfolioOpen } from '../store/actions/walletActions'
export const PortfolioItem = ({
	img,
	title,
	currentPrice,
	balance,
	changePercent,
	navigation,
	coin,
}) => {
	const dispatch = useDispatch()

	const onOpenPortfolioCoin = (coin) => {
		dispatch(setPortfolioOpen(coin))
		navigation.navigate('PortfolioOpen')
	}
	return (
		<TouchableOpacity
			style={styles.item}
			activeOpacity={0.7}
			onPress={() => onOpenPortfolioCoin(coin)}>
			<View style={{ flexDirection: 'row' }}>
				<Image style={styles.logo} source={{ uri: img }} />
				<View style={{ marginLeft: 10 }}>
					<WalletText>{title}</WalletText>
					<WalletText style={{ color: THEME.GREY }}>${currentPrice}</WalletText>
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
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	logo: {
		height: 36,
		width: 36,
	},
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
