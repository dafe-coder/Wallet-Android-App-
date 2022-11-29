import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { THEME } from './../Theme'
import { WalletButton, WalletText } from '../Components/UI'
import { Rules } from './../Components'

export const LoginScreen = () => {
	return (
		<View style={styles.body}>
			<View>
				<Text>
					Byb<Text>i</Text>t
				</Text>
				<WalletText
					color='white'
					size='m'
					upperCase
					center
					style={styles.title}>
					VO.6.9 Release Notes
				</WalletText>
				<WalletText color='gold' center upperCase>
					ImmutableX Layer 2 Support
				</WalletText>
				<WalletText size='m' style={{ marginTop: 40 }}>
					Select ImmutableX Layer 2 to active, view balances, transfer tokens
					and NFTs. and more.
				</WalletText>
				<WalletButton style={{ marginBottom: 10 }}>
					Create new wallet
				</WalletButton>
				<WalletButton type='border'>Recover Wallet</WalletButton>
				<Rules style={{ marginTop: 10 }} />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	body: {
		backgroundColor: THEME.PRIMARY,
		flex: 1,
		paddingHorizontal: 16,
	},
	title: {
		marginBottom: 20,
	},
})
