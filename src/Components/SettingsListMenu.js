import React from 'react'
import { StyleSheet, View } from 'react-native'
import { SettingsItemMenu } from './SettingsItemMenu'

export const SettingsListMenu = ({ onPress }) => {
	const menuData = [
		{
			title: 'Current  Network',
			subTitle: 'Ethereum Mainnet',
			topLine: true,
			onPress: onPress,
		},
		{
			title: 'Change Password',
			subTitle: 'Change your lock-screen password',
			topLine: true,
			onPress,
		},
		{
			title: 'Connected Apps',
			subTitle: 'Manage apps connected to your wallet',
			topLine: true,
			onPress: onPress,
		},
		{
			title: 'Add Custom Token',
			subTitle: 'Add a custom ERC-20 Token',
			topLine: true,
		},
		{
			title: 'Export Account – Secret Phrase',
			subTitle: 'Export all accounts in your wallet',
			topLine: false,
			onPress: onPress,
		},
		{
			title: 'Export Account – Private Key',
			subTitle: 'Export single account',
			topLine: false,
			onPress: onPress,
		},
		{
			title: 'Share Ananlytics',
			subTitle: 'Share analytics with Web3 Wallet',
			switchButton: true,
			topLine: true,
		},
	]
	return (
		<View style={styles.list}>
			{menuData.map((m) => (
				<SettingsItemMenu
					onPress={m.onPress}
					key={m.title}
					title={m.title}
					subTitle={m.subTitle}
					topLine={m.topLine}
					switchButton={m.switchButton}
				/>
			))}
		</View>
	)
}

const styles = StyleSheet.create({
	list: {
		marginTop: 30,
		paddingHorizontal: 16,
	},
})
