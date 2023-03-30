import React from 'react'
import { ScrollView, View, StyleSheet, TextInput } from 'react-native'
import {
	WalletKeyboard,
	WalletText,
	WalletTitle,
	WalletButton,
} from './../Components/UI/'
import { THEME } from '../Theme'

export const BuyScreen = () => {
	const [value, setValue] = React.useState('')
	const [btnDisabled, setBtnDisabled] = React.useState(true)

	return (
		<ScrollView style={{ flexGrow: 1, paddingTop: 70 }}>
			<View style={{ justifyContent: 'center', alignItems: 'center' }}>
				<View
					style={{
						width: '100%',
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'row',
					}}>
					<WalletTitle center fw='bold' color='white' size='l'>
						{value !== '' ? '$ ' + value : '$ 0'}
					</WalletTitle>
				</View>
				<WalletText style={{ fontSize: 12, marginTop: 10 }}>0 ETH</WalletText>
			</View>
			<WalletKeyboard
				setValue={setValue}
				style={{ paddingHorizontal: 24, marginTop: 70, marginBottom: 40 }}
			/>
			<View style={{ alignItems: 'center', marginBottom: 170 }}>
				<WalletButton size='m'>Buy</WalletButton>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	text: {
		lineHeight: 46,
		fontSize: 38,
		color: THEME.WHITE,
		fontFamily: 'mt-med',
		minWidth: 100,
		textAlign: 'center',
	},
})
