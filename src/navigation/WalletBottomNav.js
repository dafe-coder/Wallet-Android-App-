import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { WalletText } from './../Components/UI/WalletText'
import { THEME } from './../Theme'
import { useSelector } from 'react-redux'

export const WalletBottomNav = () => {
	const { navigation } = useSelector((state) => state.wallet)
	return (
		<View style={styles.wrap}>
			<TouchableOpacity
				activeOpacity={1}
				style={[styles.item]}
				onPress={() => navigation.navigate('Wallet')}>
				<Image
					style={{ marginBottom: 5 }}
					source={require('../../assets/icons/wallet.png')}
				/>
				<WalletText color='brown'>Coins</WalletText>
			</TouchableOpacity>
			<TouchableOpacity
				activeOpacity={1}
				style={styles.item}
				onPress={() => navigation.navigate('Nft')}>
				<Image
					style={{ marginBottom: 5 }}
					source={require('../../assets/icons/nfts.png')}
				/>
				<WalletText color='brown'>NFTs</WalletText>
			</TouchableOpacity>
			<TouchableOpacity
				activeOpacity={1}
				style={[styles.item]}
				onPress={() => navigation.navigate('Swap')}>
				<View style={[styles.mainBtn, { position: 'absolute', top: -43 }]}>
					<Image
						style={{
							marginBottom: 5,
							width: 22,
							height: 24,
							position: 'relative',
							top: 2,
						}}
						source={require('../../assets/icons/swap-dark.png')}
					/>
				</View>
				<WalletText style={{ marginTop: 20 }} color='brown'>
					Swap
				</WalletText>
			</TouchableOpacity>
			<TouchableOpacity
				activeOpacity={1}
				style={[styles.item]}
				onPress={() => navigation.navigate('Activity')}>
				<Image
					style={{ marginBottom: 5 }}
					source={require('../../assets/icons/activity.png')}
				/>
				<WalletText color='brown'>Activity</WalletText>
			</TouchableOpacity>
			<TouchableOpacity
				activeOpacity={1}
				style={styles.item}
				onPress={() => navigation.navigate('Account')}>
				<Image
					style={{ marginBottom: 5 }}
					source={require('../../assets/icons/account.png')}
				/>
				<WalletText color='brown'>Account</WalletText>
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
		// position: 'absolute',
		position: 'relative',
		// bottom: 0,
		// zIndex: 0,
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
