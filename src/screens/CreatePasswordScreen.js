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
				setPinPrev('')
				setPin('')
				navigation.navigate('ConfirmPassword')
			} else if (pin !== pinPrev) {
				setPinPrev('')
				setPin('')
				shakePincode()
			}
		}
	}

	return (
		<View style={styles.body}>
			<View style={styles.image}>
				<SvgIcon type='logo' />
			</View>
			{!nextStep ? (
				<WalletText center size='m'>
					Create a PIN code to secure your wallet
				</WalletText>
			) : (
				<WalletText center size='m'>
					Enter your pin again
				</WalletText>
			)}
			<PincodeInput
				ref={pincodeInput}
				length={6}
				containerStyle={{
					display: 'flex',
					width: '100%',
					height: 60,
					justifyContent: 'center',
				}}
				circleContainerStyle={{
					paddingHorizontal: 140,
				}}
				circleEmptyStyle={{
					width: 9,
					height: 9,
					borderWidth: 1,
					borderColor: THEME.BROWN_TEXT,
					backgroundColor: THEME.BROWN_TEXT,
					borderRadius: 50,
				}}
				circleFilledStyle={{
					backgroundColor: THEME.GOLD,
					width: 9,
					height: 9,
				}}
				autoFocus={true}
				pin={pin}
				onTextChange={handleOnTextChange}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	body: {
		flex: 1,
		paddingTop: 40,
		justifyContent: 'flex-start',
		paddingBottom: 40,
	},
	image: {
		marginBottom: 132,
		justifyContent: 'center',
		alignItems: 'center',
	},
})
