import React from 'react'
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { WalletText } from './UI/'
import { THEME } from './../Theme'
import { SvgIcon } from './svg/svg'

export const AllCoinsItem = ({ onPress, coin, chooseCoin }) => {
	const onPressCoin = (coin) => {
		if (onPress) onPress(coin)
	}
	return (
		<TouchableOpacity
			style={styles.wrap}
			activeOpacity={0.7}
			onPress={() => onPressCoin(coin)}>
			<View style={styles.itemInfo}>
				<Image style={styles.image} source={{ uri: coin.image.thumb }} />
				<WalletText size='m' color='white'>
					{coin.name + ' '}
					<Text style={{ color: THEME.DARK_TEXT }}>
						({coin.symbol.toUpperCase()})
					</Text>
				</WalletText>
			</View>
			{chooseCoin.symbol &&
			chooseCoin.symbol.toLowerCase() == coin.symbol.toLowerCase() ? (
				<SvgIcon type='check' />
			) : (
				<></>
			)}
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	image: {
		width: 35,
		height: 35,
		marginRight: 10,
		borderRadius: 50,
		overflow: 'hidden',
		backgroundColor: THEME.WHITE,
	},
	wrap: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderBottomColor: THEME.BROWN,
		borderBottomWidth: 1,
		paddingVertical: 10,
	},
	itemInfo: {
		flexDirection: 'row',
		alignItems: 'center',
	},
})
