import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
const percents = [20, 50, 75, 100]
import { WalletText } from './UI'

export const PercentBlock = ({ chooseCoin, setValue, style }) => {
	const onChoosePercent = (value) => {
		if (chooseCoin != null) {
			setValue(
				((chooseCoin.market_data.balance / 100) * Number(value)).toString()
			)
		}
	}

	return (
		<View style={[{ flexDirection: 'row', alignItems: 'center' }, style]}>
			{percents.map((item, i) => (
				<TouchableOpacity
					onPress={() => onChoosePercent(item)}
					activeOpacity={0.7}
					key={i}
					style={[styles.perc, i == percents.length && { marginRight: 0 }]}>
					<WalletText size='xs' center>
						{item}%
					</WalletText>
				</TouchableOpacity>
			))}
		</View>
	)
}

const styles = StyleSheet.create({
	perc: {
		backgroundColor: 'rgba(255, 255, 255, 0.2);',
		borderRadius: 8,
		paddingVertical: 5,
		flexBasis: '23.07%',
		justifyContent: 'center',
		flexDirection: 'row',
		alignItems: 'center',
		marginRight: '2.56%',
	},
})
