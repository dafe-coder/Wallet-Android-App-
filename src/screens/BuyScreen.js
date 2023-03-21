import React from 'react'
import { ScrollView, View, StyleSheet, TextInput } from 'react-native'
import { WalletKeyboard, WalletText, WalletButton } from './../Components/UI/'
import { THEME } from '../Theme'

export const BuyScreen = () => {
	const [value, setValue] = React.useState('')
	const [btnDisabled, setBtnDisabled] = React.useState(true)

	return (
		<ScrollView style={{ flex: 1, paddingTop: 130 }}>
			<View style={{ justifyContent: 'center', alignItems: 'center' }}>
				<View
					style={{
						width: '100%',
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'row',
					}}>
					<TextInput
						style={styles.text}
						placeholderTextColor={THEME.WHITE}
						placeholder='$ 0'
						value={value.length ? '$ ' + value : ''}
					/>
				</View>
				<WalletText style={{ fontSize: 12, marginTop: 10 }}>0 ETH</WalletText>
			</View>
			<WalletKeyboard
				setValue={setValue}
				style={{ paddingHorizontal: 24, marginTop: 70, marginBottom: 40 }}
			/>
			<View style={{ alignItems: 'center' }}>
				<WalletButton>Buy</WalletButton>
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
