import React from 'react'
import { View, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import { Header, PortfolioItem, Menu } from './../Components/'
import { WalletText, WalletButton, WalletTitle } from '../Components/UI'
import { SvgIcon } from './../Components/svg/svg'
import { useNavigate } from 'react-router-native'
import { useSelector, useDispatch } from 'react-redux'
import fixNum from '../../services/funcWallet/fixNum'
import { fetchAllCoins, setAllCoins } from '../store/slices/walletSlice'
import {
	setAddressCurrentAccount,
	setCurrentAccount,
} from '../store/slices/storageSlice'
import {
	rebuildObjPortfolio,
	rebuildObjPortfolioDefaultCoins,
} from '../../services/funcWallet/rebuildObj'
import { THEME } from '../Theme'
import { fetchDataWallet } from '../store/slices/walletSlice'
import { LoaderListItem } from './../Components/Loader/LoaderListItem'
import { LoaderPrice } from '../Components/Loader/LoaderPrice'

let idTimeout = null
export const Wallet = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { dataWallet, coins, walletAddress, walletNew } = useSelector(
		(state) => state.wallet
	)
	const { currentNetwork, currentAccount, dataUser, chooseAssets } =
		useSelector((state) => state.storage)
	const [balance, setBalance] = React.useState(null)
	const [balanceChange, setBalanceChange] = React.useState(null)
	const [balanceCoins, setBalanceCoins] = React.useState([])
	const [showFilterBody, setShowFilterBody] = React.useState(false)
	const [portfolioListSorted, setPortfolioListSorted] = React.useState([])
	const [filterName, setFilterName] = React.useState('Volume')

	React.useEffect(() => {
		if (dataWallet === null && dataUser !== null) {
			let account = dataUser.find((item) => item.name === currentAccount)
			dispatch(
				fetchDataWallet([
					account.phrase !== '' ? account.phrase : account.privateKey,
					walletNew,
				])
			)
		}
	}, [dataUser, dataWallet])

	React.useEffect(() => {
		if (coins === null) {
			dispatch(fetchAllCoins())
		}
	}, [coins])

	React.useEffect(() => {
		if (currentAccount !== '' && walletAddress !== '') {
			let account = dataUser.find((item) => item.name === currentAccount)
			if (account.address === '') {
				dispatch(
					setAddressCurrentAccount({
						name: currentAccount,
						address: walletAddress,
					})
				)
			}
		}
	}, [currentAccount, walletAddress])

	React.useEffect(() => {
		if (balanceCoins.length) {
			filterData('volume', balanceCoins)
		}
	}, [balanceCoins])

	const filterData = (type, list = balanceCoins) => {
		setPortfolioListSorted([])
		idTimeout = setTimeout(() => {
			let sortedArr = []
			if (type == 'name') {
				sortedArr = list.sort(function (a, b) {
					if (a.name.toUpperCase() > b.name.toUpperCase()) {
						return 1
					}
					if (a.name.toUpperCase() < b.name.toUpperCase()) {
						return -1
					}
					return 0
				})
			} else if (type == 'volume') {
				sortedArr = list.sort(function (a, b) {
					if (a.market_data.balance_crypto > b.market_data.balance_crypto) {
						return -1
					}
					if (a.market_data.balance_crypto < b.market_data.balance_crypto) {
						return 1
					}
					return 0
				})
			} else if (type == 'change') {
				sortedArr = list.sort(function (a, b) {
					if (a.changes.percent > b.changes.percent) {
						return -1
					}
					if (a.changes.percent < b.changes.percent) {
						return 1
					}
					return 0
				})
			} else {
				sortedArr = list
			}
			setPortfolioListSorted(sortedArr)
			clearTimeout(idTimeout)
		}, 100)
	}

	React.useEffect(() => {
		if (
			coins !== null &&
			dataWallet !== null &&
			dataWallet.positions.length &&
			coins.length
		) {
			const dataWalletCoins = rebuildObjPortfolio(dataWallet.positions)
			const filteredNetworks = dataWalletCoins.filter(
				(item) =>
					item.market_data.chain.toLowerCase() == currentNetwork.toLowerCase()
			)
			const dataWalletSymbols = dataWalletCoins.map((item) =>
				item.symbol.toLowerCase()
			)

			const otherCoins = rebuildObjPortfolioDefaultCoins(coins)
			const filteredOther = otherCoins.filter(
				(item) => dataWalletSymbols.includes(item.symbol.toLowerCase()) == false
			)

			dispatch(setAllCoins([...filteredNetworks, ...filteredOther]))

			const coinsSymbols = filteredNetworks.map((item) =>
				item.symbol.toLowerCase()
			)
			const chooseCoins = otherCoins.filter(
				(item) =>
					chooseAssets.includes(item.symbol.toLowerCase()) &&
					!coinsSymbols.includes(item.symbol.toLowerCase())
			)
			setBalanceCoins([...filteredNetworks, ...chooseCoins])
		} else if (dataWallet !== null && coins !== null) {
			const otherCoins = rebuildObjPortfolioDefaultCoins(coins)
			const chooseCoins = otherCoins.filter((item) =>
				chooseAssets.includes(item.symbol.toLowerCase())
			)
			setBalanceCoins(chooseCoins)
			dispatch(setAllCoins(otherCoins))
		}
	}, [coins, dataWallet, currentNetwork, chooseAssets])

	React.useEffect(() => {
		if (dataWallet !== null && dataWallet.positions.length) {
			setBalance(
				dataWallet.portfolio.attributes.positions_distribution_by_chain[
					currentNetwork.toLowerCase()
				]
			)
			setBalanceChange({
				perc: dataWallet.portfolio.attributes.changes.percent_1d,
				usd: dataWallet.portfolio.attributes.changes.absolute_1d,
			})
		} else {
			setBalance(0)
		}
	}, [dataWallet, currentNetwork])

	const onFilter = (value) => {
		setFilterName(value)
		filterData(value, balanceCoins)
		setShowFilterBody(false)
	}

	return (
		<View
			style={{
				flex: 1,
			}}>
			<ScrollView
				contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 24 }}>
				<Header page='home' title='Your Balance' />
				<View style={styles.pricesBlock}>
					{portfolioListSorted.length > 0 ? (
						<>
							<WalletTitle color='white' fw='bold' style={{ marginBottom: 8 }}>
								${balance !== null ? fixNum(balance) : '0.00'}
							</WalletTitle>
							<View style={{ flexDirection: 'row' }}>
								{balanceChange !== null ? (
									<WalletText>
										{balanceChange.usd > 0 ? '+ ' : ''}${' '}
										{fixNum(balanceChange.usd) +
											' (' +
											fixNum(balanceChange.perc)}
										{'%)'}
									</WalletText>
								) : (
									<WalletText>0.00</WalletText>
								)}
								<WalletText style={{ marginLeft: 10 }}>last 24h</WalletText>
							</View>
						</>
					) : (
						<LoaderPrice />
					)}
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
						activeOpacity={0.7}
						onPress={() => navigate('/manage-assets')}
						style={{ flexDirection: 'row', alignItems: 'center' }}>
						<SvgIcon style={{ marginRight: 5 }} type='plus' />
						<WalletText>Manage assets</WalletText>
					</TouchableOpacity>
					<TouchableOpacity
						activeOpacity={0.7}
						onPress={() => setShowFilterBody(!showFilterBody)}
						style={{ flexDirection: 'row', alignItems: 'center' }}>
						<SvgIcon style={{ marginRight: 5 }} type='filter' />
						<WalletText>
							Portfolio {filterName[0].toUpperCase() + filterName.slice(1)}
						</WalletText>
						<SvgIcon style={{ marginLeft: 5 }} type='angle-down' />
					</TouchableOpacity>
					{showFilterBody ? (
						<View style={styles.filterBody}>
							<TouchableOpacity
								style={styles.item}
								activeOpacity={0.7}
								onPress={() => onFilter('name')}>
								<WalletText center>Name</WalletText>
							</TouchableOpacity>
							<TouchableOpacity
								style={styles.item}
								activeOpacity={0.7}
								onPress={() => onFilter('volume')}>
								<WalletText center>24H Volume</WalletText>
							</TouchableOpacity>
							<TouchableOpacity
								style={[styles.item, { borderBottomWidth: 0 }]}
								activeOpacity={0.7}
								onPress={() => onFilter('change')}>
								<WalletText center>24H Change</WalletText>
							</TouchableOpacity>
						</View>
					) : (
						<></>
					)}
				</View>
				<View style={{ marginTop: 20, marginBottom: 50 }}>
					{portfolioListSorted.length ? (
						portfolioListSorted.map((item, i) => (
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
						<View>
							<LoaderListItem />
							<LoaderListItem />
							<LoaderListItem />
							<LoaderListItem />
						</View>
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
	filterBody: {
		position: 'absolute',
		right: 0,
		top: 40,
		zIndex: 1,
		backgroundColor: THEME.GREEN_LIGHT,
		borderWidth: 1,
		borderColor: THEME.WHITE,
		borderRadius: 16,
		paddingHorizontal: 10,
		paddingVertical: 8,
		width: 135,
	},
	item: {
		justifyContent: 'center',
		paddingVertical: 10,
		borderBottomColor: THEME.WHITE,
		borderBottomWidth: 1,
	},
})
