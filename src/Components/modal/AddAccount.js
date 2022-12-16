import React from 'react'
import { View } from 'react-native'
import { WalletText, WalletTitle } from '../UI'
import { WalletButton } from './../UI/WalletButton'

export const AddAccount = ({ onPress }) => {
	return (
		<View style={{ paddingBottom: 40, paddingHorizontal: 16 }}>
			<WalletTitle style={{ marginBottom: 16 }}>
				Add Another Account
			</WalletTitle>
			<WalletText center size='m' style={{ paddingHorizontal: 44 }}>
				You are about to add another account. Your account will show up as a
				separate item under your profile.
			</WalletText>
			<WalletButton onPress={onPress} style={{ marginTop: 128 }}>
				Add Account
			</WalletButton>
		</View>
	)
}
