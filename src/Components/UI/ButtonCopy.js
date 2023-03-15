import React, { useState } from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { SvgIcon } from '../svg/svg'
import { THEME } from './../../Theme'
import * as Clipboard from 'expo-clipboard'
import { WalletText } from './WalletText'
export const ButtonCopy = ({ style, text, paste, setText }) => {
	const [color, setColor] = useState(false)
	const onPressBtn = () => {
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
			activeOpacity={1}
			onPress={onPressBtn}>
			<SvgIcon
				style={{ marginRight: 10 }}
				type='copy'
				width={20}
				height={20}
				fill={color ? '#9667E5' : '#9667E5'}
			/>
			{color && !paste ? (
				<WalletText color='gold'>Copied!</WalletText>
			) : (
				<WalletText>Paste</WalletText>
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
