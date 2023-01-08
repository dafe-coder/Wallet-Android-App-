import React, { useRef } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { AccountCard } from '../Components'
import { AccountListMenu } from '../Components'
import { WalletBottomSheet } from '../Components'
import { AddAccount, ImportAccount } from '../Components/modal'

export const AccountScreen = ({ navigation }) => {
	// ref
	const addAccountRef = useRef(null)
	const importAccountRef = useRef(null)

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
			<WalletBottomSheet ref={importAccountRef} snapPoints={['80%']}>
				<ImportAccount />
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
