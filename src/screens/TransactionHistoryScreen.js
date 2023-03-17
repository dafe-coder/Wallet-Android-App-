import React, { useEffect, useState } from 'react'
import { View, ScrollView, Image } from 'react-native'
import { WalletText } from './../Components/UI/'
import { TransactionsList } from './../Components/'
import { useSelector } from 'react-redux'
import useIsReady from '../../hooks/useIsReady'
import { BusyIndicator } from '../Components/Loader'

const arrList = Array.from(new Array(6).keys())
export const TransactionHistoryScreen = ({ navigation }) => {
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
		<>
			<ScrollView style={{ paddingTop: 29 }}>
				<View style={{ paddingHorizontal: 24, paddingBottom: 70 }}>
					{transactionList.length < 1 ? (
						<View
							style={{
								position: 'relative',
								marginTop: 24,
								height: 450,
							}}>
							{arrList.map((_, i) => (
								<View
									key={i}
									style={{
										width: '100%',
										height: 60,
										marginBottom: 17,
									}}>
									<Image
										resizeMode='contain'
										style={{
											width: '100%',
											height: 64,
										}}
										source={require('../../assets/transaction-load.png')}
									/>
								</View>
							))}
							<View
								style={{
									position: 'absolute',
									top: 0,
									right: 0,
									left: 0,
									bottom: 0,
									justifyContent: 'center',
									alignItems: 'center',
								}}>
								<WalletText size='m' center color='white'>
									Your activity will {'\n'}appear here!
								</WalletText>
							</View>
						</View>
					) : (
						<TransactionsList style={{ marginBottom: 0 }} data={transactions} />
					)}
				</View>
			</ScrollView>
		</>
	)
}
