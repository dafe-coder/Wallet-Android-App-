import React from 'react'
import { Image, View, Text, Linking, StyleSheet } from 'react-native'
import { WalletText, WalletInput, WalletButton } from './../Components/UI'
import Hyperlink from 'react-native-hyperlink'
import { THEME } from '../Theme'
import { useNavigate } from 'react-router-native'
import { useSelector } from 'react-redux'

export const WelcomeBack = () => {
	const { password } = useSelector((state) => state.storage)
	const [passwordValue, setPasswordValue] = React.useState('')
	const navigate = useNavigate()
	const goPage = (url) => {
		navigate('/risk-alert')
	}

	const goWallet = () => {
		if (password === passwordValue) {
			navigate('/wallet')
		} else {
			setPasswordValue('')
		}
	}

	return (
		<View style={{ flex: 1, marginBottom: 25 }}>
			<View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
				<Image
					resizeMode='contain'
					style={{ width: 200 }}
					source={require('../../assets/logo/logo.png')}
				/>
			</View>
			<View style={{ paddingHorizontal: 24, marginBottom: 30 }}>
				<WalletText size='m' center fw='bold' style={{ marginBottom: 30 }}>
					Welcome back
				</WalletText>
				<WalletInput
					setValue={setPasswordValue}
					value={passwordValue}
					placeholder='Password'
					password
				/>
				<WalletButton onPress={goWallet} style={{ marginTop: 15 }}>
					Unlock
				</WalletButton>
			</View>
			<View style={{ alignItems: 'center', marginTop: 'auto' }}>
				<WalletText style={{ marginBottom: 10 }}>Unable to Log in?</WalletText>
				<Hyperlink
					onPress={(url, text) => goPage(url)}
					linkStyle={styles.link}
					linkText={(url, text) =>
						url === 'https://import'
							? 'Import'
							: url === 'https://create'
							? 'create a new wallet'
							: url
					}>
					<Text style={styles.text}>https://import or https://create.</Text>
				</Hyperlink>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	link: {
		textDecorationLine: 'underline',
		color: THEME.WHITE,
		fontSize: 14,
		lineHeight: 18,
		fontFamily: 'mt-reg',
	},
	text: {
		color: THEME.WHITE,
		fontSize: 14,
		lineHeight: 20,
		fontFamily: 'mt-reg',
		textAlign: 'center',
	},
})
