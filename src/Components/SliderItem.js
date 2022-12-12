import React from 'react'
import { View, StyleSheet, ImageBackground, Image } from 'react-native'
import { InfoPriseSlide } from './sliders/InfoPriceSlide'
import { PieChar } from './PieChar'

export const SliderItem = ({ index }) => {
	return (
		<View style={styles.item}>
			<Image
				style={styles.imageLogo}
				source={require('../../assets/logoWalletMain.png')}
			/>
			<ImageBackground
				style={styles.image}
				source={require('../../assets/card.png')}>
				{/* {index == 0 ? <InfoPriseSlide /> : <PieChar />} */}
				<PieChar />
			</ImageBackground>
		</View>
	)
}

const styles = StyleSheet.create({
	imageLogo: {
		position: 'absolute',
		left: '50%',
		marginLeft: -27,
		zIndex: 2,
		top: -28,
		width: 55,
		height: 55,
	},
	item: {
		flex: 1,
		height: 167,
	},
	image: {
		borderRadius: 15,
		overflow: 'hidden',
		width: '100%',
		height: '100%',
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		paddingTop: 32,
	},
})
