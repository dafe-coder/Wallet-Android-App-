import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { Header } from './../../Components/'
import {
	WalletButton,
	WalletInput,
	WalletText,
	PasswordInput,
	ButtonCopySm,
} from './../../Components/UI/'
import { THEME } from '../../Theme'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router'
import {
	setData,
	setCurrentAccount,
	setPassword,
} from '../../store/slices/storageSlice'
import generateWallet from '../../../services/funcWallet/generateAddress'

export const ImportData = () => {
	const navigate = useNavigate()
	const { state } = useLocation()
	const dispatch = useDispatch()
	const { dataUser } = useSelector((state) => state.storage)
	const { passwordInit } = useSelector((state) => state.wallet)
	const [walletName, setWalletName] = React.useState('')
	const [validName, setValidName] = React.useState(null)
	const [showErrorName, setShowErrorName] = React.useState(true)
	const [showErrorNameSame, setShowErrorNameSame] = React.useState(null)
	const [phrase, setPhrase] = React.useState('')
	const [passwordRepeat, setPasswordRepeat] = React.useState('')
	const [passwordRepeatValid, setPasswordRepeatValid] = React.useState(null)
	const [phraseValid, setPhraseValid] = React.useState(null)
	const [disabledBtn, setDisabledBtn] = React.useState(true)
	const [loadBtn, setLoadBtn] = React.useState(false)

	React.useEffect(() => {
		if (phraseValid && validName && passwordRepeatValid) {
			setDisabledBtn(false)
		} else {
			setDisabledBtn(true)
		}
	}, [phraseValid, validName, passwordRepeatValid])

	React.useEffect(() => {
		let count = parseInt(state.match(/\d+/))
		if (isNaN(count)) {
			if (phrase.trim().split(' ').length === 1 && phrase.length === 64) {
				setPhraseValid(true)
			} else {
				setPhraseValid(false)
			}
		} else {
			if (phrase.trim().split(' ').length === count) {
				setPhraseValid(true)
			} else {
				setPhraseValid(false)
			}
		}
	}, [state, phrase])

	React.useEffect(() => {
		if (passwordRepeat !== '' && passwordInit !== '') {
			if (passwordInit === passwordRepeat) {
				setPasswordRepeatValid(true)
			} else {
				setPasswordRepeatValid(false)
			}
		}
	}, [passwordRepeat, passwordInit])

	React.useEffect(() => {
		if (walletName !== '') {
			if (walletName.length > 1 && walletName.length <= 40) {
				if (dataUser !== null) {
					const nameSearch = dataUser.filter((item) => item.name === walletName)
					if (nameSearch.length) {
						setShowErrorNameSame(true)
						setValidName(false)
					} else {
						setShowErrorNameSame(false)
						setValidName(true)
					}
				} else {
					setValidName(true)
				}
				setShowErrorName(true)
			} else {
				setValidName(false)
				setShowErrorName(false)
			}
		}
	}, [walletName])

	const addedNewAccount = () => {
		if (!loadBtn) {
			setLoadBtn(true)
			setTimeout(() => {
				const user = {
					name: walletName,
					phrase: phrase.split(' ').length > 2 ? btoa(phrase) : '',
					privateKey:
						phrase.split(' ').length === 1
							? btoa(phrase)
							: generateWallet(phrase).privateKey,
					address: '',
				}
				dispatch(setData(user))
				dispatch(setCurrentAccount(walletName))
				dispatch(setPassword(passwordInit))
				navigate('/import-end')
				setLoadBtn(false)
			}, 50)
		}
	}

	return (
		<ScrollView
			keyboardShouldPersistTaps='handled'
			contentContainerStyle={{
				flex: 1,
				paddingHorizontal: 24,
				marginBottom: 25,
			}}>
			<Header title='Restore Wallet' />
			<View>
				<WalletInput
					styleInput={
						validName
							? { borderColor: THEME.SUCCESS }
							: !validName && walletName !== ''
							? { borderColor: THEME.RED }
							: {}
					}
					style={{ marginBottom: 15 }}
					placeholder='Wallet Name'
					value={walletName}
					setValue={setWalletName}
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
				{showErrorNameSame && (
					<WalletText
						fw='bold'
						size='s'
						color='red'
						style={{ marginBottom: 10, top: -5 }}>
						You are already using this name for wallet
					</WalletText>
				)}
				<View>
					<WalletInput
						styleInput={
							phraseValid
								? { borderColor: THEME.SUCCESS }
								: !phraseValid && phrase !== ''
								? { borderColor: THEME.RED }
								: {}
						}
						value={phrase}
						setValue={setPhrase}
						placeholder='Recovery phrase / private key'
						textarea
						style={{ marginBottom: 15 }}
					/>
					<ButtonCopySm
						paste
						setText={setPhrase}
						style={{ right: 15, bottom: 35 }}
					/>
				</View>
				<PasswordInput />
				<WalletInput
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
					password
				/>
				{!passwordRepeatValid && passwordRepeat !== '' && (
					<WalletText color='red' size='xs' style={{ marginTop: 10 }}>
						Passwords doesn’t match!
					</WalletText>
				)}
			</View>
			<WalletButton
				onPress={addedNewAccount}
				disabled={disabledBtn}
				icon='reload'
				style={{ marginTop: 'auto' }}
				loading={loadBtn}>
				Restore Wallet
			</WalletButton>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	textArea: {
		backgroundColor: THEME.GREEN_BG,
		borderRadius: 16,
		borderColor: THEME.WHITE,
		borderWidth: 1,
		paddingHorizontal: 20,
		paddingVertical: 16,
		paddingTop: 13,
	},
})
