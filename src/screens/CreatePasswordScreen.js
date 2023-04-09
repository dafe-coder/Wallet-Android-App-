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
import { setLoader } from '../store/actions/walletActions'
export const CreatePasswordScreen = ({ navigation }) => {
	const [pin, setPin] = useState('')
	const [pinPrev, setPinPrev] = useState('')
	const [nextStep, setNextStep] = useState(false)
	const dispatch = useDispatch()

	const pincodeInput = useRef(null)

	const shakePincode = () => {
		pincodeInput.current?.shake()
	}

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
				dispatch(setLoader(true))
				setTimeout(() => {
					dispatch(setLoader(false))
					navigation.navigate('ManageCryptos')
				}, 1000)
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
					height: 60,
					justifyContent: 'center',
					alignItems: 'center',
				}}
				circleContainerStyle={{
					justifyContent: 'center',
					alignItems: 'center',
				}}
				circleEmptyStyle={{
					marginHorizontal: 4,
					width: 9,
					height: 9,
					borderWidth: 1,
					borderColor: THEME.GREY,
					backgroundColor: THEME.GREY,
					borderRadius: 50,
				}}
				circleFilledStyle={{
					backgroundColor: THEME.VIOLET,
					width: 9,
					marginHorizontal: 4,
					height: 9,
				}}
				pin={pin}
				onTextChange={handleOnTextChange}
			/>
			{!nextStep ? (
				<WalletText color='white' center size='m'>
					Create a PIN code to secure your wallet.
				</WalletText>
			) : (
				<WalletText color='white' center size='m'>
					Confirm PIN code.
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
