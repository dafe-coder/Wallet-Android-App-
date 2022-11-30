import React from 'react'
import { THEME } from './../../Theme'
import { StyleSheet, View, Text } from 'react-native'

export const WalletText = ({
	size = 'sm',
	color = 'white-dark',
	children,
	style,
	upperCase = false,
	center = false,
}) => {
	switch (color) {
		case 'white':
			return (
				<View>
					<Text
						style={[
							styles.white,
							style,
							size == 'sm' ? styles.sm : styles.m,
							upperCase && styles.upperCase,
							center && styles.center,
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
							style,
							size == 'sm' ? styles.sm : styles.m,
							upperCase && styles.upperCase,
							center && styles.center,
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
							style,
							size == 'sm' ? styles.sm : styles.m,
							upperCase && styles.upperCase,
							center && styles.center,
						]}>
						{children}
					</Text>
				</View>
			)
		case 'brown':
			return (
				<View>
					<Text
						style={[
							styles.brown,
							style,
							size == 'sm' ? styles.sm : styles.m,
							upperCase && styles.upperCase,
							center && styles.center,
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
		fontFamily: 'ub-regular',
		lineHeight: 20,
	},
	m: {
		fontSize: 16,
		fontFamily: 'ub-regular',
		lineHeight: 22,
	},
	white: {
		color: THEME.WHITE,
	},
	whiteDark: {
		color: THEME.WHITE_DARK_TEXT,
	},
	gold: {
		color: THEME.GOLD_DARK,
	},
	brown: {
		color: THEME.BROWN_TEXT,
	},
	upperCase: {
		textTransform: 'uppercase',
	},
	center: {
		textAlign: 'center',
	},
})
