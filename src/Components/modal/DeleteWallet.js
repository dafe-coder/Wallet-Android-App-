import React from 'react'
import { View, StyleSheet } from 'react-native'
import { WalletTitle, WalletText, WalletButton } from './../UI/'

export const DeleteWallet = ({ onClose, onDelete }) => {
	return (
		<View>
			<View>
				<WalletTitle style={{ marginBottom: 32 }} color='white' fw='bold'>
					Delete Wallet
				</WalletTitle>
				<WalletText center size='m' color='white'>
					To delete your wallet, you must {'\n'} perform a manual backup.
				</WalletText>
			</View>
			<View style={styles.wrapBtn}>
				<WalletButton
					onPress={onDelete}
					style={{ width: '43%', marginRight: '8%' }}>
					Ok
				</WalletButton>
				<WalletButton type='border' onPress={onClose} style={{ width: '43%' }}>
					Cancel
				</WalletButton>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	alert: {
		padding: 16,
		backgroundColor: '#ECE9F2',
		borderRadius: 15,
		marginTop: 24,
		flexDirection: 'row',
		alignItems: 'center',
	},
	wrapBtn: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 35,
	},
})
