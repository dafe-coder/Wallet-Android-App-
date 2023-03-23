import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { THEME } from '../../Theme'

export const WalletTitle = ({ style, children, color, size, fw = 'reg' }) => {
	let colorTitle = null
	let sizeTitle = null
	switch (color) {
		case 'white':
			colorTitle = { color: THEME.WHITE }
			break
		default:
			colorTitle = {
				color: THEME.DARK,
			}
			break
	}
	switch (size) {
		case 'm':
			sizeTitle = { fontSize: 28, lineHeight: 34 }
			break
		default:
			sizeTitle = { fontSize: 24, lineHeight: 29 }
			break
	}
	return (
		<Text
			style={[
				{ ...styles.title, ...colorTitle, ...sizeTitle, ...style },
				fw === 'bold' ? { fontFamily: 'mt-semi-bold' } : {},
			]}>
			{children}
		</Text>
	)
}

const styles = StyleSheet.create({
	title: {
		fontFamily: 'mt-reg',
		textAlign: 'center',
	},
})
