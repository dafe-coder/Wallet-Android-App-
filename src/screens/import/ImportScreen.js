import React from 'react'
import { ScrollView, View, Image, StyleSheet } from 'react-native'
import { WalletInput, WalletText, ButtonCopy } from '../../Components/UI'
import { Card } from '../../Components'
import { WalletButton } from './../../Components/UI/WalletButton'

import { useDispatch, useSelector } from 'react-redux'
import {
	setDataUser,
	setClearDataUser,
	setCurrentAccount,
} from '../../store/actions/storageAction'
import useWalletService from '../../../services/WalletService'
import 'react-native-get-random-values'
import generateWallet from './../../../services/funcWallet/generateAddress'
import { setLoader, setPhrase } from '../../store/actions/walletActions'
import createName from '../../../services/funcWallet/createName'

export const ImportScreen = ({ navigation }) => {
	const dispatch = useDispatch()
	const { postData } = useWalletService()
	const { dataUser } = useSelector((state) => state.storage)

	const [btnDisabled, setBtnDisabled] = React.useState(true)
	const [value, setValue] = React.useState('')
	const [active, setActive] = React.useState(true)
	const [onClick, setOnClick] = React.useState(false)
	const [timeoutID, setTimeoutId] = React.useState(null)

	const validPhrase = (text) => {
		let textArr = text.trim().split(' ')
		if (
			textArr.length == 12 ||
			textArr.length == 15 ||
			(textArr.length == 24 && text !== '')
		) {
			setActive(true)
			setBtnDisabled(false)
		} else {
			setBtnDisabled(true)
			setActive(false)
		}
	}

	React.useEffect(() => {
		if (value !== '' && value.trim().split(' ').length > 2) {
			validPhrase(value)
		} else {
			setBtnDisabled(true)
		}
	}, [value])

	const onImport = () => {
		if (!onClick && !btnDisabled) {
			dispatch(setLoader(true))
			setOnClick(true)
			setTimeoutId(
				setTimeout(() => {
					let privateKeyString =
						value != '' ? (privateKeyString = generateWallet(value)) : ''
					postData(value, false)
						.then((response) => {
							dispatch(setLoader(false))
							const newAccount = {
								name: createName(dataUser),
								phrase: btoa(value),
								privateKey: privateKeyString,
								address: response.address,
							}
							dispatch(setClearDataUser())
							dispatch(setCurrentAccount(createName(dataUser)))
							dispatch(setDataUser(newAccount))
							dispatch(setPhrase(''))
							setOnClick(false)
							setTimeout(() => {
								navigation.navigate('CreatePassword')
							}, 50)
						})
						.catch((error) => console.log('error', error))
				}, 50)
			)
		}
	}

	React.useEffect(() => {
		return () => {
			clearTimeout(timeoutID)
		}
	}, [])

	return (
		<ScrollView
			contentContainerStyle={{
				flexGrow: 1,
				paddingVertical: 40,
				justifyContent: 'space-between',
			}}>
			<View>
				<View style={{ paddingHorizontal: 24 }}>
					<WalletInput
						styleInput={[!active && { borderBottomColor: 'red' }]}
						setValue={setValue}
						value={value}
						placeholder={`Enter or paste here the 12 or 24 words ${'\n'}from your recovery phrase.`}
					/>
					<WalletText
						style={{ fontSize: 12, lineHeight: 14, marginTop: 10 }}
						color='disabled'>
						Each word should be separated by a single space. {'\n'}No numbers,
						special characters or line breaks.
					</WalletText>
					<View style={{ alignItems: 'center', marginTop: 40 }}>
						<ButtonCopy setText={setValue} paste />
					</View>
				</View>
				<View>
					<Card
						styleBody={{ paddingVertical: 30 }}
						imgSize={{ top: -20 }}
						size='sm'
						style={{ marginTop: 60 }}>
						<WalletText center fw='bold' size='m' style={{ marginBottom: 15 }}>
							Supported wallets
						</WalletText>
						<View
							style={{
								flexDirection: 'row',
								marginTop: 10,
								justifyContent: 'center',
							}}>
							<Image
								style={[styles.logo]}
								resizeMode='contain'
								source={require('../../../assets/logo/meta.png')}
							/>
							<Image
								style={[styles.logo]}
								resizeMode='contain'
								source={require('../../../assets/logo/mask.png')}
							/>
							<Image
								style={[styles.logo]}
								resizeMode='contain'
								source={require('../../../assets/logo/enjin.png')}
							/>
							<Image
								style={[styles.logo]}
								resizeMode='contain'
								source={require('../../../assets/logo/vector.png')}
							/>
							<Image
								style={[styles.logo]}
								resizeMode='contain'
								source={require('../../../assets/logo/exodus.png')}
							/>
							<Image
								style={[styles.logo, { marginRight: 0 }]}
								resizeMode='contain'
								source={require('../../../assets/logo/dots.png')}
							/>
						</View>
					</Card>
				</View>
			</View>
			<View style={{ alignItems: 'center', marginTop: 40 }}>
				<WalletButton disabled={btnDisabled} size='m' onPress={onImport}>
					Import
				</WalletButton>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	logo: {
		height: 32,
		width: 32,
		marginRight: 11,
	},
})
