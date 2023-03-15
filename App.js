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
		'mt-semi-bold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
		'mt-med': require('./assets/fonts/Montserrat-Medium.ttf'),
		'mt-reg': require('./assets/fonts/Montserrat-Regular.ttf'),
	})
	useEffect(() => {
		setTimeout(() => {
			setHidePreloader(false)
		}, 6000)
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
							<NavigationContainer
								style={{ flex: 1 }}
								theme={{ colors: { background: THEME.PRIMARY } }}>
								<PreloaderScreen load={hidePreloader} />
								<MyStack />
							</NavigationContainer>
						</AppWrap>
					</PortalProvider>
				</Provider>
			</GestureHandlerRootView>
		)
	}
}
