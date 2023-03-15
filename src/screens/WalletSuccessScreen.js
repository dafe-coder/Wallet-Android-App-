import React from 'react'
import { View, ImageBackground, StyleSheet, Dimensions } from 'react-native'
import { WalletText } from './../Components/UI/WalletText'
import { WalletButton } from './../Components/UI/WalletButton'

const width = Dimensions.get('window').width
export const WalletSuccessScreen = ({ navigation }) => {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<View
				style={{
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				<View
					style={{
						position: 'relative',
						width: 170,
						height: 170,
						justifyContent: 'center',
						alignItems: 'center',
					}}>
					<ImageBackground
						resizeMode='cover'
						style={styles.img}
						source={require('../../assets/success.png')}
					/>
				</View>
				<View style={{ marginTop: 50 }}>
					<WalletText center>
						Congratulations! {'\n'}You have successfully added a{'\n'}new wallet
					</WalletText>
					<WalletText
						center
						style={{ fontSize: 12, marginTop: 20 }}
						color='disabled'>
						0xDACa159F870Ba0DAba0708d8794c2Ec9d988f6B4
					</WalletText>
				</View>
			</View>
			<View style={{ position: 'absolute', bottom: 40, zIndex: 10 }}>
				<WalletButton onPress={() => navigation.navigate('Home')}>
					Continue
				</WalletButton>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	img: {
		width: width,
		height: width,
	},
})
