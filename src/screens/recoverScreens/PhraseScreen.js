import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { THEME } from '../../Theme'
import { SubscribeBlock } from '../../Components/UI'
import { WalletText } from '../../Components/UI/WalletText'
import { WalletButton } from '../../Components/UI/WalletButton'
import { PhraseBox } from './../../Components/PhraseBox'

export const PhraseScreen = ({ navigation }) => {
	const [btnDisabled, setBtnDisabled] = useState(true)

	return (
		<View style={styles.body}>
			<View>
				<WalletText style={{ marginBottom: 40 }} color='white' center size='m'>
					Recover a wallet using your Secret {'\n'} Recovery Phrase.
				</WalletText>
				<PhraseBox />
			</View>
			<View
				style={{
					paddingHorizontal: 16,
				}}>
				<WalletButton
					checked
					disabled={btnDisabled}
					onPress={() => navigation.navigate('Login')}>
					Import Wallet
				</WalletButton>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	logoWrap: {
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 100,
	},
	body: {
		backgroundColor: THEME.PRIMARY,
		flex: 1,
		paddingTop: 40,
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
})
