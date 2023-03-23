import React, { useState, useRef } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { THEME } from '../Theme'
import { WalletText } from '../Components/UI'
import { useDispatch, useSelector } from 'react-redux'
import PincodeInput from 'react-native-pincode-input'
import { setLoader } from '../store/actions/walletActions'
import { SvgIcon } from '../Components/svg/svg'
import {
	setPassword,
	setCurrentAccount,
	setClearDataUser,
} from '../store/actions/storageAction'

export const ConfirmPasswordScreen = ({ navigation, route }) => {
	const dispatch = useDispatch()
	const [pin, setPin] = useState('')
	const { password } = useSelector((state) => state.storage)

	const pincodeInput = useRef(null)

	const shakePincode = () => {
		pincodeInput.current?.shake()
	}

	const handleOnTextChange = (pin) => {
		setPin(pin)
		if (pin.length === 6 && pin === password) {
			if (route.params && route.params.from === 'exportPhrase') {
				navigation.navigate('ExportPhraseCopy')
			} else if (route.params && route.params.from === 'exportKey') {
				navigation.navigate('ExportPrivateKeyCopy')
			} else if (route.params && route.params.from === 'backup') {
				navigation.navigate('BackupSubscribe')
			} else if (route.params && route.params.from === 'backupRestore') {
				navigation.navigate('RecoverPhrase', { from: 'backupRestore' })
			} else {
				dispatch(setLoader(true))
				setTimeout(() => {
					dispatch(setPassword(''))
					dispatch(setCurrentAccount(''))
					dispatch(setClearDataUser())
					navigation.reset({
						index: 0,
						routes: [{ name: 'Login' }],
					})
					dispatch(setLoader(false))
				}, 3000)
			}
			setPin('')
		} else if (pin.length === 6 && pin !== password) {
			setPin('')
			shakePincode()
		}
	}

	return (
		<View style={styles.body}>
			<PincodeInput
				ref={pincodeInput}
				length={6}
				containerStyle={{
					marginTop: 100,
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
					width: 9,
					height: 9,
					borderWidth: 1,
					borderColor: THEME.GREY,
					backgroundColor: THEME.GREY,
					borderRadius: 50,
					marginHorizontal: 4,
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
