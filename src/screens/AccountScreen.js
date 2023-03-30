import React, { useRef, useState, useEffect } from 'react'
import {
	StyleSheet,
	ScrollView,
	Keyboard,
	TouchableWithoutFeedback,
} from 'react-native'
import { AccountListMenu } from '../Components'
import { useDispatch } from 'react-redux'

export const AccountScreen = ({ navigation }) => {
	// callbacks
	function handlePresentPress(title) {
		if (title == 'Import existing wallet') {
			navigation.navigate('ImportSteps')
		} else if (title == 'Wallet') {
			navigation.navigate('EditProfile')
		} else if (title == 'Backup') {
			navigation.navigate('BackupPrimary')
		} else if (title == 'Security') {
			navigation.navigate('Security')
		} else if (title == 'About') {
			navigation.navigate('About')
		} else if (title == 'Wallet Connect') {
			navigation.navigate('DApps')
		} else if (title == 'Notifications') {
			navigation.navigate('Notification')
		} else {
			console.log('coming soon!')
		}
	}

	return (
		<TouchableWithoutFeedback
			onPress={() => Keyboard.dismiss()}
			accessible={false}>
			<ScrollView style={styles.wrap}>
				<AccountListMenu onPress={handlePresentPress} />
			</ScrollView>
		</TouchableWithoutFeedback>
	)
}

const styles = StyleSheet.create({
	wrap: {
		flex: 1,
		position: 'relative',
		zIndex: 0,
	},
})
