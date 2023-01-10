import 'node-libs-react-native/globals.js'
import 'react-native-get-random-values'
import React, { useEffect, useState } from 'react'
import { Image } from 'react-native'
import './global'
import useCachedResources from './hooks/useCachedResources'
import { MyStack } from './src/navigation/AppNavigation'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import { WalletBottomNav } from './src/navigation/WalletBottomNav'
import { THEME } from './src/Theme'
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
import { LogBox } from 'react-native'
import { PortalProvider } from '@gorhom/portal'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './src/store/index'
import Spinner from 'react-native-loading-spinner-overlay'

LogBox.ignoreLogs([
	"The provided value 'ms-stream' is not a valid 'responseType'",
	"The provided value 'moz-chunked-arraybuffer' is not a valid 'responseType'",
	'Require cycle: node_modules/victory',
])
export default function App() {
	const isAppLoading = useCachedResources()

	if (!isAppLoading) {
		return null
	} else {
		return (
			<GestureHandlerRootView
				style={{ flex: 1, backgroundColor: THEME.PRIMARY }}>
				<Provider store={store}>
					<PortalProvider>
						<AppWrap>
							<NavigationContainer
								style={{ flex: 1 }}
								theme={{ colors: { background: THEME.PRIMARY } }}>
								<MyStack />
							</NavigationContainer>
						</AppWrap>
					</PortalProvider>
				</Provider>
			</GestureHandlerRootView>
		)
	}
}
const AppWrap = ({ children }) => {
	const dispatch = useDispatch()
	const [loadingOtherCoins, setLoadingOtherCoins] = useState(true)
	const [loadingBalanceCoins, setLoadingBalanceCoins] = useState(true)
	const [otherCoins, setOtherCoins] = useState([])
	const { getAllTokens, postData } = useWalletService()
	const { loader, navigation, portfolioCoins, portfolioBalance, allCoins } =
		useSelector((state) => state.wallet)
	const { dataUser, currentAccount } = useSelector((state) => state.storage)
	useEffect(() => {
		if (allCoins.length) {
			allCoins.forEach((c) => {
				if (c.symbol.toLowerCase() == 'eth') {
					dispatch(setChooseCoin(c))
				}
			})
		}
	}, [allCoins])

	useEffect(() => {
		// console.log(dataUser)
		if (dataUser.length >= 1 && currentAccount != '') {
			dispatch(setLoaderSkeleton(false))
			dataUser.forEach((item) => {
				if (item.name == currentAccount) {
					setLoadingBalanceCoins(true)
					getAllTokens(setLoadingOtherCoins).then((data) => {
						setOtherCoins(rebuildObjPortfolioDefaultCoins(data))
					})
					postData(item.phrase != '' ? item.phrase : item.privateKey, false)
						.then((response) => {
							// console.log(response)
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
			console.log('with balance account')
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
			console.log('zero account')
			dispatch(setAllCoins(otherCoins))
		}
	}, [loadingBalanceCoins, loadingOtherCoins, portfolioBalance])

	return (
		<PersistGate loading={null} persistor={persistor}>
			{children}
			<Spinner
				visible={loader}
				textContent={'In progress'}
				textStyle={{
					color: THEME.WHITE,
					textTransform: 'uppercase',
					fontFamily: 'gt-bold',
					position: 'relative',
					top: -80,
				}}
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
			{navigation === null ? <></> : <WalletBottomNav />}
		</PersistGate>
	)
}
