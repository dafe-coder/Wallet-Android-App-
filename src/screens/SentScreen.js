import React from 'react'
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { WalletInput, WalletText } from './../Components/UI/'
import { SelectCoinSent } from '../Components'
import { WalletButton } from './../Components/UI/WalletButton'
export const SentScreen = ({ navigation }) => {
	return (
		<View style={{ flex: 1, paddingTop: 29, paddingBottom: 50 }}>
			<View style={{ marginBottom: 39, flex: 0 }}>
				<WalletText color='brown' style={{ paddingLeft: 30, marginBottom: 7 }}>
					Recipient Adress
				</WalletText>
				<TouchableOpacity style={styles.qrButton}>
					<Image source={require('../../assets/camera-qr.png')} />
				</TouchableOpacity>
				<WalletInput placeholder='Public adress (0x...) or ENS' />
			</View>
			<View
				style={{
					marginHorizontal: 16,
					flex: 1,
					justifyContent: 'space-between',
				}}>
				<SelectCoinSent />
				<WalletButton onPress={() => navigation.navigate('ConfirmTransaction')}>
					Send
				</WalletButton>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	qrButton: {
		position: 'absolute',
		bottom: 19,
		right: 35,
		zIndex: 1,
	},
})
