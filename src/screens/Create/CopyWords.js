import React from 'react'
import { View, ScrollView } from 'react-native'
import { Header } from '../../Components'
import { BoxWords, Alert } from './../../Components/'
import { WalletButton, WalletText } from '../../Components/UI'
import { WalletModal } from './../../Components/modal/WalletModal'
import QRCode from 'react-native-qrcode-svg'
import { THEME } from '../../Theme'

export const CopyWords = () => {
	const [openQrModal, setOpenQrModal] = React.useState(false)
	return (
		<ScrollView contentContainerStyle={{ flex: 1 }}>
			<Header title='Back Up Wallet' />
			<BoxWords
				setOpenQr={setOpenQrModal}
				arr={[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2]}
			/>
			<WalletText style={{ marginTop: 25, marginBottom: 50 }}>
				Be sure to back up the mnemonic phrase of your wallet, as it will be the
				only way to recover your assets under all circumstances.
			</WalletText>
			<View style={{ width: '100%', marginTop: 'auto', marginBottom: 25 }}>
				<Alert title='Keep Mnemonic Phrase Safe!'>
					Anyone with your mnemonic can access your wallet assets. Please back
					up your mnemonic before you receive transfers or delete the app.
				</Alert>
				<WalletButton style={{ marginTop: 30 }}>
					Yes, I’ve Written It Down
				</WalletButton>
			</View>
			<WalletModal setIsVisible={setOpenQrModal} isVisible={openQrModal}>
				<WalletText
					size='m'
					fw='bold'
					style={{
						marginBottom: 30,
					}}>
					Mnemonic Phrase QR Code
				</WalletText>
				<QRCode
					value='phrase'
					backgroundColor={THEME.GREEN_LIGHT}
					color={THEME.WHITE}
					size={200}
				/>
				<WalletButton
					style={{ width: '100%', marginTop: 30 }}
					onPress={() => setOpenQrModal(false)}>
					Close
				</WalletButton>
			</WalletModal>
		</ScrollView>
	)
}
