import useCachedResources from './hooks/useCachedResources'
import { MyStack, MyTabs } from './src/navigation/AppNavigation'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import store from './src/store/index'
import { WalletBottomNav } from './src/navigation/WalletBottomNav'
import { THEME } from './src/Theme'
import { View } from 'react-native'

export default function App() {
	const isAppLoading = useCachedResources()
	if (!isAppLoading) {
		return null
	} else {
		return (
			<View style={{ flex: 1, backgroundColor: THEME.PRIMARY }}>
				<Provider store={store}>
					<NavigationContainer
						theme={{ colors: { background: THEME.PRIMARY } }}>
						<MyStack />
						{/* <MyTabs /> */}
					</NavigationContainer>
					<WalletBottomNav />
				</Provider>
			</View>
		)
	}
}
