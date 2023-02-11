import React, { useRef } from 'react'
import {
	View,
	StyleSheet,
	ScrollView,
	Keyboard,
	TouchableWithoutFeedback,
	Linking,
} from 'react-native'
import { AccountCard } from '../Components'
import { AccountListMenu } from '../Components'
import { WalletBottomSheet } from '../Components'
import { ImportAccount } from '../Components/modal'
import { useDispatch } from 'react-redux'
import { setLockWallet } from '../store/actions/storageAction'

export const AccountScreen = ({ navigation }) => {
	const url = 'https://discord.com/invite/bybit'

	const dispatch = useDispatch()
	// ref
	// const addAccountRef = useRef(null)
	const importAccountRef = useRef(null)

	const onCloseImport = () => {
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
		} else if (title == 'Help') {
			Linking.openURL(url).catch((err) =>
				console.error('An error occurred', err)
			)
		} else if (title == 'Lock Wallet') {
			navigation.reset({
				index: 0,
				routes: [{ name: 'Unlock' }],
			})
			dispatch(setLockWallet(true))
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
				<WalletBottomSheet ref={importAccountRef} snapPoints={['75%']}>
					<ImportAccount
						onCloseImport={onCloseImport}
						navigation={navigation}
					/>
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
		borderTopColor: '#2f2d2b',
		borderTopWidth: 0.6,
	},
})
