import React from 'react'
import { View, ScrollView, Image } from 'react-native'
import { SvgIcon } from './../../Components/svg/svg'
import { Header } from '../../Components'
import 'react-native-get-random-values'
import { entropyToMnemonic } from 'bip39'
import { WalletButton, WalletText } from './../../Components/UI'
import generateWallet from './../../../services/funcWallet/generateAddress'
import { useDispatch } from 'react-redux'
import {
	setPrivateKey,
	setPhrase,
	setWalletAddress,
} from '../../store/slices/walletSlice'
import { useNavigate } from 'react-router-native'

export const TakeNoteBook = () => {
	const navigate = useNavigate()
	const [loader, setLoader] = React.useState(false)
	const [timeoutId, setTimeoutId] = React.useState(null)

	React.useEffect(() => {
		return () => clearTimeout(timeoutId)
	}, [])

	const dispatch = useDispatch()

	const createPhrase = () => {
		setLoader(true)
		setTimeoutId(
			setTimeout(() => {
				async function generateWords() {
					const entropy = await crypto.getRandomValues(new Uint8Array(16))
					const wallet = await generateWallet(entropyToMnemonic(entropy))
					dispatch(setPrivateKey(wallet.privateKey))
					dispatch(setWalletAddress(wallet.address))
					dispatch(setPhrase(entropyToMnemonic(entropy)))
					navigate('/copy-words')
					setLoader(false)
				}
				generateWords()
				clearTimeout(timeoutId)
			}, 50)
		)
	}

	const createWallet = () => {
		if (!loader) createPhrase()
	}

	return (
		<ScrollView
			contentContainerStyle={{
				flex: 1,
				alignItems: 'center',
				paddingHorizontal: 24,
			}}>
			<Header title='Back Up Wallet' />
			<SvgIcon type='notebook' style={{ marginTop: 20 }} />
			<WalletText
				style={{ marginTop: 30, marginBottom: 50 }}
				fw='bold'
				size='m'>
				Take your notebook
			</WalletText>
			<View style={{ width: '100%', flexGrow: 1, paddingBottom: 25 }}>
				<WalletText>
					Please write the mnemonic phrase on the paper and store it safely.{' '}
					{'\n'}
					{'\n'}You mnemonic phrase consists of 12-24 words. Anyone with your
					mnemonic phrase can access all your assets, so please store it safety.
				</WalletText>
				<WalletButton
					style={{ marginTop: 'auto' }}
					icon='arrow-right'
					onPress={createWallet}
					iconPos='right'
					loading={loader}>
					Back Up
				</WalletButton>
			</View>
		</ScrollView>
	)
}
