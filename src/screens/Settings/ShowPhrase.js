import React from 'react'
import { View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { Header, Alert } from './../../Components/'
import { WalletText, WalletInput } from '../../Components/UI'
import { WalletButton } from './../../Components/UI/WalletButton'
import { THEME } from '../../Theme'
import { SvgIcon } from './../../Components/svg/svg'

export const ShowPhrase = () => {
	return (
		<ScrollView
			keyboardShouldPersistTaps={'handled'}
			contentContainerStyle={{
				flex: 1,
				paddingHorizontal: 24,
				paddingBottom: 25,
			}}>
			<Header title='Seed Phrase' />
			<View style={{ flex: 1, marginBottom: 40 }}>
				<WalletText style={{ marginBottom: 30 }}>
					If you ever change browsers or move computers, you will need this seed
					phrase to access your accounts. Save them somewhere safe and secret.
				</WalletText>
				<Alert title='Keep Mnemonic Phrase Safe!'>
					Do not share this phrase with anyone! These words can be used to steal
					all of your accounts.
				</Alert>
				<WalletInput style={{ marginTop: 30 }} placeholder='password' />
				<View>
					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'space-between',
						}}>
						<WalletText style={{ marginBottom: 10 }}>
							Your seed phrase
						</WalletText>
						<TouchableOpacity activeOpacity={0.7}>
							<SvgIcon type='copy' />
						</TouchableOpacity>
					</View>
					<View style={styles.wrapPhrase}>
						<WalletText size='m' fw='bold'>
							scan actual quantum slow miracle raise cash twelve nominee ship
							oppose media
						</WalletText>
					</View>
				</View>
			</View>
			<WalletButton style={{ marginTop: 'auto', marginBottom: 10 }}>
				Next
			</WalletButton>
			<WalletButton type='border'>Cancel</WalletButton>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	wrapPhrase: {
		backgroundColor: THEME.GREEN_BG,
		borderColor: THEME.SUCCESS,
		borderWidth: 1,
		borderRadius: 16,
		paddingHorizontal: 20,
		paddingVertical: 16,
	},
})
