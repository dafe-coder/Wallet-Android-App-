import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { WalletText } from './UI/'
import { SvgIcon } from './svg/svg'
import { useNavigate } from 'react-router-native'

export const Header = ({ title, page = 'all' }) => {
	const navigate = useNavigate()

	return (
		<View
			style={[
				styles.header,
				page == 'home' && { justifyContent: 'space-between' },
			]}>
			{page == 'all' && (
				<TouchableOpacity
					style={[
						styles.backBtn,
						page == 'home' && { position: 'relative', top: 0 },
					]}
					onPress={() => navigate(-1)}
					activeOpacity={0.7}>
					<SvgIcon type='arrow-left' />
				</TouchableOpacity>
			)}

			{page == 'home' && (
				<TouchableOpacity
					style={[
						styles.backBtn,
						page == 'home' && { position: 'relative', top: 0 },
					]}
					onPress={() => navigate('/transaction-history')}
					activeOpacity={0.7}>
					<SvgIcon type='history' />
				</TouchableOpacity>
			)}
			<WalletText fw='bold' style={styles.text} size='m'>
				{title}
			</WalletText>
			{page == 'home' && (
				<TouchableOpacity
					activeOpacity={0.7}
					onPress={() => navigate('/account')}>
					<SvgIcon type='user-circle' />
				</TouchableOpacity>
			)}
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
