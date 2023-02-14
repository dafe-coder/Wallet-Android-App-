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
				style={[
					styles.item,
					{
						marginRight: 40,
					},
				]}>
				<View style={styles.circle}>
					<SvgIconNav type='send' />
				</View>
				<WalletText color='dark'>Send</WalletText>
			</TouchableOpacity>
			<TouchableOpacity
				activeOpacity={0.7}
				onPress={() =>
					Linking.openURL(url).catch((err) =>
						console.error('An error occurred', err)
					)
				}
				style={[
					styles.item,
					{
						marginRight: 40,
					},
				]}>
				<View style={styles.circle}>
					<SvgIconNav width={21} height={21} type='buy' />
				</View>
				<WalletText color='dark'>Buy</WalletText>
			</TouchableOpacity>
			<TouchableOpacity
				activeOpacity={0.7}
				onPress={() => navigation.navigate('Receive')}
				style={styles.item}>
				<View style={styles.circle}>
					<SvgIconNav type='receive' />
				</View>
				<WalletText color='dark'>Receive</WalletText>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	wrap: {
		borderRadius: 10,
		paddingHorizontal: 20,
		paddingVertical: 10,
		flexDirection: 'row',
		justifyContent: 'center',
	},
	item: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	circle: {
		backgroundColor: THEME.GREY_LIGHT,
		height: 50,
		width: 50,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 50,
		marginBottom: 3,
	},
})
