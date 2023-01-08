import React, { useState, useEffect } from 'react'
import {
	View,
	ImageBackground,
	StyleSheet,
	Image,
	ScrollView,
} from 'react-native'
import { WalletTitle, WalletText } from './../Components/UI/'
import { WalletNav, TransactionsList } from '../Components/'
import { THEME } from '../Theme'
import { useSelector } from 'react-redux'
import fixNum from './../../services/funcWallet/fixNum'
import { SvgIcon } from './../Components/svg/svg'

export const PortfolioOpenScreen = () => {
	const { transactions, portfolioOpen } = useSelector((state) => state.wallet)
	const [transactionList, setTransactionList] = useState([])

	useEffect(() => {
		let filtered = transactions.filter((item) => item.status !== 'failed')
		let filteredToken = filtered.filter(
			(item) =>
				item.changes[0].asset.symbol.toLowerCase() ==
				portfolioOpen.symbol.toLowerCase()
		)
		let filteredTokenSwap = filtered.filter((item) =>
			item.changes[1]
				? item.changes[1].asset.symbol.toLowerCase() ==
				  portfolioOpen.symbol.toLowerCase()
				: false
		)
		let arrFinal = [...filteredToken, ...filteredTokenSwap]

		let arrSorted = arrFinal.sort(function (a, b) {
			if (a.mined_at > b.mined_at) {
				return -1
			}
			if (a.mined_at < b.mined_at) {
				return 1
			}
			return 0
		})

		setTransactionList(arrSorted)
	}, [portfolioOpen, transactions])

	return (
		<ScrollView
			style={{
				paddingHorizontal: 16,
				marginTop: 29,
			}}>
			<View style={styles.card}>
				<ImageBackground
					resizeMode='cover'
					style={styles.bgImage}
					source={require('../../assets/card.png')}>
					<WalletTitle style={{ fontSize: 30, lineHeight: 40, marginTop: 40 }}>
						{fixNum(portfolioOpen.market_data.balance)}{' '}
						{portfolioOpen.symbol.toUpperCase()}
					</WalletTitle>
					<View style={styles.priceBlock}>
						<WalletText>
							~ ${fixNum(portfolioOpen.market_data.balance_crypto.usd)}
						</WalletText>
					</View>
				</ImageBackground>
			</View>
			<View style={{ marginTop: 30 }}>
				<WalletNav />
			</View>
			<View style={{ marginBottom: 40 }}>
				{transactionList.length < 1 ? (
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'center',
							alignItems: 'center',
							marginTop: 24,
						}}>
						<SvgIcon type='bar' />
						<WalletText style={{ marginLeft: 7 }} color='brown'>
							No transactoins history yet
						</WalletText>
					</View>
				) : (
					<TransactionsList data={transactionList} />
				)}
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	card: {
		height: 180,
		width: '100%',
	},
	bgImage: {
		width: '100%',
		height: '100%',
		borderRadius: 15,
		overflow: 'hidden',
		alignItems: 'center',
	},
	priceBlock: {
		flexDirection: 'row',
		alignItems: 'center',
		borderRadius: 50,
		backgroundColor: THEME.BROWN_DARK,
		paddingHorizontal: 15,
		paddingVertical: 7,
		marginTop: 25,
	},
})
