import React from 'react'
import { TouchableOpacity, View, StyleSheet } from 'react-native'
import { THEME } from '../../Theme'
import { WalletText } from './../../Components/UI/WalletText'

export const DoubleButtons = ({ active, navigation }) => {
	const onPressButton = () => {
		navigation.reset({
			index: 0,
			routes: [{ name: 'Home' }],
		})
	}

	const onPressButtonSecond = () => {
		navigation.navigate('TransactionHistory')
	}

	return (
		<View style={styles.wrap}>
			<TouchableOpacity
				activeOpacity={1}
				onPress={onPressButton}
				style={[styles.btn, active ? styles.transparent : {}, styles.btnLeft]}>
				<WalletText fw='bold' color='white'>
					Wallet
				</WalletText>
			</TouchableOpacity>
			<TouchableOpacity
				activeOpacity={1}
				onPress={onPressButtonSecond}
				style={[
					styles.btn,
					!active ? styles.transparent : {},
					styles.btnRight,
				]}>
				<WalletText fw='bold' color='white'>
					Activity
				</WalletText>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	wrap: {
		flexDirection: 'row',
		backgroundColor: THEME.BLACK,
		borderRadius: 24,
		padding: 4,
	},
	btn: {
		justifyContent: 'center',
		alignItems: 'center',
		width: 94,
		height: 29,
	},
	btnLeft: {
		borderTopLeftRadius: 50,
		borderBottomLeftRadius: 50,
	},
	btnRight: {
		borderTopRightRadius: 50,
		borderBottomRightRadius: 50,
	},
	transparent: {
		backgroundColor: '#17191E',
	},
})
