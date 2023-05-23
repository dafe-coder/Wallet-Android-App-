import React from 'react'
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native'
import { THEME } from './../../Theme'

export const WalletButton = ({
	disabled = false,
	size = 'auto',
	arrow = true,
	type = 'white',
	style,
	styleBtn,
	children,
	onPress,
	checked = false,
}) => {
	const onPressButton = () => {
		if (onPress) {
			if (checked) {
				if (!disabled) {
					onPress()
				}
			} else {
				onPress()
			}
		}
	}

	let bgColor = null

	switch (type) {
		case 'violet':
			bgColor = {
				backgroundColor: THEME.VIOLET,
				borderWidth: 1,
				borderColor: THEME.VIOLET,
			}
			break
		case 'border':
			bgColor = {
				borderWidth: 1,
				borderColor: THEME.WHITE,
			}
			break

		case 'red':
			bgColor = {
				backgroundColor: THEME.RED,
				borderWidth: 1,
				borderColor: THEME.RED,
			}
			break
		case 'white':
			bgColor = {
				backgroundColor: THEME.WHITE,
				borderWidth: 1,
				borderColor: THEME.WHITE,
			}
			break
	}
	return (
		<TouchableOpacity
			onPress={onPressButton}
			style={{ ...style }}
			activeOpacity={disabled ? 1 : 0.8}>
			<View
				style={[
					size == 'm' && { width: 200 },
					size == 'sm' && { width: 100 },
					size == 'auto' && { width: '100%' },
					styles.btn,
					bgColor,
					styleBtn,
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
						type == 'white' ? { color: THEME.GREY } : {},
						disabled && styles.disabledText,
					]}>
					{children}
				</Text>
			</View>
		</TouchableOpacity>
	)
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
	border: {
		borderWidth: 1,
		borderColor: THEME.WHITE,
	},
	btn: {
		borderRadius: 8,
		paddingVertical: 15,
		paddingHorizontal: 24,
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
		lineHeight: 17,
		textAlign: 'center',
		fontFamily: 'int-semi-bold',
		fontFamily: 'int-bold',
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
