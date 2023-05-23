import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { WalletText } from './UI/WalletText'
import { THEME } from './../Theme'
import { SvgIconNav } from './svg/svgNav'
import { useNavigation } from '@react-navigation/native'

export const WalletNav = () => {
	const navigation = useNavigation()
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
		position: 'absolute',
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
		bottom: 16,
		paddingHorizontal: 16,
	},
	item: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'transparent',
	},
})
