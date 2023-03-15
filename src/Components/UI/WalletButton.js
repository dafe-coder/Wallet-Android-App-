import React from 'react'
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native'
import { THEME } from './../../Theme'
import { SvgIcon } from './../svg/svg'

export const WalletButton = ({
	disabled = false,
	arrow = true,
	type = 'violet',
	style,
	children,
	onPress,
	checked = false,
}) => {
	const onPressButton = () => {
		if (checked) {
			if (!disabled) {
				onPress()
			}
		} else {
			onPress()
		}
	}

	switch (type) {
		case 'violet':
			return (
				<TouchableOpacity
					onPress={onPressButton}
					style={{ ...style }}
					activeOpacity={disabled ? 1 : 0.8}>
					<View
						style={[
							styles.btn,
							styles.violet,
							disabled && styles.disabled,
							arrow
								? {}
								: {
										paddingLeft: 9,
										paddingVertical: 20.5,
										justifyContent: 'center',
								  },
						]}>
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
		case 'border':
			return (
				<TouchableOpacity
					onPress={onPressButton}
					style={{ ...style }}
					activeOpacity={disabled ? 1 : 0.8}>
					<View
						style={[
							styles.btn,
							styles.border,
							disabled && styles.disabled,
							arrow
								? {}
								: {
										backgroundColor: THEME.WHITE,
										paddingLeft: 9,
										paddingVertical: 20.5,
										justifyContent: 'center',
								  },
						]}>
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
	}
}

const styles = StyleSheet.create({
	circleViolet: {
		backgroundColor: '#9667E5',
	},
	circleGray: {
		backgroundColor: THEME.GREY_LIGHT,
	},
	circle: {
		height: 48,
		width: 48,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 50,
	},
	violet: {
		backgroundColor: THEME.VIOLET,
		width: 200,
	},
	border: {
		borderWidth: 1,
		borderColor: THEME.VIOLET_LIGHT,
	},
	btn: {
		borderRadius: 30,
		paddingVertical: 17,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
	},
	textPrimary: {
		color: THEME.VIOLET,
	},
	textWhite: {
		color: THEME.WHITE,
	},
	text: {
		fontSize: 14,
		lineHeight: 22,
		textAlign: 'center',
		fontFamily: 'mt-med',
	},
	disabled: {
		borderColor: THEME.GREY,
		borderWidth: 1,
		backgroundColor: THEME.GREY,
	},
	disabledText: {
		color: '#DACEF0',
	},
})
