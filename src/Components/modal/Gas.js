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
					height: 100,
				}}>
				<SvgIcon type='alert' />
				<WalletText size='m' style={{ color: '#632DBC', marginTop: 32 }}>
					Not enough funds
				</WalletText>
			</View>
			<WalletButton onPress={onPress} type='border' arrow={false}>
				ok
			</WalletButton>
		</View>
	)
}
