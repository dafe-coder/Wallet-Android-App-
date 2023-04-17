import React from 'react'
import { View, Text, StyleSheet, Linking } from 'react-native'
import { THEME } from '../Theme'
import Hyperlink from 'react-native-hyperlink'

export const Rules = ({ style }) => {
	return (
		<View style={style}>
			<Hyperlink
				onPress={(url, text) =>
					url === 'https://robinhood.com/us/en/support/articles/privacy-policy/'
						? Linking.openURL(
								'https://robinhood.com/us/en/support/articles/privacy-policy/'
						  ).catch((err) => console.error('An error occurred', err))
						: alert(url)
				}
				linkStyle={styles.link}
				linkText={(url, text) =>
					url ===
						'https://robinhood.com/us/en/support/articles/privacy-policy/' &&
					'Terms of use'
				}>
				<Text style={styles.text}>
					By proceeding, you agree to App Name
					https://robinhood.com/us/en/support/articles/privacy-policy/
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
