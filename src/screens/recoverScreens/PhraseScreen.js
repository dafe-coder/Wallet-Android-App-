import React, { useState } from 'react'
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
import { setLoader } from '../../store/actions/walletActions'
export const PhraseScreen = ({ navigation }) => {
	const dispatch = useDispatch()
	const { postData } = useWalletService()
	const { dataUser, password } = useSelector((state) => state.storage)
	const { phrase, privateKey } = useSelector((state) => state.wallet)
	const [btnDisabled, setBtnDisabled] = useState(false)
	const [onClick, setOnClick] = useState(false)

	const submitRestore = () => {
		if (!onClick) {
			setOnClick(true)
			dispatch(setLoader(true))
			let privateKeyString =
				phrase != '' ? (privateKeyString = generateWallet(phrase)) : ''
			postData(phrase != '' ? phrase : privateKey, false)
				.then((response) => {
					const newAccount = {
						name: `Account ${dataUser.length ? dataUser.length + 1 : '1'}`,
						phrase: phrase,
						privateKey: privateKey != '' ? privateKey : privateKeyString,
						address: response.address,
					}
					dispatch(
						setCurrentAccount(
							`Account ${dataUser.length ? dataUser.length + 1 : '1'}`
						)
					)
					dispatch(setDataUser(newAccount))
					password != ''
						? navigation.navigate('ConfirmPassword')
						: navigation.navigate('CreatePassword')
					dispatch(setLoader(false))
					setOnClick(false)
				})
				.catch((error) => console.log('error', error))
		}
	}

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
