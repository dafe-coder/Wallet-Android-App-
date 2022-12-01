import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { THEME } from './../Theme'
import {
	WalletButton,
	WalletTitle,
	WalletText,
	SwitchButton,
} from '../Components/UI'

export const AllSetScreen = ({ navigation }) => {
	return (
		<View style={styles.body}>
			<View style={{ ...styles.wrapTop, paddingTop: 110 }}>
				<Image source={require('../../assets/wallet.png')} />
				<WalletTitle style={{ marginTop: 30, marginBottom: 16 }}>
					All Set
				</WalletTitle>
				<WalletText>Your wallet is now ready.</WalletText>
				<View style={styles.textWrap}>
					<WalletText style={{ width: 200 }}>
						Make GameStop the default wallet estension
					</WalletText>
					<SwitchButton enabled={true} />
				</View>
				<WalletText color='brown'>
					If enabled, all websites will default to opening the Game Stop Wallet
					to interact with dApps. You can change this in the settings menu.
				</WalletText>
			</View>
			<WalletButton style={{ marginBottom: 10 }}>Next</WalletButton>
		</View>
	)
}

const styles = StyleSheet.create({
	wrapTop: {
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 100,
		paddingHorizontal: 16,
	},
	body: {
		flex: 1,
		paddingHorizontal: 16,
		justifyContent: 'space-between',
		paddingBottom: 40,
	},
	title: {
		marginBottom: 13,
		fontSize: 40,
		lineHeight: 50,
		color: THEME.GOLD,
		textTransform: 'uppercase',
		fontFamily: 'gt-bold',
		textAlign: 'center',
	},
	whiteTitle: {
		color: THEME.WHITE,
	},
	textWrap: {
		borderRadius: 7,
		backgroundColor: THEME.BROWN_DARK,
		width: '100%',
		padding: 15,
		paddingHorizontal: 20,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		marginTop: 42,
		marginBottom: 16,
	},
})
