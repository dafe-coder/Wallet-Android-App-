import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Header } from './../Components/'
import { WalletText } from '../Components/UI'
import { THEME } from '../Theme'
import { ButtonCopySm, WalletButton } from './../Components/UI/'
import { WalletModal } from './../Components/modal/WalletModal'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { resetWallet, setDeleteWallet } from '../store/slices/storageSlice'
import { setDataWallet } from '../store/slices/walletSlice'

export const AccountManage = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { currentAccount, dataUser } = useSelector((state) => state.storage)
	const [deleteOpen, setDeleteOpen] = React.useState(false)
	const [currentAccountData, setCurrentAccountData] = React.useState(null)

	React.useEffect(() => {
		if (dataUser !== null) {
			setCurrentAccountData(
				dataUser.find((item) => item.name === currentAccount)
			)
		}
	}, [dataUser])

	const onDeleteAccount = () => {
		if (dataUser !== null && dataUser.length > 1) {
			dispatch(setDeleteWallet(currentAccount))
			setDeleteOpen(false)
			dispatch(setDataWallet(null))
			navigate(-1)
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
					{currentAccountData !== null ? currentAccountData.name : ''}
				</WalletText>
				<WalletText numberOfLines={1} style={{ width: '90%' }}>
					{currentAccountData !== null ? currentAccountData.address : ''}
				</WalletText>
				<ButtonCopySm
					text={currentAccountData !== null ? currentAccountData.address : ''}
					style={{ bottom: 16, right: 16 }}
				/>
			</View>
			{currentAccountData !== null && currentAccountData.phrase !== '' ? (
				<WalletButton
					to='/show-phrase'
					style={{ marginTop: 18, marginTop: 15 }}
					type='border'
					styleBtn={{ justifyContent: 'flex-start' }}>
					View recovery phrase
				</WalletButton>
			) : (
				<></>
			)}
			<WalletButton
				style={{ marginTop: 15 }}
				to='/show-privateKey'
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
