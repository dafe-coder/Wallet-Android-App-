import React from 'react'
import { View, TouchableOpacity, StyleSheet, Linking } from 'react-native'
import { WalletText } from './UI/WalletText'
import { THEME } from './../Theme'
import { SvgIconNav } from './svg/svgNav'

export const WalletNav = ({ navigation }) => {
	const url = 'https://www.moonpay.com/buy'
	return (
		<View style={styles.wrap}>
			<TouchableOpacity
				activeOpacity={0.7}
				onPress={() => navigation.navigate('Sent')}
				style={styles.item}>
				<View style={styles.circle}>
					<SvgIconNav type='send' />
				</View>
				<WalletText>Send</WalletText>
			</TouchableOpacity>
			<TouchableOpacity
				activeOpacity={0.7}
				onPress={() =>
					Linking.openURL(url).catch((err) =>
						console.error('An error occurred', err)
					)
				}
				style={styles.item}>
				<View style={styles.circle}>
					<SvgIconNav type='buy' />
				</View>
				<WalletText>Buy</WalletText>
			</TouchableOpacity>
			<TouchableOpacity
				activeOpacity={0.7}
				onPress={() => navigation.navigate('Receive')}
				style={styles.item}>
				<View style={styles.circle}>
					<SvgIconNav type='receive' />
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
