import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'

import { SvgIcon } from '../Components/svg/svg'
import { WalletText, WalletTitle, WalletButton } from '../Components/UI'
export const RiskAlertLogoutScreen = ({ navigation }) => {
	return (
		<ScrollView contentContainerStyle={styles.body}>
			<View style={styles.top}>
				<SvgIcon type='logo' />
				<WalletTitle
					style={{
						fontSize: 16,
						fontFamily: 'mt-med',
						marginBottom: 24,
						marginTop: 44,
					}}>
					RISK alert
				</WalletTitle>
				<WalletText size='m' center style={{ marginBottom: 10 }}>
					All your existing wallets will be removed and replaced with the new
					one.
				</WalletText>
				<WalletText center style={{ paddingHorizontal: '4%' }}>
					Please make sure you havee backed up yoyr mnemonic phrases or private
					keys, otherwise you will not be able to recover the assets in your
					wallets.
				</WalletText>
			</View>
			<View
				style={{
					paddingHorizontal: 16,
					marginTop: 50,
					marginBottom: 60,
				}}>
				<WalletButton
					onPress={() => navigation.navigate('ConfirmPassword')}
					style={{ marginBottom: 10 }}>
					confirm
				</WalletButton>
				<WalletButton onPress={() => navigation.goBack()} type='border'>
					cancel
				</WalletButton>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	body: {
		paddingTop: 29,
		justifyContent: 'space-between',
		flex: 1,
	},
	top: {
		alignItems: 'center',
		paddingHorizontal: 16,
	},
})
