import React from 'react'
import { View } from 'react-native'
import { SvgIcon } from '../svg/svg'
import { WalletText } from '../UI/WalletText'
import { WalletButton } from '../UI/WalletButton'

export const Gas = ({ onPress }) => {
	return (
		<>
			<WalletText fw='bold' center size='m' style={{ marginBottom: 40 }}>
				Not enough funds.
			</WalletText>
			<WalletButton style={{ width: 100 }} onPress={onPress} size='sm'>
				Ok
			</WalletButton>
		</>
	)
}
