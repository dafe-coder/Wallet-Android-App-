import React from 'react'
import { View } from 'react-native'
import { Header } from './../../Components/'
import { WalletButton, WalletInput } from './../../Components/UI/'

export const ImportData = () => {
	return (
		<View style={{ flex: 1, marginBottom: 25 }}>
			<Header title='Restore Wallet' />
			<View>
				<WalletInput style={{ marginBottom: 15 }} placeholder='Wallet Name' />
				<WalletInput
					style={{ marginBottom: 15 }}
					placeholder='Spending password'
				/>
				<WalletInput placeholder='Repeat password' />
			</View>
			<WalletButton
				to='/import-end'
				icon='reload'
				style={{ marginTop: 'auto' }}>
				Restore Wallet
			</WalletButton>
		</View>
	)
}
