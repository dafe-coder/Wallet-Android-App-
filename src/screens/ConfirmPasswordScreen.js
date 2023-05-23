import React, { useState, useRef } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { THEME } from '../Theme'
import { useDispatch, useSelector } from 'react-redux'
import PincodeInput from 'react-native-pincode-input'
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
				dispatch(setPassword(''))
				dispatch(setCurrentAccount(''))
				dispatch(setClearDataUser())
				navigation.reset({
					index: 0,
					routes: [{ name: 'TutorialFirst' }],
				})
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
					width: '100%',
					height: 110,
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
		marginBottom: 132,
		justifyContent: 'center',
		alignItems: 'center',
	},
})
