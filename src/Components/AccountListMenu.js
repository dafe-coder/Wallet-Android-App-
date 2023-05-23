import React from 'react'
import { View, StyleSheet } from 'react-native'
import { AccountItemMenu } from './AccountItemMenu'
import { THEME } from '../Theme'
export const AccountListMenu = ({ onPress }) => {
	const menuData = [
		{
			image: 'wallet-case',
			title: 'Wallet',
			topLine: true,
			onPress: onPress,
		},
		{
			image: 'import',
			title: 'Import existing wallet',
			topLine: true,
			onPress: onPress,
		},
		{
			image: 'backup',
			title: 'Backup',
			topLine: true,
			onPress: onPress,
		},
		{
			image: 'shield',
			title: 'Security',
			topLine: true,
			onPress: onPress,
		},
		{
			image: 'notification',
			title: 'Notifications',
			topLine: true,
			onPress: onPress,
		},
		{
			image: 'code',
			title: 'RPC Node ',
			topLine: true,
			onPress: onPress,
		},
		{
			image: 'radio',
			title: 'Wallet Connect',
			topLine: true,
			onPress: onPress,
		},
		{
			image: 'info',
			title: 'About',
			topLine: false,
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
		marginHorizontal: 20,
		paddingVertical: 7,
		marginTop: 5,
		backgroundColor: THEME.BLACK,
		marginBottom: 70,
		borderRadius: 16,
		paddingHorizontal: 16,
	},
})
