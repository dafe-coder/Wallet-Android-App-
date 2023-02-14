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
						{arrow ? (
							<View
								style={[
									styles.circle,
									!disabled ? styles.circleViolet : styles.circleGray,
								]}>
								<SvgIcon
									type='arrow-right'
									style={{ marginLeft: 3 }}
									fill={disabled ? '#DACEF0' : false}
								/>
							</View>
						) : (
							<></>
						)}
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
						{arrow ? (
							<View style={[styles.circle, styles.circleGray]}>
								<SvgIcon
									style={{ marginLeft: 3 }}
									fill={THEME.VIOLET_LIGHT}
									type='arrow-right'
								/>
							</View>
						) : (
							<></>
						)}
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
	},
	border: {
		borderWidth: 1,
		borderColor: THEME.VIOLET_LIGHT,
	},
	btn: {
		borderRadius: 30,
		paddingVertical: 8.5,
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		paddingLeft: 24,
		paddingRight: 9,
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
		fontFamily: 'ub-medium',
		textTransform: 'uppercase',
	},
	disabled: {
		borderColor: '#DACEF0',
		borderWidth: 1,
		backgroundColor: 'transparent',
	},
	disabledText: {
		color: '#DACEF0',
	},
})
