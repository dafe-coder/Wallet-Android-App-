import React from 'react'
import { View } from 'react-native'
import { SvgIcon } from '../svg/svg'
import { WalletText } from '../UI/WalletText'
import { WalletButton } from '../UI/WalletButton'

export const Gas = ({ onPress }) => {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'space-between',
				paddingBottom: 37,
			}}>
			<View
				style={{
					alignItems: 'center',
				}}>
				<SvgIcon type='alert' />
				<WalletText size='m' style={{ marginTop: 32 }}>
					Not enough funds
				</WalletText>
			</View>
			<WalletButton onPress={onPress}>ok</WalletButton>
		</View>
	)
}
