import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Header } from '../../Components'
import { THEME } from '../../Theme'

export const Settings = () => {
	return (
		<View style={{ flex: 1, paddingHorizontal: 24 }}>
			<Header title='Settings' />
			<View style={styles.wrap}></View>
		</View>
	)
}

const styles = StyleSheet.create({
	wrap: {
		backgroundColor: THEME.GREEN_LIGHT,
		borderRadius: 16,
		borderWidth: 1,
		borderColor: THEME.WHITE,
		paddingHorizontal: 20,
		paddingVertical: 1,
	},
})
