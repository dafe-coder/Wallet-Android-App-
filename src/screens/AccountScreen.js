import React, { useRef, useState, useEffect } from 'react'
import { View, StyleSheet, ScrollView, Keyboard } from 'react-native'
import { AccountCard } from '../Components'
import { AccountListMenu } from '../Components'
import { WalletBottomSheet } from '../Components'
import { AddAccount, ImportAccount } from '../Components/modal'
import { useDispatch } from 'react-redux'
import { setNavigation } from '../store/actions/walletActions'

export const AccountScreen = ({ navigation }) => {
	const dispatch = useDispatch()
	// ref
	const addAccountRef = useRef(null)
	const importAccountRef = useRef(null)
	const [openKeyboard, setOpenKeyboard] = useState(false)
	useEffect(() => {
		const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
			setOpenKeyboard(true)
		})
		const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
			setOpenKeyboard(false)
		})

		return () => {
			showSubscription.remove()
			hideSubscription.remove()
		}
	}, [])
	// callbacks
	function handlePresentPress(title) {
		if (title == 'Import Account') {
			importAccountRef.current.expand()
		} else if (title == 'Settings') {
			navigation.navigate('Settings')
		} else if (title == 'Contacts') {
			navigation.navigate('Contacts')
		} else if (title == 'Logout') {
			navigation.navigate('RiskAlert')
		} else if (title == 'Lock Wallet') {
			navigation.navigate('Unlock')
			dispatch(setNavigation(null))
		} else {
			addAccountRef.current.expand()
		}
	}

	return (
		<ScrollView style={styles.wrap}>
			<View
				style={{
					paddingHorizontal: 16,
				}}>
				<AccountCard navigation={navigation} />
			</View>
			<AccountListMenu onPress={handlePresentPress} />
			<WalletBottomSheet ref={addAccountRef} snapPoints={['55%']}>
				<AddAccount onPress={() => navigation.navigate('Contacts')} />
			</WalletBottomSheet>
			<WalletBottomSheet
				ref={importAccountRef}
				snapPoints={[!openKeyboard ? '80%' : '100%']}>
				<ImportAccount navigation={navigation} />
			</WalletBottomSheet>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	wrap: {
		flex: 1,
		paddingTop: 30,
		position: 'relative',
		zIndex: 0,
	},
})
