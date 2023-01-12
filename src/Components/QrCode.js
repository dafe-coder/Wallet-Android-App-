import React from 'react'
import { View, StyleSheet } from 'react-native'
import { THEME } from './../Theme'
// import QRCode from 'react-native-qrcode-svg'

export const QrCode = ({ value, setRef }) => {
	return (
		<View style={styles.block}>
			{/* <QRCode
				value={value}
				color='black'
				backgroundColor='white'
				size={130}
				getRef={(c) => setRef(c)}
			/> */}
		</View>
	)
}

const styles = StyleSheet.create({
	block: {
		backgroundColor: THEME.WHITE,
		padding: 20,
		width: 172,
		height: 172,
		margin: 0,
		marginRight: 'auto',
		marginLeft: 'auto',
		borderRadius: 10,
	},
})
