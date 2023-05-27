import React from 'react'
import { View, StyleSheet } from 'react-native'
import { THEME } from '../Theme'
import { WalletText } from './UI'
import { SvgIcon } from './svg/svg'

export const ChooseCoin = () => {
	return (
		<View style={styles.wrap}>
			<WalletText>PEPE COIN</WalletText>
			<SvgIcon type='angle-down' width={15} height={9} />
		</View>
	)
}

const styles = StyleSheet.create({
	wrap: {
		backgroundColor: THEME.GREEN_BG,
		borderColor: THEME.WHITE,
		borderWidth: 1,
		paddingHorizontal: 20,
		paddingVertical: 16,
		borderRadius: 16,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
})
