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

export const ConfirmTransactionScreen = ({ navigation, route }) => {
	const onSent = () => {
		navigation.navigate('SentSuccess')
	}

	return (
		<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
			<View style={{ alignItems: 'center' }}>
				<WalletTitle fw='bold' color='white' size='l'>
					$ 0
				</WalletTitle>
				<WalletText style={{ fontSize: 12, marginTop: 12 }}>
					00050076 ETH
				</WalletText>
			</View>
			<View style={{ paddingHorizontal: 24, marginTop: 60, marginBottom: 50 }}>
				<WalletText size='m' color='disabled'>
					Send to address
				</WalletText>
				<View style={styles.addressBox}>
					<WalletText>
						{route.params !== undefined
							? route.params.addressTo.slice(0, 28) +
							  '...' +
							  route.params.addressTo.slice(-3)
							: ''}
					</WalletText>
				</View>
				<TransactionFee />
			</View>
			<View
				style={{ alignItems: 'center', marginTop: 'auto', marginBottom: 40 }}>
				<WalletText color='disabled' style={{ marginBottom: 20, fontSize: 12 }}>
					RobinHood cannot recover any lost funds.
				</WalletText>
				<WalletButton onPress={onSent}>Confirm transaction</WalletButton>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	addressBox: {
		borderColor: THEME.DISABLED_TEXT,
		borderWidth: 1,
		paddingHorizontal: 16,
		paddingVertical: 20,
		borderRadius: 6,
		marginTop: 16,
		marginBottom: 30,
	},
})
