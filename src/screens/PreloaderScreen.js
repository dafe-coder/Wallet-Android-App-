import React, { useEffect } from 'react'
import { Preloader } from '../Components/Loader/Preloader'
import { THEME } from './../Theme'
import Animated, {
	useSharedValue,
	useAnimatedStyle,
	withSpring,
	withTiming,
	withDelay,
	Easing,
} from 'react-native-reanimated'

export const PreloaderScreen = ({ load }) => {
	const offsetWhiteBlock = useSharedValue('-140%')
	const offsetLogoAnim = useSharedValue(0)
	const offsetLogoAnimText = useSharedValue(0)
	const offsetLogoDash = useSharedValue(656)
	const offsetLogoEos = useSharedValue(630)
	const offsetLogoBnb = useSharedValue(654)
	const offsetLogoBtc = useSharedValue(578)
	const offsetLogoLite = useSharedValue(585)
	const offsetLogoTether = useSharedValue(547)
	const offsetLogoTezos = useSharedValue(521)
	const offsetLogoEthClassic = useSharedValue(537)
	const offsetLogoEth = useSharedValue(506)
	const offsetLogoNem = useSharedValue(465)
	const offsetLogoRipple = useSharedValue(450)
	const offsetLogoQtum = useSharedValue(453)
	const offsetLogoCardano = useSharedValue(474)

	const transformLogoDash = useAnimatedStyle(() => {
		return {
			bottom: withSpring(offsetLogoDash.value),
		}
	})
	const transformLogoAnim = useAnimatedStyle(() => {
		return {
			opacity: withSpring(offsetLogoAnim.value),
		}
	})
	const transformLogoAnimText = useAnimatedStyle(() => {
		return {
			opacity: withSpring(offsetLogoAnimText.value),
		}
	})
	const transformWhiteBlock = useAnimatedStyle(() => {
		return {
			bottom: withSpring(offsetWhiteBlock.value),
		}
	})
	const transformLogoEos = useAnimatedStyle(() => {
		return {
			bottom: withSpring(offsetLogoEos.value),
		}
	})
	const transformLogoBnb = useAnimatedStyle(() => {
		return {
			bottom: withSpring(offsetLogoBnb.value),
		}
	})
	const transformLogoBtc = useAnimatedStyle(() => {
		return {
			bottom: withSpring(offsetLogoBtc.value),
		}
	})
	const transformLogoLite = useAnimatedStyle(() => {
		return {
			bottom: withSpring(offsetLogoLite.value),
		}
	})
	const transformLogoTether = useAnimatedStyle(() => {
		return {
			bottom: withSpring(offsetLogoTether.value),
		}
	})
	const transformLogoTezos = useAnimatedStyle(() => {
		return {
			bottom: withSpring(offsetLogoTezos.value),
		}
	})
	const transformLogoEthClassic = useAnimatedStyle(() => {
		return {
			bottom: withSpring(offsetLogoEthClassic.value),
		}
	})
	const transformLogoEth = useAnimatedStyle(() => {
		return {
			bottom: withSpring(offsetLogoEth.value),
		}
	})
	const transformLogoNem = useAnimatedStyle(() => {
		return {
			bottom: withSpring(offsetLogoNem.value),
		}
	})
	const transformLogoRipple = useAnimatedStyle(() => {
		return {
			bottom: withSpring(offsetLogoRipple.value),
		}
	})
	const transformLogoQtum = useAnimatedStyle(() => {
		return {
			bottom: withSpring(offsetLogoQtum.value),
		}
	})
	const transformLogoCardano = useAnimatedStyle(() => {
		return {
			bottom: withSpring(offsetLogoCardano.value),
		}
	})

	const onInitAnim = () => {
		offsetWhiteBlock.value = withDelay(
			2300,
			withTiming(0, {
				duration: 3000,
				easing: Easing.inOut(Easing.cubic),
			})
		)
		offsetLogoAnim.value = withDelay(
			2500,
			withTiming(1, {
				duration: 1000,
				easing: Easing.inOut(Easing.cubic),
			})
		)
		offsetLogoAnimText.value = withDelay(
			3700,
			withTiming(1, {
				duration: 500,
				easing: Easing.inOut(Easing.cubic),
			})
		)

		// Logos
		offsetLogoDash.value = withDelay(
			1500,
			withTiming(236, {
				duration: 2000,
				easing: Easing.inOut(Easing.cubic),
			})
		)
		offsetLogoEos.value = withDelay(
			1400,
			withTiming(212, {
				duration: 2000,
				easing: Easing.inOut(Easing.cubic),
			})
		)
		offsetLogoBnb.value = withDelay(
			1300,
			withTiming(236, {
				duration: 2000,
				easing: Easing.inOut(Easing.cubic),
			})
		)
		offsetLogoBtc.value = withDelay(
			1200,
			withTiming(160, {
				duration: 2000,
				easing: Easing.inOut(Easing.cubic),
			})
		)
		offsetLogoLite.value = withDelay(
			1100,
			withTiming(170, {
				duration: 2000,
				easing: Easing.inOut(Easing.cubic),
			})
		)
		offsetLogoTether.value = withDelay(
			1000,
			withTiming(130, {
				duration: 2000,
				easing: Easing.inOut(Easing.cubic),
			})
		)
		offsetLogoTezos.value = withDelay(
			900,
			withTiming(101, {
				duration: 2000,
				easing: Easing.inOut(Easing.cubic),
			})
		)
		offsetLogoEthClassic.value = withDelay(
			800,
			withTiming(122, {
				duration: 2000,
				easing: Easing.inOut(Easing.cubic),
			})
		)
		offsetLogoEth.value = withDelay(
			700,
			withTiming(95, {
				duration: 2000,
				easing: Easing.inOut(Easing.cubic),
			})
		)
		offsetLogoNem.value = withDelay(
			600,
			withTiming(50, {
				duration: 2000,
				easing: Easing.inOut(Easing.cubic),
			})
		)
		offsetLogoRipple.value = withDelay(
			400,
			withTiming(40, {
				duration: 2000,
				easing: Easing.inOut(Easing.cubic),
			})
		)
		offsetLogoQtum.value = withDelay(
			300,
			withTiming(33, {
				duration: 2000,
				easing: Easing.inOut(Easing.cubic),
			})
		)
		offsetLogoCardano.value = withDelay(
			500,
			withTiming(60, {
				duration: 2000,
				easing: Easing.inOut(Easing.cubic),
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
					zIndex: 100,
					flex: 1,
				},
			]}>
			<Preloader
				transformWhiteBlock={transformWhiteBlock}
				transformLogo={{
					dash: transformLogoDash,
					eos: transformLogoEos,
					bnb: transformLogoBnb,
					btc: transformLogoBtc,
					lite: transformLogoLite,
					tether: transformLogoTether,
					tezos: transformLogoTezos,
					ethClassic: transformLogoEthClassic,
					eth: transformLogoEth,
					nem: transformLogoNem,
					ripple: transformLogoRipple,
					qtum: transformLogoQtum,
					cardano: transformLogoCardano,
				}}
				logoAnim={transformLogoAnim}
				logoAnimText={transformLogoAnimText}
			/>
		</Animated.View>
	)
}
