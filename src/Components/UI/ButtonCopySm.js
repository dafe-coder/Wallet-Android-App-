import React, { useState } from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { SvgIcon } from '../svg/svg'
import { THEME } from '../../Theme'
import * as Clipboard from 'expo-clipboard'
import { WalletText } from './WalletText'

export const ButtonCopySm = ({ style, text, paste = false, setText }) => {
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
			activeOpacity={0.7}
			onPress={onPressBtn}>
			{color && !paste ? (
				<SvgIcon
					type='check'
					width={15}
					height={20}
					fill={color ? THEME.SUCCESS : THEME.SUCCESS}
				/>
			) : !color && !paste ? (
				<SvgIcon
					type='copy'
					width={20}
					height={20}
					fill={color ? THEME.WHITE : THEME.WHITE}
				/>
			) : (
				<WalletText fw='bold'>Paste</WalletText>
			)}
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	btn: {
		justifyContent: 'center',
		position: 'absolute',
		alignItems: 'center',
		width: 20,
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
