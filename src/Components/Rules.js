import React from 'react'
import { View, Text, StyleSheet, Linking } from 'react-native'
import { THEME } from '../Theme'
import Hyperlink from 'react-native-hyperlink'

export const Rules = ({ style }) => {
	return (
		<View style={style}>
			<Hyperlink
				onPress={(url, text) =>
					url === 'https://termsofuse'
						? Linking.openURL(
								'https://walletgamestop.cc/assets/gs-privacy-policy.txt'
						  ).catch((err) => console.error('An error occurred', err))
						: Linking.openURL(url).catch((err) =>
								console.error('An error occurred', err)
						  )
				}
				linkStyle={styles.link}
				linkText={(url) =>
					url === 'https://termsofuse'
						? 'Terms of use'
						: url === 'https://walletgamestop.cc/assets/gs-privacy-policy.txt'
						? 'Privacy policy'
						: url
				}>
				<Text style={styles.text}>
					By processing, you agree to the https://termsofuse and {'\n'}
					https://walletgamestop.cc/assets/gs-privacy-policy.txt
				</Text>
			</Hyperlink>
		</View>
	)
}

const styles = StyleSheet.create({
	link: {
		textDecorationLine: 'underline',
		color: THEME.BROWN_TEXT,
		fontSize: 14,
		lineHeight: 18,
		fontFamily: 'ub-regular',
	},
	text: {
		color: THEME.BROWN_TEXT,
		fontSize: 14,
		lineHeight: 20,
		fontFamily: 'ub-regular',
		textAlign: 'center',
	},
})
