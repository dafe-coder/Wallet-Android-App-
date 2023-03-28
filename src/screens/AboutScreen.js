import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { WalletText } from '../Components/UI'
import { THEME } from '../Theme'
import { SvgIcon } from './../Components/svg/svg'

export const AboutScreen = () => {
	return (
		<View style={{ flex: 1, paddingHorizontal: 24 }}>
			<TouchableOpacity activeOpacity={0.7} style={styles.item}>
				<WalletText fw='bold' size='m'>
					Terms of Use
				</WalletText>
				<SvgIcon width={10} height={10} fill={THEME.WHITE} type='play' />
			</TouchableOpacity>
			<TouchableOpacity activeOpacity={0.7} style={styles.item}>
				<WalletText fw='bold' size='m'>
					Privacy policy
				</WalletText>
				<SvgIcon width={10} height={10} fill={THEME.WHITE} type='play' />
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	item: {
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		borderBottomColor: THEME.DISABLED_TEXT,
		borderBottomWidth: 1,
		paddingVertical: 24,
		paddingRight: 10,
	},
})
