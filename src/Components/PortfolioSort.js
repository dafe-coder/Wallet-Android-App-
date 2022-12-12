import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { WalletText } from './UI'
import { THEME } from './../Theme'

export const PortfolioSort = ({ style }) => {
	return (
		<View style={style}>
			<TouchableOpacity activeOpacity={0.7} style={styles.button}>
				<WalletText>Portfolio Value</WalletText>
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
