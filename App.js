import React, { useEffect, useState } from 'react'
import './global'
import useCachedResources from './hooks/useCachedResources'
import { MyStack } from './src/navigation/AppNavigation'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import store from './src/store/index'
import { WalletBottomNav } from './src/navigation/WalletBottomNav'
import { THEME } from './src/Theme'
import { View } from 'react-native'
import useWalletService from './services/WalletService'
import { useDispatch } from 'react-redux'
import { setPortfolioCoins } from './src/store/actions/walletActions'

export default function App() {
	const isAppLoading = useCachedResources()
	if (!isAppLoading) {
		return null
	} else {
		return (
			<View style={{ flex: 1, backgroundColor: THEME.PRIMARY }}>
				<Provider store={store}>
					<AppWrap>
						<NavigationContainer
							theme={{ colors: { background: THEME.PRIMARY } }}>
							<MyStack />
						</NavigationContainer>
						<WalletBottomNav />
					</AppWrap>
				</Provider>
			</View>
		)
	}
}

const AppWrap = ({ children }) => {
	const dispatch = useDispatch()
	const [otherCoins, setOtherCoins] = useState([])
	const { getAllTokens, postData } = useWalletService()
	useEffect(() => {
		// getAllTokens().then((data) => console.log(data))
		postData(
			'display stand cruise coil kidney vacant cream street flavor iron sound apple',
			false
		)
			.then((response) => {
				dispatch(setPortfolioCoins(response.positions.positions))
			})
			.catch((error) => console.log('error', error))
		// setOtherCoins()
	}, [])
	return children
}
