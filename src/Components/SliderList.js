import React, { useState } from 'react'
import { Dimensions, View, StyleSheet } from 'react-native'
import Carousel from 'react-native-reanimated-carousel'
import { SliderItem } from './SliderItem'
import { THEME } from './../Theme'

const width = Dimensions.get('window').width
export const Slider = ({ portfolioCoinsInit }) => {
	const [indexSlider, setIndexSlider] = useState(0)
	return (
		<View
			style={{
				flex: 1,
				position: 'relative',
				left: -15,
				marginBottom: 10,
			}}>
			<Carousel
				loop={false}
				width={width + width / 14}
				mode='parallax'
				pagingEnabled={true}
				height={201}
				data={[...new Array(2).keys()]}
				onSnapToItem={(index) => setIndexSlider(index)}
				renderItem={({ index }) => (
					<SliderItem index={index} portfolioCoinsInit={portfolioCoinsInit} />
				)}
			/>
			<View style={styles.bar}>
				<View
					style={{
						marginLeft: width / 12,
						flexDirection: 'row',
						justifyContent: 'center',
						alignItems: 'center',
						paddingHorizontal: 10,
						paddingVertical: 5,
						backgroundColor: THEME.GREY_LIGHT_BG,
						borderRadius: 30,
					}}>
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
		</View>
	)
}

const styles = StyleSheet.create({
	bar: {
		position: 'relative',
		bottom: 5,
		width: width,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	circle: {
		backgroundColor: '#DACEF0',
		width: 8,
		height: 8,
		borderRadius: 50,
	},
	circleActive: {
		backgroundColor: THEME.VIOLET_LIGHT,
		width: 8,
		height: 8,
		borderRadius: 50,
	},
})
