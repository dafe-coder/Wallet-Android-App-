import React, { useRef, useState, useEffect } from 'react'
import { View, Text, Keyboard } from 'react-native'
import { WalletButton } from './../Components/UI/WalletButton'
import { THEME } from './../Theme'
import { AccountCard } from './../Components/AccountCard'
import { WalletBottomSheet } from './../Components/BottomSheet'
import { DeleteWallet } from '../Components/modal'
import { useDispatch, useSelector } from 'react-redux'
import {
	setDeleteAccount,
	setCurrentAccount,
} from '../store/actions/storageAction'
export const EditProfileScreen = ({ navigation }) => {
	const dispatch = useDispatch()
	const { currentAccount, dataUser } = useSelector((state) => state.storage)
	const deleteRef = useRef(null)
	const [isKeyboardVisible, setKeyboardVisible] = useState(false)
	const [timeoutId, setTimeoutId] = useState()

	useEffect(() => {
		const keyboardDidShowListener = Keyboard.addListener(
			'keyboardDidShow',
			() => {
				setKeyboardVisible(true) // or some other action
			}
		)
		const keyboardDidHideListener = Keyboard.addListener(
			'keyboardDidHide',
			() => {
				setKeyboardVisible(false) // or some other action
			}
		)

		return () => {
			keyboardDidHideListener.remove()
			keyboardDidShowListener.remove()
			clearTimeout(timeoutId)
		}
	}, [])
	const onOpenDeleteModal = () => {
		Keyboard.dismiss()
		if (isKeyboardVisible) {
			setTimeoutId(
				setTimeout(() => {
					deleteRef.current?.expand()
				}, 400)
			)
		} else {
			deleteRef.current?.expand()
		}
	}

	const onCloseDeleteModal = () => {
		deleteRef.current?.close()
	}

	const onDelete = () => {
		deleteRef.current?.close()
		if (dataUser.length >= 1) {
			dispatch(setDeleteAccount(currentAccount))
			dispatch(setCurrentAccount(dataUser[0].name))
		} else {
			dispatch(setDeleteAccount(currentAccount))
			dispatch(setCurrentAccount(''))
			navigation.navigate('Unlock')
		}
	}

	return (
		<View style={{ paddingHorizontal: 16, paddingTop: 29 }}>
			<AccountCard edit style={{ marginBottom: 15 }} />
			<WalletButton type='border' onPress={onOpenDeleteModal}>
				<Text style={{ color: THEME.RED }}>delete wallet</Text>
			</WalletButton>
			<WalletBottomSheet ref={deleteRef} snapPoints={['55%']}>
				<DeleteWallet onDelete={onDelete} onClose={onCloseDeleteModal} />
			</WalletBottomSheet>
		</View>
	)
}
