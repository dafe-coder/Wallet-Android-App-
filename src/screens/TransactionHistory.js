import React from 'react'
import { View, FlatList, Image } from 'react-native'
import { Header, TransactionItem } from './../Components/'
import { useSelector } from 'react-redux'
import { WalletButton, WalletText } from './../Components/UI/'

export const TransactionHistory = () => {
	const { dataWallet } = useSelector((state) => state.wallet)
	const [transactionList, setTransactionList] = React.useState([])
	React.useEffect(() => {
		let filtered = dataWallet.transactions.filter(
			(item) => item.attributes.status !== 'failed'
		)

		setTransactionList(filtered)
	}, [dataWallet])

	const renderItem = ({ item }) => {
		return <TransactionItem data={item} />
	}
	const renderFooter = () => {
		if (transactionList.length) {
			return (
				<View style={{ paddingVertical: 20, marginBottom: 30 }}>
					<WalletButton
						onPress={() => setTransactionList([])}
						iconFill='#fff'
						icon='trash'
						iconPos='right'
						type='border'
						iconStyle={{ top: -3 }}>
						Delete All
					</WalletButton>
				</View>
			)
		}
	}

	return (
		<View style={{ flex: 1 }}>
			<View style={{ paddingHorizontal: 24 }}>
				<Header title='Transactions History' />
			</View>
			{transactionList.length ? (
				<FlatList
					data={transactionList}
					keyExtractor={(item) => item.attributes.hash}
					renderItem={renderItem}
					style={{ paddingHorizontal: 24 }}
					ListFooterComponent={renderFooter}
				/>
			) : (
				<View
					style={{
						width: 270,
						position: 'absolute',
						top: '50%',
						marginTop: -100,
						left: '50%',
						marginLeft: -270 / 2,
					}}>
					<Image
						style={{ width: '100%', marginBottom: 10 }}
						resizeMode='contain'
						source={require('../../assets/no-history.png')}
					/>
					<WalletText size='xl' center fw='bold'>
						Don’t have history
					</WalletText>
				</View>
			)}
		</View>
	)
}
