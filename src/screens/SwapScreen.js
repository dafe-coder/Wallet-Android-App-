import React from 'react'
// import { ScrollView } from 'react-native'
import { WalletTitle, WalletButton } from '../Components/UI'
import { SelectCoinSwap, SwapDetails } from '../Components'
import { ScrollView } from 'react-native-gesture-handler'
export const SwapScreen = () => {
	return (
		<ScrollView
			style={{
				flex: 1,
				paddingTop: 29,
				paddingHorizontal: 16,
				paddingBottom: 30,
			}}>
			<WalletTitle style={{ marginBottom: 25 }}>Exchange</WalletTitle>
			<SelectCoinSwap />
			<SwapDetails />
			<WalletButton style={{ marginBottom: 80 }}>Swap</WalletButton>
		</ScrollView>
	)
}
