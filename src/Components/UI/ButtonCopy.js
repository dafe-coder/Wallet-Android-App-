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
			<View
				style={{ alignItems: 'center', justifyContent: 'center', height: 25 }}>
				{color && !paste ? (
					<WalletText color='gold'>Copied!</WalletText>
				) : (
					<SvgIcon
						type='copy'
						width={22}
						height={22}
						fill={color ? '#BDA5E4' : '#BDA5E4'}
					/>
				)}
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	btn: {
		position: 'absolute',
		right: 20,
		bottom: 20,
		zIndex: 1,
		backgroundColor: THEME.GREY_LIGHT,
		width: 35,
		height: 35,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 50,
	},
})
