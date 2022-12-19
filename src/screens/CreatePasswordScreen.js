import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { WalletTitle } from '../Components/UI'
import { THEME } from '../Theme'
import { WalletText, WalletInput } from '../Components/UI'
import { WalletButton } from '../Components/UI/WalletButton'
import { setPassword } from '../store/actions/registerAction'
import { useDispatch, useSelector } from 'react-redux'

export const CreatePasswordScreen = () => {
	const [valuePass, setValuePass] = useState('')
	const dispatch = useDispatch()
	const { password } = useSelector((state) => state.register)
	const confirmPassword = () => {
		if (valuePass != '') dispatch(setPassword(valuePass))
	}
	return (
		<View style={styles.body}>
			<View style={{ paddingHorizontal: 16 }}>
				<View style={{ marginBottom: 62, marginTop: 76 }}>
					<WalletTitle style={{ marginBottom: 15 }}>Set a Password</WalletTitle>
					<WalletText center style={{ paddingHorizontal: 70 }}>
						This password will be used to unlock your wallet.
					</WalletText>
				</View>
				<WalletInput
					value={valuePass}
					setPassword={setValuePass}
					password
					placeholder='Enter your password'
					style={{ marginBottom: 24 }}
					text='Passwords must be a minimum of 8 characters'
				/>
				<WalletInput
					value={password}
					setPassword={setValuePass}
					password
					placeholder='Confirm your password'
				/>
			</View>
			<View style={{ paddingHorizontal: 16 }}>
				<WalletButton onPress={confirmPassword} style={{ marginTop: 50 }}>
					Next
				</WalletButton>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	body: {
		flex: 1,
		paddingTop: 40,
		justifyContent: 'space-between',
		paddingBottom: 40,
	},
})
