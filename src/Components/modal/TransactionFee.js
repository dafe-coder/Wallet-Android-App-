import React from 'react'
import { View, Image } from 'react-native'
import { WalletText, WalletButton } from '../UI'
import { SvgIcon } from '../svg/svg'

export const TransactionFee = ({ onPress }) => {
	return (
		<View
			style={{
				justifyContent: 'space-between',
				flex: 1,
				marginBottom: 37,
			}}>
			<View style={{ justifyContent: 'center', alignItems: 'center' }}>
				<SvgIcon
					style={{ marginBottom: 17 }}
					height={24}
					width={24}
					type='info'
					fill='#8247E5'
				/>
				<WalletText style={{ paddingHorizontal: '7%' }} center size='m'>
					Gas fees are paid to crypto miners who process transactions on the
					Network name. Binance does not profit from gas fees. Gas fees are set
					by the network and fluctuate based on network traffic and transaction
					complexity.
				</WalletText>
			</View>
			<WalletButton arrow={false} onPress={onPress} type='border'>
				Cancel
			</WalletButton>
		</View>
	)
}
