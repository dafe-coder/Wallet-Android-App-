import React, { useState } from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { SvgIcon } from '../svg/svg'
import { THEME } from './../../Theme'
import * as Clipboard from 'expo-clipboard'

export const ButtonCopy = ({ style, text }) => {
	const [color, setColor] = useState(false)
	const onPressBtn = () => {
		onCopy()
		setColor(true)
		setTimeout(() => {
			setColor(false)
		}, 400)
	}

	const onCopy = async () => {
		await Clipboard.setStringAsync(text)
	}
	return (
		<TouchableOpacity
			style={[styles.btn, style]}
			activeOpacity={1}
			onPress={onPressBtn}>
			<View>
				<SvgIcon type='copy' fill={color ? THEME.GOLD_DARK : ''} />
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
	},
})
