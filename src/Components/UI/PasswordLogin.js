import React from 'react'
import { View, StyleSheet } from 'react-native'
import { THEME } from '../../Theme'
import PincodeInput from 'react-native-pincode-input'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-native'
import { WalletText } from './WalletText'

export const PasswordLogin = ({ callback, style, to, focus = true }) => {
	const navigate = useNavigate()
	const { password } = useSelector((state) => state.storage)
	const [pin, setPin] = React.useState('')

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
		if (pin.length === 6 && pin === password) {
			const timerID = setTimeout(() => {
				if (callback) {
					callback()
				} else {
					navigate(to)
				}
				setPin('')
				clearTimeout(timerID)
			}, 300)
		} else if (pin.length === 6 && pin !== password) {
			setPin('')
			shakePincode()
		}
	}
	return (
		<View style={style}>
			<View style={[styles.wrap]}>
				<View style={styles.item} />
				<View style={styles.item} />
				<View style={styles.item} />
				<View style={styles.item} />
				<View style={styles.item} />
				<View style={styles.item} />
				<PincodeInput
					autoFocus={focus}
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
				{errorPin && 'You enter different passwords'}
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
