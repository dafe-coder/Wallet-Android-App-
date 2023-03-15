import React, { Children } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { WalletTitle } from './UI'
import { THEME } from '../Theme'
import { Dimensions } from 'react-native'

const width = Dimensions.get('window').width

export const Card = ({ title, children, style }) => {
	return (
		<View style={[styles.card, style]}>
			<View style={styles.imgBlock}>
				<Image
					style={styles.imgBg}
					resizeMode='contain'
					source={require('../../assets/bg-card.png')}
				/>
			</View>
			<View style={styles.cardBody}>
				<WalletTitle color='white' style={{ marginHorizontal: 30 }}>
					{title}
				</WalletTitle>
				{children}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	card: {
		width: width,
		paddingHorizontal: 16,
	},
	cardBody: {
		backgroundColor: THEME.PRIMARY,
		borderRadius: 24,
		paddingHorizontal: 30,
		paddingVertical: 40,
		height: 357,
		justifyContent: 'space-between',
	},
	imgBlock: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
	},
	imgBg: {
		width: width * 1.5,
		height: width * 1.5,
	},
})
