import React, { useRef, useState, useEffect } from 'react'
import {
	View,
	StyleSheet,
	ScrollView,
	Keyboard,
	TouchableWithoutFeedback,
} from 'react-native'
import { AccountCard } from '../Components'
import { AccountListMenu } from '../Components'
import { WalletBottomSheet } from '../Components'
import { ImportAccount, SelectAccount } from '../Components/modal'
import { useDispatch } from 'react-redux'
import { setLockWallet } from '../store/actions/walletActions'
import { AccountBtn } from '../navigation'
export const AccountScreen = ({ navigation }) => {
	const dispatch = useDispatch()
	const selectAccountRef = useRef(null)
	const importAccountRef = useRef(null)
	const [openKeyboard, setOpenKeyboard] = useState(false)
	React.useEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<AccountBtn openModalSelect={openModalSelect} navigation={navigation} />
			),
		})
	}, [navigation])
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
	const openModalSelect = () => {
		selectAccountRef.current.expand()
	}
	const onCloseModal = () => {
		selectAccountRef.current.close()
	}
	const onCloseImport = () => {
		Keyboard.dismiss()
		importAccountRef.current?.close()
	}
	// callbacks
	function handlePresentPress(title) {
		if (title == 'Import Account') {
			importAccountRef.current.expand()
		} else if (title == 'Settings') {
			navigation.navigate('Settings')
		} else if (title == 'Contacts') {
			navigation.navigate('Contacts')
		} else if (title == 'Logout') {
			navigation.navigate('RiskAlertLogout')
		} else if (title == 'Lock Wallet') {
			navigation.reset({
				index: 0,
				routes: [{ name: 'Unlock' }],
			})
			dispatch(setLockWallet(true))
		} else {
			console.log('coming soon!')
		}
	}

	return (
		<TouchableWithoutFeedback
			onPress={() => Keyboard.dismiss()}
			accessible={false}>
			<ScrollView style={styles.wrap}>
				<View
					style={{
						paddingHorizontal: 16,
					}}>
					<AccountCard navigation={navigation} />
				</View>
				<AccountListMenu onPress={handlePresentPress} />
				<WalletBottomSheet
					ref={importAccountRef}
					snapPoints={[!openKeyboard ? '75%' : '100%']}>
					<ImportAccount
						style={
							openKeyboard ? { paddingBottom: 250 } : { paddingBottom: 39 }
						}
						onCloseImport={onCloseImport}
						navigation={navigation}
					/>
				</WalletBottomSheet>
				<WalletBottomSheet ref={selectAccountRef} snapPoints={['55%']}>
					<SelectAccount onCloseModal={onCloseModal} navigation={navigation} />
				</WalletBottomSheet>
			</ScrollView>
		</TouchableWithoutFeedback>
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
