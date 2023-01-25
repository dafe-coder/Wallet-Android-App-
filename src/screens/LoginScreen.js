import React from 'react'
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native'
import { THEME } from './../Theme'
import { WalletButton } from '../Components/UI'
import { Rules } from './../Components'

const height = Dimensions.get('window').height

export const LoginScreen = ({ navigation }) => {
	return (
		<View style={styles.body}>
			<View style={styles.logoWrap}>
				<View style={{ marginBottom: 20 }}>
					<Image
						source={require('../../assets/logo/wallet-logo.png')}
						style={{ width: 86, height: 86 }}
					/>
				</View>
				<Text style={styles.title}>
					Web<Text style={styles.whiteTitle}>3</Text>
					{'\n'}Wallet
				</Text>
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
		marginBottom: height / 15,
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
		color: THEME.GOLD,
		textTransform: 'uppercase',
		fontFamily: 'gt-bold',
		textAlign: 'center',
	},
	whiteTitle: {
		color: THEME.WHITE,
	},
})
