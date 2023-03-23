import React from 'react'
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { THEME } from '../Theme'
import { WalletText } from './UI'
import { SvgIconNav } from './svg/svgNav'
import { SvgIcon } from './svg/svg'

export const AccountItemMenu = ({ image, title, topLine, onPress }) => {
	return (
		<TouchableOpacity activeOpacity={0.7} onPress={() => onPress(title)}>
			<View style={[{ ...styles.item }, topLine ? { ...styles.topLine } : {}]}>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<View style={styles.circle}>
						<SvgIconNav type={image} style={{}} />
					</View>
					<WalletText color='white' size='m' fw='bold'>
						{title}
					</WalletText>
				</View>
				<SvgIcon fill={THEME.WHITE} type='play' />
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	circle: {
		width: 30,
		height: 30,
		borderRadius: 50,
		justifyContent: 'center',
		alignItems: 'flex-start',
		marginRight: 4,
	},
	item: {
		paddingVertical: 16,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingRight: 17,
	},
	img: {
		marginRight: 20,
	},
	topLine: {
		borderColor: THEME.DISABLED_TEXT,
		borderTopWidth: 1,
	},
})
