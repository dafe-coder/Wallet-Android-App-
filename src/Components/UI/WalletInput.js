import React, { useState } from 'react'
import {
	StyleSheet,
	TextInput,
	View,
	TouchableOpacity,
	Image,
} from 'react-native'
import { THEME } from '../../Theme'
import { WalletText } from './WalletText'

export const WalletInput = ({
	style,
	styleInput,
	placeholder,
	text = '',
	password,
	value,
	setPassword,
}) => {
	const [showPass, setShowPass] = useState(false)

	return (
		<View style={{ ...styles.body, ...style }}>
			<TextInput
				secureTextEntry={!showPass}
				style={[styles.input, styleInput]}
				placeholder={placeholder}
				placeholderTextColor={THEME.BROWN_TEXT}
				value={value}
				onChangeText={(text) => setPassword(text)}
			/>
			{text != '' ? (
				<WalletText color='brown' style={{ marginTop: 5 }}>
					{text}
				</WalletText>
			) : (
				<></>
			)}
			{password ? (
				<TouchableOpacity
					activeOpacity={1}
					style={styles.btnEye}
					onPress={() => setShowPass(!showPass)}>
					<Image
						source={
							!showPass
								? require('../../../assets/eye.png')
								: require('../../../assets/eye-active.png')
						}
					/>
				</TouchableOpacity>
			) : (
				<></>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	input: {
		fontSize: 14,
		lineHeight: 20,
		borderWidth: 1,
		borderColor: THEME.BROWN,
		backgroundColor: THEME.BROWN,
		borderRadius: 5,
		paddingHorizontal: 20,
		paddingVertical: 15,
		color: THEME.BROWN_TEXT,
		fontFamily: 'ub-regular',
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
