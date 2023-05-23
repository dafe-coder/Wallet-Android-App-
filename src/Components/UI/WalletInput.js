import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { THEME } from '../../Theme'
import { WalletText } from './WalletText'

export const WalletInput = ({
	style,
	styleInput,
	placeholder,
	text = '',
	value,
	setValue,
}) => {
	return (
		<View style={{ ...styles.body, ...style }}>
			<TextInput
				multiline
				style={[styles.input, styleInput]}
				placeholder={placeholder}
				placeholderTextColor={THEME.DARK_TEXT}
				value={value}
				onChangeText={setValue}
			/>
			{text != '' ? (
				<WalletText color='dark' style={{ marginTop: 5 }}>
					{text}
				</WalletText>
			) : (
				<></>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	input: {
		fontSize: 14,
		lineHeight: 17,
		borderWidth: 1,
		borderColor: THEME.GREY,
		paddingHorizontal: 16,
		paddingVertical: 16,
		borderRadius: 16,
		color: THEME.WHITE,
		fontFamily: 'int-reg',
	},
	body: {
		position: 'relative',
	},
	btnEye: {
		position: 'absolute',
		top: 19,
		right: 20,
	},
})
