import React from 'react'
import { View, ScrollView } from 'react-native'
import { WalletTitle } from './../Components/UI/'
import { THEME } from './../Theme'
import { TransactionsList } from './../Components/'
import { useSelector } from 'react-redux'
export const TransactionHistoryScreen = () => {
	const { transactions } = useSelector((state) => state.wallet)

	return (
		<ScrollView style={{ paddingTop: 29 }}>
			<View
				style={{
					marginHorizontal: 16,
					paddingHorizontal: 16,
					paddingBottom: 16,
					borderBottomColor: THEME.BROWN_DARK,
					borderBottomWidth: 1,
				}}>
				<WalletTitle style={{ fontSize: 16, lineHeigh: 24, textAlign: 'left' }}>
					Transaction history
				</WalletTitle>
			</View>
			<View style={{ paddingHorizontal: 16, paddingBottom: 70 }}>
				<TransactionsList data={transactions} />
			</View>
		</ScrollView>
	)
}
