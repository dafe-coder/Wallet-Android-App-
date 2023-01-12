import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { WalletText } from './../Components/UI/WalletText'
import { THEME } from './../Theme'
import { SvgIconNav } from './../Components/svg/svgNav'
import { useDispatch, useSelector } from 'react-redux'
import { setNavScreen } from '../store/actions/walletActions'

export const WalletBottomNav = () => {
	const dispatch = useDispatch()
	const { navigation, navScreen } = useSelector((state) => state.wallet)

	const onPressNav = (screen) => {
		dispatch(setNavScreen(screen))
		navigation.navigate(screen)
	}

	return (
		<View style={styles.wrap}>
			<TouchableOpacity
				activeOpacity={1}
				style={[styles.item]}
				onPress={() => onPressNav('Wallet')}>
				<SvgIconNav
					height='20'
					type='wallet'
					fill={navScreen == 'Wallet' ? THEME.GOLD_DARK : ''}
				/>
				<WalletText color={navScreen == 'Wallet' ? 'gold' : 'brown'}>
					Coins
				</WalletText>
			</TouchableOpacity>
			<TouchableOpacity
				activeOpacity={1}
				style={styles.item}
				onPress={() => onPressNav('Nft')}>
				<SvgIconNav
					height='20'
					type='bar'
					fill={navScreen == 'Nft' ? THEME.GOLD_DARK : ''}
				/>
				<WalletText color={navScreen == 'Nft' ? 'gold' : 'brown'}>
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
					color={navScreen == 'Swap' ? 'gold' : 'brown'}>
					Swap
				</WalletText>
			</TouchableOpacity>
			<TouchableOpacity
				activeOpacity={1}
				style={[styles.item]}
				onPress={() => onPressNav('TransactionHistoryPage')}>
				<SvgIconNav
					height='20'
					type='activity'
					fill={navScreen == 'TransactionHistoryPage' ? THEME.GOLD_DARK : ''}
				/>
				<WalletText
					color={navScreen == 'TransactionHistoryPage' ? 'gold' : 'brown'}>
					Activity
				</WalletText>
			</TouchableOpacity>
			<TouchableOpacity
				activeOpacity={1}
				style={styles.item}
				onPress={() => onPressNav('Account')}>
				<SvgIconNav
					height='20'
					type='man'
					fill={navScreen == 'Account' ? THEME.GOLD_DARK : ''}
				/>
				<WalletText color={navScreen == 'Account' ? 'gold' : 'brown'}>
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
		borderColor: '#312F2A',
		borderWidth: 1,
		flexDirection: 'row',
		justifyContent: 'space-evenly',
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
