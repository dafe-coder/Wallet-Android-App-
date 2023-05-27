import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { Header } from '../Components'
import { WalletText } from './../Components/UI/'
import { ChooseCoin } from '../Components'
import QRCode from 'react-native-qrcode-svg'
import { THEME } from '../Theme'
import { SvgIcon } from '../Components/svg/svg'

export const Receive = () => {
	return (
		<View style={{ flex: 1 }}>
			<Header title='Payment Information' />
			<View>
				<WalletText style={{ marginBottom: 5 }}>Asset Name</WalletText>
				<ChooseCoin />
			</View>
			<View style={{ alignItems: 'center', marginTop: 80 }}>
				<QRCode
					value='phrase'
					backgroundColor={THEME.GREEN_LIGHT}
					color={THEME.WHITE}
					size={120}
				/>
				<WalletText center style={{ marginTop: 50 }}>
					Please scan the QR code to get information for payment
				</WalletText>
			</View>
			<View style={{ marginTop: 52 }}>
				<WalletText fw='bold'>Your wallet address</WalletText>
				<View style={styles.input}>
					<WalletText fw='bold' numberOfLines={1}>
						3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5
					</WalletText>
					<TouchableOpacity style={{ marginLeft: 10 }} activeOpacity={0.7}>
						<SvgIcon type='copy' />
					</TouchableOpacity>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	input: {
		backgroundColor: THEME.GREEN_BG,
		borderRadius: 16,
		borderWidth: 1,
		borderColor: THEME.WHITE,
		paddingHorizontal: 20,
		paddingVertical: 16,
		flexDirection: 'row',
		marginTop: 15,
	},
})
