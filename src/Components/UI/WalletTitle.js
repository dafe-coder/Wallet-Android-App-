import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { THEME } from '../../Theme'

export const WalletTitle = ({ style, children }) => {
	return <Text style={{ ...styles.title, ...style }}>{children}</Text>
}

const styles = StyleSheet.create({
	title: {
		fontSize: 20,
		lineHeight: 24,
		color: THEME.DARK,
		fontFamily: 'sf-bold',
		textAlign: 'center',
	},
})
