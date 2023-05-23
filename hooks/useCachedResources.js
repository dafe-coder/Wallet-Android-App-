import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect, useState } from 'react'

export default function useCachedResources() {
	const [isLoadingComplete, setLoadingComplete] = useState(false)

	// Load any resources or data that we need prior to rendering the app
	useEffect(() => {
		async function loadResourcesAndDataAsync() {
			try {
				// SplashScreen.preventAutoHideAsync()
				SplashScreen.hideAsync()

				// Load fonts
				await Font.loadAsync({
					'int-semi-bold': require('../assets/fonts/GothamPro-Bold.ttf'),
					'gt-medium': require('../assets/fonts/GothamPro-Medium.ttf'),
					'int-med': require('../assets/fonts/Ubuntu-Medium.ttf'),
					'int-reg': require('../assets/fonts/Ubuntu-Regular.ttf'),
				})
			} catch (e) {
				// We might want to provide this error information to an error reporting service
				console.warn(e)
			} finally {
				setLoadingComplete(true)
				SplashScreen.hideAsync()
			}
		}

		loadResourcesAndDataAsync()
	}, [])

	return isLoadingComplete
}
