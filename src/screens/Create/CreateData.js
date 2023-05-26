import React from 'react'
import { View, BackHandler } from 'react-native'
import { useNavigate } from 'react-router-native'
import { WalletText, WalletInput, WalletButton } from './../../Components/UI'
import { Header } from '../../Components/'

export const CreateData = () => {
	const navigate = useNavigate()
	React.useEffect(() => {
		const subscription = BackHandler.addEventListener(
			'hardwareBackPress',
			function () {
				if (navigate) {
					navigate(-1)
					return true
				}
				return false
			}
		)

		return () => subscription.remove()
	}, [])
	return (
		<View style={{ flex: 1 }}>
			<Header title='Create Wallet' />
			<WalletText style={{ marginBottom: 20 }}>
				Your mnemonic phrase is encrypted and stored safety on your device. Only
				you have full access to your assets.
			</WalletText>
			<WalletInput style={{ marginBottom: 15 }} placeholder='Wallet Name' />
			<WalletInput
				style={{ marginBottom: 15 }}
				placeholder='Spending password'
			/>
			<WalletInput placeholder='Repeat password' />
			<WalletButton
				to={'/create-submit'}
				disabled={false}
				icon='wallet'
				style={{ marginTop: 'auto', marginBottom: 25 }}>
				Create Personal wallet
			</WalletButton>
		</View>
	)
}
