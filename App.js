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
import {
	setPortfolioCoins,
	setAllCoins,
} from './src/store/actions/walletActions'
import { LogBox } from 'react-native'
import { PortalProvider } from '@gorhom/portal'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

LogBox.ignoreLogs([
	"The provided value 'ms-stream' is not a valid 'responseType'",
	"The provided value 'moz-chunked-arraybuffer' is not a valid 'responseType'",
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
					<AppWrap>
						<PortalProvider>
							<NavigationContainer
								style={{ flex: 1 }}
								theme={{ colors: { background: THEME.PRIMARY } }}>
								<MyStack />
							</NavigationContainer>
							<WalletBottomNav />
						</PortalProvider>
					</AppWrap>
				</Provider>
			</GestureHandlerRootView>
		)
	}
}

const AppWrap = ({ children }) => {
	const dispatch = useDispatch()
	const [otherCoins, setOtherCoins] = useState([])
	const { getAllTokens, postData } = useWalletService()
	useEffect(() => {
		getAllTokens().then((data) => dispatch(setAllCoins(data)))
		// postData(
		// 	'toss quick drop way bleak tube boost panda whisper old dinner degree',
		// 	false
		// )
		// 	.then((response) => {
		// 		dispatch(setPortfolioCoins(response.positions.positions))
		// 	})
		// 	.catch((error) => console.log('error', error))
	}, [])
	return children
}
