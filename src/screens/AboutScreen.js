import React from 'react'
import { View, StyleSheet, TouchableOpacity, Linking } from 'react-native'
import { WalletText } from '../Components/UI'
import { THEME } from '../Theme'
import { SvgIcon } from './../Components/svg/svg'

const url = 'https://robinhood.com/us/en/support/articles/privacy-policy/'
export const AboutScreen = () => {
	return (
		<View style={styles.wrap}>
			<TouchableOpacity
				activeOpacity={0.7}
				style={[
					styles.item,
					{ borderBottomColor: THEME.GREY, borderBottomWidth: 1 },
				]}
				onPress={() =>
					Linking.openURL(url).catch((err) =>
						console.error('An error occurred', err)
					)
				}>
				<WalletText fw='bold' size='m'>
					Terms of Use
				</WalletText>
			</TouchableOpacity>
			<TouchableOpacity
				activeOpacity={0.7}
				style={styles.item}
				onPress={() =>
					Linking.openURL(url).catch((err) =>
						console.error('An error occurred', err)
					)
				}>
				<WalletText fw='bold' size='m'>
					Privacy policy
				</WalletText>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	wrap: {
		marginTop: 5,
		paddingHorizontal: 24,
		backgroundColor: THEME.BLACK,
		borderRadius: 16,
		marginHorizontal: 20,
	},
	item: {
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		paddingVertical: 24,
		paddingRight: 10,
	},
})
