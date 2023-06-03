import React from 'react'
import { View } from 'react-native'
import { Header, ImportBalanceCard } from '../../Components'
import { WalletText, WalletButton } from './../../Components/UI/'

export const ImportEnd = () => {
	return (
		<View style={{ flex: 1, paddingHorizontal: 24, marginBottom: 25 }}>
			<Header title='Restore Wallet' />
			<WalletText>Confirm the account to be restored:</WalletText>
			<ImportBalanceCard style={{ marginTop: 25 }} />
			<WalletButton to='/wallet' style={{ marginTop: 'auto' }}>
				Confirm
			</WalletButton>
		</View>
	)
}
