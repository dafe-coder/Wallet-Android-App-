import React from 'react'
import { View } from 'react-native'
import { WalletButton, PasswordCreate } from './../../Components/UI/'
import { Header } from './../../Components/Header'
import { useLocation } from 'react-router-native'

export const CreatePin = () => {
	const { state } = useLocation()

	return (
		<View style={{ flex: 1, paddingHorizontal: 24, paddingBottom: 25 }}>
			<Header title='Create PIN' />
			<PasswordCreate
				style={{ marginTop: 10 }}
				to={state !== null ? state.to : ''}
			/>

			<View style={{ marginTop: 'auto' }}>
				<WalletButton icon='reload' disabled={true}>
					Restore Wallet
				</WalletButton>
			</View>
		</View>
	)
}
