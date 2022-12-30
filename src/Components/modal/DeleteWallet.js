import React from 'react'
import { View, StyleSheet } from 'react-native'
import { WalletTitle, WalletText, WalletButton } from './../UI/'
import { SvgIcon } from './../svg/svg'

export const DeleteWallet = ({ onClose, onDelete }) => {
	return (
		<View
			style={{ justifyContent: 'space-between', flex: 1, paddingBottom: 37 }}>
			<View>
				<WalletTitle style={{ marginBottom: 32 }}>Delete Wallet</WalletTitle>
				<WalletText center size='m' color='white'>
					Are you sure you want to delete the wallet?
				</WalletText>
				<View style={styles.alert}>
					<SvgIcon type='alert' />
					<WalletText color='red' style={{ marginLeft: 16 }}>
						Please, make sure you saved the phrase!
					</WalletText>
				</View>
			</View>
			<View style={styles.wrapBtn}>
				<WalletButton
					onPress={onClose}
					style={{ width: '48.6%' }}
					type='border'>
					Cancel
				</WalletButton>
				<WalletButton onPress={onDelete} style={{ width: '48.4%' }}>
					delete
				</WalletButton>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	alert: {
		padding: 16,
		backgroundColor: '#251B0A',
		borderRadius: 5,
		marginTop: 24,
		flexDirection: 'row',
		alignItems: 'center',
	},
	wrapBtn: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
})
