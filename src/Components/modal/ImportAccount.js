import React from 'react'
import { View } from 'react-native'
import { WalletText, WalletTitle, WalletButton, WalletInput } from '../UI'

export const ImportAccount = () => {
	return (
		<View
			style={{
				paddingHorizontal: 16,
				flex: 1,
				paddingBottom: 39,
			}}>
			<WalletTitle style={{ marginBottom: 16 }}>
				Add Another Account
			</WalletTitle>
			<WalletText center style={{ marginBottom: 38, marginHorizontal: 25 }}>
				Imported accounts will show as another account in your wallet. The next
				time you recover a wallet using your Secret Recovery Phrase on a new
				device, any imported accounts will not be present until manually
				imported on your new wallet.
			</WalletText>
			<View style={{ flexDirection: 'row' }}>
				<WalletText style={{ color: '#DADEDE', marginBottom: 7 }}>
					Private Key
				</WalletText>
				<WalletText color='brown' style={{ marginLeft: 28 }}>
					Secret Recovery phrase
				</WalletText>
			</View>
			<WalletInput
				placeholder='Account Name (Optional)'
				style={{ marginHorizontal: 0 }}
			/>
			<WalletInput
				placeholder='Private Key'
				style={{ marginHorizontal: 0, marginTop: 12 }}
			/>
			<WalletButton style={{ marginTop: 'auto' }}>Import Account</WalletButton>
		</View>
	)
}
