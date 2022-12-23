import React, { useState, useRef } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { THEME } from '../Theme'
import { WalletText } from '../Components/UI'
import { setPassword } from '../store/actions/storageAction'
import { useDispatch, useSelector } from 'react-redux'
import PincodeInput from 'react-native-pincode-input'

export const ConfirmPasswordScreen = ({ navigation }) => {
	const [pin, setPin] = useState('')
	const dispatch = useDispatch()
	const { password } = useSelector((state) => state.storage)
	const confirmPassword = () => {
		dispatch(setPassword('111111'))
	}

	const pincodeInput = useRef(null)

	const shakePincode = () => {
		pincodeInput.current?.shake()
	}

	const handleOnTextChange = (pin) => {
		setPin(pin)
		if (pin.length === 6 && pin === password) {
			navigation.navigate('Wallet')
			setPin('')
		} else if (pin.length === 6 && pin !== password) {
			setPin('')
			shakePincode()
		}
	}

	return (
		<View style={styles.body}>
			<View style={styles.image}>
				<Image source={require('../../assets/logoWallet.png')} />
			</View>
			<WalletText center size='m'>
				Enter your PIN code
			</WalletText>
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
