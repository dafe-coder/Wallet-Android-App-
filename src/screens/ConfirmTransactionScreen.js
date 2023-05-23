import React, { useRef, useEffect, useState } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { WalletText, WalletButton, WalletTitle } from '../Components/UI'
import { THEME } from '../Theme'
import { TransactionInfo } from './../Components'
import { WalletBottomSheet } from './../Components'
import { Success, Gas } from './../Components/modal'
import transactionsSend from '../../services/funcWallet/transaction'
import { useSelector } from 'react-redux'
import fixNum from './../../services/funcWallet/fixNum'
import { TransactionFee } from './../Components/'

export const ConfirmTransactionScreen = ({ navigation }) => {
	const onSent = () => {
		navigation.navigate('SentSuccess')
	}

	return (
		<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
			<View style={{ alignItems: 'center' }}>
				<WalletTitle fw='bold' color='white' size='l'>
					$ 0
				</WalletTitle>
				<WalletText color='white-dark' style={{ marginTop: 12 }}>
					00050076 ETH
				</WalletText>
			</View>
			<View style={{ paddingHorizontal: 24, marginTop: 60, marginBottom: 50 }}>
				<WalletText fw='bold' color='white-dark'>
					Send to address
				</WalletText>
				<View style={styles.addressBox}>
					<WalletText>0xDACa159F870Ba0DAba7cEc9d988...f6B4</WalletText>
				</View>
				<TransactionFee />
			</View>
			<View
				style={{ paddingHorizontal: 20, marginTop: 'auto', marginBottom: 40 }}>
				<WalletText center color='disabled' style={{ marginBottom: 20 }}>
					Ordinals Wallet cannot recover any lost funds.
				</WalletText>
				<WalletButton onPress={onSent}>Confirm transaction</WalletButton>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	addressBox: {
		borderColor: THEME.GREY,
		borderWidth: 1,
		paddingHorizontal: 16,
		paddingVertical: 16,
		borderRadius: 16,
		marginTop: 16,
		marginBottom: 30,
	},
})
