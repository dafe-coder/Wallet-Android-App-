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
	password = false,
	value,
	setValue,
}) => {
	const [showPass, setShowPass] = useState(password)

	return (
		<View style={{ ...styles.body, ...style }}>
			<TextInput
				secureTextEntry={showPass}
				style={[styles.input, styleInput]}
				placeholder={placeholder}
				placeholderTextColor={THEME.WHITE}
				defaultValue={value}
				onChangeText={setValue}
			/>
			{text != '' ? (
				<WalletText color='dark' style={{ marginTop: 5 }}>
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
					{/* <Image
						source={
							!showPass
								? require('../../../assets/eye.png')
								: require('../../../assets/eye-active.png')
						}
					/> */}
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
		lineHeight: 17,
		borderBottomWidth: 1,
		borderBottomColor: THEME.DISABLED_TEXT,
		paddingHorizontal: 16,
		paddingVertical: 20,
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
