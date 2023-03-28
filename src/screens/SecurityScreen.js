import React from 'react'
import { View, StyleSheet } from 'react-native'
import { WalletText, WalletButton } from './../Components/UI/'
import { THEME } from './../Theme'
import { SwitchButton } from './../Components/UI/SwitchButton'

export const SecurityScreen = () => {
	return (
		<View style={{ flex: 1, paddingTop: 70 }}>
			<View style={{ alignItems: 'center', marginBottom: 40 }}>
				<WalletText style={{ marginBottom: 24 }}>
					Authentication & PIN code
				</WalletText>
				<WalletButton>Change my PIN code</WalletButton>
			</View>
			<View style={styles.item}>
				<WalletText fw='bold'>Ask for PIN code at launch</WalletText>
				<SwitchButton />
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
