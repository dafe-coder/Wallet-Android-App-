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
	numberOfLines,
}) => {
	return (
		<View style={[styleWrap, { flexShrink: 1 }]}>
			<Text
				numberOfLines={numberOfLines}
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
					size == 's' && styles.s, ////// SIZE /////
					size == 'xs' && styles.xs, ////// SIZE /////
					size == 'sm' && styles.sm,
					size == 'm' && styles.m,
					size == 'xl' && styles.xl,
					upperCase && styles.upperCase,
					center && styles.center,
					fw == 'regular' && { fontFamily: 'mt-reg' }, ////// FONT WEIGHT /////
					fw == 'bold' && { fontFamily: 'mt-semi-bold' },
					fw == 'med' && { fontFamily: 'mt-med' },
					style,
					{ flexWrap: 'wrap' },
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
	s: {
		fontSize: 10,
		lineHeight: 16,
	},
	xs: {
		fontSize: 12,
		lineHeight: 16,
	},
	sm: {
		fontSize: 14,
		lineHeight: 20,
	},
	m: {
		fontSize: 16,
		lineHeight: 22,
	},
	xl: {
		fontSize: 18,
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
