import React from 'react'
import { View, ScrollView } from 'react-native'
import { SvgIcon } from './../../Components/svg/svg'
import { Header } from '../../Components'
import { WalletButton, WalletText } from './../../Components/UI'

export const TakeNoteBook = () => {
	return (
		<ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center' }}>
			<Header title='Back Up Wallet' />
			<SvgIcon type='notebook' style={{ marginTop: 20 }} />
			<WalletText
				style={{ marginTop: 30, marginBottom: 50 }}
				fw='bold'
				size='m'>
				Take your notebook
			</WalletText>
			<View style={{ width: '100%', flexGrow: 1, paddingBottom: 25 }}>
				<WalletText>
					Please write the mnemonic phrase on the paper and store it safely.{' '}
					{'\n'}
					{'\n'}You mnemonic phrase consists of 12-24 words. Anyone with your
					mnemonic phrase can access all your assets, so please store it safety.
				</WalletText>
				<WalletButton
					style={{ marginTop: 'auto' }}
					icon='arrow-right'
					to='/copy-words'
					iconPos='right'>
					Back Up
				</WalletButton>
			</View>
		</ScrollView>
	)
}
