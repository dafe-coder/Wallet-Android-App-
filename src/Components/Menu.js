import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { WalletText } from './UI/'
import { SvgIconNav } from './svg/svgNav'
import { THEME } from '../Theme'
import { useNavigate } from 'react-router-native'
const menus = [
	{ to: '/wallet', icon: 'wallet', title: 'Home' },
	{ to: '/swap', icon: 'swap', title: 'Swap' },
	{ to: '/buy', icon: 'buy', title: 'Buy' },
	{ to: '/settings', icon: 'settings', title: 'Settings' },
]

export const Menu = ({ active = 'home' }) => {
	const navigate = useNavigate()

	const openPage = (item, to) => {
		if (active !== item.toLowerCase()) {
			navigate(to)
		}
	}

	return (
		<View style={styles.wrap}>
			{menus.map((item, i) => (
				<TouchableOpacity
					activeOpacity={0.7}
					onPress={() => openPage(item.title, item.to)}
					style={[
						styles.item,
						active == item.title.toLowerCase() && styles.activeItem,
					]}
					key={i}>
					<SvgIconNav
						style={[
							{ marginRight: 7 },
							active !== item.title.toLowerCase() && { opacity: 0.5 },
						]}
						type={item.icon}
						fill={
							active == item.title.toLowerCase()
								? THEME.BLACK
								: THEME.GREY_LIGHT
						}
					/>
					{active == item.title.toLowerCase() ? (
						<WalletText color='black'>{item.title}</WalletText>
					) : (
						<></>
					)}
				</TouchableOpacity>
			))}
		</View>
	)
}

const styles = StyleSheet.create({
	wrap: {
		backgroundColor: THEME.GREEN_BG,
		width: '100%',
		flexDirection: 'row',
		paddingHorizontal: 25,
		padding: 20,
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	activeItem: {
		backgroundColor: THEME.WHITE,
		borderRadius: 8,
		paddingHorizontal: 16,
		paddingVertical: 9,
		flexDirection: 'row',
		alignItems: 'center',
	},
})
