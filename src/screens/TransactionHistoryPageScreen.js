import React, { useEffect, useState } from 'react'
import { View, ScrollView, Button } from 'react-native'
import { WalletTitle, WalletText } from '../Components/UI'
import { THEME } from '../Theme'
import { TransactionsList } from '../Components'
import { useSelector } from 'react-redux'
import { SvgIcon } from '../Components/svg/svg'
import useIsReady from '../../hooks/useIsReady'
import { BusyIndicator } from '../Components/Loader'
export const TransactionHistoryPageScreen = () => {
	const { transactions } = useSelector((state) => state.wallet)
	const [transactionList, setTransactionList] = useState([])
	const isReady = useIsReady()
	useEffect(() => {
		if (transactions.length) {
			let filtered = transactions.filter((item) => item.status !== 'failed')
			setTransactionList(filtered)
		}
	}, [transactions])
	if (!isReady) {
		return <BusyIndicator></BusyIndicator>
	}
	return (
		<ScrollView
			style={{
				paddingTop: 29,
				borderTopColor: '#2f2d2b',
				borderTopWidth: 0.6,
			}}>
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
				{transactionList.length < 1 ? (
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'center',
							alignItems: 'center',
							marginTop: 24,
							height: 450,
						}}>
						<SvgIcon type='bar' />
						<WalletText style={{ marginLeft: 7 }} color='brown'>
							No transactoins history yet
						</WalletText>
					</View>
				) : (
					<TransactionsList data={transactions} />
				)}
			</View>
		</ScrollView>
	)
}
