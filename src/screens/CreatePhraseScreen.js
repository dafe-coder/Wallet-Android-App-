import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { WalletText } from '../Components/UI'
import { WalletButton } from './../Components/UI/WalletButton'
import { PhraseBoxCreate } from './../Components'
export const CreatePhraseScreen = () => {
	return (
		<View style={styles.wrap}>
			<View style={{ paddingHorizontal: 35, marginBottom: 18 }}>
				<WalletText
					style={{ marginBottom: 32, fontFamily: 'gt-bold' }}
					size='m'
					upperCase
					color='white'
					center>
					Your Secret Recovery Phrase
				</WalletText>
				<WalletText size='m' style={{ marginBottom: 10 }} center color='white'>
					Read Carefilly
				</WalletText>
				<WalletText center>
					This is your Recovery Phrase. Write it down on a paper and keep it in
					a safe place. You’ll be asked to re-enter this phrase on the next
					step.
				</WalletText>
			</View>
			<View style={{ paddingHorizontal: 16 }}>
				<PhraseBoxCreate />
			</View>
			<View style={{ paddingHorizontal: 16, marginTop: 'auto' }}>
				<WalletButton>I saved my Secret Recovery Phrase</WalletButton>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	wrap: {
		flex: 1,
		paddingBottom: 40,
	},
})
