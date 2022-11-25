import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect, useState } from 'react'

export default function useCachedResources() {
	const [isLoadingComplete, setLoadingComplete] = useState(false)

	// Load any resources or data that we need prior to rendering the app
	useEffect(() => {
		async function loadResourcesAndDataAsync() {
			try {
				SplashScreen.preventAutoHideAsync()

				// Load fonts
				await Font.loadAsync({
					'gt-bold': require('../assets/fonts/GothamPro-Bold.ttf'),
					'gt-medium': require('../assets/fonts/GothamPro-Medium.ttf'),
					'ub-medium': require('../assets/fonts/Ubuntu-Medium.ttf'),
					'ub-regular': require('../assets/fonts/Ubuntu-Regular.ttf'),
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
