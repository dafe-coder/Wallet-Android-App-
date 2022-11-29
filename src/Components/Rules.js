import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { THEME } from '../Theme'
import Hyperlink from 'react-native-hyperlink'

export const Rules = ({ style }) => {
	return (
		<View style={style}>
			<Hyperlink
				onPress={(url, text) =>
					url === 'https://terms' ? alert(url + ', ' + text) : alert(url)
				}
				linkStyle={styles.link}
				linkText={(url) =>
					url === 'https://terms'
						? 'Terms'
						: url === 'https://privacy'
						? 'Privacy policy'
						: url
				}>
				<Text style={styles.text}>
					By processing, you agree to the https://terms of use and {'\n'}
					https://privacy
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
