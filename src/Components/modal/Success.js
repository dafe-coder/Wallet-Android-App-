import React from 'react'
import { View } from 'react-native'
import { SvgIcon } from './../svg/svg'
import { WalletText } from './../UI/WalletText'
import { WalletButton } from './../UI/WalletButton'

export const Success = ({ onPress }) => {
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
					height: 100,
				}}>
				<SvgIcon type='check-with-box' />
				<WalletText size='m' style={{ marginTop: 32 }}>
					Your transaction has been sent
				</WalletText>
			</View>
			<WalletButton onPress={onPress}>ok</WalletButton>
		</View>
	)
}
