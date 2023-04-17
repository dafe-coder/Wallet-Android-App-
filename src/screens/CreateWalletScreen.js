import React from 'react'
import { View, Dimensions, Image, StyleSheet, ScrollView } from 'react-native'
import { Card } from '../Components'
import { GenerateItem } from './../Components/GenerateItem'
import { WalletButton } from './../Components/UI/WalletButton'
import { useDispatch, useSelector } from 'react-redux'
import { entropyToMnemonic } from 'bip39'
import { setNewWallet } from '../store/actions/walletActions'
import {
	setDataUser,
	setClearDataUser,
	clearChooseAssets,
	setCurrentAccount,
	setBackup,
} from '../store/actions/storageAction'
import generateWallet from '../../services/funcWallet/generateAddress'
import { faker } from '@faker-js/faker'
import createName from '../../services/funcWallet/createName'

const width = Dimensions.get('window').width

export const CreateWalletScreen = ({ navigation }) => {
	const dispatch = useDispatch()
	const { dataUser } = useSelector((state) => state.storage)
	const [load1, setLoad1] = React.useState(true)
	const [loadFirst, setLoadFirst] = React.useState(true)
	const [shownBtn, setShownBtn] = React.useState(false)

	React.useEffect(() => {
		async function generateWords() {
			dispatch(setNewWallet(true))
			dispatch(setClearDataUser())
			dispatch(setBackup(false))
			const entropy = await crypto.getRandomValues(new Uint8Array(16))
			const privateKey = await generateWallet(entropyToMnemonic(entropy))
			setLoad1(false)
			const newAccount = {
				name: createName(dataUser),
				phrase: btoa(entropyToMnemonic(entropy)),
				privateKey: privateKey,
				avatar: faker.image.abstract(160, 160, true),
			}
			dispatch(setCurrentAccount(createName(dataUser)))
			dispatch(clearChooseAssets())
			dispatch(setDataUser(newAccount))
		}
		generateWords()
	}, [])

	React.useEffect(() => {
		if (!load1) {
			setLoadFirst(false)
			setTimeout(() => {
				setShownBtn(true)
			}, 9000)
		}
	}, [load1])

	React.useEffect(() => {
		navigation.setOptions({
			headerTransparent: true,
			headerStyle: {
				backgroundColor: 'transparent',
			},
		})
	}, [navigation])

	return (
		<ScrollView contentContainerStyle={{ paddingTop: 170, flexGrow: 1 }}>
			<Card
				imgSize={{ height: width * 5 }}
				size='xl'
				styleBody={[{ height: 490 }, styles.body]}>
				<GenerateItem
					first
					loadWallet={loadFirst}
					mb
					title='Generating your new'
					image={require('../../assets/finger.png')}
				/>
				<GenerateItem
					loadWallet={loadFirst}
					mb
					title={`Accumulating a large${'\n'}amount of random numbers`}
					image={require('../../assets/like.png')}
					delay={0}
				/>
				<GenerateItem
					loadWallet={loadFirst}
					mb
					title={`Storing your wallet with secure ${'\n'} encryption in your phone`}
					image={require('../../assets/strong.png')}
					delay={3000}
				/>
				<GenerateItem
					loadWallet={loadFirst}
					mb
					title={`And we're done.`}
					image={require('../../assets/fire.png')}
					delay={6000}
				/>
			</Card>
			<View
				style={[
					{ alignItems: 'center', marginTop: 60, marginBottom: 40 },
					shownBtn ? { display: 'flex' } : { display: 'none' },
				]}>
				<WalletButton
					onPress={() => navigation.navigate('CreatePassword')}
					size='m'>
					Continue
				</WalletButton>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	body: {
		justifyContent: 'flex-start',
	},
})
