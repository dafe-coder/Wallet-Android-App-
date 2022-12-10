import React from 'react'
import { View } from 'react-native'
import { WalletTextWithIcon } from '../Components'
import { WalletInput, WalletText } from '../Components/UI'
import { WalletButton } from '../Components/UI/WalletButton'
export const ExportPrivateKeyScreen = () => {
	return (
		<View style={{ paddingTop: 30, paddingBottom: 50, flex: 1 }}>
			<View style={{ flex: 1 }}>
				<View style={{ paddingHorizontal: 30, marginBottom: 25 }}>
					<WalletTextWithIcon img={require('../../assets/icons/lock.png')}>
						Please write down your Secret Recovery Phrase on paper and store it
						somewhere safe. Make sure the mnemonic you see is the one you have
						written down.
					</WalletTextWithIcon>
					<WalletTextWithIcon
						img={require('../../assets/icons/icon-line-eye.png')}>
						Anyone who has access to it will have complete access to your
						wallet.
					</WalletTextWithIcon>
					<WalletTextWithIcon
						img={require('../../assets/icons/password-key.png')}>
						If you forget your wallet password you can use this to recover your
						wallet.
					</WalletTextWithIcon>
					<WalletTextWithIcon img={require('../../assets/icons/warning.png')}>
						BYBIT WEB3 WALLET employees will NEVER ask for your Secret Recovery
						Phrase. Do not share it with anyone.
					</WalletTextWithIcon>
				</View>
				<View>
					<WalletText
						style={{ paddingHorizontal: 16, marginBottom: 7 }}
						color='brown'>
						Enter your password
					</WalletText>
					<WalletInput placeholder='Password' />
				</View>
			</View>
			<View style={{ paddingHorizontal: 16 }}>
				<WalletButton>Reveal Private Key</WalletButton>
			</View>
		</View>
	)
}
