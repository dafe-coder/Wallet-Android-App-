import React, { useRef } from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import Animated from 'react-native-reanimated'
import { THEME } from '../../Theme'

export const Preloader = ({
	animatedStylesColor,
	transformTitle,
	transformLogo,
}) => {
	return (
		<View style={styles.container}>
			<View style={styles.logoWrap}>
				<Animated.View
					style={[
						{
							marginBottom: 20,
							backgroundColor: 'red',
							height: 0,
						},
						transformLogo,
					]}>
					<Image
						source={require('../../../assets/logo/wallet-logo.png')}
						style={[{ width: 86, height: 86 }]}
					/>
				</Animated.View>
				<Animated.Text style={[styles.title, animatedStylesColor]}>
					Web<Text style={styles.whiteTitle}>3</Text>
					{'\n'}Wallet
				</Animated.Text>
			</View>
		</View>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	logoWrap: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontSize: 40,
		lineHeight: 50,
		color: THEME.VIOLET,
		textTransform: 'uppercase',
		fontFamily: 'sf-bold',
		textAlign: 'center',
	},
	whiteTitle: {
		color: THEME.WHITE,
	},
})
