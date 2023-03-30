import React, { useState, useEffect } from 'react'
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
import { SvgIcon } from './../Components/svg/svg'
import { ButtonCopy } from './../Components/UI/ButtonCopy'

export const ReceiveScreen = () => {
	const { addressWallet } = useSelector((state) => state.wallet)
	const [qrRef, setRef] = useState()

	const shareQR = () => {
		Share.share({
			message: addressWallet,
		})
	}

	return (
		<ScrollView>
			<View
				style={{ paddingTop: 70, paddingHorizontal: 16, paddingBottom: 60 }}>
				<WalletTitle style={{ marginBottom: 34 }}>
					Scan QR Code and Pay
				</WalletTitle>
				{addressWallet !== '' ? (
					<QrCode setRef={setRef} value={addressWallet} />
				) : (
					<></>
				)}
				<View style={styles.address}>
					<WalletText color='dark'>
						{addressWallet !== undefined && addressWallet !== ''
							? addressWallet.slice(0, 13) + '...' + addressWallet.slice(-10)
							: ''}
					</WalletText>
					<ButtonCopy text={addressWallet} style={{ bottom: 10, right: 7 }} />
				</View>
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'center',
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
							fill={'#9667E5'}
						/>
						<WalletText style={{ marginLeft: 8, color: '#9667E5' }}>
							Share address
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
		backgroundColor: THEME.GREY_LIGHT_BG,
		borderRadius: 30,
		paddingHorizontal: 20,
		paddingVertical: 12,
		marginTop: 24,
	},
	btnSave: {
		backgroundColor: THEME.BROWN,
		paddingHorizontal: 23,
		paddingVertical: 6,
		borderRadius: 5,
	},
})
