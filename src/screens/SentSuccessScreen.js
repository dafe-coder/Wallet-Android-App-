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
					flex: 1,
				}}>
				<Image
					resizeMode='contain'
					style={{
						width: 86,
						height: 86,
						marginBottom: 24,
					}}
					source={require('../../assets/success.png')}
				/>
				<WalletText
					center
					style={{ fontSize: 20, lineHeight: 26, fontFamily: 'int-bold' }}>
					Your transaction{'\n'} has been sent.
				</WalletText>
			</View>
			<View style={styles.btn}>
				<WalletButton onPress={() => navigation.navigate('Home')}>
					Ok
				</WalletButton>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	btn: {
		marginBottom: 40,
		paddingHorizontal: 20,
	},
})
