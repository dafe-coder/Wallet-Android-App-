import React from 'react'
import {
	View,
	Image,
	TouchableOpacity,
	StyleSheet,
	ScrollView,
} from 'react-native'
import { Header, TransactionItem } from './../Components/'
import { WalletText, WalletTitle } from '../Components/UI'
import { useLocation } from 'react-router'
import fixNum from '../../services/funcWallet/fixNum'
import { THEME } from '../Theme'
import { SvgIconNav } from './../Components/svg/svgNav'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-native'

export const PortfolioOpen = () => {
	const navigate = useNavigate()
	const { state } = useLocation()
	const { dataWallet } = useSelector((state) => state.wallet)
	const [transactionList, setTransactionList] = React.useState([])

	React.useEffect(() => {
		if (dataWallet !== null && dataWallet.transactions.length) {
			let filtered = dataWallet.transactions.filter(
				(item) => item.attributes.status !== 'failed'
			)
			let filteredToken = filtered.filter(
				(item) =>
					item.attributes.transfers[0] &&
					item.attributes.transfers[0].direction !== 'in' &&
					item.attributes.transfers[0].fungible_info.symbol.toLowerCase() ==
						state.symbol.toLowerCase()
			)
			let filteredTokenSwap = filtered.filter(
				(item) =>
					item.attributes.transfers[1] &&
					item.attributes.transfers[1].fungible_info.symbol.toLowerCase() ==
						state.symbol.toLowerCase()
			)
			let arrFinal = [...filteredToken, ...filteredTokenSwap]

			let arrSorted = arrFinal.sort(function (a, b) {
				if (a.attributes.mined_at > b.attributes.mined_at) {
					return -1
				}
				if (a.attributes.mined_at < b.attributes.mined_at) {
					return 1
				}
				return 0
			})

			setTransactionList(arrSorted)
		}
	}, [state, dataWallet])

	return (
		<ScrollView style={{ flex: 1, paddingHorizontal: 24 }}>
			<Header title='Transactions' />
			<View
				style={{
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<Image
						style={{ width: 70, height: 70, marginRight: 20 }}
						resizeMode='cover'
						source={{ uri: state.image.thumb }}
					/>
					<View>
						<WalletTitle
							size='s'
							fw='bold'
							style={{ textTransform: 'uppercase' }}
							color='white'>
							{state.name}
						</WalletTitle>
						<WalletText>{state.symbol}</WalletText>
					</View>
				</View>
				<WalletText>~{fixNum(state.market_data.balance)}</WalletText>
			</View>
			<View style={styles.btns}>
				<TouchableOpacity
					style={styles.btn}
					onPress={() => navigate('/send', { state: state })}>
					<SvgIconNav type='arrow' style={{ marginRight: 10 }} />
					<WalletText fw='bold' color='black'>
						Send
					</WalletText>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.btn}
					onPress={() => navigate('/receive', { state: { item: state } })}>
					<SvgIconNav
						type='arrow'
						style={{ marginRight: 10, transform: [{ rotate: '180deg' }] }}
					/>
					<WalletText fw='bold' color='black'>
						Receive
					</WalletText>
				</TouchableOpacity>
				<TouchableOpacity
					style={[styles.btn, { marginRight: 0 }]}
					onPress={() =>
						navigate('/swap', { state: { item: state, from: 'SwapFirst' } })
					}>
					<SvgIconNav type='swap-horizontal' style={{ marginRight: 10 }} />
					<WalletText fw='bold' color='black'>
						Swap
					</WalletText>
				</TouchableOpacity>
			</View>
			<View style={{ marginBottom: 40 }}>
				{transactionList.length > 0 ? (
					transactionList.map((item, i) => (
						<TransactionItem key={i} data={item} />
					))
				) : (
					<WalletText
						size='m'
						fw='bold'
						style={{ marginTop: 150 }}
						upperCase
						center>
						No transactions
					</WalletText>
				)}
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	btns: { flexDirection: 'row', marginTop: 30, marginBottom: 32 },
	btn: {
		borderColor: '#1F2226',
		borderWidth: 1,
		backgroundColor: THEME.SUCCESS,
		paddingVertical: 8,
		width: '30.7%',
		justifyContent: 'center',
		flexDirection: 'row',
		alignItems: 'center',
		borderRadius: 12,
		marginRight: '3.8%',
	},
})
