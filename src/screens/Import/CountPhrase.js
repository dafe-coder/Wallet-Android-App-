import React from 'react'
import { View } from 'react-native'
import { Header, Dropdown } from './../../Components/'

export const CountPhrase = () => {
	return (
		<View style={{ flex: 1, paddingHorizontal: 24 }}>
			<Header title='Import Account' />
			<Dropdown title='Enter a 12-word recovery phrase'>
				If you have a recovery phrase consisting of 12 words, choose this option
				to restore your wallet.
			</Dropdown>
			<Dropdown title='Enter a 15-word recovery phrase'>
				If you have a recovery phrase consisting of 15 words, choose this option
				to restore your wallet.
			</Dropdown>
			<Dropdown title='Enter a 24-word recovery phrase'>
				If you have a recovery phrase consisting of 15 words, choose this option
				to restore your wallet.
			</Dropdown>
			<Dropdown title='Enter a private key'>
				If you have a recovery private key, choose this option to restore your
				wallet.
			</Dropdown>
		</View>
	)
}
