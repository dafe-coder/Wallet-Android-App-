import React, { useRef } from 'react'
import { View, ScrollView } from 'react-native'
import { SettingsListMenu } from '../Components'
import {
	ConnectsApp,
	ChangeCurrentNetwork,
	SelectAccount,
} from '../Components/modal'
import { AccountCard, WalletBottomSheet } from '../Components'
import { AccountBtn } from '../navigation'

export const SettingsScreen = ({ navigation }) => {
	// ref
	const networkRef = useRef(null)
	const selectAccountRef = useRef(null)
	const connectedAppsRef = useRef(null)
	React.useEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<AccountBtn openModalSelect={openModalSelect} navigation={navigation} />
			),
		})
	}, [navigation])
	const openModalSelect = () => {
		selectAccountRef.current.expand()
	}
	const onCloseModal = () => {
		selectAccountRef.current.close()
	}
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
			<WalletBottomSheet ref={selectAccountRef} snapPoints={['55%']}>
				<SelectAccount onCloseModal={onCloseModal} navigation={navigation} />
			</WalletBottomSheet>
		</ScrollView>
	)
}
