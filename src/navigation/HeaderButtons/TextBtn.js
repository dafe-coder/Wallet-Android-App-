import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { WalletText } from '../../Components/UI'
import { THEME } from './../../Theme'
import { useDispatch, useSelector } from 'react-redux'
import { setAccountName } from '../../store/actions/walletActions'
import {
	setNewAccountName,
	setCurrentAccount,
} from './../../store/actions/storageAction'

export const TextBtn = ({ onPress, children, position, navigation, type }) => {
	const dispatch = useDispatch()
	const { accountName } = useSelector((state) => state.wallet)
	const { dataUser } = useSelector((state) => state.storage)

	const onReadyAccountSettings = () => {
		if (accountName != '') {
			dispatch(setNewAccountName(accountName))
			dispatch(setCurrentAccount(accountName))
			navigation.navigate('Account')

			dispatch(setAccountName(''))
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
