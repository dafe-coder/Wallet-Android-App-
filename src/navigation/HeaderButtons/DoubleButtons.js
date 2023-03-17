import React from 'react'
import { TouchableOpacity, View, StyleSheet } from 'react-native'
import { THEME } from '../../Theme'
import { WalletText } from './../../Components/UI/WalletText'

export const DoubleButtons = ({ navigation }) => {
	const [active, setActive] = React.useState(true)
	const onPressButton = () => {
		navigation.reset({
			index: 0,
			routes: [{ name: 'Home' }],
		})
		setActive(true)
	}
	const onPressButtonSecond = () => {
		navigation.navigate('TransactionHistory')
		setActive(false)
	}
	return (
		<View style={styles.wrap}>
			<TouchableOpacity
				activeOpacity={1}
				onPress={onPressButton}
				style={[
					styles.btn,
					active ? {} : styles.transparent,
					{ marginRight: 12 },
				]}>
				<WalletText fw='bold' color='white'>
					Wallet
				</WalletText>
			</TouchableOpacity>
			<TouchableOpacity
				activeOpacity={1}
				onPress={onPressButtonSecond}
				style={[styles.btn, !active ? {} : styles.transparent]}>
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
		marginLeft: 15,
	},
	btn: {
		backgroundColor: THEME.VIOLET,
		borderRadius: 50,
		justifyContent: 'center',
		alignItems: 'center',
		width: 94,
		height: 29,
	},
	transparent: {
		backgroundColor: THEME.GREY,
	},
})
