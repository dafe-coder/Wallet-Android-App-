import React, { useEffect } from 'react'
import { View } from 'react-native'
import { Preloader } from '../Components/Loader/Preloader'
import { THEME } from './../Theme'
import Animated, {
	useSharedValue,
	useAnimatedStyle,
	withSpring,
	withTiming,
	Easing,
	withDelay,
} from 'react-native-reanimated'
import { LoadingText } from '../Components/Loader/LoadingText'

export const PreloaderScreen = ({ load }) => {
	const offsetLogo = useSharedValue(0)
	const opacityIn = useSharedValue(0)

	const scaleLogo = useAnimatedStyle(() => {
		return {
			transform: [{ scale: withSpring(offsetLogo.value) }],
		}
	})

	const opacityInLogo = useAnimatedStyle(() => {
		return {
			opacity: opacityIn.value,
		}
	})

	const onInitAnim = () => {
		offsetLogo.value = withTiming(1, {
			duration: 3000,
			easing: Easing.inOut(Easing.cubic),
		})
		opacityIn.value = withDelay(
			3000,
			withTiming(1, {
				duration: 3000,
				easing: Easing.bezier(0.2, 0.5, 0.5, 0.5),
			})
		)
	}

	useEffect(() => {
		onInitAnim()
	}, [])

	return (
		<Animated.View
			style={[
				{
					backgroundColor: THEME.VIOLET,
					display: load ? 'flex' : 'none',
					position: 'absolute',
					left: 0,
					top: 0,
					right: 0,
					bottom: 0,
					zIndex: load ? 100 : -100,
					flex: 1,
				},
			]}>
			<Preloader transformLogo={scaleLogo} />
			<Animated.View style={[{ alignItems: 'center' }, opacityInLogo]}>
				<LoadingText />
			</Animated.View>
		</Animated.View>
	)
}
