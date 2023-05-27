import React from 'react'
import { View, StyleSheet } from 'react-native'
import { THEME } from '../Theme'
import { WalletText } from './UI/WalletText'

export const ImportBalanceCard = ({ style }) => {
	return (
		<View style={[styles.wrap, style]}>
			<WalletText style={{ marginBottom: 10 }} fw='bold'>
				Account
			</WalletText>
			<WalletText
				style={{
					marginBottom: 10,
					textOverflow: 'hidden',
					textWrap: 'no-wrap',
				}}
				numberOfLines={1}
				size='xs'
				fw='bold'>
				0x64d8bf28BCbf209F8fb1fa791521B753329B9731
				0x64d8bf28BCbf209F8fb1fa791521B753329B9731
			</WalletText>
			<WalletText fw='bold'>Balance: 0 ETH</WalletText>
		</View>
	)
}

const styles = StyleSheet.create({
	wrap: {
		backgroundColor: THEME.GREEN_LIGHT,
		borderWidth: 1,
		borderColor: THEME.WHITE,
		borderRadius: 16,
		paddingHorizontal: 20,
		paddingVertical: 16,
	},
})
