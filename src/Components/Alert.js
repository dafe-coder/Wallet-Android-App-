import React from 'react'
import { View, StyleSheet } from 'react-native'
import { WalletText } from './UI/WalletText'
import { THEME } from '../Theme'

export const Alert = ({ children, title }) => {
	return (
		<View style={styles.wrap}>
			<WalletText style={{ marginBottom: 10 }} upperCase fw='bold' center>
				{title}
			</WalletText>
			<WalletText center size='xs'>
				{children}
			</WalletText>
		</View>
	)
}

const styles = StyleSheet.create({
	wrap: {
		backgroundColor: THEME.GREEN_LIGHT,
		borderWidth: 1,
		borderColor: THEME.WHITE,
		padding: 20,
		borderRadius: 16,
	},
})
