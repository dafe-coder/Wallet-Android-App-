import React, { useState, useEffect } from 'react'
import {
	View,
	TouchableOpacity,
	Keyboard,
	TouchableWithoutFeedback,
} from 'react-native'
import { WalletText, WalletTitle, WalletButton, WalletInput } from '../UI'
import { useDispatch, useSelector } from 'react-redux'
import { THEME } from '../../Theme'
import {
	setLoader,
	setPhrase,
	setPrivateKey,
} from '../../store/actions/walletActions'
import {
	setCurrentAccount,
	setDataUser,
} from '../../store/actions/storageAction'
import generateWallet from '../../../services/funcWallet/generateAddress'
import { faker } from '@faker-js/faker'
import createName from '../../../services/funcWallet/createName'
import { BottomSheetScrollView } from '@gorhom/bottom-sheet'

export const ImportAccount = ({ navigation, onCloseImport, style }) => {
	const dispatch = useDispatch()
	const { dataUser } = useSelector((state) => state.storage)
	const { phrase, privateKey } = useSelector((state) => state.wallet)
	const [btnDisabled, setBtnDisabled] = useState(true)
	const [onClick, setOnClick] = useState(false)
	const [active, setActive] = useState(true)
	const [timeoutId, setTimeoutId] = useState(null)
	const [success, setSuccess] = useState('default')
	const [text, setText] = useState('')
	const [nameValid, setNameValid] = useState(true)
	const [name, setName] = useState('')

	const submitRestore = () => {
		if (!onClick && !btnDisabled) {
			dispatch(setLoader(true))
			setOnClick(true)
			setTimeoutId(
				setTimeout(() => {
					onCloseImport()
					let privateKeyString = phrase != '' ? generateWallet(phrase) : ''
					const newAccount = {
						name: name != '' ? name : createName(dataUser),
						phrase: btoa(phrase),
						privateKey: privateKey != '' ? btoa(privateKey) : privateKeyString,
						avatar: faker.image.abstract(160, 160, true),
					}
					dispatch(setDataUser(newAccount))
					dispatch(setCurrentAccount(name != '' ? name : createName(dataUser)))
					dispatch(setLoader(false))
					setOnClick(false)
					navigation.navigate('Home')
				}, 50)
			)
		}
	}

	const validKey = (text) => {
		let textArr = text.trim().split(' ')
		if (textArr.length == 1 && text.length > 40) {
			setSuccess('success')
			setBtnDisabled(false)
			dispatch(setPrivateKey(text))
		} else {
			setBtnDisabled(true)
			setSuccess('error')
		}
	}

	useEffect(() => {
		if (text !== '' && !active) {
			validPhrase(text)
		} else if (text !== '' && active) {
			validKey(text)
		}
	}, [text, active])

	useEffect(() => {
		return () => clearTimeout(timeoutId)
	}, [])

	const validPhrase = (text) => {
		let textArr = text.trim().split(' ')
		if (
			(!active && textArr.length == 12) ||
			textArr.length == 15 ||
			(textArr.length == 24 && text !== '')
		) {
			setSuccess('success')
			setBtnDisabled(false)
			dispatch(setPhrase(text))
		} else {
			setBtnDisabled(true)
			setSuccess('error')
		}
	}

	useEffect(() => {
		if (name != '' && name.length <= 20) {
			setNameValid(true)
		} else if (name != '') {
			setNameValid(false)
		}
	}, [name])

	return (
		<BottomSheetScrollView>
			<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
				<View
					style={[
						{
							flex: 1,
							justifyContent: 'space-between',
						},
						style,
					]}>
					<View>
						<WalletTitle style={{ marginBottom: 16 }}>
							Add Another Account
						</WalletTitle>
						<WalletText
							center
							style={{ marginBottom: 38, marginHorizontal: 25 }}>
							Imported accounts will show as another account in your wallet. The
							next time you recover a wallet using your Secret Recovery Phrase
							on a new device, any imported accounts will not be present until
							manually imported on your new wallet.
						</WalletText>
						<View style={{ flexDirection: 'row', paddingHorizontal: 23 }}>
							<TouchableOpacity
								activeOpacity={0.7}
								onPress={() => setActive(true)}>
								<WalletText
									color={active ? 'dark' : 'disabled'}
									style={{ marginBottom: 7 }}>
									Private Key
								</WalletText>
							</TouchableOpacity>
							<TouchableOpacity
								activeOpacity={0.7}
								onPress={() => setActive(false)}>
								<WalletText
									color={!active ? 'dark' : 'disabled'}
									style={{ marginLeft: 15 }}>
									Secret Recovery phrase
								</WalletText>
							</TouchableOpacity>
						</View>
						<WalletInput
							value={name}
							setValue={setName}
							placeholder='Account Name (Optional)'
							style={{ marginHorizontal: 0, marginBottom: 12 }}
							styleInput={
								nameValid ? {} : { borderWidth: 1, borderColor: THEME.RED }
							}
						/>
						<WalletInput
							styleInput={[
								success == 'error'
									? { borderColor: THEME.RED }
									: success == 'success'
									? { borderColor: THEME.DARK_TEXT }
									: {},
							]}
							value={text}
							setValue={setText}
							placeholder={active ? 'Private Key' : 'Secret Recovery phrase'}
						/>
					</View>
					<WalletButton
						disabled={btnDisabled}
						style={{ marginTop: 40 }}
						onPress={submitRestore}>
						Import Account
					</WalletButton>
				</View>
			</TouchableWithoutFeedback>
		</BottomSheetScrollView>
	)
}
