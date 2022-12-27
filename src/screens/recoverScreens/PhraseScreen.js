import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { THEME } from '../../Theme'
import { WalletText, WalletButton } from '../../Components/UI/'
import { PhraseBox } from './../../Components/PhraseBox'
import { useDispatch, useSelector } from 'react-redux'
import {
	setDataUser,
	setCurrentAccount,
} from '../../store/actions/storageAction'
import useWalletService from '../../../services/WalletService'

export const PhraseScreen = ({ navigation }) => {
	const dispatch = useDispatch()
	const { postData } = useWalletService()
	const { dataUser } = useSelector((state) => state.storage)
	const { phrase } = useSelector((state) => state.wallet)
	const [btnDisabled, setBtnDisabled] = useState(false)

	const submitRestore = () => {
		// dispatch(setDataUser())
		postData(phrase, false)
			.then((response) => {
				const newAccount = {
					name: `Account ${dataUser.length ? dataUser.length + 1 : '1'}`,
					phrase: phrase,
					privateKey: '',
					address: response.address,
				}
				dispatch(
					setCurrentAccount(
						`Account ${dataUser.length ? dataUser.length + 1 : '1'}`
					)
				)
				dispatch(setDataUser(newAccount))
				navigation.navigate('CreatePassword')
			})
			.catch((error) => console.log('error', error))
	}

	useEffect(() => {
		console.log(dataUser)
	}, [dataUser])

	return (
		<View style={styles.body}>
			<View>
				<WalletText style={{ marginBottom: 40 }} color='white' center size='m'>
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
