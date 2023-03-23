import React from 'react'
import { View } from 'react-native'
import { WalletText, WalletButton } from '../UI'

export const RestoreWallet = ({
	last = false,
	onConfirm,
	onDecline,
	onConfirmLast,
}) => {
	if (!last) {
		return (
			<View style={{ alignItems: 'center' }}>
				<WalletText fw='bold' size='m'>
					Restore wallet
				</WalletText>
				<WalletText
					style={{ marginTop: 16, fontSize: 12, lineHeight: 15 }}
					center>
					Restoring this wallet will erase your {'\n'} current wallet.
				</WalletText>
				<View style={{ flexDirection: 'row', marginTop: 37 }}>
					<WalletButton
						onPress={onConfirm}
						style={{ width: '37%', marginRight: '5%' }}>
						I understand
					</WalletButton>
					<WalletButton
						onPress={onDecline}
						style={{ width: '37%' }}
						type='border'>
						Cancel
					</WalletButton>
				</View>
			</View>
		)
	} else {
		return (
			<View style={{ alignItems: 'center' }}>
				<WalletText fw='bold' size='m'>
					Are you sure?
				</WalletText>
				<WalletText
					style={{ marginTop: 16, fontSize: 12, lineHeight: 15 }}
					center>
					Without the manual backup of your {'\n'} current wallet, you will lose
					access to {'\n'} its funds forever.
				</WalletText>
				<View style={{ flexDirection: 'row', marginTop: 37 }}>
					<WalletButton
						onPress={onConfirmLast}
						style={{ width: '37%', marginRight: '5%' }}>
						Restore
					</WalletButton>
					<WalletButton
						onPress={onDecline}
						style={{ width: '37%' }}
						type='border'>
						Cancel
					</WalletButton>
				</View>
			</View>
		)
	}
}
