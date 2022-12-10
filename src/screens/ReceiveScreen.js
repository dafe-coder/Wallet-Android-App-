import React from 'react'
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { WalletTitle, WalletText } from './../Components/UI'
import { QrCode } from './../Components/'
// import { CameraRoll, ToastAndroid } from 'react-native'
// import RNFS from 'react-native-fs'
import { THEME } from './../Theme'

export const ReceiveScreen = () => {
	// const saveQrToDisk = () => {
	// 	this.svg.toDataURL((data) => {
	// 		RNFS.writeFile(
	// 			RNFS.CachesDirectoryPath + '/some-name.png',
	// 			data,
	// 			'base64'
	// 		)
	// 			.then((success) => {
	// 				return CameraRoll.saveToCameraRoll(
	// 					RNFS.CachesDirectoryPath + '/some-name.png',
	// 					'photo'
	// 				)
	// 			})
	// 			.then(() => {
	// 				this.setState({ busy: false, imageSaved: true })
	// 				ToastAndroid.show('Saved to gallery !!', ToastAndroid.SHORT)
	// 			})
	// 	})
	// }
	return (
		<View style={{ paddingTop: 29, paddingHorizontal: 16 }}>
			<View style={{ alignItems: 'flex-end', marginBottom: 58 }}>
				<TouchableOpacity style={styles.btnSave} activeOpacity={0.7}>
					<WalletText style={{ color: THEME.GOLD, fontSize: 12 }}>
						Save QR code
					</WalletText>
				</TouchableOpacity>
			</View>
			<WalletTitle style={{ marginBottom: 34 }}>
				Scan QR Code and Pay
			</WalletTitle>
			<QrCode value='0x017468fb896cf88c29eb5bd9a82a819f5d598160' />
			<View style={styles.address}>
				<WalletText color='white'>0x0A0B110107...4664a558D0</WalletText>
			</View>
			<View
				style={{
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'space-between',
					marginTop: 48,
				}}>
				<TouchableOpacity activeOpacity={0.7} style={styles.link}>
					<Image
						style={styles.icon}
						source={require('../../assets/icons/share.png')}
					/>
					<WalletText color='gold'>Share address</WalletText>
				</TouchableOpacity>
				<TouchableOpacity activeOpacity={0.7} style={styles.link}>
					<Image
						style={styles.icon}
						source={require('../../assets/icons/copy.png')}
					/>
					<WalletText color='gold'>Copy address</WalletText>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	link: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	icon: {
		marginRight: 8,
		width: 24,
		height: 24,
	},
	address: {
		backgroundColor: THEME.BROWN_DARK,
		borderRadius: 5,
		paddingHorizontal: 20,
		paddingVertical: 10,
		marginTop: 24,
	},
	btnSave: {
		backgroundColor: THEME.BROWN,
		paddingHorizontal: 23,
		paddingVertical: 6,
		borderRadius: 5,
	},
})
