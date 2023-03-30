import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { WalletText } from './UI/WalletText'
import { THEME } from './../Theme'
import { SvgIconNav } from './svg/svgNav'

export const WalletNav = ({ navigation }) => {
	return (
		<View style={styles.wrap}>
			<TouchableOpacity
				activeOpacity={0.7}
				onPress={() => navigation.navigate('ChooseCryptos')}
				style={[
					styles.item,
					styles.itemLeft,
					{
						marginRight: 20,
					},
				]}>
				<WalletText fw='bold' color='white'>
					Send
				</WalletText>
			</TouchableOpacity>
			<TouchableOpacity
				activeOpacity={0.7}
				onPress={() => navigation.navigate('Receive')}
				style={[styles.item, styles.itemRight]}>
				<WalletText fw='bold' color='white'>
					Receive
				</WalletText>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	wrap: {
		flexDirection: 'row',
		justifyContent: 'center',
	},
	itemLeft: {
		backgroundColor: THEME.GREY,
	},
	itemRight: {
		borderWidth: 1,
		borderColor: THEME.WHITE,
	},
	item: {
		paddingVertical: 14,
		width: '47%',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 50,
	},
})
