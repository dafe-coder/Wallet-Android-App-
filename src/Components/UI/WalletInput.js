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
	label = true,
	textarea,
}) => {
	const [showLabel, setShowLabel] = React.useState(false)

	React.useEffect(() => {
		if (value !== '') {
			setShowLabel(true)
		} else {
			setShowLabel(false)
		}
	}, [value])

	return (
		<View style={{ ...styles.body, ...style }}>
			{label && showLabel ? (
				<WalletText size='xs' style={[{ marginBottom: 6 }]}>
					{placeholder}
				</WalletText>
			) : (
				<></>
			)}

			{textarea ? (
				<TextInput
					placeholder={placeholder}
					textAlignVertical='top'
					style={[styles.input, styleInput, { height: 100, lineHeight: 20 }]}
					placeholderTextColor={THEME.WHITE}
					multiline
					value={value}
					onChangeText={setValue}
				/>
			) : (
				<TextInput
					style={[styles.input, styleInput]}
					placeholderTextColor={THEME.WHITE}
					value={value}
					placeholder={placeholder}
					onChangeText={setValue}
				/>
			)}
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
		paddingTop: 13,
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
