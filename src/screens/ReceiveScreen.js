import React, { useState, useEffect } from 'react'
import {
	View,
	StyleSheet,
	TouchableOpacity,
	ScrollView,
	Share,
} from 'react-native'
import { WalletTitle, WalletText } from './../Components/UI'
import { QrCode } from './../Components/'
import { CameraRoll, ToastAndroid } from 'react-native'
import { THEME } from './../Theme'
import { useSelector } from 'react-redux'
import * as Clipboard from 'expo-clipboard'
import { SvgIcon } from './../Components/svg/svg'

export const ReceiveScreen = () => {
	const { dataUser, currentAccount } = useSelector((state) => state.storage)
	const [busy, setBusy] = useState(true)
	const [imageSaved, setImageSaved] = useState(false)
	const [qrRef, setRef] = useState()
	const [address, setAddress] = useState('')

	useEffect(() => {
		setAddress(dataUser.filter((d) => d.name == currentAccount)[0].address)
	}, [dataUser, currentAccount])

	const saveQrToDisk = () => {
		// var RNFS = require('react-native-fs')
		qrRef.toDataURL((data) => {
			RNFS.writeFile(
				RNFS.CachesDirectoryPath + '/some-name.png',
				data,
				'base64'
			)
				.then((success) => {
					return CameraRoll.saveToCameraRoll(
						RNFS.CachesDirectoryPath + '/some-name.png',
						'photo'
					)
				})
				.then(() => {
					setBusy(false)
					setImageSaved(true)
					ToastAndroid.show('Saved to gallery !!', ToastAndroid.SHORT)
				})
		})
	}
	const shareQR = () => {
		Share.share({
			message: address,
		})
	}
	const onCopy = async () => {
		await Clipboard.setStringAsync(address)
	}
	return (
		<ScrollView>
			<View
				style={{ paddingTop: 70, paddingHorizontal: 16, paddingBottom: 60 }}>
				{/* <View style={{ alignItems: 'flex-end', marginBottom: 58 }}>
				<TouchableOpacity
				style={styles.btnSave}
				activeOpacity={0.7}
				onPress={saveQrToDisk}>
				<WalletText style={{ color: THEME.VIOLET, fontSize: 12 }}>
				Save QR code
				</WalletText>
				</TouchableOpacity>
			</View> */}
				<WalletTitle style={{ marginBottom: 34 }}>
					Scan QR Code and Pay
				</WalletTitle>
				{address != '' ? <QrCode setRef={setRef} value={address} /> : <></>}
				<View style={styles.address}>
					<WalletText color='white'>
						{address.slice(0, 13) + '...' + address.slice(-10)}
					</WalletText>
				</View>
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-between',
						marginTop: 48,
					}}>
					<TouchableOpacity
						activeOpacity={0.7}
						style={styles.link}
						onPress={shareQR}>
						<SvgIcon
							style={{ marginTop: 1 }}
							width='24'
							height='24'
							type='share'
							fill={THEME.VIOLET}
						/>
						<WalletText style={{ marginLeft: 8 }} color='gold'>
							Share address
						</WalletText>
					</TouchableOpacity>
					<TouchableOpacity
						activeOpacity={0.7}
						style={styles.link}
						onPress={onCopy}>
						<SvgIcon
							style={{ marginTop: 4 }}
							width='24'
							height='24'
							type='copy'
							fill={THEME.VIOLET}
						/>
						<WalletText style={{ marginLeft: 8 }} color='gold'>
							Copy address
						</WalletText>
					</TouchableOpacity>
				</View>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	link: {
		flexDirection: 'row',
		alignItems: 'center',
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
