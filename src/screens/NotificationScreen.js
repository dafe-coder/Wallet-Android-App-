import React from 'react'
import { View, StyleSheet } from 'react-native'
import { WalletText } from './../Components/UI/'
import { SwitchButton } from './../Components/UI/SwitchButton'
import { THEME } from '../Theme'
export const NotificationScreen = ({ navigation }) => {
	return (
		<View style={{ flex: 1, paddingHorizontal: 24 }}>
			<View>
				<View style={styles.item}>
					<WalletText fw='bold' size='m'>
						Activate notifications
					</WalletText>
					<SwitchButton />
				</View>
			</View>
			<View style={{ marginTop: 24 }}>
				<WalletText color='disabled' size='m'>
					Wallet
				</WalletText>
				<View style={styles.item}>
					<WalletText fw='bold' size='m'>
						Activate notifications
					</WalletText>
					<SwitchButton />
				</View>
				<View style={styles.item}>
					<WalletText fw='bold' size='m'>
						WalletConnect
					</WalletText>
					<SwitchButton />
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	item: {
		paddingVertical: 20,
		borderBottomColor: THEME.DISABLED_TEXT,
		borderBottomWidth: 1,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
})
