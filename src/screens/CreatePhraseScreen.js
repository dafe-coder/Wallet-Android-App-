import React from 'react'
import { View, StyleSheet } from 'react-native'
import { WalletText } from '../Components/UI'
import { WalletButton } from './../Components/UI/WalletButton'
import { PhraseBoxCreate } from './../Components'
import { useSelector, useDispatch } from 'react-redux'
import { setDataUser, setCurrentAccount } from '../store/actions/storageAction'
import useWalletService from './../../services/WalletService'
import { faker } from '@faker-js/faker'
import createName from '../../services/funcWallet/createName'
import { setPhrase } from './../store/actions/walletActions'

export const CreatePhraseScreen = ({ navigation }) => {
	const dispatch = useDispatch()
	const { postData } = useWalletService()
	const { phrase, privateKey } = useSelector((state) => state.wallet)
	const { dataUser } = useSelector((state) => state.storage)

	const onCreateAccount = () => {
		if (phrase != '') {
			postData(phrase, true)
				.then((response) => {
					const newAccount = {
						name: createName(dataUser),
						phrase: btoa(phrase),
						privateKey: btoa(privateKey),
						address: response.address,
						avatar: faker.image.abstract(160, 160, true),
					}
					dispatch(setCurrentAccount(createName(dataUser)))
					dispatch(setDataUser(newAccount))
					dispatch(setPhrase(''))
					navigation.navigate('CreatePassword')
				})
				.catch((error) => console.log('error', error))
		}
	}

	return (
		<View style={styles.wrap}>
			<View style={{ paddingHorizontal: 35, marginBottom: 18 }}>
				<WalletText
					style={{ marginBottom: 32, fontFamily: 'sf-bold' }}
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
