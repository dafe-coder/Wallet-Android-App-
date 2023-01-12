import React, { useState, useEffect } from 'react'
import {
	View,
	StyleSheet,
	TouchableWithoutFeedback,
	Keyboard,
} from 'react-native'
import { THEME } from '../../Theme'
import { WalletText, WalletButton } from '../../Components/UI/'
import { PhraseBox } from './../../Components/PhraseBox'
import { useDispatch, useSelector } from 'react-redux'
import {
	setDataUser,
	setCurrentAccount,
} from '../../store/actions/storageAction'
import useWalletService from '../../../services/WalletService'
import 'react-native-get-random-values'
import generateWallet from './../../../services/funcWallet/generateAddress'
import { setLoader, setPhrase } from '../../store/actions/walletActions'
import { faker } from '@faker-js/faker'
import createName from '../../../services/funcWallet/createName'

export const PhraseScreen = ({ navigation }) => {
	const dispatch = useDispatch()
	const { postData } = useWalletService()
	const { dataUser, password } = useSelector((state) => state.storage)
	const { phrase, privateKey } = useSelector((state) => state.wallet)
	const [btnDisabled, setBtnDisabled] = useState(false)
	const [onClick, setOnClick] = useState(false)
	const [timeoutID, setTimeoutId] = useState(null)
	const submitRestore = () => {
		if (!onClick) {
			setOnClick(true)
			dispatch(setLoader(true))
			setTimeoutId(
				setTimeout(() => {
					let privateKeyString =
						phrase != '' ? (privateKeyString = generateWallet(phrase)) : ''
					postData(phrase != '' ? phrase : privateKey, false)
						.then((response) => {
							const newAccount = {
								name: createName(dataUser),
								phrase: phrase,
								privateKey: privateKey != '' ? privateKey : privateKeyString,
								address: response.address,
								avatar: faker.image.abstract(128, 128, true),
							}
							dispatch(setCurrentAccount(createName(dataUser)))
							dispatch(setDataUser(newAccount))
							password != ''
								? navigation.navigate('ConfirmPassword')
								: navigation.navigate('CreatePassword')
							dispatch(setLoader(false))
							dispatch(setPhrase(''))
							setOnClick(false)
						})
						.catch((error) => console.log('error', error))
				}, 50)
			)
		}
	}

	useEffect(() => {
		return () => {
			clearTimeout(timeoutID)
		}
	}, [])

	return (
		<TouchableWithoutFeedback
			onPress={() => Keyboard.dismiss()}
			accessible={false}>
			<View style={styles.body}>
				<View>
					<WalletText
						style={{ marginBottom: 40 }}
						color='white'
						center
						size='m'>
						Recover a wallet using your Secret {'\n'} Recovery Phrase.
					</WalletText>
					<PhraseBox setBtnDisabled={setBtnDisabled} />
				</View>
				<View
					style={{
						paddingHorizontal: 16,
					}}>
					<WalletButton checked disabled={btnDisabled} onPress={submitRestore}>
						Import Wallet
					</WalletButton>
				</View>
			</View>
		</TouchableWithoutFeedback>
	)
}

const styles = StyleSheet.create({
	logoWrap: {
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 100,
	},
	body: {
		flex: 1,
		paddingTop: 40,
		justifyContent: 'space-between',
		paddingBottom: 40,
	},
	title: {
		marginBottom: 13,
		fontSize: 40,
		lineHeight: 50,
		color: THEME.GOLD,
		textTransform: 'uppercase',
		fontFamily: 'gt-bold',
		textAlign: 'center',
	},
	whiteTitle: {
		color: THEME.WHITE,
	},
})
