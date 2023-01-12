import React, { useEffect, useState } from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { WalletText } from '../../Components/UI'
import { THEME } from './../../Theme'
import { useDispatch, useSelector } from 'react-redux'
import {
	setAccountName,
	setLoaderSkeleton,
	setLoader,
} from '../../store/actions/walletActions'
import {
	setNewAccountName,
	setCurrentAccount,
} from './../../store/actions/storageAction'

export const TextBtn = ({ onPress, children, position, navigation, type }) => {
	const dispatch = useDispatch()
	const [timeoutId, setTimeoutId] = useState(null)
	const { accountName } = useSelector((state) => state.wallet)
	useEffect(() => {
		return () => clearTimeout(timeoutId)
	}, [])
	const onReadyAccountSettings = () => {
		if (accountName != '') {
			dispatch(setLoader(true))
			dispatch(setLoaderSkeleton(false))
			setTimeoutId(
				setTimeout(() => {
					dispatch(setNewAccountName(accountName))
					navigation.navigate('Wallet')
					dispatch(setCurrentAccount(accountName))
					dispatch(setAccountName(''))
					dispatch(setLoader(false))
					dispatch(setLoaderSkeleton(true))
				}, 2000)
			)
		}
	}

	const onPressBtn = () => {
		switch (type) {
			case 'ready':
				onReadyAccountSettings()
				break
			default:
				onPress()
				break
		}
	}

	return (
		<TouchableOpacity
			activeOpacity={0.7}
			onPress={onPressBtn}
			style={[position == 'left' ? styles.btnLeft : styles.btnRight]}>
			<WalletText style={{ color: THEME.GOLD }}>{children}</WalletText>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	btnLeft: {
		marginLeft: 16,
	},
	btnRight: {
		marginRight: 16,
	},
})
