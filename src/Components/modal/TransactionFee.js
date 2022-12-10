import React from 'react'
import { View, Image } from 'react-native'
import { WalletText, WalletButton } from '../UI'

export const TransactionFee = ({ onPress }) => {
	return (
		<View
			style={{
				justifyContent: 'space-between',
				flex: 1,
				marginBottom: 37,
			}}>
			<View style={{ justifyContent: 'center', alignItems: 'center' }}>
				<Image
					style={{ marginBottom: 17 }}
					height={21}
					width={21}
					source={require('../../../assets/icons/info.png')}
				/>
				<WalletText style={{ paddingHorizontal: 39 }} center size='m'>
					Gas fees are paid to crypto miners who process transactions on the
					Network name. Binance does not profit from gas fees. Gas fees are set
					by the network and fluctuate based on network traffic and transaction
					complexity.
				</WalletText>
			</View>
			<WalletButton
				onPress={onPress}
				style={{ marginHorizontal: 16 }}
				type='border'>
				Cancel
			</WalletButton>
		</View>
	)
}
