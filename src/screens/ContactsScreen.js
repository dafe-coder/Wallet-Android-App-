import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { WalletText, WalletButton } from '../Components/UI'

export const ContactsScreen = () => {
	return (
		<View style={styles.body}>
			<View style={styles.center}>
				<Image source={require('../../assets/add-user.png')} />
				<WalletText size='m' style={{ marginTop: 30 }}>
					Your Contacts List is Empty.
				</WalletText>
			</View>
			<View>
				<WalletButton>Add Contact</WalletButton>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	body: {
		justifyContent: 'space-between',
		flex: 1,
		paddingTop: 117,
		paddingHorizontal: 16,
		paddingBottom: 40,
	},
	center: {
		justifyContent: 'center',
		alignItems: 'center',
	},
})
