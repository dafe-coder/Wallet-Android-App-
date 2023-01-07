import React, { useState } from 'react'
import { Dimensions, View, StyleSheet } from 'react-native'
import Carousel from 'react-native-reanimated-carousel'
import { SliderItem } from './SliderItem'
import { THEME } from './../Theme'

export const Slider = ({ portfolioCoinsInit }) => {
	const [indexSlider, setIndexSlider] = useState(0)
	const width = Dimensions.get('window').width
	return (
		<View
			style={{
				flex: 1,
				position: 'relative',
				left: -15,
				marginBottom: 20,
			}}>
			<Carousel
				loop={false}
				width={width + 30}
				mode='parallax'
				pagingEnabled={true}
				height={205}
				data={[...new Array(2).keys()]}
				onSnapToItem={(index) => setIndexSlider(index)}
				renderItem={({ index }) => (
					<SliderItem index={index} portfolioCoinsInit={portfolioCoinsInit} />
				)}
			/>
			<View style={styles.bar}>
				<View
					style={[
						indexSlider == 0 ? styles.circleActive : styles.circle,
						{ marginRight: 6 },
					]}></View>
				<View
					style={[
						indexSlider == 1 ? styles.circleActive : styles.circle,
					]}></View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	bar: {
		position: 'relative',
		bottom: 5,
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	circle: {
		backgroundColor: THEME.BROWN_DARK,
		width: 8,
		height: 8,
		borderRadius: 50,
	},
	circleActive: {
		backgroundColor: THEME.BROWN_TEXT,
		width: 8,
		height: 8,
		borderRadius: 50,
	},
})
