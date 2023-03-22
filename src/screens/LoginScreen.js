import React from 'react'
import { View, StyleSheet, Image, Dimensions } from 'react-native'
import { THEME } from './../Theme'
import { WalletButton, WalletText } from '../Components/UI'
import { Rules } from './../Components'

const height = Dimensions.get('window').height

export const LoginScreen = ({ navigation }) => {
	return (
		<View style={styles.body}>
			<View style={styles.logoWrap}>
				<View style={{ marginBottom: 20 }}>
					<Image
						source={require('../../assets/logo/wallet-logo.png')}
						style={{ width: 149, height: 115 }}
					/>
				</View>
				<WalletText
					style={{ fontSize: 40, lineHeight: 50 }}
					color='gold'
					fw='bold'>
					Web3 Emos Wallet
				</WalletText>
			</View>
			<WalletButton
				onPress={() => navigation.navigate('SubscribeCreate')}
				style={{ marginBottom: 10 }}>
				Create new wallet
			</WalletButton>
			<WalletButton
				type='border'
				onPress={() => navigation.navigate('Subscribe')}>
				Recover Wallet
			</WalletButton>
			<Rules style={{ marginTop: 10 }} />
		</View>
	)
}

const styles = StyleSheet.create({
	logoWrap: {
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: height / 7,
	},
	body: {
		flex: 1,
		paddingHorizontal: 16,
		justifyContent: 'flex-end',
		paddingBottom: 40,
	},
	title: {
		marginBottom: 13,
		fontSize: 40,
		lineHeight: 50,
		color: THEME.VIOLET,
		textTransform: 'uppercase',
		fontFamily: 'sf-bold',
		textAlign: 'center',
	},
	whiteTitle: {
		color: THEME.WHITE,
	},
})
