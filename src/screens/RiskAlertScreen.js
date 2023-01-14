import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import {
	setPassword,
	setCurrentAccount,
	setClearDataUser,
} from '../store/actions/storageAction'
import { SvgIcon } from './../Components/svg/svg'
import { WalletText, WalletTitle, WalletButton } from './../Components/UI/'
import { setLoader, setNavigation } from '../store/actions/walletActions'
import { useDispatch } from 'react-redux'
export const RiskAlertScreen = ({ navigation }) => {
	const dispatch = useDispatch()
	const onRemoveAll = () => {
		dispatch(setLoader(true))
		setTimeout(() => {
			dispatch(setPassword(''))
			dispatch(setNavigation(null))
			dispatch(setLoader(false))
			dispatch(setClearDataUser())
			dispatch(setCurrentAccount(''))
			navigation.reset({
				index: 0,
				routes: [{ name: 'Login' }],
			})
		}, 3000)
	}
	return (
		<ScrollView contentContainerStyle={styles.body}>
			<View style={styles.top}>
				<SvgIcon type='logo' />
				<WalletTitle
					style={{
						fontSize: 16,
						fontFamily: 'ub-medium',
						marginBottom: 24,
						marginTop: 44,
					}}>
					RISK alert
				</WalletTitle>
				<WalletText size='m' center style={{ marginBottom: 10 }}>
					All your existing wallets will be removed and replaced with the new
					one.
				</WalletText>
				<WalletText center style={{ paddingHorizontal: '4%' }}>
					Please make sure you havee backed up yoyr mnemonic phrases or private
					keys, otherwise you will not be able to recover the assets in your
					wallets.
				</WalletText>
			</View>
			<View style={{ paddingHorizontal: 16, marginBottom: 40, marginTop: 50 }}>
				<WalletButton onPress={onRemoveAll} style={{ marginBottom: 10 }}>
					confirm
				</WalletButton>
				<WalletButton onPress={() => navigation.goBack()} type='border'>
					cancel
				</WalletButton>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	body: {
		paddingTop: 29,
		justifyContent: 'space-between',
		flex: 1,
	},
	top: {
		alignItems: 'center',
		paddingHorizontal: 16,
	},
})
