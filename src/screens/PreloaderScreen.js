import React, { useState, useEffect } from 'react'
import { Preloader } from '../Components/Loader/Preloader'
import { THEME } from './../Theme'
import { useSelector, useDispatch } from 'react-redux'
import Animated, {
	useSharedValue,
	useAnimatedStyle,
	withSpring,
	withTiming,
	interpolateColor,
	Easing,
} from 'react-native-reanimated'
import { setNavigation } from '../store/actions/walletActions'

export const PreloaderScreen = ({ navigation }) => {
	const dispatch = useDispatch()
	const [timeoutId, setTimeoutId] = useState(null)
	const { dataUser } = useSelector((state) => state.storage)
	const offset = useSharedValue(0)
	const offsetLogo = useSharedValue(-400)
	const reanimatedBackgroundColor = useSharedValue(0)

	const animatedStyles = useAnimatedStyle(() => {
		return {
			backgroundColor: interpolateColor(
				reanimatedBackgroundColor.value,
				[0, 1],
				[THEME.GOLD, THEME.PRIMARY]
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
				[THEME.PRIMARY, THEME.GOLD]
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
		if (dataUser.length && dataUser.length >= 1) {
			setTimeoutId(
				setTimeout(() => {
					navigation.navigate('Wallet')
					dispatch(setNavigation(navigation))
				}, 3100)
			)
		} else {
			setTimeoutId(
				setTimeout(() => {
					navigation.navigate('Login')
				}, 3100)
			)
		}
		return () => {
			clearTimeout(timeoutId)
		}
	}, [dataUser, navigation])

	return (
		<Animated.View style={[{ flex: 1 }, animatedStyles]}>
			<Preloader
				transformLogo={transformLogo}
				transformTitle={transformTitle}
				animatedStylesColor={animatedStylesColor}
			/>
		</Animated.View>
	)
}
