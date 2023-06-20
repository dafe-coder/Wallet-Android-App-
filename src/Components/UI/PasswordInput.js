import React from 'react'
import { View } from 'react-native'
import { WalletInput } from './WalletInput'
import { WalletText } from './WalletText'
import { SvgIcon } from '../svg/svg'
import { THEME } from '../../Theme'
import { useDispatch } from 'react-redux'
import { setPasswordInit } from '../../store/slices/walletSlice'

export const PasswordInput = () => {
	const dispatch = useDispatch()
	const [password, setPassword] = React.useState('')
	const [uppercaseValid, setUppercaseValid] = React.useState(false)
	const [specCharValid, setSpecCharValid] = React.useState(false)
	const [numberValid, setNumberValid] = React.useState(false)
	const [lengthValid, setLengthValid] = React.useState(false)
	const [passwordValid, setPasswordValid] = React.useState(null)

	React.useEffect(() => {
		if (password.length > 0) {
			validPass(password)
		}
	}, [password])

	function validPass(value) {
		let arrValue = value.split('')
		let letterUppercase = false
		let letterSpecialChars = false
		let number = false
		let length = false

		// Uppercase
		arrValue.forEach((letter) => {
			if (letter == letter.toUpperCase() && letter.match(/^[a-zA-Z]/)) {
				letterUppercase = true
			}
		})
		if (letterUppercase) {
			setUppercaseValid(true)
		} else {
			setUppercaseValid(false)
		}
		//SpecialChar
		if (value.match(/[!@#$&*%]/)) {
			setSpecCharValid(true)
			letterSpecialChars = true
		} else {
			setSpecCharValid(false)
		}
		//number
		if (value.match(/\d/)) {
			setNumberValid(true)
			number = true
		} else {
			setNumberValid(false)
		}
		//length
		if (value.length >= 8) {
			setLengthValid(true)
			length = true
		} else {
			setLengthValid(false)
		}
		if (letterUppercase && letterSpecialChars && number && length) {
			setPasswordValid(true)
			dispatch(setPasswordInit(value))
		} else {
			setPasswordValid(false)
			dispatch(setPasswordInit(''))
		}
	}
	return (
		<View>
			<WalletInput
				password
				styleInput={
					passwordValid
						? { borderColor: THEME.SUCCESS }
						: !passwordValid && password !== ''
						? { borderColor: THEME.RED }
						: {}
				}
				value={password}
				setValue={setPassword}
				style={{ marginBottom: 15 }}
				placeholder='Spending password'
			/>
			<View
				style={{
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'space-between',
					marginBottom: 20,
				}}>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<SvgIcon
						type={uppercaseValid ? 'circle-arr-filled' : 'circle-arr'}
						style={{ marginRight: 5 }}
					/>
					<WalletText size='s'>Uppercase</WalletText>
				</View>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<SvgIcon
						type={specCharValid ? 'circle-arr-filled' : 'circle-arr'}
						style={{ marginRight: 5 }}
					/>
					<WalletText size='s'>Special Chars</WalletText>
				</View>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<SvgIcon
						type={numberValid ? 'circle-arr-filled' : 'circle-arr'}
						style={{ marginRight: 5 }}
					/>
					<WalletText size='s'>Num</WalletText>
				</View>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<SvgIcon
						type={lengthValid ? 'circle-arr-filled' : 'circle-arr'}
						style={{ marginRight: 5 }}
					/>
					<WalletText size='s'>Min 8 Symbols</WalletText>
				</View>
			</View>
		</View>
	)
}
