import React from 'react'
import { View, StyleSheet } from 'react-native'
import { AccountItemMenu } from './AccountItemMenu'

export const AccountListMenu = ({ onPress }) => {
	const menuData = [
		{
			image: require('../../assets/menuIcon/plus.png'),
			title: 'Add Account',
			topLine: true,
			onPress: onPress,
		},
		{
			image: require('../../assets/menuIcon/download.png'),
			title: 'Import Account',
			topLine: true,
		},
		{
			image: require('../../assets/menuIcon/lock.png'),
			title: 'Lock Wallet',
			topLine: true,
		},
		{
			image: require('../../assets/menuIcon/phone.png'),
			title: 'Contacts',
			topLine: true,
			onPress: onPress,
		},
		{
			image: require('../../assets/menuIcon/settings.png'),
			title: 'Settings',
			topLine: false,
		},
		{
			image: require('../../assets/menuIcon/help.png'),
			title: 'Help',
			topLine: false,
		},
		{
			image: require('../../assets/menuIcon/out.png'),
			title: 'Logout',
			topLine: true,
		},
	]
	return (
		<View style={styles.list}>
			{menuData.map((m) => (
				<AccountItemMenu
					key={m.title}
					image={m.image}
					title={m.title}
					topLine={m.topLine}
					onPress={m.onPress}
				/>
			))}
		</View>
	)
}

const styles = StyleSheet.create({
	list: {
		marginTop: 30,
	},
})
