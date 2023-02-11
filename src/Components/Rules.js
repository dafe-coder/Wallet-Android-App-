import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { THEME } from '../Theme'
import Hyperlink from 'react-native-hyperlink'

export const Rules = ({ style }) => {
	return (
		<View style={style}>
			<Hyperlink
				onPress={(url, text) =>
					url === 'https://termsofuse' ? alert(url + ', ' + text) : alert(url)
				}
				linkStyle={styles.link}
				linkText={(url) =>
					url === 'https://termsofuse'
						? 'Terms of use'
						: url === 'https://privacy'
						? 'Privacy policy'
						: url
				}>
				<Text style={styles.text}>
					By processing, you agree to the https://termsofuse and {'\n'}
					https://privacy
				</Text>
			</Hyperlink>
		</View>
	)
}

const styles = StyleSheet.create({
	link: {
		textDecorationLine: 'underline',
		color: THEME.VIOLET_LIGHT,
		fontSize: 14,
		lineHeight: 18,
		fontFamily: 'ub-regular',
	},
	text: {
		color: THEME.VIOLET_LIGHT,
		fontSize: 14,
		lineHeight: 20,
		fontFamily: 'ub-regular',
		textAlign: 'center',
	},
})
