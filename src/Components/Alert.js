import React from 'react'
import { View, StyleSheet } from 'react-native'
import { SvgIcon } from './svg/svg'
import { THEME } from '../Theme'
import { WalletText } from './UI'

export const Alert = ({ children, color, style }) => {
	return (
		<View style={[styles.alert, style]}>
			<SvgIcon fill={color === 'red' ? THEME.RED : ''} type='alert' />
			<WalletText
				color={color === 'red' ? 'red' : 'blue'}
				style={{ marginLeft: 8 }}>
				{children}
			</WalletText>
		</View>
	)
}

const styles = StyleSheet.create({
	alert: {
		marginTop: 20,
		borderRadius: 10,
		padding: 16,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
})
