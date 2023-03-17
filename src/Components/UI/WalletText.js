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
}) => {
	switch (color) {
		case 'white':
			return (
				<View>
					<Text
						style={[
							styles.white,
							size == 'sm' ? styles.sm : styles.m,
							upperCase && styles.upperCase,
							center && styles.center,
							fw == 'regular'
								? { fontFamily: 'mt-reg' }
								: { fontFamily: 'mt-semi-bold' },
							style,
						]}>
						{children}
					</Text>
				</View>
			)
		case 'white-dark':
			return (
				<View>
					<Text
						style={[
							styles.whiteDark,
							size == 'sm' ? styles.sm : styles.m,
							upperCase && styles.upperCase,
							center && styles.center,
							fw == 'regular'
								? { fontFamily: 'mt-reg' }
								: { fontFamily: 'mt-semi-bold' },
							style,
						]}>
						{children}
					</Text>
				</View>
			)
		case 'disabled':
			return (
				<View>
					<Text
						style={[
							styles.disabled,
							size == 'sm' ? styles.sm : styles.m,
							upperCase && styles.upperCase,
							center && styles.center,
							fw == 'regular'
								? { fontFamily: 'mt-reg' }
								: { fontFamily: 'mt-semi-bold' },
							style,
						]}>
						{children}
					</Text>
				</View>
			)
		case 'gold':
			return (
				<View>
					<Text
						style={[
							styles.gold,
							size == 'sm' ? styles.sm : styles.m,
							upperCase && styles.upperCase,
							center && styles.center,
							fw == 'regular'
								? { fontFamily: 'mt-reg' }
								: { fontFamily: 'mt-semi-bold' },
							style,
						]}>
						{children}
					</Text>
				</View>
			)
		case 'dark':
			return (
				<View>
					<Text
						style={[
							styles.dark,
							size == 'sm' ? styles.sm : styles.m,
							upperCase && styles.upperCase,
							center && styles.center,
							fw == 'regular'
								? { fontFamily: 'mt-reg' }
								: { fontFamily: 'mt-semi-bold' },
							style,
						]}>
						{children}
					</Text>
				</View>
			)
		case 'green-light':
			return (
				<View>
					<Text
						style={[
							styles.greenLight,
							size == 'sm' ? styles.sm : styles.m,
							upperCase && styles.upperCase,
							center && styles.center,
							fw == 'regular'
								? { fontFamily: 'mt-reg' }
								: { fontFamily: 'mt-semi-bold' },
							style,
						]}>
						{children}
					</Text>
				</View>
			)
		case 'red':
			return (
				<View>
					<Text
						style={[
							styles.red,
							size == 'sm' ? styles.sm : styles.m,
							upperCase && styles.upperCase,
							center && styles.center,
							fw == 'regular'
								? { fontFamily: 'mt-reg' }
								: { fontFamily: 'mt-semi-bold' },
							style,
						]}>
						{children}
					</Text>
				</View>
			)
		case 'yellow':
			return (
				<View>
					<Text
						style={[
							styles.yellow,
							size == 'sm' ? styles.sm : styles.m,
							upperCase && styles.upperCase,
							center && styles.center,
							fw == 'regular'
								? { fontFamily: 'mt-reg' }
								: { fontFamily: 'mt-semi-bold' },
							style,
						]}>
						{children}
					</Text>
				</View>
			)
	}
}

const styles = StyleSheet.create({
	textPrimary: {
		color: THEME.WHITE,
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
})
