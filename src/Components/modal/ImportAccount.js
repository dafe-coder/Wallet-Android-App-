import React, { useState, useEffect } from 'react'
import { View, TouchableOpacity, Keyboard } from 'react-native'
import { WalletText, WalletTitle, WalletButton, WalletInput } from '../UI'
import { useDispatch, useSelector } from 'react-redux'
import useWalletService from '../../../services/WalletService'
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

export const ImportAccount = ({ navigation }) => {
	const dispatch = useDispatch()
	const { postData } = useWalletService()
	const { dataUser } = useSelector((state) => state.storage)
	const { phrase, privateKey } = useSelector((state) => state.wallet)
	const [btnDisabled, setBtnDisabled] = useState(true)
	const [onClick, setOnClick] = useState(false)
	const [active, setActive] = useState(true)
	const [success, setSuccess] = useState('default')
	const [text, setText] = useState('')
	const [name, setName] = useState('')

	const submitRestore = () => {
		if (!onClick && !btnDisabled) {
			setOnClick(true)
			dispatch(setLoader(true))
			postData(phrase != '' ? phrase : privateKey, false)
				.then((response) => {
					let privateKeyString =
						phrase != '' ? (privateKeyString = generateWallet(phrase)) : ''
					const newAccount = {
						name:
							name != ''
								? name
								: `Account ${dataUser.length ? dataUser.length + 1 : '1'}`,
						phrase: phrase,
						privateKey: privateKey != '' ? privateKey : privateKeyString,
						address: response.address,
					}
					dispatch(setDataUser(newAccount))
					dispatch(
						setCurrentAccount(
							name != ''
								? name
								: `Account ${dataUser.length ? dataUser.length + 1 : '1'}`
						)
					)
					dispatch(setLoader(false))
					setOnClick(false)
					navigation.navigate('Wallet')
				})
				.catch((error) => console.log('error', error))
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

	const validPhrase = (text) => {
		let textArr = text.trim().split(' ')
		if (
			(!active && textArr.length == 12) ||
			textArr.length == 15 ||
			textArr.length == 24
		) {
			setSuccess('success')
			setBtnDisabled(false)
			dispatch(setPhrase(text))
		} else {
			setBtnDisabled(true)
			setSuccess('error')
		}
	}

	return (
		<TouchableOpacity
			activeOpacity={1}
			onPress={() => Keyboard.dismiss()}
			style={{
				flex: 1,
				paddingBottom: 39,
				justifyContent: 'space-between',
			}}>
			<View>
				<WalletTitle style={{ marginBottom: 16 }}>
					Add Another Account
				</WalletTitle>
				<WalletText center style={{ marginBottom: 38, marginHorizontal: 25 }}>
					Imported accounts will show as another account in your wallet. The
					next time you recover a wallet using your Secret Recovery Phrase on a
					new device, any imported accounts will not be present until manually
					imported on your new wallet.
				</WalletText>
				<View style={{ flexDirection: 'row' }}>
					<TouchableOpacity activeOpacity={0.7} onPress={() => setActive(true)}>
						<WalletText
							color={active ? 'white-dark' : 'brown'}
							style={{ marginBottom: 7 }}>
							Private Key
						</WalletText>
					</TouchableOpacity>
					<TouchableOpacity
						activeOpacity={0.7}
						onPress={() => setActive(false)}>
						<WalletText
							color={!active ? 'white-dark' : 'brown'}
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
				/>
				<WalletInput
					styleInput={[
						success == 'error'
							? { borderColor: THEME.RED }
							: success == 'success'
							? { borderColor: THEME.BROWN_TEXT }
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
		</TouchableOpacity>
	)
}
