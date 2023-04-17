import React, { useEffect, useState } from 'react'
import Spinner from 'react-native-loading-spinner-overlay'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from './src/store'
import useWalletService, {
	rebuildObjPortfolioDefaultCoins,
	rebuildObjPortfolio,
} from './services/WalletService'
import { useDispatch, useSelector } from 'react-redux'
import {
	setAllCoins,
	setPortfolioTransactions,
	setPortfolioBalance,
	setNewWallet,
	setLoaderSkeleton,
	setAddressWallet,
	setAllCoinsSwap,
	setPortfolioCoins,
} from './src/store/actions/walletActions'
import { Image } from 'react-native'
import { THEME } from './src/Theme'
import { setInitChooseAssets } from './src/store/actions/storageAction'
import coins from './src/coins.json'

export const AppWrap = ({ children }) => {
	const dispatch = useDispatch()
	const [loadingOtherCoins, setLoadingOtherCoins] = useState(true)
	const [loadingBalanceCoins, setLoadingBalanceCoins] = useState(true)
	const [otherCoins, setOtherCoins] = useState([])
	const [portfolioAssets, setPortfolioAssets] = useState([])
	const { getAllTokens, postData } = useWalletService()
	const { newWallet, loader, portfolioBalance, updateWallet, allCoins } =
		useSelector((state) => state.wallet)
	const { dataUser, currentAccount, currentNetwork, chooseAssets } =
		useSelector((state) => state.storage)

	useEffect(() => {
		getAllTokens(setLoadingOtherCoins)
			.then((data) => {
				const dataCoins = rebuildObjPortfolioDefaultCoins(data)
				const withAddress = dataCoins.map((item) => {
					const address = coins.find((coin) => coin.id == item.id).platforms
					return {
						...item,
						platforms: address,
					}
				})
				setOtherCoins(withAddress)
			})
			.catch((err) => console.log(err))
	}, [])

	useEffect(() => {
		if (dataUser.length >= 1 && currentAccount != '') {
			dispatch(setLoaderSkeleton(false))
			dataUser.forEach((item) => {
				if (item.name == currentAccount) {
					setLoadingBalanceCoins(true)

					postData(item.phrase != '' ? item.phrase : item.privateKey, newWallet)
						.then((response) => {
							dispatch(setNewWallet(false))
							// const coins = response.positions.positions.filter(
							// 	(item) => item.chain == currentNetwork.title.toLowerCase()
							// )
							dispatch(setAddressWallet(response.address))
							setLoadingBalanceCoins(false)
							setPortfolioAssets(
								rebuildObjPortfolio(response.positions.positions)
							)
							dispatch(setPortfolioTransactions(response.transactions))
							dispatch(setPortfolioBalance(response.portfolio))
							dispatch(setLoaderSkeleton(true))
						})
						.catch((error) => console.log('error', error))
				}
			})
		}
	}, [dataUser, currentAccount, currentNetwork, updateWallet])
	useEffect(() => {
		if (allCoins.length) {
			const arr = allCoins.filter((coin) =>
				chooseAssets.includes(coin.symbol.toLowerCase())
			)
			dispatch(setPortfolioCoins(arr))
		}
	}, [allCoins, chooseAssets])
	useEffect(() => {
		if (
			!loadingBalanceCoins &&
			!loadingOtherCoins &&
			portfolioBalance != null &&
			portfolioBalance.assets_value > 0 &&
			otherCoins.length
		) {
			const balanceArr = portfolioAssets.map((item) =>
				item.symbol.toLowerCase()
			)
			let filtered = otherCoins.filter(
				(coin) => balanceArr.includes(coin.symbol) == false
			)
			let filteredSwap = otherCoins.map((coin) => {
				if (balanceArr.indexOf(coin.symbol.toLowerCase()) === -1) {
					return coin
				} else if (coin.symbol !== 'eth') {
					let chain = ''
					const itemWithChain = portfolioAssets.find(
						(item) => item.symbol.toLowerCase() == coin.symbol.toLowerCase()
					).market_data.chain
					switch (itemWithChain) {
						case 'ethereum':
							chain = 'polygon'
							break
						case 'polygon':
							chain = 'ethereum'
							break
						default:
							chain = itemWithChain
							break
					}
					return {
						...coin,
						chain,
					}
				} else {
					return coin
				}
			})
			dispatch(setAllCoins([...portfolioAssets, ...filtered]))
			dispatch(setAllCoinsSwap([...portfolioAssets, ...filteredSwap]))
			dispatch(setInitChooseAssets(balanceArr))
		} else if (
			!loadingBalanceCoins &&
			!loadingOtherCoins &&
			portfolioBalance != null &&
			portfolioBalance.assets_value == 0 &&
			otherCoins.length
		) {
			dispatch(setAllCoins(otherCoins))
		}
	}, [
		loadingBalanceCoins,
		loadingOtherCoins,
		portfolioBalance,
		portfolioAssets,
		otherCoins,
	])

	return (
		<PersistGate loading={null} persistor={persistor}>
			{children}
			<Spinner
				visible={loader}
				overlayColor='rgba(255, 255, 255, 0.9)'
				size='large'
				animation='fade'
				color={THEME.VIOLET}
				customIndicator={
					<Image
						style={{ height: 92, width: 92 }}
						source={require('./assets/spinner.gif')}
					/>
				}
			/>
		</PersistGate>
	)
}
