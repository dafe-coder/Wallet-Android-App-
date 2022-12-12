import React from 'react'
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { WalletText } from './UI/WalletText'
import { THEME } from './../Theme'

export const WalletNav = ({ navigation }) => {
	return (
		<View style={styles.wrap}>
			<TouchableOpacity
				onPress={() => navigation.navigate('Sent')}
				style={styles.item}>
				<View style={styles.circle}>
					<Image source={require('../../assets/icons/send.png')} />
				</View>
				<WalletText>Send</WalletText>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => navigation.navigate('Buy')}
				style={styles.item}>
				<View style={styles.circle}>
					<Image source={require('../../assets/icons/plus.png')} />
				</View>
				<WalletText>Buy</WalletText>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => navigation.navigate('Receive')}
				style={styles.item}>
				<View style={styles.circle}>
					<Image source={require('../../assets/icons/receive.png')} />
				</View>
				<WalletText>Receive</WalletText>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	wrap: {
		backgroundColor: THEME.BROWN_DARK,
		borderRadius: 10,
		paddingHorizontal: 20,
		paddingVertical: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	item: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	circle: {
		borderColor: '#44444480',
		borderWidth: 1,
		backgroundColor: '#51515130',
		height: 45,
		width: 45,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 50,
		marginRight: 6,
	},
})
