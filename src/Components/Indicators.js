import React from 'react'
import { View, StyleSheet } from 'react-native'
import { THEME } from './../Theme'

const count = Array.from(new Array(3).keys())
export const Indicators = ({ active = 1, activeLast, style }) => {
	return (
		<View style={[styles.wrap, style]}>
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
		backgroundColor: THEME.WHITE,
	},
	wrap: {
		flexDirection: 'row',
		marginBottom: 80,
		marginTop: 30,
	},
	indicator: {
		height: 4,
		width: 64,
		backgroundColor: '#8B8C8E',
		borderRadius: 50,
		marginEnd: 6,
	},
	active: {
		backgroundColor: THEME.WHITE,
	},
})
