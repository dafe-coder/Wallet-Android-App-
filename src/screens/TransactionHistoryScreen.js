import React from 'react'
import { View } from 'react-native'
import { WalletText } from './../Components/UI/'

export const TransactionHistoryScreen = () => {
	return (
		<View>
			<WalletText size='m' color='white' upperCase>
				Transaction history
			</WalletText>
		</View>
	)
}
