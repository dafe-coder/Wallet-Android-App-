import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { WalletText } from './../UI'
import { THEME } from './../../Theme'

export const ChangeCurrentNetwork = ({ network, onPress }) => {
	return (
		<View style={{ width: '100%' }}>
			<TouchableOpacity
				onPress={() => onPress('Ethereum')}
				activeOpacity={0.7}
				style={[styles.item, { marginBottom: 30 }]}>
				<Image
					resizeMode='cover'
					style={styles.image}
					source={require('../../../assets/network/eth.png')}
				/>

				<WalletText>Ethereum</WalletText>
				<View
					style={[
						styles.circle,
						network == 'Ethereum' && {
							backgroundColor: THEME.VIOLET,
							borderColor: THEME.VIOLET,
						},
					]}
				/>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => onPress('Polygon')}
				activeOpacity={0.7}
				style={styles.item}>
				<Image
					resizeMode='cover'
					style={styles.image}
					source={require('../../../assets/network/pol.png')}
				/>
				<WalletText>Polygon</WalletText>
				<View
					style={[
						styles.circle,
						network == 'Polygon' && {
							backgroundColor: THEME.VIOLET,
							borderColor: THEME.VIOLET,
						},
					]}
				/>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	image: {
		width: 40,
		height: 40,
		borderRadius: 50,
		overflow: 'hidden',
		marginRight: 10,
	},
	item: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	circle: {
		// backgroundColor: THEME.VIOLET,
		borderColor: THEME.DISABLED_TEXT,
		borderWidth: 1,
		width: 18,
		height: 18,
		borderRadius: 50,
		marginLeft: 'auto',
	},
})
