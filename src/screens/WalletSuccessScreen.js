import React from 'react'
import { View, ImageBackground, StyleSheet, Dimensions } from 'react-native'
import { WalletText } from './../Components/UI/WalletText'
import { WalletButton } from './../Components/UI/WalletButton'
import { useSelector } from 'react-redux'

const width = Dimensions.get('window').width
export const WalletSuccessScreen = ({ navigation }) => {
	const { addressWallet } = useSelector((state) => state.wallet)
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
						{addressWallet}
					</WalletText>
				</View>
			</View>
			<View style={{ position: 'absolute', bottom: 40, zIndex: 10 }}>
				<WalletButton
					size='m'
					onPress={() =>
						navigation.reset({ index: 0, routes: [{ name: 'Home' }] })
					}>
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
