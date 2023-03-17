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
import { THEME } from './../Theme'
import { useSelector } from 'react-redux'
import { SvgIcon } from './../Components/svg/svg'
import { ButtonCopy } from './../Components/UI/ButtonCopy'

export const ReceiveScreen = () => {
	const { dataUser, currentAccount } = useSelector((state) => state.storage)
	const [qrRef, setRef] = useState()
	const [address, setAddress] = useState('')

	useEffect(() => {
		setAddress(dataUser.filter((d) => d.name == currentAccount)[0].address)
	}, [dataUser, currentAccount])

	const shareQR = () => {
		Share.share({
			message: address,
		})
	}

	return (
		<ScrollView>
			<View
				style={{ paddingTop: 70, paddingHorizontal: 16, paddingBottom: 60 }}>
				{address !== '' ? <QrCode setRef={setRef} value={address} /> : <></>}
				<View style={styles.address}>
					<WalletText
						center
						color='white'
						size='m'
						style={{ marginBottom: 16 }}>
						My Tokenname address
					</WalletText>
					<WalletText
						style={{ fontSize: 12, lineHeight: 14 }}
						center
						color='disabled'>
						{address !== undefined && address !== '' ? address : ''}
					</WalletText>
				</View>
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'center',
						marginTop: 48,
					}}>
					<ButtonCopy text={address} style={{ marginRight: 20 }} />
					<TouchableOpacity
						activeOpacity={0.7}
						style={styles.link}
						onPress={shareQR}>
						<SvgIcon width='24' height='24' type='share' fill={'#9667E5'} />
						<WalletText fw='bold' color='white' style={{ marginLeft: 8 }}>
							Share
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
		backgroundColor: THEME.GREY,
		borderRadius: 50,
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 6,
		paddingHorizontal: 20,
	},
	address: {
		paddingHorizontal: 24,
		paddingVertical: 12,
		marginTop: 24,
		justifyContent: 'center',
		alignContent: 'center',
	},
	btnSave: {
		backgroundColor: THEME.BROWN,
		paddingHorizontal: 23,
		paddingVertical: 6,
		borderRadius: 5,
	},
})
