import React from 'react'
import { View, StyleSheet } from 'react-native'
import { AccountItemMenu } from './AccountItemMenu'
import { THEME } from '../Theme'
export const AccountListMenu = ({ onPress }) => {
	const menuData = [
		// {
		// 	image: 'plus',
		// 	title: 'Add Account',
		// 	topLine: true,
		// 	onPress: onPress,
		// },
		{
			image: 'import',
			title: 'Import Account',
			topLine: true,
			onPress: onPress,
		},
		{
			image: 'lock',
			title: 'Lock Wallet',
			topLine: true,
			onPress: onPress,
		},
		// {
		// 	image: 'settings',
		// 	title: 'Contacts',
		// 	topLine: true,
		// 	onPress: onPress,
		// },
		{
			image: 'settings',
			title: 'Settings',
			topLine: true,
			onPress: onPress,
		},
		{
			image: 'help',
			title: 'Help',
			topLine: true,
		},
		{
			image: 'logout',
			title: 'Logout',
			topLine: true,
			onPress: onPress,
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
		marginHorizontal: 16,
		marginTop: 30,
		marginBottom: 70,
		borderBottomColor: THEME.GREY_LIGHT,
		borderBottomWidth: 1,
	},
})
