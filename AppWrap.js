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
	const { getAllTokens, postData, getToken } = useWalletService()
	const { loader, portfolioCoins, portfolioBalance, allCoins, updateWallet } =
		useSelector((state) => state.wallet)
	const { dataUser, currentAccount, currentNetwork } = useSelector(
		(state) => state.storage
	)

	const addedAddressToken = async (c, setChooseCoin) => {
		await getToken(false, c.id).then((data) => {
			const coinInfo = {
				...c,
				contract_address: data.platforms[
					currentNetwork.toLowerCase() == 'polygon' ? 'polygon-pos' : 'ethereum'
				]
					? data.platforms[
							currentNetwork.toLowerCase() == 'polygon'
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
			allCoins.forEach((c) => {
				if (currentNetwork == 'Ethereum' && c.symbol.toLowerCase() == 'eth') {
					dispatch(setChooseCoin(c))
				} else if (
					currentNetwork == 'Polygon' &&
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
							// console.log(
							// 	JSON.stringify(
							// 		response.positions.positions.filter(
							// 			(item) => item.chain == currentNetwork.toLowerCase()
							// 		),
							// 		null,
							// 		4
							// 	)
							// )

							setLoadingBalanceCoins(false)
							dispatch(
								setPortfolioCoins(
									rebuildObjPortfolio(
										response.positions.positions.filter(
											(item) => item.chain == currentNetwork.toLowerCase()
										)
									)
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
	}, [dataUser, currentAccount, currentNetwork, updateWallet])

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
	}, [
		loadingBalanceCoins,
		loadingOtherCoins,
		portfolioBalance,
		portfolioCoins,
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
