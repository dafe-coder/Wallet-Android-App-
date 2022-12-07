import React from 'react'
import { View, StyleSheet } from 'react-native'
import { AccountItemMenu } from './AccountItemMenu'

export const AccountListMenu = () => {
	const menuData = [
		{
			image: require('../../assets/menuIcon/plus.png'),
			title: 'Add Account',
			topLine: true,
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
