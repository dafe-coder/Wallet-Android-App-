import React from 'react'
import { View, ScrollView } from 'react-native'
import { WalletNav, PortfolioList } from './../Components/'

export const WalletScreen = ({ navigation }) => {
	return (
		<ScrollView style={{ flex: 1, paddingTop: 50 }}>
			<View style={{ paddingHorizontal: 16, marginTop: 25 }}>
				<WalletNav navigation={navigation} />
				<PortfolioList style={{ marginTop: 32, marginBottom: 50 }} />
			</View>
		</ScrollView>
	)
}
