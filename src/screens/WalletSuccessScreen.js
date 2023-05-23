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
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				<View
					style={{
						justifyContent: 'center',
						alignItems: 'center',
					}}>
					<ImageBackground
						resizeMode='cover'
						style={styles.img}
						source={require('../../assets/success.png')}
					/>
				</View>
				<View style={{ marginTop: 24 }}>
					<WalletText center size='xl' fw='bold'>
						Congratulations! {'\n'}You have successfully{'\n'}added a new wallet
					</WalletText>
					<WalletText
						center
						style={{ fontSize: 12, marginTop: 20 }}
						color='white-dark'>
						{addressWallet}
					</WalletText>
				</View>
			</View>
			<View style={{ width: '100%', paddingHorizontal: 20, marginBottom: 40 }}>
				<WalletButton
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
		width: 86,
		height: 86,
	},
})
