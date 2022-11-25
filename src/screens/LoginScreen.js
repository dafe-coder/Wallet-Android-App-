import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { THEME } from './../Theme'

export const LoginScreen = () => {
	return (
		<View style={styles.body}>
			<View>
				<Text>
					Byb<Text>i</Text>t
				</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	body: {
		backgroundColor: THEME.PRIMARY,
		flex: 1,
		color: THEME.WHITE,
	},
})
