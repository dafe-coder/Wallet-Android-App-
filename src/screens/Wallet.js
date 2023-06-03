import React from 'react'
import { View, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import { Header, PortfolioItem, Menu } from './../Components/'
import { WalletText, WalletButton, WalletTitle } from '../Components/UI'
import { SvgIcon } from './../Components/svg/svg'
import { useNavigate } from 'react-router-native'
import { useSelector, useDispatch } from 'react-redux'
import fixNum from '../../services/funcWallet/fixNum'
import { setAllCoins } from '../store/slices/walletSlice'
import {
	rebuildObjPortfolio,
	rebuildObjPortfolioDefaultCoins,
} from '../../services/funcWallet/rebuildObj'

export const Wallet = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { allCoins, dataWallet, coins } = useSelector((state) => state.wallet)
	const [balance, setBalance] = React.useState(null)
	const [balanceChange, setBalanceChange] = React.useState(null)
	const [balanceCoins, setBalanceCoins] = React.useState([])
	React.useEffect(() => {
		if (coins !== null && dataWallet !== null) {
			dispatch(
				setAllCoins([
					...rebuildObjPortfolio(dataWallet.positions),
					...rebuildObjPortfolioDefaultCoins(coins),
				])
			)
		}
		if (dataWallet !== null) {
			setBalanceCoins(rebuildObjPortfolio(dataWallet.positions))
		}
	}, [coins, dataWallet])

	React.useEffect(() => {
		setBalance(
			dataWallet.portfolio.attributes.positions_distribution_by_type.wallet
		)
		setBalanceChange({
			perc: dataWallet.portfolio.attributes.changes.percent_1d,
			usd: dataWallet.portfolio.attributes.changes.absolute_1d,
		})
	}, [dataWallet])

	return (
		<View
			style={{
				flex: 1,
			}}>
			<ScrollView
				contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 24 }}>
				<Header page='home' title='Your Balance' />
				<View style={styles.pricesBlock}>
					<WalletTitle color='white' fw='bold' style={{ marginBottom: 8 }}>
						${balance !== null ? fixNum(balance) : '0.00'}
					</WalletTitle>
					<View style={{ flexDirection: 'row' }}>
						{balanceChange !== null ? (
							<WalletText>
								{balanceChange.usd > 0 ? '+ ' : ''}${' '}
								{fixNum(balanceChange.usd) + ' (' + fixNum(balanceChange.perc)}
								{'%)'}
							</WalletText>
						) : (
							<WalletText>0.00</WalletText>
						)}
						<WalletText style={{ marginLeft: 10 }}>last 24h</WalletText>
					</View>
				</View>
				<View style={styles.btns}>
					<WalletButton
						to='/receive'
						type='green'
						style={{ marginRight: '6%', width: '47%' }}>
						Receive Crypto
					</WalletButton>
					<WalletButton to='/send' type='green' style={{ width: '47%' }}>
						Send Crypto
					</WalletButton>
				</View>
				<View style={styles.nav}>
					<TouchableOpacity
						onPress={() => navigate('/manage-assets')}
						style={{ flexDirection: 'row', alignItems: 'center' }}>
						<SvgIcon style={{ marginRight: 5 }} type='plus' />
						<WalletText>Manage assets</WalletText>
					</TouchableOpacity>
					<TouchableOpacity
						style={{ flexDirection: 'row', alignItems: 'center' }}>
						<SvgIcon style={{ marginRight: 5 }} type='filter' />
						<WalletText>Portfolio Value</WalletText>
						<SvgIcon style={{ marginLeft: 5 }} type='angle-down' />
					</TouchableOpacity>
				</View>
				<View style={{ marginTop: 20, marginBottom: 50 }}>
					{balanceCoins !== null ? (
						balanceCoins.map((item, i) => (
							<PortfolioItem
								item={item}
								key={i}
								title={item.name}
								price={item.market_data.current_price}
								count={item.market_data.balance}
								percent={item.changes.percent}
								img={item.image.thumb}
							/>
						))
					) : (
						<></>
					)}
				</View>
			</ScrollView>
			<Menu />
		</View>
	)
}

const styles = StyleSheet.create({
	btns: {
		flexDirection: 'row',
	},
	pricesBlock: {
		alignItems: 'center',
		marginBottom: 50,
	},
	nav: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginTop: 30,
	},
})
