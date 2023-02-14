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
				placeholderTextColor={THEME.DISABLED_TEXT}
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
		fontSize: 16,
		lineHeight: 22,
		borderWidth: 1,
		borderColor: THEME.GREY_LIGHT,
		borderRadius: 30,
		paddingHorizontal: 24,
		paddingVertical: 15,
		color: THEME.DARK,
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
