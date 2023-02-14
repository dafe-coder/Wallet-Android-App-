import React, { useRef, useState, useEffect } from 'react'
import { View, Text, Keyboard, TouchableWithoutFeedback } from 'react-native'
import { WalletButton } from './../Components/UI/WalletButton'
import { THEME } from './../Theme'
import { AccountCard } from './../Components/AccountCard'
import { WalletBottomSheet } from './../Components/BottomSheet'
import { DeleteWallet } from '../Components/modal'
import { useDispatch, useSelector } from 'react-redux'
import { setLoader, setLoaderSkeleton } from '../store/actions/walletActions'
import {
	setDeleteAccount,
	setCurrentAccount,
	setClearDataUser,
	setPassword,
} from '../store/actions/storageAction'

export const EditProfileScreen = ({ navigation }) => {
	const dispatch = useDispatch()
	const { currentAccount, dataUser } = useSelector((state) => state.storage)
	const deleteRef = useRef(null)
	const [isKeyboardVisible, setKeyboardVisible] = useState(false)
	const [timeoutId, setTimeoutId] = useState(null)
	const [timeoutId2, setTimeoutId2] = useState(null)

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
			clearTimeout(timeoutId2)
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
		const deleteCurrent = currentAccount
		const filterData = dataUser.filter((d) => d.name !== currentAccount)

		dispatch(setLoader(true))
		deleteRef.current?.close()
		dispatch(setLoaderSkeleton(false))
		setTimeoutId2(
			setTimeout(() => {
				if (dataUser.length >= 2) {
					dispatch(setDeleteAccount(deleteCurrent))
					dispatch(setCurrentAccount(filterData[0].name))
					navigation.reset({
						index: 0,
						routes: [{ name: 'Home' }],
					})
				} else {
					dispatch(setPassword(''))
					dispatch(setCurrentAccount(''))
					dispatch(setClearDataUser())
					navigation.reset({
						index: 0,
						routes: [{ name: 'Login' }],
					})
				}
				dispatch(setLoader(false))
			}, 2000)
		)
	}

	return (
		<TouchableWithoutFeedback
			onPress={() => Keyboard.dismiss()}
			accessible={false}>
			<View style={{ paddingHorizontal: 16, paddingTop: 29 }}>
				<AccountCard edit style={{ marginBottom: 15 }} />
				<WalletButton type='border' onPress={onOpenDeleteModal}>
					<Text style={{ color: THEME.VIOLET }}>delete wallet</Text>
				</WalletButton>
				<WalletBottomSheet ref={deleteRef} snapPoints={['55%']}>
					<DeleteWallet onDelete={onDelete} onClose={onCloseDeleteModal} />
				</WalletBottomSheet>
			</View>
		</TouchableWithoutFeedback>
	)
}
