import React, { useState, useEffect } from 'react'
import {
	View,
	StyleSheet,
	TouchableWithoutFeedback,
	Keyboard,
} from 'react-native'
import { THEME } from '../../Theme'
import { WalletButton } from '../../Components/UI/'
import { PhraseBox } from './../../Components/PhraseBox'
import { useDispatch, useSelector } from 'react-redux'
import {
	setDataUser,
	setCurrentAccount,
} from '../../store/actions/storageAction'
import 'react-native-get-random-values'
import generateWallet from './../../../services/funcWallet/generateAddress'
import { setLoader, setPhrase } from '../../store/actions/walletActions'
import createName from '../../../services/funcWallet/createName'
import { WalletModal, RestoreWallet } from '../../Components/modal'
import { faker } from '@faker-js/faker'

export const PhraseScreen = ({ navigation, route }) => {
	const dispatch = useDispatch()
	const { dataUser } = useSelector((state) => state.storage)
	const { phrase, privateKey } = useSelector((state) => state.wallet)
	const [btnDisabled, setBtnDisabled] = useState(true)
	const [onClick, setOnClick] = useState(false)
	const [timeoutID, setTimeoutId] = useState(null)
	const [titleBtn, setTitleBtn] = useState('Import Wallet')
	const [lastModal, setLastModal] = useState(false)
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		if (route.params && route.params.from === 'backupRestore') {
			navigation.setOptions({
				title: 'Restore another wallet',
			})
			setTitleBtn('Restore')
		}
	}, [navigation, route])

	const submitRestore = () => {
		if (!onClick && route.params && route.params.from === 'backupRestore') {
			setIsVisible(true)
		} else {
			if (!onClick) {
				dispatch(setLoader(true))
				setOnClick(true)
				setTimeoutId(
					setTimeout(() => {
						let privateKeyString =
							phrase != '' ? (privateKeyString = generateWallet(phrase)) : ''
						dispatch(setLoader(false))
						const newAccount = {
							name: createName(dataUser),
							phrase: btoa(phrase),
							privateKey:
								privateKey != '' ? btoa(privateKey) : privateKeyString,
							avatar: faker.image.abstract(160, 160, true),
						}
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
	}

	useEffect(() => {
		return () => {
			clearTimeout(timeoutID)
		}
	}, [])

	const onDecline = () => {
		setIsVisible(false)
		setLastModal(false)
	}

	return (
		<TouchableWithoutFeedback
			onPress={() => Keyboard.dismiss()}
			accessible={false}>
			<View style={styles.body}>
				<View>
					<PhraseBox setBtnDisabled={setBtnDisabled} paste />
				</View>
				<View
					style={{
						paddingHorizontal: 16,
					}}>
					<WalletButton
						size='m'
						type='violet'
						checked
						disabled={btnDisabled}
						onPress={submitRestore}>
						{titleBtn}
					</WalletButton>
				</View>
				<WalletModal isVisible={isVisible}>
					<RestoreWallet
						onConfirm={() => setLastModal(true)}
						onDecline={onDecline}
						last={lastModal}
					/>
				</WalletModal>
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
		paddingTop: '35%',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingBottom: 40,
	},
	title: {
		marginBottom: 13,
		fontSize: 40,
		lineHeight: 50,
		color: THEME.VIOLET,
		textTransform: 'uppercase',
		fontFamily: 'mt-semi-bold',
		textAlign: 'center',
	},
	whiteTitle: {
		color: THEME.WHITE,
	},
})
