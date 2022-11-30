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

export const WalletInput = ({ style }) => {
	const [showPass, setShowPass] = useState(false)
	return (
		<View style={{ ...styles.body, ...style }}>
			<TextInput
				secureTextEntry={!showPass}
				style={{ ...styles.input }}
				placeholder='Enter your password'
				placeholderTextColor={THEME.BROWN_TEXT}
			/>
			<WalletText color='brown' style={{ marginTop: 5 }}>
				Passwords must be a minimum of 8 characters
			</WalletText>
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
		marginHorizontal: 16,
		position: 'relative',
	},
	btnEye: {
		position: 'absolute',
		top: 19,
		right: 20,
	},
})
