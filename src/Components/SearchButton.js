import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { WalletText } from './UI'
import { THEME } from './../Theme'
import { SvgIcon } from './svg/svg'

export const SearchButton = () => {
	return (
		<View style={styles.btn}>
			<TouchableOpacity activeOpacity={0.9} style={styles.btnBody}>
				<SvgIcon type='search' />
				<WalletText fw='bold' style={{ marginLeft: 10, color: '#000' }}>
					Search
				</WalletText>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	btnBody: {
		backgroundColor: THEME.WHITE,
		width: 144,
		paddingVertical: 14,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 50,
	},
	btn: {
		position: 'absolute',
		bottom: 30,
		justifyContent: 'center',
		alignItems: 'center',
		left: 0,
		right: 0,
	},
})
