import React from 'react'
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { THEME } from '../Theme'
import { WalletText } from './UI'
import { SvgIconNav } from './svg/svgNav'

export const AccountItemMenu = ({ image, title, topLine, onPress }) => {
	return (
		<TouchableOpacity activeOpacity={0.7} onPress={() => onPress(title)}>
			<View style={[{ ...styles.item }, topLine ? { ...styles.topLine } : {}]}>
				<View style={styles.circle}>
					<SvgIconNav type={image} style={{}} />
				</View>
				<WalletText color='dark' size='m' fw='regular'>
					{title}
				</WalletText>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	circle: {
		backgroundColor: THEME.GREY_LIGHT,
		width: 30,
		height: 30,
		borderRadius: 50,
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 24,
	},
	item: {
		paddingVertical: 16,
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 15,
	},
	img: {
		marginRight: 20,
	},
	topLine: {
		borderColor: THEME.GREY_LIGHT,
		borderTopWidth: 1,
	},
})
