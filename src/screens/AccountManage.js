import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Header } from './../Components/'
import { WalletText } from '../Components/UI'
import { THEME } from '../Theme'
import { ButtonCopySm, WalletButton } from './../Components/UI/'
import { WalletModal } from './../Components/modal/WalletModal'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import {
	resetWallet,
	setDeleteWallet,
	setCurrentAccount,
} from '../store/slices/storageSlice'

export const AccountManage = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { currentAccount, dataUser } = useSelector((state) => state.storage)
	const { walletAddress } = useSelector((state) => state.wallet)
	const [deleteOpen, setDeleteOpen] = React.useState(false)

	const onDeleteAccount = () => {
		if (dataUser !== null && dataUser.length > 1) {
			navigate(-1)
			setDeleteOpen(false)
			dispatch(setDeleteWallet(currentAccount))
			dispatch(setCurrentAccount(dataUser[0].name))
		} else {
			navigate('/')
			dispatch(resetWallet())
		}
	}

	return (
		<View style={{ flex: 1, paddingHorizontal: 24, paddingBottom: 25 }}>
			<Header title='Account' />
			<View style={styles.card}>
				<WalletText style={{ marginBottom: 10 }} fw='bold'>
					Wallet 1
				</WalletText>
				<WalletText>{walletAddress}</WalletText>
				<ButtonCopySm text={walletAddress} style={{ bottom: 16, right: 16 }} />
			</View>
			<WalletButton
				to='/show-phrase'
				style={{ marginTop: 18, marginBottom: 15 }}
				type='border'
				styleBtn={{ justifyContent: 'flex-start' }}>
				View recovery phrase
			</WalletButton>
			<WalletButton
				to='/show-key'
				type='border'
				styleBtn={{ justifyContent: 'flex-start' }}>
				View private key
			</WalletButton>
			<WalletButton
				onPress={() => setDeleteOpen(true)}
				type='red'
				styleBtn={{ alignItems: 'center' }}
				style={{ marginTop: 'auto' }}
				icon='trash'>
				Delete Wallet
			</WalletButton>
			<WalletModal isVisible={deleteOpen} setIsVisible={setDeleteOpen}>
				<WalletText
					fw='bold'
					size='xl'
					style={{ marginBottom: 10 }}
					color='red'>
					Delete Account
				</WalletText>
				<WalletText style={{ marginBottom: 30 }}>
					Are you sure you want to delete your wallet? This action cannot be
					undone.
				</WalletText>
				<View style={{ width: '100%' }}>
					<WalletButton onPress={onDeleteAccount}> Confirm</WalletButton>
					<WalletButton
						onPress={() => setDeleteOpen(false)}
						style={{ marginTop: 10 }}
						type='border'>
						<WalletText color='red'>Cancel</WalletText>
					</WalletButton>
				</View>
			</WalletModal>
		</View>
	)
}

const styles = StyleSheet.create({
	card: {
		backgroundColor: THEME.GREEN_LIGHT,
		borderWidth: 1,
		borderColor: THEME.WHITE,
		paddingHorizontal: 20,
		paddingVertical: 16,
		borderRadius: 16,
	},
})
