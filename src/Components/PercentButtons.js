import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { THEME } from '../Theme'
import fixNum from './../../services/funcWallet/fixNum'
export const PercentButtons = ({ chooseCoin, setValue }) => {
	const onChoosePercent = (value) => {
		if (chooseCoin != null) {
			setValue(fixNum((chooseCoin.market_data.balance / 100) * Number(value)))
		}
	}
	return (
		<View style={styles.listPercent}>
			<TouchableOpacity
				onPress={() => onChoosePercent(25)}
				activeOpacity={0.7}
				style={styles.itemPercent}>
				<Text style={styles.percentText}>25%</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => onChoosePercent(50)}
				activeOpacity={0.7}
				style={styles.itemPercent}>
				<Text style={styles.percentText}>50%</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => onChoosePercent(75)}
				activeOpacity={0.7}
				style={styles.itemPercent}>
				<Text style={styles.percentText}>75%</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => onChoosePercent(100)}
				activeOpacity={0.7}
				style={styles.itemPercent}>
				<Text style={styles.percentText}>100%</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	listPercent: {
		marginTop: 16,
		marginBottom: 24,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	itemPercent: {
		borderColor: THEME.BROWN_TEXT,
		borderWidth: 1,
		borderRadius: 25,
		width: '23%',
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 6,
		backgroundColor: THEME.BROWN_DARK,
	},
	percentText: {
		color: THEME.VIOLET,
	},
})
