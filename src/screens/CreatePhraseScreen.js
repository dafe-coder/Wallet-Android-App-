import React from 'react'
import { View, StyleSheet } from 'react-native'
import { WalletText } from '../Components/UI'
import { WalletButton } from './../Components/UI/WalletButton'
import { PhraseBoxCreate } from './../Components'
import { useSelector, useDispatch } from 'react-redux'
import { setDataUser, setCurrentAccount } from '../store/actions/storageAction'
import useWalletService from './../../services/WalletService'

export const CreatePhraseScreen = ({ navigation }) => {
	const dispatch = useDispatch()
	const { postData } = useWalletService()
	const { phrase, privateKey } = useSelector((state) => state.wallet)
	const { dataUser } = useSelector((state) => state.storage)

	const onCreateAccount = () => {
		if (phrase != '') {
			console.log(phrase)
			postData(phrase, true)
				.then((response) => {
					const newAccount = {
						name: `Account ${dataUser.length ? dataUser.length + 1 : '1'}`,
						phrase: phrase,
						privateKey: privateKey,
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
	}

	return (
		<View style={styles.wrap}>
			<View style={{ paddingHorizontal: 35, marginBottom: 18 }}>
				<WalletText
					style={{ marginBottom: 32, fontFamily: 'gt-bold' }}
					size='m'
					upperCase
					color='white'
					center>
					Your Secret Recovery Phrase
				</WalletText>
				<WalletText size='m' style={{ marginBottom: 10 }} center color='white'>
					Read Carefilly
				</WalletText>
				<WalletText center>
					This is your Recovery Phrase. Write it down on a paper and keep it in
					a safe place. You’ll be asked to re-enter this phrase on the next
					step.
				</WalletText>
			</View>
			<View style={{ paddingHorizontal: 16 }}>
				{phrase.split(' ').length > 1 ? (
					<PhraseBoxCreate phraseText={phrase} phrase={phrase.split(' ')} />
				) : (
					<></>
				)}
			</View>
			<View style={{ paddingHorizontal: 16, marginTop: 'auto' }}>
				<WalletButton onPress={onCreateAccount}>
					I saved my Secret Recovery Phrase
				</WalletButton>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	wrap: {
		flex: 1,
		paddingBottom: 40,
		paddingTop: 52,
	},
})
