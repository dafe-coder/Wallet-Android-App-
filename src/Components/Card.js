import React, { Children } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { WalletTitle } from './UI'
import { THEME } from '../Theme'
import { Dimensions } from 'react-native'

const width = Dimensions.get('window').width

export const Card = ({
	size = 'm',
	title,
	children,
	style,
	styleBody,
	imgSize,
}) => {
	return (
		<View style={[styles.card, style]}>
			<View style={styles.imgBlock}>
				<Image
					style={[styles.imgBg, imgSize]}
					resizeMode='contain'
					source={
						size == 'm'
							? require('../../assets/bg-card.png')
							: size == 's'
							? require('../../assets/bg-card-wallet-sm.png')
							: require('../../assets/bg-card-long.png')
					}
				/>
			</View>
			<View style={[styles.cardBody, styleBody]}>
				{title && (
					<WalletTitle color='white' style={{ marginHorizontal: 30 }}>
						{title}
					</WalletTitle>
				)}
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
		zIndex: -1,
	},
	imgBg: {
		width: width * 1.5,
		height: width * 1.5,
	},
})
