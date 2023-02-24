import React, { useEffect, useState } from 'react'
import './global'
import { Provider } from 'react-redux'
import { MyStack } from './src/navigation/AppNavigation'
import { store } from './src/store'
import { NavigationContainer } from '@react-navigation/native'
import { PortalProvider } from '@gorhom/portal'
import { THEME } from './src/Theme'
import { LogBox } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { PreloaderScreen } from './src/screens/PreloaderScreen'
LogBox.ignoreLogs([
	"The provided value 'ms-stream' is not a valid 'responseType'",
	"The provided value 'moz-chunked-arraybuffer' is not a valid 'responseType'",
	'Require cycle: node_modules/victory',
])
import { useFonts } from 'expo-font'
import { AppWrap } from './AppWrap'

export default function App() {
	const [hidePreloader, setHidePreloader] = useState(true)
	const [fontsLoaded] = useFonts({
		'sf-bold': require('./assets/fonts/SF-Pro-Display-Bold.ttf'),
		'gt-medium': require('./assets/fonts/GothamPro-Medium.ttf'),
		'ub-medium': require('./assets/fonts/Rubik-SemiBold.ttf'),
		'ub-regular': require('./assets/fonts/Rubik-Regular.ttf'),
	})
	useEffect(() => {
		setTimeout(() => {
			setHidePreloader(false)
		}, 5500)
	}, [])
	if (!fontsLoaded) {
		return undefined
	} else {
		return (
			<GestureHandlerRootView
				style={{ flex: 1, backgroundColor: THEME.PRIMARY }}>
				<Provider store={store}>
					<PortalProvider>
						<AppWrap>
							<PreloaderScreen load={hidePreloader} />
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
