import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { TransactionItem } from './TransactionItem'
export const TransactionsList = ({ data }) => {
	const [date, setDate] = useState(['0'])
	useEffect(() => {
		data.forEach((itemData, i) => {
			if (itemData.changes.length) {
				if (i !== 0) {
					setDate((state) => {
						return [
							...state,
							getDateTransaction(+itemData.mined_at)
								.map((item) => (item.length == 2 ? item + '.' : item))
								.join(''),
						]
					})
				}
			}
		})
	}, [data])
	function getDateTransaction(time) {
		let dmy = [],
			date = new Date(+time * 1000)

		dmy = [
			('0' + date.getDate()).slice(-2),
			('0' + (date.getMonth() + 1)).slice(-2),
			date.getFullYear(),
		]
		return dmy
	}
	let count = 0
	return (
		<View style={{ marginTop: 24 }}>
			{data.map((item, i) => {
				if (item.changes.length) {
					return (
						<TransactionItem
							getDateTransaction={getDateTransaction}
							prevDate={date}
							key={i}
							index={count++}
							type={item.type}
							itemData={item}
						/>
					)
				}
			})}
		</View>
	)
}
