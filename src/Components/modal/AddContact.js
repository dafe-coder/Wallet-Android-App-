import React from 'react'
import { View } from 'react-native'
import { WalletText, WalletTitle } from '../UI'
import { WalletButton } from '../UI/WalletButton'
import { WalletInput } from './../UI/WalletInput'

export const AddContact = ({ onPress }) => {
	return (
		<View style={{ paddingHorizontal: 16 }}>
			<WalletTitle style={{ marginBottom: 16 }}>New Contacts</WalletTitle>
			<WalletText center size='m' style={{ paddingHorizontal: 44 }}>
				Your Contacts List is Empty
			</WalletText>
			<WalletInput placeholder='Contact Name' style={{ marginBottom: 12 }} />
			<WalletInput placeholder='Contact Address' />
			<WalletButton onPress={onPress} style={{ marginTop: 128 }}>
				Add Account
			</WalletButton>
		</View>
	)
}
