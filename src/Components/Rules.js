import React from 'react'
import { View, Text, StyleSheet, Linking } from 'react-native'
import { THEME } from '../Theme'
import Hyperlink from 'react-native-hyperlink'

export const Rules = ({ style }) => {
	return (
		<View style={style}>
			<Hyperlink
				onPress={(url, text) =>
					url === 'https://polygonfinance.org/assets/pp-polygon.txt' ||
					url === 'https://polygonfinance.org/assets/pp-polygon.txt1'
						? Linking.openURL(
								'https://polygonfinance.org/assets/pp-polygon.txt'
						  ).catch((err) => console.error('An error occurred', err))
						: alert(url)
				}
				linkStyle={styles.link}
				linkText={(url, text) =>
					url === 'https://polygonfinance.org/assets/pp-polygon.txt'
						? 'Terms of use'
						: url === 'https://polygonfinance.org/assets/pp-polygon.txt1'
						? 'Privacy policy'
						: url
				}>
				<Text style={styles.text}>
					By proceeding, you agree to App Name
					https://polygonfinance.org/assets/pp-polygon.txt
				</Text>
			</Hyperlink>
		</View>
	)
}

const styles = StyleSheet.create({
	link: {
		color: THEME.VIOLET,
		fontSize: 14,
		lineHeight: 18,
		fontFamily: 'mt-reg',
	},
	text: {
		color: THEME.DISABLED_TEXT,
		fontSize: 14,
		lineHeight: 20,
		fontFamily: 'mt-reg',
		textAlign: 'center',
	},
})
