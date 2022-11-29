import React from 'react'
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native'
import { THEME } from './../../Theme'

export const WalletButton = ({
	disabled = false,
	type = 'gold',
	style,
	children,
	onPress,
}) => {
	const onPressButton = () => {
		if (!disabled) {
			onPress()
		}
	}

	switch (type) {
		case 'gold':
			return (
				<TouchableOpacity
					onPress={onPressButton}
					style={{ ...style }}
					activeOpacity={disabled ? 1 : 0.8}>
					<View style={[styles.btn, styles.gold, disabled && styles.disabled]}>
						<Text
							style={[
								styles.text,
								styles.textPrimary,
								disabled && styles.disabledText,
							]}>
							{children}
						</Text>
					</View>
				</TouchableOpacity>
			)
		case 'border':
			return (
				<TouchableOpacity
					onPress={onPressButton}
					style={{ ...style }}
					activeOpacity={disabled ? 1 : 0.8}>
					<View
						style={[styles.btn, styles.border, disabled && styles.disabled]}>
						<Text
							style={[
								styles.text,
								styles.textWhite,
								disabled && styles.disabledText,
							]}>
							{children}
						</Text>
					</View>
				</TouchableOpacity>
			)
	}
}

const styles = StyleSheet.create({
	gold: {
		backgroundColor: THEME.GOLD,
		color: THEME.PRIMARY,
	},
	border: {
		borderWidth: 1,
		borderColor: THEME.WHITE_DARK_TEXT,
	},
	btn: {
		borderRadius: 10,
		paddingVertical: 16,
	},
	textPrimary: {},
	textWhite: {
		color: THEME.WHITE_DARK_TEXT,
	},
	text: {
		fontSize: 14,
		lineHeight: 22,
		textAlign: 'center',
		fontFamily: 'ub-medium',
		textTransform: 'uppercase',
	},
	disabled: {
		borderColor: THEME.BROWN_TEXT,
		borderWidth: 1,
		backgroundColor: 'transparent',
	},
	disabledText: {
		color: THEME.BROWN_TEXT,
	},
})
