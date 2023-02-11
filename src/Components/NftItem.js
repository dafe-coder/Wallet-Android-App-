import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { WalletText } from './UI'
import { THEME } from './../Theme'

export const NftItem = ({ number, image, title, priceEth, priceUsd }) => {
	return (
		<View style={styles.item}>
			<View>
				<Image
					width={100}
					resizeMode='contain'
					source={require('../../assets/nft-image.png')}
				/>
			</View>
			<View style={{ flexGrow: 1, marginLeft: 10, ...styles.center }}>
				<WalletText color='white'>{number}</WalletText>
				<WalletText color='dark' style={{ fontSize: 12 }}>
					{title}
				</WalletText>
			</View>
			<View style={{ ...styles.center, alignItems: 'flex-end' }}>
				<WalletText color='white'>{priceEth} ETH</WalletText>
				<WalletText color='green-light' style={{ fontSize: 12 }}>
					${priceUsd} USD
				</WalletText>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	center: {
		justifyContent: 'center',
	},
	item: {
		marginBottom: 12,
		backgroundColor: THEME.BROWN_DARK,
		borderRadius: 5,
		padding: 9,
		flexDirection: 'row',
	},
})
