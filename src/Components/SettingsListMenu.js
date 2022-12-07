import React from 'react'
import { View, StyleSheet } from 'react-native'
import { AccountItemMenu } from './AccountItemMenu'

export const SettingsListMenu = () => {
	const menuData = [
		{
			title: 'Add Account',
			topLine: true,
		},
		{
			title: 'Import Account',
			topLine: true,
		},
		{
			title: 'Lock Wallet',
			topLine: true,
		},
		{
			title: 'Contacts',
			topLine: true,
		},
		{
			title: 'Settings',
			topLine: false,
		},
		{
			title: 'Help',
			topLine: false,
		},
		{
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
