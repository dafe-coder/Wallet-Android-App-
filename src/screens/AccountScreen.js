import React, { useEffect, useRef, useState } from 'react'
import { View, StyleSheet } from 'react-native'
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
		} else {
			addAccountRef.current.expand()
		}
	}

	return (
		<View style={styles.wrap}>
			<View
				style={{
					paddingHorizontal: 16,
				}}>
				<AccountCard />
			</View>
			<AccountListMenu onPress={handlePresentPress} />
			<WalletBottomSheet ref={addAccountRef} snapPoints={['55%']}>
				<AddAccount onPress={() => navigation.navigate('Contacts')} />
			</WalletBottomSheet>
			<WalletBottomSheet ref={importAccountRef} snapPoints={['76%']}>
				<ImportAccount />
			</WalletBottomSheet>
		</View>
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
