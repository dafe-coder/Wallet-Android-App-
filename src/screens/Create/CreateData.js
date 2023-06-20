import React from 'react'
import { View, BackHandler } from 'react-native'
import { useNavigate } from 'react-router-native'
import {
	WalletText,
	WalletInput,
	WalletButton,
	PasswordInput,
} from './../../Components/UI'
import { Header } from '../../Components/'
import { useDispatch, useSelector } from 'react-redux'
import { THEME } from '../../Theme'
import { setWalletName } from '../../store/slices/walletSlice'
import { setPassword } from '../../store/slices/storageSlice'
export const CreateData = () => {
	const { passwordInit } = useSelector((state) => state.wallet)
	const [validName, setValidName] = React.useState(null)
	const [walletNameValue, setWalletNameValue] = React.useState('')
	const [showErrorName, setShowErrorName] = React.useState(true)
	const [passwordRepeat, setPasswordRepeat] = React.useState('')
	const [passwordRepeatValid, setPasswordRepeatValid] = React.useState(null)
	const [disabledBtn, setDisabledBtn] = React.useState(true)
	const navigate = useNavigate()
	const dispatch = useDispatch()

	React.useEffect(() => {
		if (validName && passwordRepeatValid) {
			setDisabledBtn(false)
		} else {
			setDisabledBtn(true)
		}
	}, [validName, passwordRepeatValid])

	React.useEffect(() => {
		if (passwordRepeat !== '' && passwordInit !== '') {
			if (passwordInit === passwordRepeat) {
				setPasswordRepeatValid(true)
				dispatch(setPassword(passwordInit))
			} else {
				dispatch(setPassword(''))
				setPasswordRepeatValid(false)
			}
		}
	}, [passwordRepeat, passwordInit])

	React.useEffect(() => {
		if (walletNameValue !== '') {
			if (walletNameValue.length > 1 && walletNameValue.length <= 40) {
				setValidName(true)
				setShowErrorName(true)
			} else {
				setValidName(false)
				setShowErrorName(false)
			}
			dispatch(setWalletName(walletNameValue))
		}
	}, [walletNameValue])

	React.useEffect(() => {
		const subscription = BackHandler.addEventListener(
			'hardwareBackPress',
			function () {
				if (navigate) {
					navigate(-1)
					return true
				}
				return false
			}
		)

		return () => subscription.remove()
	}, [])
	return (
		<View style={{ flex: 1, paddingHorizontal: 24 }}>
			<Header title='Create Wallet' />
			<WalletText style={{ marginBottom: 20 }}>
				Your mnemonic phrase is encrypted and stored safety on your device. Only
				you have full access to your assets.
			</WalletText>
			<WalletInput
				styleInput={
					validName
						? { borderColor: THEME.SUCCESS }
						: !validName && walletNameValue !== ''
						? { borderColor: THEME.RED }
						: {}
				}
				value={walletNameValue}
				setValue={setWalletNameValue}
				style={{ marginBottom: 15 }}
				placeholder='Wallet Name'
			/>
			{!showErrorName && (
				<WalletText
					fw='bold'
					size='s'
					color='red'
					style={{ marginBottom: 10, top: -5 }}>
					Wallet name requires at least 1 and at most 40 letters
				</WalletText>
			)}
			<PasswordInput />
			<WalletInput
				password
				styleInput={
					passwordRepeatValid
						? { borderColor: THEME.SUCCESS }
						: !passwordRepeatValid && passwordRepeat !== ''
						? { borderColor: THEME.RED }
						: {}
				}
				value={passwordRepeat}
				setValue={setPasswordRepeat}
				placeholder='Repeat password'
			/>
			<WalletButton
				to={'/create-submit'}
				disabled={disabledBtn}
				icon='wallet'
				style={{ marginTop: 'auto', marginBottom: 25 }}>
				Create Personal wallet
			</WalletButton>
		</View>
	)
}
