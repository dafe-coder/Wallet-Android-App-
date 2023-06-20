import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { Header } from '../Components'
import { WalletText } from './../Components/UI/'
import { ChooseCoin } from '../Components'
import QRCode from 'react-native-qrcode-svg'
import { THEME } from '../Theme'
import { useSelector } from 'react-redux'
import { ButtonCopySm } from './../Components/UI/ButtonCopySm'
import { useLocation } from 'react-router-native'

export const Receive = () => {
	const { walletAddress } = useSelector((state) => state.wallet)
	const { state } = useLocation()
	const [chooseCoinName, setChooseCoinName] = React.useState('PEPE Coin')

	React.useEffect(() => {
		if (state !== null) {
			setChooseCoinName(state.item.name)
		}
	}, [state])

	return (
		<View style={{ flex: 1, paddingHorizontal: 24 }}>
			<Header backPath='/wallet' title='Payment Information' />
			<View>
				<WalletText style={{ marginBottom: 5 }}>Asset Name</WalletText>
				<ChooseCoin title={chooseCoinName.toUpperCase()} />
			</View>
			<View style={{ alignItems: 'center', marginTop: 80 }}>
				<QRCode
					value={walletAddress}
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
						{walletAddress}
					</WalletText>
					<ButtonCopySm
						text={walletAddress}
						style={{ position: 'relative', marginLeft: 10 }}
					/>
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
