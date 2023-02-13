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
					source={require('../../assets/logo_polygon.png')}
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
		top: -33,
		width: 61,
		height: 61,
	},
	item: {
		borderRadius: 15,
		flex: 1,
	},
	image: {
		width: null,
		height: null,
		flex: 1,
	},
})
