import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { WalletText } from './UI/WalletText'
import { CopyButton } from './UI/CopyButton'
import { THEME } from '../Theme'

export const AccountCard = ({ style }) => {
	return (
		<View style={{ ...styles.wrap, ...style }}>
			<View style={styles.logo}>
				<Image source={require('../../assets/avatar.png')} />
			</View>
			<View style={styles.info}>
				<WalletText color='brown' size='m'>
					Account 1
				</WalletText>
				<WalletText size='m'>0x0A0B110107...4664a55</WalletText>
				<CopyButton style={{ right: 20, bottom: 25 }} />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	wrap: {
		backgroundColor: THEME.BROWN,
		borderRadius: 5,
		paddingVertical: 10,
		paddingHorizontal: 20,
		flexDirection: 'row',
		position: 'relative',
	},
	logo: {
		marginRight: 10,
	},
	info: {
		flexGrow: 1,
	},
})
