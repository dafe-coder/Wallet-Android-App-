import React from 'react'
import { View } from 'react-native'
import { WalletTitle, WalletText } from './../UI'

export const ConnectsApp = () => {
	return (
		<View>
			<WalletTitle style={{ marginBottom: 16 }}>Connected Apps</WalletTitle>
			<WalletText center size='m'>
				You're not currently connected to any apps.
			</WalletText>
		</View>
	)
}
