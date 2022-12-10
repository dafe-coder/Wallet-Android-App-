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
								? { fontFamily: 'ub-regular' }
								: { fontFamily: 'ub-medium' },
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
								? { fontFamily: 'ub-regular' }
								: { fontFamily: 'ub-medium' },
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
								? { fontFamily: 'ub-regular' }
								: { fontFamily: 'ub-medium' },
							style,
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
							size == 'sm' ? styles.sm : styles.m,
							upperCase && styles.upperCase,
							center && styles.center,
							fw == 'regular'
								? { fontFamily: 'ub-regular' }
								: { fontFamily: 'ub-medium' },
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
							styles.greenLigth,
							size == 'sm' ? styles.sm : styles.m,
							upperCase && styles.upperCase,
							center && styles.center,
							fw == 'regular'
								? { fontFamily: 'ub-regular' }
								: { fontFamily: 'ub-medium' },
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
	greenLigth: {
		color: THEME.SUCCESS,
	},
	upperCase: {
		textTransform: 'uppercase',
	},
	center: {
		textAlign: 'center',
	},
})
