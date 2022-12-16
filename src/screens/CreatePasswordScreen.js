import React from 'react'
import { View, StyleSheet } from 'react-native'
import { WalletTitle } from '../Components/UI'
import { THEME } from '../Theme'
import { WalletText, WalletInput } from '../Components/UI'
import { WalletButton } from '../Components/UI/WalletButton'

export const CreatePasswordScreen = () => {
	return (
		<View style={styles.body}>
			<View>
				<View style={{ marginBottom: 62, marginTop: 76 }}>
					<WalletTitle style={{ marginBottom: 15 }}>Set a Password</WalletTitle>
					<WalletText center style={{ paddingHorizontal: 70 }}>
						This password will be used to unlock your wallet.
					</WalletText>
				</View>
				<WalletInput style={{ marginBottom: 40 }} />
				<WalletInput />
			</View>
			<View style={{ paddingHorizontal: 16 }}>
				<WalletButton style={{ marginTop: 50 }}>Next</WalletButton>
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
