import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { THEME } from '../../Theme'
import { SubscribeBlock } from '../../Components/UI'
import { WalletText } from './../../Components/UI/WalletText'
import { WalletButton } from './../../Components/UI/WalletButton'

export const SubscribeScreen = ({ navigation }) => {
	const [btnDisabled, setBtnDisabled] = useState(true)
	const [chk1, setChk1] = useState(false)
	const [chk2, setChk2] = useState(false)
	const [chk3, setChk3] = useState(false)

	useEffect(() => {
		if (chk1 && chk2 && chk3) {
			setBtnDisabled(false)
		} else {
			setBtnDisabled(true)
		}
	}, [chk1, chk2, chk3])

	return (
		<View style={styles.body}>
			<View>
				<WalletText style={{ marginBottom: 20 }} color='white' center size='m'>
					Please enter your Secret Recovery Phrase when prompted.
				</WalletText>
				<SubscribeBlock check={chk1} setCheck={setChk1}>
					I understand this is a self-custody wallet and I am responsible for my
					funds and assets. GameStop can NOT access my wallet or reverse
					transactions on my behalf.
				</SubscribeBlock>
				<SubscribeBlock check={chk2} setCheck={setChk2}>
					I have read and agree to the Terms & Conditions specified here.
				</SubscribeBlock>
				<SubscribeBlock check={chk3} setCheck={setChk3}>
					I want to help GameStop by choosing to share my analytics.
				</SubscribeBlock>
			</View>
			<View
				style={{
					paddingHorizontal: 16,
				}}>
				<WalletButton
					checked
					disabled={btnDisabled}
					onPress={() => navigation.navigate('RecoverPhrase')}>
					Recover My wallet
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
