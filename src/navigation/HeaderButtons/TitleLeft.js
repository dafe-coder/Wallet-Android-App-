import React from 'react'
import { WalletText } from '../../Components/UI'

export const TitleLeft = ({ children }) => {
	return (
		<WalletText color='disabled' size='m' style={{ marginLeft: 10 }}>
			{children}
		</WalletText>
	)
}
