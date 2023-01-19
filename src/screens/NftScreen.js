import React, { useState } from 'react'
import { View, StyleSheet, Image, ScrollView } from 'react-native'
import { THEME } from '../Theme'
import { WalletTitle, WalletText } from '../Components/UI'
import { NftList } from '../Components'
import { SvgIcon } from './../Components/svg/svg'

export const NftScreen = ({ navigation }) => {
	const [data, setData] = useState([])
	return (
		<ScrollView style={styles.body}>
			{data.length ? (
				<View style={{ paddingTop: 56 }}>
					<WalletTitle style={{ marginBottom: 36 }}>Your NFTs</WalletTitle>
					<NftList data={data} />
				</View>
			) : (
				<View style={{ ...styles.wrapTop, paddingTop: 117 }}>
					<SvgIcon type='nft' />
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
		</ScrollView>
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
		borderTopColor: '#2f2d2b',
		borderTopWidth: 0.6,
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
