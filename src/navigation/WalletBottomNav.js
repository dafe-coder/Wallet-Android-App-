import React, { useState } from 'react'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { WalletText } from './../Components/UI/WalletText'
import { THEME } from './../Theme'
import { useSelector } from 'react-redux'
import { SvgIconNav } from './../Components/svg/svgNav'

export const WalletBottomNav = () => {
	const { navigation } = useSelector((state) => state.wallet)
	const [activeNav, setActiveNav] = useState('Wallet')

	const onPressNav = (screen) => {
		setActiveNav(screen)
		navigation.navigate(screen)
	}

	return (
		<View style={styles.wrap}>
			<TouchableOpacity
				activeOpacity={1}
				style={[styles.item]}
				onPress={() => onPressNav('Wallet')}>
				<SvgIconNav
					type='wallet'
					fill={activeNav == 'Wallet' ? THEME.GOLD_DARK : ''}
				/>
				<WalletText color={activeNav == 'Wallet' ? 'gold' : 'brown'}>
					Coins
				</WalletText>
			</TouchableOpacity>
			<TouchableOpacity
				activeOpacity={1}
				style={styles.item}
				onPress={() => onPressNav('Nft')}>
				<SvgIconNav
					type='bar'
					fill={activeNav == 'Nft' ? THEME.GOLD_DARK : ''}
				/>
				<WalletText color={activeNav == 'Nft' ? 'gold' : 'brown'}>
					NFTs
				</WalletText>
			</TouchableOpacity>
			<TouchableOpacity
				activeOpacity={1}
				style={[styles.item]}
				onPress={() => onPressNav('Swap')}>
				<View style={[styles.mainBtn, { position: 'absolute', top: -43 }]}>
					<SvgIconNav type='swap' width={22} height={24} />
				</View>
				<WalletText
					style={{ marginTop: 20 }}
					color={activeNav == 'Swap' ? 'gold' : 'brown'}>
					Swap
				</WalletText>
			</TouchableOpacity>
			<TouchableOpacity
				activeOpacity={1}
				style={[styles.item]}
				onPress={() => onPressNav('Activity')}>
				<SvgIconNav
					type='activity'
					fill={activeNav == 'Activity' ? THEME.GOLD_DARK : ''}
				/>
				<WalletText color={activeNav == 'Activity' ? 'gold' : 'brown'}>
					Activity
				</WalletText>
			</TouchableOpacity>
			<TouchableOpacity
				activeOpacity={1}
				style={styles.item}
				onPress={() => onPressNav('Account')}>
				<SvgIconNav
					type='man'
					fill={activeNav == 'Account' ? THEME.GOLD_DARK : ''}
				/>
				<WalletText color={activeNav == 'Account' ? 'gold' : 'brown'}>
					Account
				</WalletText>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	item: {
		justifyContent: 'center',
		alignItems: 'center',
		width: 58,
	},
	wrap: {
		position: 'relative',
		width: '100.1%',
		borderTopEndRadius: 10,
		borderTopLeftRadius: 10,
		backgroundColor: THEME.BROWN,
		paddingTop: 15,
		paddingBottom: 24,
		paddingHorizontal: 33,
		borderColor: '#312F2A',
		borderWidth: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		bottom: -1,
		left: -1,
	},
	mainBtn: {
		width: 56,
		height: 56,
		backgroundColor: '#F9BE46',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 50,
	},
})
