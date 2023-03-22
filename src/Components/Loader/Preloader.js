import React, { useRef } from 'react'
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native'
import Animated from 'react-native-reanimated'
import { THEME } from '../../Theme'
import { SvgIcon } from './../svg/svg'
import { WalletText } from '../UI'
const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export const Preloader = ({
	transformLogo,
	transformWhiteBlock,
	logoAnim,
	logoAnimText,
}) => {
	return (
		<View style={styles.container}>
			<Animated.View style={[styles.boxWhite, transformWhiteBlock]} />
			<Animated.View style={[styles.logoWallet, logoAnim]}>
				<SvgIcon type='logo' />
			</Animated.View>
			<Animated.View style={[styles.logoWalletText, logoAnimText]}>
				<WalletText
					style={{ fontSize: 40, lineHeight: 50 }}
					color='gold'
					fw='bold'>
					Web3 Emos Wallet
				</WalletText>
			</Animated.View>
			<View style={{ width: 110, flex: 1, position: 'relative' }}>
				<Animated.View
					style={[
						{
							position: 'absolute',
							left: 0,
							bottom: 656,
						},
						transformLogo.dash,
					]}>
					<Image
						source={require('../../../assets/anim-logos/dash.png')}
						style={[{ width: 110, height: 110 }]}
					/>
				</Animated.View>
				<Animated.View
					style={[
						{
							position: 'absolute',
							left: -95,
							bottom: 630,
						},
						transformLogo.eos,
					]}>
					<Image
						source={require('../../../assets/anim-logos/eos.png')}
						style={[{ width: 95, height: 95 }]}
					/>
				</Animated.View>
				<Animated.View
					style={[
						{
							position: 'absolute',
							left: 113,
							bottom: 654,
						},
						transformLogo.bnb,
					]}>
					<Image
						source={require('../../../assets/anim-logos/bnb.png')}
						style={[{ width: 85, height: 85 }]}
					/>
				</Animated.View>
				<Animated.View
					style={[
						{
							position: 'absolute',
							left: 40,
							bottom: 578,
						},
						transformLogo.btc,
					]}>
					<Image
						source={require('../../../assets/anim-logos/btc.png')}
						style={[{ width: 81, height: 81 }]}
					/>
				</Animated.View>
				<Animated.View
					style={[
						{
							position: 'absolute',
							left: -26,
							bottom: 585,
						},
						transformLogo.lite,
					]}>
					<Image
						source={require('../../../assets/anim-logos/lite.png')}
						style={[{ width: 64, height: 64 }]}
					/>
				</Animated.View>
				<Animated.View
					style={[
						{
							position: 'absolute',
							left: 121,
							bottom: 547,
						},
						transformLogo.tether,
					]}>
					<Image
						source={require('../../../assets/anim-logos/tether.png')}
						style={[{ width: 109, height: 109 }]}
					/>
				</Animated.View>
				<Animated.View
					style={[
						{
							position: 'absolute',
							left: 74,
							bottom: 521,
						},
						transformLogo.tezos,
					]}>
					<Image
						source={require('../../../assets/anim-logos/tezos.png')}
						style={[{ width: 62, height: 62 }]}
					/>
				</Animated.View>
				<Animated.View
					style={[
						{
							position: 'absolute',
							left: -107,
							bottom: 537,
						},
						transformLogo.ethClassic,
					]}>
					<Image
						source={require('../../../assets/anim-logos/ethereum_classic.png')}
						style={[{ width: 89, height: 89 }]}
					/>
				</Animated.View>
				<Animated.View
					style={[
						{
							position: 'absolute',
							left: -7,
							bottom: 506,
						},
						transformLogo.eth,
					]}>
					<Image
						source={require('../../../assets/anim-logos/ethereum.png')}
						style={[{ width: 81, height: 81 }]}
					/>
				</Animated.View>
				<Animated.View
					style={[
						{
							position: 'absolute',
							left: -71,
							bottom: 465,
						},
						transformLogo.nem,
					]}>
					<Image
						source={require('../../../assets/anim-logos/nem.png')}
						style={[{ width: 77, height: 77 }]}
					/>
				</Animated.View>
				<Animated.View
					style={[
						{
							position: 'absolute',
							left: 4,
							bottom: 450,
						},
						transformLogo.ripple,
					]}>
					<Image
						source={require('../../../assets/anim-logos/ripple.png')}
						style={[{ width: 56, height: 56 }]}
					/>
				</Animated.View>
				<Animated.View
					style={[
						{
							position: 'absolute',
							left: 65,
							bottom: 453,
						},
						transformLogo.qtum,
					]}>
					<Image
						source={require('../../../assets/anim-logos/qtum.png')}
						style={[{ width: 68, height: 68 }]}
					/>
				</Animated.View>
				<Animated.View
					style={[
						{
							position: 'absolute',
							left: 133,
							bottom: 474,
						},
						transformLogo.cardano,
					]}>
					<Image
						source={require('../../../assets/anim-logos/cardano.png')}
						style={[{ width: 72, height: 72 }]}
					/>
				</Animated.View>
			</View>
		</View>
	)
}
const styles = StyleSheet.create({
	logoWallet: {
		position: 'absolute',
		zIndex: 10,
		top: '35%',
		opacity: 0,
	},
	logoWalletText: {
		position: 'absolute',
		zIndex: 10,
		top: '50%',
		opacity: 0,
	},
	boxWhite: {
		width: '200%',
		height: '130%',
		borderTopStartRadius: 600,
		borderTopRightRadius: 600,
		overflow: 'hidden',
		bottom: '-140%',
		right: '-50%',
		position: 'absolute',
		backgroundColor: THEME.WHITE,
		zIndex: 2,
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#8247E5',
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
