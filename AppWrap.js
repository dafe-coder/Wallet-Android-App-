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
	setLoaderSkeleton,
} from './src/store/actions/walletActions'
import { Image } from 'react-native'
import { THEME } from './src/Theme'
import { setChooseCoinSwapSecond } from './src/store/actions/walletActions'

export const AppWrap = ({ children }) => {
	const dispatch = useDispatch()
	const [loadingOtherCoins, setLoadingOtherCoins] = useState(true)
	const [loadingBalanceCoins, setLoadingBalanceCoins] = useState(true)
	const [otherCoins, setOtherCoins] = useState([])
	const { getAllTokens, postData } = useWalletService()
	const { loader, portfolioCoins, portfolioBalance, allCoins } = useSelector(
		(state) => state.wallet
	)
	const { dataUser, currentAccount } = useSelector((state) => state.storage)

	useEffect(() => {
		if (allCoins.length) {
			allCoins.forEach((c) => {
				if (c.symbol.toLowerCase() == 'eth') {
					dispatch(setChooseCoin(c))
				}
				if (c.symbol.toLowerCase() == 'usdt') {
					dispatch(setChooseCoinSwapSecond(c))
				}
			})
		}
	}, [allCoins])

	useEffect(() => {
		getAllTokens(setLoadingOtherCoins).then((data) => {
			setOtherCoins(rebuildObjPortfolioDefaultCoins(data))
		})
	}, [])

	useEffect(() => {
		if (dataUser.length >= 1 && currentAccount != '') {
			dispatch(setLoaderSkeleton(false))
			dataUser.forEach((item) => {
				if (item.name == currentAccount) {
					setLoadingBalanceCoins(true)

					postData(item.phrase != '' ? item.phrase : item.privateKey, false)
						.then((response) => {
							setLoadingBalanceCoins(false)
							dispatch(
								setPortfolioCoins(
									rebuildObjPortfolio(response.positions.positions)
								)
							)
							dispatch(setPortfolioTransactions(response.transactions))
							dispatch(setPortfolioBalance(response.portfolio))
							dispatch(setLoaderSkeleton(true))
						})
						.catch((error) => console.log('error', error))
				}
			})
		}
	}, [dataUser, currentAccount])

	useEffect(() => {
		if (
			!loadingBalanceCoins &&
			!loadingOtherCoins &&
			portfolioBalance != null &&
			portfolioBalance.assets_value > 0 &&
			otherCoins.length
		) {
			const balanceArr = portfolioCoins.map((item) => item.symbol.toLowerCase())
			let filtered = otherCoins.filter(
				(coin) => balanceArr.indexOf(coin.symbol.toLowerCase()) === -1
			)
			dispatch(setAllCoins([...portfolioCoins, ...filtered]))
		} else if (
			!loadingBalanceCoins &&
			!loadingOtherCoins &&
			portfolioBalance != null &&
			portfolioBalance.assets_value == 0 &&
			otherCoins.length
		) {
			dispatch(setAllCoins(otherCoins))
		}
	}, [loadingBalanceCoins, loadingOtherCoins, portfolioBalance])

	return (
		<PersistGate loading={null} persistor={persistor}>
			{children}
			<Spinner
				visible={loader}
				overlayColor='rgba(12, 11, 7, 0.9)'
				size='large'
				animation='fade'
				color={THEME.GOLD}
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
