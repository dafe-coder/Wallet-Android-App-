import React from 'react'
import { View } from 'react-native'
import { WalletText, WalletButton, WalletTitle } from '../Components/UI'

export const DAppsScreen = ({ navigation }) => {
	return (
		<View
			style={{
				flex: 1,
				paddingBottom: 40,
				justifyContent: 'space-between',
			}}>
			<View style={{ flex: 1, justifyContent: 'center' }}>
				<WalletTitle center color='disabled'>
					No dApp connected yet.
				</WalletTitle>
			</View>
			<View style={{ paddingHorizontal: 20 }}>
				<WalletText center style={{ marginBottom: 24 }}>
					Your Name Wallet is compatible with{'/n'} WalletConnect.
				</WalletText>
				<WalletButton onPress={() => navigation.goBack()}>
					Continue
				</WalletButton>
			</View>
		</View>
	)
}
