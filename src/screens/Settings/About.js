import React from 'react'
import {
	View,
	Image,
	TouchableOpacity,
	StyleSheet,
	Linking,
} from 'react-native'
import { Header } from './../../Components/'
import { WalletText } from './../../Components/UI/WalletText'
import { THEME } from '../../Theme'
import appInfo from '../../../app.json'

export const About = () => {
	return (
		<View style={{ flex: 1, paddingHorizontal: 24 }}>
			<Header title='About' />
			<View style={{ alignItems: 'center', marginBottom: 50, marginTop: 40 }}>
				<Image
					style={{ height: 102, width: 102 }}
					source={require('../../../assets/logo/logo.png')}
				/>
				<WalletText fw='bold' style={{ marginBottom: 5, marginTop: 45 }}>
					Pepe
				</WalletText>
				<WalletText>Version {appInfo.expo.version}</WalletText>
			</View>
			<TouchableOpacity
				activeOpacity={0.7}
				style={styles.btn}
				onPress={() =>
					Linking.openURL('https://t.me/pepecoineth').catch((err) =>
						console.error('An error occurred', err)
					)
				}>
				<WalletText>Help</WalletText>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	btn: {
		backgroundColor: THEME.GREEN_BG,
		paddingHorizontal: 20,
		paddingVertical: 16,
		borderRadius: 16,
		borderWidth: 1,
		borderColor: THEME.WHITE,
	},
})
