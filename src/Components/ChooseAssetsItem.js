import React from 'react'
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { WalletText } from './UI'
import { THEME } from '../Theme'
import { useSelector } from 'react-redux'

export const ChooseAssetsItem = ({ onPress, coin, chooseAssets }) => {
	const { currentNetwork } = useSelector((state) => state.storage)
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
				<WalletText size='m' color='dark'>
					{coin.name + ' '}
					<Text style={{ color: THEME.DISABLED_TEXT }}>
						({coin.symbol && coin.symbol.toUpperCase()})
					</Text>
				</WalletText>
			</View>
			<View style={styles.circle}>
				{chooseAssets.find((item) => item.id == currentNetwork.id).coins
					.length &&
				chooseAssets
					.find((item) => item.id == currentNetwork.id)
					.coins.includes(coin.symbol.toLowerCase()) ? (
					<View style={styles.circleFilled} />
				) : (
					<></>
				)}
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	circleFilled: {
		width: 7,
		height: 7,
		backgroundColor: '#8247E5',
		borderRadius: 50,
		position: 'absolute',
		left: 4,
		top: 4,
	},
	circle: {
		width: 15,
		height: 15,
		borderRadius: 50,
		backgroundColor: THEME.GREY_LIGHT,
	},
	image: {
		width: 35,
		height: 35,
		marginRight: 10,
		borderRadius: 50,
		overflow: 'hidden',
		backgroundColor: THEME.GREY_LIGHT,
	},
	wrap: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderBottomColor: THEME.GREY_LIGHT,
		borderBottomWidth: 1,
		paddingVertical: 10,
	},
	itemInfo: {
		flexDirection: 'row',
		alignItems: 'center',
	},
})
