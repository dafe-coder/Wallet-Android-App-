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
	setClearDataUser,
	setCurrentAccount,
	clearChooseAssets,
} from '../../store/actions/storageAction'
import 'react-native-get-random-values'
import generateWallet from './../../../services/funcWallet/generateAddress'
import { setPhrase } from '../../store/actions/walletActions'
import createName from '../../../services/funcWallet/createName'
import { WalletModal, RestoreWallet } from '../../Components/modal'
import { faker } from '@faker-js/faker'
import { LoadingText } from '../../Components/Loader'

export const PhraseScreen = ({ navigation, route }) => {
	const from = route.params !== undefined ? route.params.from : undefined
	const dispatch = useDispatch()
	const { dataUser } = useSelector((state) => state.storage)
	const [btnDisabled, setBtnDisabled] = useState(true)
	const [onClick, setOnClick] = useState(false)
	const [value, setValue] = React.useState('')
	const [titleBtn, setTitleBtn] = useState('Import')
	const [lastModal, setLastModal] = useState(false)
	const [isVisible, setIsVisible] = useState(false)
	const [timeoutID, setTimeoutId] = React.useState(null)
	React.useEffect(() => {
		return () => {
			clearTimeout(timeoutID)
		}
	}, [])

	useEffect(() => {
		if (from !== undefined && from === 'backupRestore') {
			navigation.setOptions({
				title: 'Restore another wallet',
			})
			setTitleBtn('Restore')
		}
	}, [navigation, route])
	const createAccount = () => {
		setOnClick(true)
		setTimeoutId(
			setTimeout(() => {
				dispatch(clearChooseAssets())
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
				navigation.navigate('CreatePassword')
			}, 100)
		)
	}
	const submitRestore = () => {
		if (!onClick && from !== undefined && from === 'backupRestore') {
			setIsVisible(true)
		} else if (!onClick && !btnDisabled) {
			createAccount()
		}
	}

	const onDecline = () => {
		setIsVisible(false)
		setLastModal(false)
	}

	const restoreWallet = () => {
		onDecline()
		if (!onClick && !btnDisabled) {
			createAccount()
		}
	}

	return (
		<TouchableWithoutFeedback
			onPress={() => Keyboard.dismiss()}
			accessible={false}>
			<View style={styles.body}>
				<View>
					<PhraseBox
						style={{ paddingHorizontal: 24 }}
						text={value}
						setText={setValue}
						setBtnDisabled={setBtnDisabled}
						paste
					/>
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
						{onClick ? <LoadingText /> : titleBtn}
					</WalletButton>
				</View>
				<WalletModal isVisible={isVisible}>
					<RestoreWallet
						onConfirmLast={restoreWallet}
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
