import React, { useEffect } from 'react'
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

export const PreloaderScreen = ({ load }) => {
	const offsetLogo = useSharedValue(0)
	const opacityOut = useSharedValue(1)
	const opacityIn = useSharedValue(0)
	const offsetRotate = useSharedValue('0deg')

	const scaleLogo = useAnimatedStyle(() => {
		return {
			transform: [{ scale: withSpring(offsetLogo.value) }],
		}
	})
	const opacityOutLogo = useAnimatedStyle(() => {
		return {
			opacity: opacityOut.value,
		}
	})
	const opacityInLogo = useAnimatedStyle(() => {
		return {
			opacity: opacityIn.value,
		}
	})

	const rotateLogo = useAnimatedStyle(() => {
		return {
			transform: [{ rotate: withSpring(offsetRotate.value) }],
		}
	})

	const onInitAnim = () => {
		offsetLogo.value = withTiming(1, {
			duration: 3000,
			easing: Easing.inOut(Easing.cubic),
		})
		offsetRotate.value = withTiming('460deg', {
			duration: 12000,
			easing: Easing.inOut(Easing.cubic),
		})
		opacityOut.value = withDelay(
			4000,
			withTiming(0, {
				duration: 3000,
				easing: Easing.inOut(Easing.cubic),
			})
		)
		opacityIn.value = withDelay(
			3500,
			withTiming(1, {
				duration: 4000,
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
			<Preloader
				transformLogo={scaleLogo}
				opacityOut={opacityOutLogo}
				opacityIn={opacityInLogo}
				rotate={rotateLogo}
			/>
		</Animated.View>
	)
}
