import React from 'react'
import { View, ScrollView } from 'react-native'
import {
	WalletNav,
	PortfolioList,
	Slider,
	PortfolioSort,
} from './../Components/'

export const WalletScreen = ({ navigation }) => {
	return (
		<ScrollView style={{ flex: 1, paddingTop: 20 }}>
			<Slider />
			<View style={{ paddingHorizontal: 16 }}>
				<WalletNav navigation={navigation} />
				<PortfolioSort style={{ marginTop: 24 }} />
				<PortfolioList style={{ marginTop: 32, marginBottom: 50 }} />
			</View>
		</ScrollView>
	)
}
