import React from 'react'
import { View } from 'react-native'
import { Header, ImportBalanceCard } from '../../Components'
import { WalletText, WalletButton } from './../../Components/UI/'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDataWallet } from '../../store/slices/walletSlice'
import { useNavigate } from 'react-router-native'

export const ImportEnd = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { dataUser, currentAccount } = useSelector((state) => state.storage)

	React.useEffect(() => {
		if (dataUser !== null) {
			let account = dataUser.find((item) => item.name === currentAccount)
			dispatch(
				fetchDataWallet([
					account.phrase !== '' ? account.phrase : account.privateKey,
					false,
				])
			)
		}
	}, [dataUser])

	return (
		<View style={{ flex: 1, paddingHorizontal: 24, marginBottom: 25 }}>
			<Header title='Restore Wallet' />
			<WalletText>Confirm the account to be restored:</WalletText>
			<ImportBalanceCard style={{ marginTop: 25 }} />
			<WalletButton to='/wallet' style={{ marginTop: 'auto' }}>
				Confirm
			</WalletButton>
		</View>
	)
}
