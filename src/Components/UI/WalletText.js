import React from 'react'
import { THEME } from './../../Theme'
import { StyleSheet, View, Text } from 'react-native'

export const WalletText = ({
	size = 'sm',
	color = 'white',
	children,
	style,
	upperCase = false,
	center = false,
	fw = 'regular',
	styleWrap,
}) => {
	return (
		<View style={styleWrap}>
			<Text
				style={[
					color === 'white' && styles.white, ////// COLOR /////
					color === 'white-dark' && styles.whiteDark,
					color === 'disabled' && styles.disabled,
					color === 'gold' && styles.gold,
					color === 'dark' && styles.dark,
					color === 'green-light' && styles.greenLight,
					color === 'red' && styles.red,
					color === 'yellow' && styles.yellow,
					color === 'blue' && styles.blue,
					size == 'xs' && styles.xs, ////// SIZE /////
					size == 'sm' && styles.sm,
					size == 'm' && styles.m,
					upperCase && styles.upperCase,
					center && styles.center,
					fw == 'regular' && { fontFamily: 'mt-reg' }, ////// FONT WEIGHT /////
					fw == 'bold' && { fontFamily: 'mt-semi-bold' },
					fw == 'med' && { fontFamily: 'mt-med' },
					style,
				]}>
				{children}
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	textPrimary: {
		color: THEME.WHITE,
	},
	xs: {
		fontSize: 12,
		lineHeight: 14,
	},
	sm: {
		fontSize: 14,
		lineHeight: 20,
	},
	m: {
		fontSize: 16,
		lineHeight: 22,
	},
	white: {
		color: THEME.WHITE,
	},
	whiteDark: {
		color: THEME.DARK,
	},
	gold: {
		color: THEME.VIOLET,
	},
	red: {
		color: THEME.RED,
	},
	dark: {
		color: THEME.DARK,
	},
	yellow: {
		color: THEME.YELLOW,
	},
	greenLight: {
		color: THEME.SUCCESS,
	},
	upperCase: {
		textTransform: 'uppercase',
	},
	center: {
		textAlign: 'center',
	},
	disabled: {
		color: THEME.DISABLED_TEXT,
	},
	blue: {
		color: THEME.BLUE,
	},
})
