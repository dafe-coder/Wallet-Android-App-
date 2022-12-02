import React from 'react'
import { View } from 'react-native'
import { WalletTitle } from '../Components/UI'
import { WalletText } from './../Components/UI/WalletText'

export const ActivityScreen = () => {
	return (
		<View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
			<WalletTitle style={{ marginBottom: 40 }}>Activity</WalletTitle>
			<WalletText color='gold' upperCase center>
				No Activity Yet
			</WalletText>
			<WalletText size='m' center color='white' style={{ marginTop: 16 }}>
				Your activities will show up here.
			</WalletText>
		</View>
	)
}
