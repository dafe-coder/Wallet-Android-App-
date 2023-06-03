import React from 'react'
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native'
import { THEME } from './../../Theme'
import { SvgIcon } from '../svg/svg'
import { useNavigate } from 'react-router-native'

export const WalletButton = ({
	disabled = false,
	size = 'auto',
	arrow = true,
	type = 'primary',
	style,
	styleBtn,
	children,
	onPress,
	checked = false,
	icon,
	to,
	iconPos = 'left',
	iconFill,
	iconStyle,
}) => {
	const navigate = useNavigate()
	const onPressButton = () => {
		if (onPress) {
			if (checked) {
				if (!disabled) {
					onPress()
				}
			} else {
				onPress()
			}
		} else if (to && !disabled) {
			navigate(to)
		}
	}

	let bgColor = null

	switch (type) {
		case 'primary':
			bgColor = {
				backgroundColor: 'rgba(255, 255, 255, 0.1)',
				borderWidth: 1,
				borderColor: THEME.WHITE,
			}
			break
		case 'link':
			bgColor = {
				backgroundColor: 'transparent',
				borderWidth: 0,
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
				borderWidth: 1,
				borderColor: THEME.RED,
			}
			break
		case 'green':
			bgColor = {
				backgroundColor: '#7CFB5C',
			}
			break
		case 'transparent':
			bgColor = {
				backgroundColor: 'transparent',
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
					type == 'green' ? { paddingHorizontal: 0, paddingVertical: 15 } : {},
				]}>
				{icon && iconPos == 'left' && (
					<SvgIcon
						fill={iconFill}
						style={[{ marginRight: 10 }, iconStyle]}
						type={icon}
					/>
				)}
				<Text
					style={[
						styles.text,
						styles.textWhite,
						type == 'white' ? { color: THEME.GREY } : {},
						type == 'green' ? { color: THEME.BLACK } : {},
						type == 'red' ? { color: THEME.RED } : {},
						disabled && styles.disabledText,
					]}>
					{children}
				</Text>
				{icon && iconPos == 'right' && (
					<SvgIcon
						fill={iconFill}
						style={[{ marginLeft: 10 }, iconStyle]}
						type={icon}
					/>
				)}
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
		borderRadius: 16,
		paddingVertical: 17.5,
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
		fontFamily: 'mt-semi-bold',
	},
	disabled: {
		borderWidth: 0,
		opacity: 0.4,
		backgroundColor: 'rgba(255, 255, 255, 0.3)',
	},
	disabledText: {
		color: THEME.WHITE,
	},
})
