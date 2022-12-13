import React from 'react'
import { View, Text } from 'react-native'
import { BarChart, LineChart, PieChart } from 'react-native-gifted-charts'

// ...
const data = [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }]

export const PieChar = () => {
	return (
		<View>
			{/* <PieChart data={data} donut /> */}
			<Text>Donut PieChart</Text>
		</View>
	)
}
