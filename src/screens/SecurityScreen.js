import React from 'react'
import { View, StyleSheet } from 'react-native'
import { WalletText, WalletButton } from './../Components/UI/'
import { THEME } from './../Theme'
import { SwitchButton } from './../Components/UI/SwitchButton'
import { useDispatch, useSelector } from 'react-redux'
import { setAskPin } from '../store/actions/storageAction'

export const SecurityScreen = ({ navigation }) => {
	const dispatch = useDispatch()
	const { askPin } = useSelector((state) => state.storage)

	const onAskPin = (askPin) => {
		dispatch(setAskPin(askPin))
	}

	return (
		<View style={{ flex: 1, paddingTop: 70 }}>
			<View style={{ alignItems: 'center', marginBottom: 40 }}>
				<WalletText style={{ marginBottom: 24 }}>
					Authentication & PIN code
				</WalletText>
				<WalletButton onPress={() => navigation.navigate('CreatePassword')}>
					Change my PIN code
				</WalletButton>
			</View>
			<View style={styles.item}>
				<WalletText fw='bold'>Ask for PIN code at launch</WalletText>
				<SwitchButton enabled={askPin} setEnabled={onAskPin} />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	item: {
		paddingVertical: 24,
		borderBottomColor: THEME.DISABLED_TEXT,
		borderBottomWidth: 1,
		marginHorizontal: 24,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
})
