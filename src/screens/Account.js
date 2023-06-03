import React from 'react'
import { ScrollView, View } from 'react-native'
import { Header, AccountCard } from '../Components'
import { WalletButton } from '../Components/UI'

export const Account = () => {
	return (
		<ScrollView
			contentContainerStyle={{
				justifyContent: 'space-between',
				flexGrow: 1,
				paddingHorizontal: 24,
			}}>
			<View>
				<Header title='Account' />
				<AccountCard />
			</View>
			<View
				style={{
					marginBottom: 25,
				}}>
				<WalletButton to='/count-phrase' icon='import'>
					Import account
				</WalletButton>
			</View>
		</ScrollView>
	)
}
