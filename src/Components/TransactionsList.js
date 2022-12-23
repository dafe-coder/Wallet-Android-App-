import React, { useState } from 'react'
import { View } from 'react-native'
import { TransactionItem } from './TransactionItem'
export const TransactionsList = ({ data }) => {
	const [date, setDate] = useState(['0'])
	return (
		<View style={{ marginTop: 24 }}>
			{data.map((item, i) => {
				return (
					<TransactionItem
						prevDate={date}
						setDate={setDate}
						key={i}
						index={i}
						type={item.type}
						itemData={item}
					/>
				)
			})}
		</View>
	)
}
