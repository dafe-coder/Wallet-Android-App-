import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { WalletText } from './UI/'
import { SvgIcon } from './svg/svg'
import { useNavigate } from 'react-router-native'

export const Header = ({ title }) => {
	const navigate = useNavigate()

	return (
		<View style={styles.header}>
			<TouchableOpacity
				style={styles.backBtn}
				onPress={() => navigate(-1)}
				activeOpacity={0.7}>
				<SvgIcon type='arrow-left' />
			</TouchableOpacity>
			<WalletText fw='bold' style={styles.text} size='m'>
				{title}
			</WalletText>
		</View>
	)
}

const styles = StyleSheet.create({
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		marginBottom: 30,
		paddingTop: 25,
	},
	backBtn: {
		position: 'absolute',
		left: 0,
		zIndex: 1,
		top: 29,
	},
	text: {
		marginLeft: 'auto',
		marginRight: 'auto',
		textAlign: 'center',
	},
})
