import React from 'react'
import { View, StyleSheet } from 'react-native'
import { THEME } from './../Theme'

const count = Array.from(new Array(3).keys())
export const Indicators = ({ active = 1, activeLast }) => {
	return (
		<View style={styles.wrap}>
			{count.map((_, i) => (
				<View
					key={i}
					style={[
						styles.indicator,
						active === i + 1 ? styles.active : {},
						active - 1 > 0 && active > i ? styles.activeLast : {},
					]}
				/>
			))}
		</View>
	)
}

const styles = StyleSheet.create({
	activeLast: {
		backgroundColor: THEME.VIOLET,
	},
	wrap: {
		flexDirection: 'row',
		marginBottom: 40,
	},
	indicator: {
		height: 8,
		width: 8,
		backgroundColor: '#1A1B28',
		borderRadius: 50,
		marginEnd: 12,
	},
	active: {
		backgroundColor: THEME.VIOLET,
		width: 24,
	},
})
