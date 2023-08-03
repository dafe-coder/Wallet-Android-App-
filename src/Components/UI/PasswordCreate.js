import React from 'react'
import { View, StyleSheet } from 'react-native'
import { THEME } from '../../Theme'
import PincodeInput from 'react-native-pincode-input'
import { useDispatch } from 'react-redux'
import { setPassword } from '../../store/slices/storageSlice'
import { useNavigate } from 'react-router-native'
import { WalletText } from './WalletText'

export const PasswordCreate = ({ style, to }) => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const [pin, setPin] = React.useState('')
	const [pinPrev, setPinPrev] = React.useState('')
	const [nextStep, setNextStep] = React.useState(false)
	const pincodeInput = React.useRef(null)
	const [errorPin, setErrorPin] = React.useState(false)

	const shakePincode = () => {
		pincodeInput.current?.shake()
		setErrorPin(true)
		const timerID = setTimeout(() => {
			setErrorPin(false)
			clearTimeout(timerID)
		}, 2000)
	}
	const handleOnTextChange = (pin) => {
		setPin(pin)
		if (!nextStep && pin.length == 6) {
			const timerID = setTimeout(() => {
				setNextStep(true)
				setPinPrev(pin)
				setPin('')
				clearTimeout(timerID)
			}, 300)
		} else if (nextStep && pin.length == 6) {
			setNextStep(false)
			if (pin === pinPrev) {
				dispatch(setPassword(pinPrev))
				navigate(to)
			} else if (pin !== pinPrev) {
				shakePincode()
				const timerID = setTimeout(() => {
					setPin('')
					setPinPrev('')
					clearTimeout(timerID)
				}, 300)
			}
		}
	}
	return (
		<View>
			<WalletText size='m'>
				{nextStep ? 'Confirm PIN' : 'Create PIN'}
			</WalletText>
			<View style={[styles.wrap, style]}>
				<View style={styles.item} />
				<View style={styles.item} />
				<View style={styles.item} />
				<View style={styles.item} />
				<View style={styles.item} />
				<View style={styles.item} />
				<PincodeInput
					ref={pincodeInput}
					length={6}
					containerStyle={{
						position: 'absolute',
						width: '100%',
						left: 0,
						top: 0,
						height: '100%',
						justifyContent: 'center',
						alignItems: 'center',
						paddingHorizontal: 15,
					}}
					circleContainerStyle={{
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
					circleEmptyStyle={{
						backgroundColor: THEME.GREEN_BG,
					}}
					circleFilledStyle={{
						backgroundColor: THEME.WHITE,
						borderColor: THEME.WHITE,
						borderRadius: 16,
						width: 9,
						height: 9,
						marginHorizontal: 4,
					}}
					pin={pin}
					onTextChange={handleOnTextChange}
				/>
			</View>
			<WalletText size='m' color='red' style={{ marginTop: 10 }}>
				{errorPin && 'Passwords doesn’t match!'}
			</WalletText>
		</View>
	)
}

const styles = StyleSheet.create({
	wrap: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 0,
		margin: 0,
	},
	item: {
		width: 47,
		height: 52,
		backgroundColor: THEME.GREEN_BG,
		borderColor: THEME.WHITE,
		borderRadius: 16,
		borderWidth: 1,
	},
})
