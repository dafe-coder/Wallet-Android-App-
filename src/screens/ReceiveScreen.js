import React, { useState } from 'react'
import {
	View,
	StyleSheet,
	TouchableOpacity,
	ScrollView,
	Share,
} from 'react-native'
import { WalletTitle, WalletText } from './../Components/UI'
import { QrCode } from './../Components/'
import { THEME } from './../Theme'
import { useSelector } from 'react-redux'
import * as Clipboard from 'expo-clipboard'
import { SvgIcon } from './../Components/svg/svg'

export const ReceiveScreen = () => {
	const { addressWallet } = useSelector((state) => state.wallet)
	const [qrRef, setRef] = useState()

	const shareQR = () => {
		Share.share({
			message: addressWallet,
		})
	}
	const onCopy = async () => {
		await Clipboard.setStringAsync(addressWallet)
	}
	return (
		<ScrollView>
			<View
				style={{ paddingTop: 70, paddingHorizontal: 16, paddingBottom: 60 }}>
				<WalletTitle style={{ marginBottom: 34 }}>
					Scan QR Code and Pay
				</WalletTitle>
				{addressWallet != '' ? (
					<QrCode setRef={setRef} value={addressWallet} />
				) : (
					<></>
				)}
				<View style={styles.address}>
					<WalletText color='white'>
						{addressWallet.slice(0, 13) + '...' + addressWallet.slice(-10)}
					</WalletText>
				</View>
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-between',
						marginTop: 48,
					}}>
					<TouchableOpacity
						activeOpacity={0.7}
						style={styles.link}
						onPress={shareQR}>
						<SvgIcon
							style={{ marginTop: 1 }}
							width='24'
							height='24'
							type='share'
							fill={THEME.GOLD_DARK}
						/>
						<WalletText style={{ marginLeft: 8 }} color='gold'>
							Share address
						</WalletText>
					</TouchableOpacity>
					<TouchableOpacity
						activeOpacity={0.7}
						style={styles.link}
						onPress={onCopy}>
						<SvgIcon
							style={{ marginTop: 4 }}
							width='24'
							height='24'
							type='copy'
							fill={THEME.GOLD_DARK}
						/>
						<WalletText style={{ marginLeft: 8 }} color='gold'>
							Copy address
						</WalletText>
					</TouchableOpacity>
				</View>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	link: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	address: {
		backgroundColor: THEME.BROWN_DARK,
		borderRadius: 5,
		paddingHorizontal: 20,
		paddingVertical: 10,
		marginTop: 24,
	},
	btnSave: {
		backgroundColor: THEME.BROWN,
		paddingHorizontal: 23,
		paddingVertical: 6,
		borderRadius: 5,
	},
})
