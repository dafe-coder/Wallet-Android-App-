import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { WalletText } from './UI'
import { THEME } from './../Theme'
import { useSelector } from 'react-redux'

export const PortfolioSort = ({ style, onPress }) => {
	const { portfolioSort } = useSelector((state) => state.wallet)

	return (
		<View style={style}>
			<TouchableOpacity
				activeOpacity={0.7}
				style={styles.button}
				onPress={onPress}>
				<WalletText>
					Portfolio {portfolioSort[0].toUpperCase() + portfolioSort.slice(1)}
				</WalletText>
				<Image source={require('../../assets/right.png')} />
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	button: {
		borderRadius: 5,
		backgroundColor: THEME.BROWN_DARK,
		paddingHorizontal: 20,
		paddingVertical: 15,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
})
