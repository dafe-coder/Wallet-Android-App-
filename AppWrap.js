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
	setPortfolioCoins,
	setAllCoins,
	setPortfolioTransactions,
	setPortfolioBalance,
	setChooseCoin,
	setNewWallet,
	setLoaderSkeleton,
	setAddressWallet,
} from './src/store/actions/walletActions'
import { Image } from 'react-native'
import { THEME } from './src/Theme'
import { setChooseCoinSwapSecond } from './src/store/actions/walletActions'
import {
	clearChooseAssets,
	setInitChooseAssets,
} from './src/store/actions/storageAction'

export const AppWrap = ({ children }) => {
	const dispatch = useDispatch()
	const [loadingOtherCoins, setLoadingOtherCoins] = useState(true)
	const [loadingBalanceCoins, setLoadingBalanceCoins] = useState(true)
	const [otherCoins, setOtherCoins] = useState([])
	const [portfolioAssets, setPortfolioAssets] = useState([])
	const { getAllTokens, postData, getToken } = useWalletService()
	const { newWallet, loader, portfolioBalance, allCoins, updateWallet } =
		useSelector((state) => state.wallet)
	const { dataUser, currentAccount, currentNetwork, chooseAssets } =
		useSelector((state) => state.storage)

	const addedAddressToken = async (c, setChooseCoin) => {
		await getToken(false, c.id).then((data) => {
			const coinInfo = {
				...c,
				contract_address: data.platforms[
					currentNetwork.title.toLowerCase() == 'polygon'
						? 'polygon-pos'
						: 'ethereum'
				]
					? data.platforms[
							currentNetwork.title.toLowerCase() == 'polygon'
								? 'polygon-pos'
								: 'ethereum'
					  ]
					: '',
			}
			dispatch(setChooseCoin(coinInfo))
		})
	}

	useEffect(() => {
		if (allCoins.length) {
			const arr = allCoins.filter((coin) =>
				chooseAssets.includes(coin.symbol.toLowerCase())
			)
			dispatch(setPortfolioCoins(arr))
			allCoins.forEach((c) => {
				if (
					currentNetwork.title == 'Ethereum' &&
					c.symbol.toLowerCase() == 'eth'
				) {
					dispatch(setChooseCoin(c))
				} else if (
					currentNetwork.title == 'Polygon' &&
					c.symbol.toLowerCase() == 'matic'
				) {
					dispatch(setChooseCoin(c))
				}
				if (c.symbol.toLowerCase() == 'usdt' && c.id.length > 8) {
					dispatch(setChooseCoinSwapSecond(c))
				} else if (c.symbol.toLowerCase() == 'usdt') {
					addedAddressToken(c, setChooseCoinSwapSecond)
				}
			})
		}
	}, [allCoins, chooseAssets, currentNetwork])

	useEffect(() => {
		getAllTokens(setLoadingOtherCoins)
			.then((data) => {
				setOtherCoins(rebuildObjPortfolioDefaultCoins(data))
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
				(coin) => balanceArr.indexOf(coin.symbol.toLowerCase()) === -1
			)
			dispatch(setAllCoins([...portfolioAssets, ...filtered]))
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
