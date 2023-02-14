import React, { useRef } from 'react'
import { View, ScrollView } from 'react-native'
import { SettingsListMenu } from '../Components'
import { ConnectsApp, ChangeCurrentNetwork } from '../Components/modal'
import { AccountCard, WalletBottomSheet } from '../Components'

export const SettingsScreen = ({ navigation }) => {
	// ref
	const networkRef = useRef(null)
	const connectedAppsRef = useRef(null)

	function handlePresentPress(title) {
		if (title == 'Current  Network') {
			networkRef.current.expand()
		} else if (title == 'Connected Apps') {
			connectedAppsRef.current.expand()
		} else if (title == 'Change Password') {
			navigation.navigate('CreatePassword')
		} else if (title == 'Export Account – Secret Phrase') {
			navigation.navigate('ExportPhrase')
		} else if (title == 'Export Account – Private Key') {
			navigation.navigate('ExportPrivateKey')
		} else {
			connectedAppsRef.current.expand()
		}
	}

	const onCloseNetwork = () => {
		networkRef.current?.close()
	}

	return (
		<ScrollView style={{ flex: 1, paddingTop: 29 }}>
			<View style={{ paddingHorizontal: 16 }}>
				<AccountCard navigation={navigation} />
			</View>
			<View style={{ paddingBottom: 80 }}>
				<SettingsListMenu onPress={handlePresentPress} />
			</View>
			<WalletBottomSheet ref={networkRef} snapPoints={['55%']}>
				<ChangeCurrentNetwork onPress={onCloseNetwork} />
			</WalletBottomSheet>

			<WalletBottomSheet ref={connectedAppsRef} snapPoints={['45%']}>
				<ConnectsApp />
			</WalletBottomSheet>
		</ScrollView>
	)
}
