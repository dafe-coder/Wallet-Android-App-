import React from 'react'
import { View, StyleSheet } from 'react-native'
import { SvgIcon } from './svg/svg'
import { THEME } from '../Theme'
import { WalletText } from './UI'

export const Alert = ({ children, color, style }) => {
	return (
		<View style={[styles.alert, style]}>
			<View style={{ flexBasis: '9%', marginTop: 6 }}>
				<SvgIcon fill={color === 'red' ? THEME.RED : ''} type='alert' />
			</View>
			<View style={{ flexBasis: '89%' }}>
				<WalletText
					color={color === 'red' ? 'red' : 'blue'}
					style={{ marginLeft: 8 }}>
					{children}
				</WalletText>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	alert: {
		marginTop: 20,
		backgroundColor: THEME.GREY,
		borderRadius: 10,
		padding: 16,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	},
})
