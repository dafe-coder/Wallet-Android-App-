import useCachedResources from './hooks/useCachedResources'
import { MyStack } from './src/navigation/AppNavigation'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import store from './src/store/index'
import { View } from 'react-native'

export default function App() {
	const isAppLoading = useCachedResources()
	if (!isAppLoading) {
		return null
	} else {
		return (
			<Provider store={store}>
				<NavigationContainer>
					<MyStack />
				</NavigationContainer>
			</Provider>
		)
	}
}
