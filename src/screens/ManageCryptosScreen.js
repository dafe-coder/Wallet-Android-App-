import React from 'react'
import { View, ScrollView } from 'react-native'
import { WalletText, WalletButton } from './../Components/UI/'
import { ChooseCryptos } from './../Components/ChooseCryptos'
export const ManageCryptosScreen = ({ navigation }) => {
	return (
		<ScrollView
			contentContainerStyle={{
				justifyContent: 'space-between',
				paddingBottom: 40,
			}}>
			<View style={{ marginBottom: 50 }}>
				<WalletText
					size='m'
					style={{ paddingHorizontal: 24, marginBottom: 30 }}>
					Choose what tokens will be {'\n'}displayed in your wallet by default.
				</WalletText>
				<ChooseCryptos />
				<WalletText
					color='disabled'
					style={{ paddingHorizontal: 24, marginTop: -10 }}>
					You can always change this later! ☺️
				</WalletText>
			</View>
			<View style={{ paddingHorizontal: 24, alignItems: 'center' }}>
				<WalletButton onPress={() => navigation.navigate('WalletSuccess')}>
					Go to my wallet
				</WalletButton>
			</View>
		</ScrollView>
	)
}
