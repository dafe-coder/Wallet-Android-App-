import React from 'react'
import { View, StyleSheet } from 'react-native'
import { THEME } from './../Theme'
import QRCode from 'react-native-qrcode-svg'

export const QrCode = ({ value, setRef }) => {
	return (
		<View style={styles.block}>
			<QRCode
				value={value}
				color={THEME.PRIMARY}
				backgroundColor='white'
				size={200}
				getRef={(c) => setRef(c)}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	block: {
		marginRight: 'auto',
		marginLeft: 'auto',
		borderRadius: 10,
	},
})
