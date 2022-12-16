import React from 'react'
import { View } from 'react-native'
import { TransactionItem } from './TransactionItem'
export const TransactionsList = ({ data }) => {
	return (
		<View style={{ marginTop: 24 }}>
			{data.map((item, i) => {
				return <TransactionItem key={i} type={item.type} itemData={item} />
			})}
		</View>
	)
}
