import React, { useRef } from 'react'
import { View, ScrollView } from 'react-native'
import { SettingsListMenu } from '../Components'
import { ConnectsApp, ChangeCurrentNetwork } from '../Components/modal'
import { AccountCard, WalletBottomSheet } from '../Components'

export const SettingsScreen = () => {
	// ref
	const networkRef = useRef(null)
	const connectedAppsRef = useRef(null)

	function handlePresentPress(title) {
		if (title == 'Current  Network') {
			networkRef.current.expand()
		} else {
			connectedAppsRef.current.expand()
		}
	}

	return (
		<ScrollView style={{ flex: 1, paddingTop: 29 }}>
			<View style={{ paddingHorizontal: 16 }}>
				<AccountCard />
			</View>
			<View style={{ paddingBottom: 80 }}>
				<SettingsListMenu openCurrentNetwork={handlePresentPress} />
			</View>
			<WalletBottomSheet ref={networkRef} snapPoints={['55%']}>
				<ChangeCurrentNetwork />
			</WalletBottomSheet>

			<WalletBottomSheet ref={connectedAppsRef} snapPoints={['55%']}>
				<ConnectsApp />
			</WalletBottomSheet>
		</ScrollView>
	)
}
