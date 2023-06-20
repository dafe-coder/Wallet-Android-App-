import React, { useEffect, useState } from 'react'
import './global'
import { Provider } from 'react-redux'
import { store } from './src/store/store'
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
import SafeAreaStyle from './src/Components/SafeArea'
import { InitRouter } from './src/navigation/InitRouter'

export default function App() {
	const [hidePreloader, setHidePreloader] = useState(true)
	const [fontsLoaded] = useFonts({
		'mt-semi-bold': require('./assets/fonts/Comfortaa-SemiBold.ttf'),
		'mt-med': require('./assets/fonts/Comfortaa-Medium.ttf'),
		'mt-reg': require('./assets/fonts/Comfortaa-Regular.ttf'),
	})
	useEffect(() => {
		setTimeout(() => {
			setHidePreloader(false)
		}, 7000)
	}, [])
	if (!fontsLoaded) {
		return undefined
	} else {
		return (
			<GestureHandlerRootView
				style={{
					backgroundColor: THEME.GREEN,
					...SafeAreaStyle.AndroidSafeArea,
				}}>
				<Provider store={store}>
					<PortalProvider>
						<PreloaderScreen load={hidePreloader} />
						<InitRouter />
					</PortalProvider>
				</Provider>
			</GestureHandlerRootView>
		)
	}
}
