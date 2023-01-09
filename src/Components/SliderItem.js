import React, { useState, useEffect } from 'react'
import { View, StyleSheet, ImageBackground, Image } from 'react-native'
import { InfoPriseSlide } from './sliders/InfoPriceSlide'
import { PieChar } from './PieChar'
import { LoaderSlider } from './Loader'
import { useSelector } from 'react-redux'
export const SliderItem = ({ index, portfolioCoinsInit }) => {
	const { portfolioBalance, loaderSkeleton } = useSelector(
		(state) => state.wallet
	)
	const { currentAccount } = useSelector((state) => state.storage)
	const [loaderSlide, setLoaderSlide] = useState(false)
	useEffect(() => {
		setLoaderSlide(false)
		if (portfolioBalance != null) {
			setLoaderSlide(true)
		}
	}, [portfolioBalance, currentAccount])
	return (
		<View style={styles.item}>
			{/* {index == 0 ? (
				<Image
					style={styles.imageLogo}
					source={require('../../assets/logoWalletMain.png')}
				/>
			) : (
				<></>
			)} */}
			{loaderSlide && loaderSkeleton ? (
				<ImageBackground
					resizeMode='cover'
					style={styles.image}
					source={require('../../assets/card.png')}>
					{index == 0 ? (
						<InfoPriseSlide />
					) : (
						<PieChar portfolioCoinsInit={portfolioCoinsInit} />
					)}
				</ImageBackground>
			) : (
				<LoaderSlider />
			)}
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
		borderRadius: 15,
		overflow: 'hidden',
		flex: 1,
		borderWidth: 1,
		borderColor: '#342E20',
	},
	image: {
		width: null,
		height: null,
		flex: 1,
	},
})
