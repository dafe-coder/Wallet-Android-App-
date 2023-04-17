import React from 'react'
import { View, StyleSheet } from 'react-native'
import { WalletText } from '../Components/UI'
import { WalletButton } from './../Components/UI/WalletButton'
import { PhraseBoxCreate } from './../Components'
import { useSelector, useDispatch } from 'react-redux'
import {
	setDataUser,
	setCurrentAccount,
	clearChooseAssets,
	setClearDataUser,
} from '../store/actions/storageAction'
import { faker } from '@faker-js/faker'
import createName from '../../services/funcWallet/createName'
import { setPhrase, setNewWallet } from './../store/actions/walletActions'
export const CreatePhraseScreen = ({ navigation }) => {
	const dispatch = useDispatch()
	const { phrase, privateKey } = useSelector((state) => state.wallet)
	const { dataUser } = useSelector((state) => state.storage)

	const onCreateAccount = () => {
		if (phrase != '') {
			dispatch(setNewWallet(true))
			const newAccount = {
				name: createName(dataUser),
				phrase: btoa(phrase),
				privateKey: btoa(privateKey),
				avatar: faker.image.abstract(160, 160, true),
			}
			dispatch(setClearDataUser())
			dispatch(setCurrentAccount(createName(dataUser)))
			dispatch(clearChooseAssets())
			dispatch(setDataUser(newAccount))
			dispatch(setPhrase(''))
			navigation.navigate('CreatePassword')
		}
	}

	return (
		<View style={styles.wrap}>
			<View style={{ paddingHorizontal: 35, marginBottom: 24 }}>
				<WalletText
					style={{ marginBottom: 30, fontFamily: 'mt-semi-bold', fontSize: 20 }}
					size='m'
					color='dark'
					center>
					Your Secret Recovery Phrase
				</WalletText>
				<WalletText
					color='gold'
					size='m'
					style={{
						fontFamily: 'mt-semi-bold',
						marginBottom: 10,
						color: '#8247E5',
					}}
					center>
					Read Carefully
				</WalletText>
				<WalletText center size='m'>
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
					I saved my Secret Phrase
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
