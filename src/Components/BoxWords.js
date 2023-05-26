import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { THEME } from './../Theme'
import { WalletText } from './UI'
import { SvgIcon } from './svg/svg'

export const BoxWords = ({ arr, setOpenQr }) => {
	return (
		<>
			<View style={styles.box}>
				{arr.map((item, id) => (
					<View style={[styles.word, (id + 1) % 4 == 0 && { marginRight: 0 }]}>
						<WalletText size='xs' center>
							{item}
						</WalletText>
					</View>
				))}
			</View>
			<View style={styles.btns}>
				<TouchableOpacity style={styles.btn} activeOpacity={0.7}>
					<SvgIcon style={{ marginRight: 7 }} type='copy' />
					<WalletText>Copy</WalletText>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.btn2}
					onPress={() => setOpenQr(true)}
					activeOpacity={0.7}>
					<SvgIcon style={{ marginRight: 7 }} type='qrcode' />
					<WalletText>QR Code</WalletText>
				</TouchableOpacity>
			</View>
		</>
	)
}

const styles = StyleSheet.create({
	box: {
		backgroundColor: THEME.GREEN_LIGHT,
		borderTopLeftRadius: 16,
		borderTopRightRadius: 16,
		borderWidth: 1,
		borderColor: THEME.WHITE,
		width: '100%',
		padding: 20,
		paddingBottom: 15,
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	word: {
		padding: 5,
		flexBasis: '23.5%',
		borderWidth: 1,
		borderColor: THEME.WHITE,
		backgroundColor: 'rgba(255, 255, 255, 0.2)',
		borderRadius: 8,
		marginRight: 5,
		marginBottom: 5,
	},
	btns: {
		flexDirection: 'row',
	},
	btn: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		width: '50%',
		borderWidth: 1,
		borderTopWidth: 0,
		borderColor: THEME.WHITE,
		borderBottomLeftRadius: 16,
		backgroundColor: THEME.GREEN_LIGHT,
		paddingVertical: 10,
		borderRightWidth: 0,
	},
	btn2: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		width: '50%',
		borderWidth: 1,
		borderTopWidth: 0,
		borderColor: THEME.WHITE,
		borderBottomRightRadius: 16,
		backgroundColor: THEME.GREEN_LIGHT,
		paddingVertical: 10,
	},
})
