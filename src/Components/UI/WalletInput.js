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
				placeholderTextColor={THEME.WHITE}
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
		borderRadius: 16,
		borderColor: THEME.WHITE,
		backgroundColor: THEME.GREEN_BG,
		paddingHorizontal: 20,
		paddingVertical: 16,
		color: THEME.WHITE,
		fontFamily: 'mt-reg',
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
