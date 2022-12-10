import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { WalletText } from './UI/WalletText'

export const WalletTextWithIcon = ({ children, img }) => {
	return (
		<View style={styles.wrap}>
			<View style={styles.icon}>
				<Image style={styles.iconImg} source={img} />
			</View>
			<View style={styles.text}>
				<WalletText>{children}</WalletText>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	wrap: {
		flexDirection: 'row',
		marginBottom: 16,
		width: '100%',
	},
	icon: {
		flexBasis: 24,
		height: 24,
		width: 24,
		marginRight: 15,
		marginTop: 5,
	},
	iconImg: {
		width: '100%',
		height: '100%',
	},
	text: {
		flexBasis: '80%',
		flexGrow: 1,
	},
})
