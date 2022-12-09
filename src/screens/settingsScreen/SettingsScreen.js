import React, { useRef } from 'react'
import { View } from 'react-native'
import { SettingsListMenu } from '../../Components'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { ConnectsApp, ChangeCurrentNetwork } from '../../Components/modal'
import { AccountCard, WalletBottomSheet } from './../../Components'

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
		<GestureHandlerRootView style={{ flex: 1, paddingTop: 29 }}>
			<View style={{ paddingHorizontal: 16 }}>
				<AccountCard />
			</View>
			<SettingsListMenu openCurrentNetwork={handlePresentPress} />
			<WalletBottomSheet index={0} ref={networkRef} snapPoints={['55%']}>
				<ChangeCurrentNetwork />
			</WalletBottomSheet>

			<WalletBottomSheet ref={connectedAppsRef} snapPoints={['55%']}>
				<ConnectsApp />
			</WalletBottomSheet>
		</GestureHandlerRootView>
	)
}
