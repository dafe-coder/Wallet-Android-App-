import React, { useEffect } from 'react'
import { Preloader } from '../Components/Loader/Preloader'
import { THEME } from './../Theme'
import Animated, {
	useSharedValue,
	useAnimatedStyle,
	withSpring,
	withTiming,
	interpolateColor,
	Easing,
} from 'react-native-reanimated'
import { Dimensions } from 'react-native'

const height = Dimensions.get('window').height

export const PreloaderScreen = ({ load }) => {
	const offset = useSharedValue(0)
	const offsetLogo = useSharedValue(-(height / 1.5))
	const reanimatedBackgroundColor = useSharedValue(0)

	const animatedStyles = useAnimatedStyle(() => {
		return {
			backgroundColor: interpolateColor(
				reanimatedBackgroundColor.value,
				[0, 1],
				[THEME.VIOLET, THEME.PRIMARY]
			),
		}
	}, [reanimatedBackgroundColor])
	const transformTitle = useAnimatedStyle(() => {
		return {
			transform: [
				{
					translateY: withSpring(offset.value),
				},
			],
		}
	})
	const transformLogo = useAnimatedStyle(() => {
		return {
			transform: [
				{
					translateY: withSpring(offsetLogo.value),
				},
			],
		}
	})
	const animatedStylesColor = useAnimatedStyle(() => {
		return {
			color: interpolateColor(
				reanimatedBackgroundColor.value,
				[0, 1],
				[THEME.PRIMARY, THEME.VIOLET]
			),
		}
	}, [reanimatedBackgroundColor])

	const onInitAnim = () => {
		reanimatedBackgroundColor.value = withTiming(1, {
			duration: 4000,
			easing: Easing.inOut(Easing.cubic),
		})
		offset.value = withTiming(-90, {
			duration: 3000,
			easing: Easing.inOut(Easing.cubic),
		})
		offsetLogo.value = withTiming(-80, {
			duration: 3000,
			easing: Easing.inOut(Easing.cubic),
		})
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
					zIndex: 100,
					flex: 1,
				},
				animatedStyles,
			]}>
			<Preloader
				transformLogo={transformLogo}
				transformTitle={transformTitle}
				animatedStylesColor={animatedStylesColor}
			/>
		</Animated.View>
	)
}
