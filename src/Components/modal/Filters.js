import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { WalletText } from './../UI'
import { THEME } from './../../Theme'

export const Filters = ({ choose = 'value' }) => {
	return (
		<View
			style={{
				paddingHorizontal: 16,
				flex: 1,
				width: '100%',
			}}>
			<TouchableOpacity activeOpacity={0.7} style={styles.item}>
				<WalletText size='m' color='white'>
					Portfolio Value
				</WalletText>
				{choose == 'value' ? (
					<Image source={require('../../../assets/check.png')} />
				) : (
					<></>
				)}
			</TouchableOpacity>
			<TouchableOpacity activeOpacity={0.7} style={styles.item}>
				<WalletText size='m' color='white'>
					Name
				</WalletText>
				{choose == 'name' ? (
					<Image source={require('../../../assets/check.png')} />
				) : (
					<></>
				)}
			</TouchableOpacity>
			<TouchableOpacity activeOpacity={0.7} style={styles.item}>
				<WalletText size='m' color='white'>
					Daily change
				</WalletText>
				{choose == 'change' ? (
					<Image source={require('../../../assets/check.png')} />
				) : (
					<></>
				)}
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	item: {
		flexGrow: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderBottomColor: THEME.BROWN,
		borderBottomWidth: 1,
		paddingVertical: 10,
	},
})
