import React from 'react'
import { Dimensions, View, Image, StyleSheet } from 'react-native'
import { WalletText, WalletButton } from '../Components/UI'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
export const SentSuccessScreen = ({ navigation }) => {
	return (
		<View style={{ flex: 1, justifyContent: 'center' }}>
			<View
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					marginTop: -height / 5,
				}}>
				<Image
					resizeMode='contain'
					style={{
						position: 'absolute',
						width: width * 1.2,
						height: width * 1.2,
					}}
					source={require('../../assets/success.png')}
				/>
				<WalletText style={{ top: height / 4.5 }}>
					Your transaction has been sent.
				</WalletText>
			</View>
			<View style={styles.btn}>
				<WalletButton onPress={() => navigation.navigate('Home')} size='m'>
					Ok
				</WalletButton>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	btn: {
		position: 'absolute',
		left: 0,
		right: 0,
		bottom: 40,
		justifyContent: 'center',
		alignItems: 'center',
	},
})
