import React from 'react'
import { View, ScrollView } from 'react-native'
import { WalletText, WalletButton } from './../Components/UI/'
import { ChooseCryptos, ChooseCryptosHome, SearchButton } from './../Components'

export const ManageCryptosScreen = ({ navigation, route }) => {
	React.useEffect(() => {
		if (isHome) {
			navigation.setOptions({
				headerLeft: () => (
					<WalletText color='disabled' size='m' style={{ marginLeft: 10 }}>
						Manage cryptos
					</WalletText>
				),
				headerTitle: () => <></>,
			})
		}
	}, [])
	const isHome = route.params.home
	return (
		<View>
			<ScrollView
				contentContainerStyle={{
					justifyContent: 'space-between',
					paddingBottom: 40,
				}}>
				<View style={{ marginBottom: 50 }}>
					{!isHome ? (
						<WalletText
							size='m'
							style={{ paddingHorizontal: 24, marginBottom: 30 }}>
							Choose what tokens will be {'\n'}displayed in your wallet by
							default.
						</WalletText>
					) : (
						<ChooseCryptosHome style={{ marginTop: 10 }} />
					)}
					{!isHome && <ChooseCryptos style={isHome && { marginTop: 30 }} />}
					{!isHome && (
						<WalletText
							color='disabled'
							style={{ paddingHorizontal: 24, marginTop: -10 }}>
							You can always change this later! ☺️
						</WalletText>
					)}
				</View>
				{!isHome && (
					<View style={{ paddingHorizontal: 24, alignItems: 'center' }}>
						<WalletButton onPress={() => navigation.navigate('WalletSuccess')}>
							Go to my wallet
						</WalletButton>
					</View>
				)}
			</ScrollView>
			{isHome && <SearchButton />}
		</View>
	)
}
