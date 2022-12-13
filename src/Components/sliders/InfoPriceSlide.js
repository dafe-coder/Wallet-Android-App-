import React from 'react'
import { WalletText, WalletTitle } from '../UI/'
import { View, StyleSheet, Image } from 'react-native'
import { THEME } from '../../Theme'

export const InfoPriseSlide = () => {
	return (
		<View style={styles.wrap}>
			<WalletText size='sm' style={THEME.WHITE_DARK_TEXT}>
				Your balance is equivalent
			</WalletText>
			<WalletTitle style={{ fontSize: 35, lineHeight: 40, marginTop: 7 }}>
				$143,421.20
			</WalletTitle>
			<View style={styles.priceBlock}>
				<WalletText>~ 16,2334.56</WalletText>
				<Image
					style={styles.imageUp}
					source={require('../../../assets/up.png')}
				/>
				<WalletText color={true ? 'green-light' : 'red'}>+6.54%</WalletText>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	wrap: {
		flex: 1,
		alignItems: 'center',
	},
	imageUp: {
		marginRight: 4,
		marginLeft: 10,
	},
	priceBlock: {
		flexDirection: 'row',
		alignItems: 'center',
		borderRadius: 50,
		backgroundColor: THEME.BROWN_DARK,
		paddingHorizontal: 15,
		paddingVertical: 7,
		marginTop: 20,
	},
})
