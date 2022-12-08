import React from 'react'
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { THEME } from '../Theme'
import { WalletText } from './UI'

export const AccountItemMenu = ({ image, title, topLine, onPress }) => {
	return (
		<TouchableOpacity activeOpacity={0.7} onPress={() => onPress(title)}>
			<View style={[{ ...styles.item }, topLine ? { ...styles.topLine } : {}]}>
				<Image width={20} height={20} style={styles.img} source={image} />
				<WalletText color='white' size='m' fw='medium'>
					{title}
				</WalletText>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	item: {
		paddingVertical: 16,
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 35,
	},
	img: {
		marginRight: 20,
	},
	topLine: {
		borderColor: THEME.BROWN_DARK,
		borderTopWidth: 1,
	},
})
