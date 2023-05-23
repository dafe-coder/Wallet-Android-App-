import React, { useState } from 'react'
import { View, StyleSheet, Image, ScrollView } from 'react-native'
import { THEME } from '../Theme'
import { WalletTitle, WalletText } from '../Components/UI'
import { NftList } from '../Components'
import { SvgIcon } from './../Components/svg/svg'
import useIsReady from '../../hooks/useIsReady'
import { BusyIndicator } from '../Components/Loader'

export const NftScreen = ({ navigation }) => {
	const [data, setData] = useState([])
	const isReady = useIsReady()
	if (!isReady) {
		return <BusyIndicator></BusyIndicator>
	}
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
					<WalletTitle style={{ marginTop: 35, marginBottom: 16 }}>
						Your NFTs
					</WalletTitle>
					<WalletText
						center
						style={{ color: '#8247E5', marginTop: 25 }}
						fw='medium'
						size='m'>
						No NFTs Yet
					</WalletText>
					<WalletText size='m' center style={{ marginTop: 20 }}>
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
	},
	title: {
		marginBottom: 13,
		fontSize: 40,
		lineHeight: 50,
		color: THEME.VIOLET,
		textTransform: 'uppercase',
		fontFamily: 'int-semi-bold',
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
