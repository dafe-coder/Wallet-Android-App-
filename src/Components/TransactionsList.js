import React from 'react'
import { View } from 'react-native'
import { TransactionItem } from './TransactionItem'
export const TransactionsList = () => {
	return (
		<View style={{ marginTop: 24 }}>
			<TransactionItem type='receive' />
		</View>
	)
}
