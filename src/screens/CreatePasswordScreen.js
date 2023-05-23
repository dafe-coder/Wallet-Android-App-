import React, { useState, useRef } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { THEME } from '../Theme'
import { WalletText } from '../Components/UI'
import { setPassword } from '../store/actions/storageAction'
import { useDispatch } from 'react-redux'
import PincodeInput from 'react-native-pincode-input'
import { SvgIcon } from './../Components/svg/svg'
//   values.map((toValue) =>
// 			Animated.timing(shakeAnim, {
// 				toValue,
// 				duration,
// 				useNativeDriver: false,
// 			})
// 		)

export const CreatePasswordScreen = ({ navigation, route }) => {
	const from = route.params !== undefined ? route.params.from : undefined
	const [pin, setPin] = useState('')
	const [pinPrev, setPinPrev] = useState('')
	const [nextStep, setNextStep] = useState(false)
	const dispatch = useDispatch()

	const pincodeInput = useRef(null)

	const shakePincode = () => {
		pincodeInput.current?.shake()
	}

	React.useEffect(() => {
		if (nextStep) {
			navigation.setOptions({
				title: 'Confirm PIN code',
			})
		} else {
			navigation.setOptions({
				title: 'Create PIN code',
			})
		}
	}, [navigation, nextStep])

	const handleOnTextChange = (pin) => {
		setPin(pin)
		if (!nextStep && pin.length == 6) {
			setNextStep(true)
			setPinPrev(pin)
			setPin('')
		} else if (nextStep && pin.length == 6) {
			setNextStep(false)
			if (pin === pinPrev) {
				dispatch(setPassword(pinPrev))
				if (from !== undefined && from == 'Settings') {
					navigation.reset({ index: 0, routes: [{ name: 'Home' }] })
				} else {
					navigation.navigate('ManageCryptos')
				}
			} else if (pin !== pinPrev) {
				setPinPrev('')
				setPin('')
				shakePincode()
			}
		}
	}

	return (
		<View style={styles.body}>
			<PincodeInput
				ref={pincodeInput}
				length={6}
				containerStyle={{
					width: '100%',
					height: 70,
					justifyContent: 'center',
					alignItems: 'center',
				}}
				circleContainerStyle={{
					justifyContent: 'center',
					alignItems: 'center',
				}}
				circleEmptyStyle={{
					marginHorizontal: 8,
					width: 16,
					height: 16,
					borderWidth: 1,
					borderColor: THEME.GREY,
					borderRadius: 50,
				}}
				circleFilledStyle={{
					backgroundColor: THEME.VIOLET,
					width: 16,
					height: 16,
					marginHorizontal: 8,
				}}
				pin={pin}
				onTextChange={handleOnTextChange}
			/>
			{!nextStep ? (
				<WalletText color='white-dark' center size='sm'>
					Create a PIN code to secure your wallet.
				</WalletText>
			) : (
				<WalletText style={{ color: 'transparent' }} center size='sm'>
					Create a PIN code to secure your wallet.
				</WalletText>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	body: {
		flex: 1,
		paddingTop: 40,
		justifyContent: 'center',
		paddingBottom: 40,
	},
	image: {
		marginBottom: 108,
		justifyContent: 'center',
		alignItems: 'center',
	},
})
