import React, { useRef } from 'react'
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native'
import Animated from 'react-native-reanimated'
import { THEME } from '../../Theme'
import { SvgIcon } from './../svg/svg'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export const Preloader = ({ transformLogo, rotate, opacityOut, opacityIn }) => {
	return (
		<View style={styles.container}>
			<Animated.View style={[styles.gradientImg, transformLogo, opacityOut]}>
				<Animated.View style={rotate}>
					<Image source={require('../../../assets/circle.png')} />
				</Animated.View>
			</Animated.View>
			<Animated.View style={[styles.gradientImg, opacityIn]}>
				<Animated.View style={rotate}>
					<Image source={require('../../../assets/circle2.png')} />
				</Animated.View>
			</Animated.View>
			<Animated.View style={[styles.logoWallet, transformLogo]}>
				<Image
					resizeMode='contain'
					style={styles.imgLogo}
					source={require('../../../assets/feather.png')}
				/>
			</Animated.View>
		</View>
	)
}
const styles = StyleSheet.create({
	gradientImg: {
		width: 400,
		height: 400,
		justifyContent: 'center',
		alignItems: 'center',
		top: '50%',
		right: '50%',
		marginRight: -200,
		marginTop: -200,
		zIndex: 0,
		position: 'absolute',
	},
	logoWallet: {
		position: 'absolute',
		zIndex: 10,
		top: '50%',
		left: '50%',
		marginLeft: -110,
		marginTop: -110,
		opacity: 1,
		width: 220,
		height: 220,
		backgroundColor: THEME.PRIMARY,
		borderRadius: 200,
		justifyContent: 'center',
		alignItems: 'center',
	},
	imgLogo: {
		width: 90,
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: THEME.PRIMARY,
	},
})
