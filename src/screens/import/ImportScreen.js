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
	clearChooseAssets,
} from '../../store/actions/storageAction'
import 'react-native-get-random-values'
import generateWallet from './../../../services/funcWallet/generateAddress'
import { setPhrase } from '../../store/actions/walletActions'
import createName from '../../../services/funcWallet/createName'
import { faker } from '@faker-js/faker'

import { LoadingText } from '../../Components/Loader'

export const ImportScreen = ({ navigation }) => {
	const dispatch = useDispatch()
	const { dataUser } = useSelector((state) => state.storage)

	const [btnDisabled, setBtnDisabled] = React.useState(true)
	const [value, setValue] = React.useState('')
	const [onClick, setOnClick] = React.useState(false)
	const [timeoutID, setTimeoutId] = React.useState(null)

	const validPhrase = (text) => {
		let textArr = text.trim().split(' ')
		if (
			textArr.length == 12 ||
			textArr.length == 15 ||
			textArr.length == 24 ||
			(text !== '' && textArr.length < 2 && text.length === 64)
		) {
			setBtnDisabled(false)
		} else {
			setBtnDisabled(true)
		}
	}

	React.useEffect(() => {
		if (value !== '' && value.length > 2) {
			validPhrase(value)
		}
	}, [value])

	const onImport = () => {
		if (!onClick && !btnDisabled) {
			dispatch(clearChooseAssets())
			setOnClick(true)
			setTimeoutId(
				setTimeout(() => {
					let privateKeyString =
						value.trim().split(' ').length > 2
							? generateWallet(value)
							: btoa(value)
					const newAccount = {
						name: createName(dataUser),
						phrase: value.trim().split(' ').length > 2 ? btoa(value) : '',
						privateKey: privateKeyString,
						avatar: faker.image.abstract(160, 160, true),
					}
					dispatch(setClearDataUser())
					dispatch(setCurrentAccount(createName(dataUser)))
					dispatch(setDataUser(newAccount))
					dispatch(setPhrase(''))
					setOnClick(false)
					setTimeout(() => {
						navigation.navigate('CreatePassword')
					}, 50)
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
						styleInput={[
							value !== '' && btnDisabled && { borderBottomColor: 'red' },
						]}
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
					{onClick ? <LoadingText /> : 'Import'}
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