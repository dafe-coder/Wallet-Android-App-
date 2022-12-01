import React, { useState } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { THEME } from '../../Theme'
import { WalletTitle, WalletText } from '../../Components/UI'
import { NftList } from '../../Components'

export const NftScreen = ({ navigation }) => {
	const [data, setData] = useState([1, 2, 3])
	return (
		<View style={styles.body}>
			{data.length ? (
				<View style={{ paddingTop: 56 }}>
					<WalletTitle style={{ marginBottom: 36 }}>Your NFTs</WalletTitle>
					<NftList data={data} />
				</View>
			) : (
				<View style={{ ...styles.wrapTop, paddingTop: 117 }}>
					<Image source={require('../../../assets/nft.png')} />
					<WalletTitle style={{ marginTop: 30, marginBottom: 16 }}>
						Your NFTs
					</WalletTitle>
					<WalletText upperCase center style={{ marginTop: 25 }} fw='medium'>
						No NFTs Yet
					</WalletText>
					<WalletText size='m' center style={{ width: 210, marginTop: 20 }}>
						Your future NFTs will be displayed here.
					</WalletText>
				</View>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	wrapTop: {
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 100,
		paddingHorizontal: 16,
	},
	body: {
		flex: 1,
		paddingHorizontal: 16,
		justifyContent: 'space-between',
		paddingBottom: 40,
	},
	title: {
		marginBottom: 13,
		fontSize: 40,
		lineHeight: 50,
		color: THEME.GOLD,
		textTransform: 'uppercase',
		fontFamily: 'gt-bold',
		textAlign: 'center',
	},
	whiteTitle: {
		color: THEME.WHITE,
	},
	textWrap: {
		borderRadius: 7,
		backgroundColor: THEME.BROWN_DARK,
		width: '100%',
		padding: 15,
		paddingHorizontal: 20,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		marginTop: 42,
		marginBottom: 16,
	},
})
