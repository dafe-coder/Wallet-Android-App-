import React from 'react'
import { View, StyleSheet, Image, ImageBackground } from 'react-native'
import { WalletText } from './UI/WalletText'

export const Nft = () => {
	return (
		<View style={styles.wrap}>
			<View style={styles.item}>
				<Image
					style={styles.imgNft}
					resizeMode='cover'
					source={require('../../assets/nft.png')}
				/>
				<View style={{ flexGrow: 1 }}>
					<WalletText fw='bold' size='m' style={{ marginBottom: 8 }}>
						Inscription #7451
					</WalletText>
					<WalletText fw='bold' size='xs' color='white-dark'>
						image\png
					</WalletText>
					<ImageBackground
						source={require('../../assets/bg-price.png')}
						resizeMode='cover'
						style={styles.blockPrice}>
						<WalletText fw='bold'>0.149999</WalletText>
					</ImageBackground>
				</View>
			</View>
			<View style={styles.item}>
				<Image
					style={styles.imgNft}
					resizeMode='cover'
					source={require('../../assets/nft2.png')}
				/>
				<View style={{ flexGrow: 1 }}>
					<WalletText fw='bold' size='m' style={{ marginBottom: 8 }}>
						Inscription #7451
					</WalletText>
					<WalletText fw='bold' size='xs' color='white-dark'>
						image\png
					</WalletText>
					<ImageBackground
						source={require('../../assets/bg-price.png')}
						resizeMode='cover'
						style={styles.blockPrice}>
						<WalletText fw='bold'>0.149999</WalletText>
					</ImageBackground>
				</View>
			</View>
			<View style={styles.item}>
				<Image
					style={styles.imgNft}
					resizeMode='cover'
					source={require('../../assets/nft.png')}
				/>
				<View style={{ flexGrow: 1 }}>
					<WalletText fw='bold' size='m' style={{ marginBottom: 8 }}>
						Inscription #7451
					</WalletText>
					<WalletText fw='bold' size='xs' color='white-dark'>
						image\png
					</WalletText>
					<ImageBackground
						source={require('../../assets/bg-price.png')}
						resizeMode='cover'
						style={styles.blockPrice}>
						<WalletText fw='bold'>0.149999</WalletText>
					</ImageBackground>
				</View>
			</View>
		</View>
	)
}
const styles = StyleSheet.create({
	blockPrice: {
		width: '100%',
		height: 45,
		marginTop: 20,
		borderRadius: 8,
		overflow: 'hidden',
		justifyContent: 'center',
		alignItems: 'center',
	},
	wrap: {
		marginTop: 30,
		marginBottom: 80,
		paddingHorizontal: 20,
	},
	item: {
		flexDirection: 'row',
		marginBottom: 24,
	},
	imgNft: {
		width: 110,
		height: 110,
		marginRight: 16,
		borderRadius: 16,
		overflow: 'hidden',
	},
})
