import React, { useState } from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { SvgIcon } from '../svg/svg'
import { THEME } from './../../Theme'
import * as Clipboard from 'expo-clipboard'
import { WalletText } from './WalletText'
export const ButtonCopy = ({ style, text, paste = false, setText }) => {
	const [color, setColor] = useState(false)

	const onPressBtn = () => {
		console.log(1)
		paste ? onPaste() : onCopy()
		setColor(true)
		setTimeout(() => {
			setColor(false)
		}, 700)
	}

	const onCopy = async () => {
		if (text !== '') await Clipboard.setStringAsync(text)
	}
	const onPaste = async () => {
		const text = await Clipboard.getStringAsync()
		setText(text)
	}
	return (
		<TouchableOpacity
			style={[styles.btn, style]}
			activeOpacity={0.7}
			onPress={onPressBtn}>
			<SvgIcon
				style={{ marginRight: 10 }}
				type='copy'
				width={20}
				height={20}
				fill={color ? THEME.WHITE : THEME.WHITE}
			/>
			{color && !paste ? (
				<WalletText color='white' fw='bold'>
					Copied!
				</WalletText>
			) : !color && !paste ? (
				<WalletText color='white' fw='bold'>
					Copy
				</WalletText>
			) : (
				<WalletText fw='bold'>Paste</WalletText>
			)}
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	btn: {
		flexDirection: 'row',
		paddingHorizontal: 18,
		paddingVertical: 7,
		backgroundColor: THEME.VIOLET,
		justifyContent: 'center',
		borderRadius: 40,
		width: 'auto',
	},
	circle: {
		backgroundColor: THEME.GREY_LIGHT,
		width: 35,
		height: 35,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 50,
	},
})
