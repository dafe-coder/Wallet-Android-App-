import React from 'react'
import { View } from 'react-native'
import { Header, VerifyBox } from '../../Components'
import { WalletButton, WalletText } from '../../Components/UI'

export const VerifyMnemonic3 = () => {
	const [chooseWord, setChooseWord] = React.useState('')
	return (
		<View style={{ flex: 1, paddingBottom: 25 }}>
			<Header title='Verify Mnemonic' />
			<View style={{ marginBottom: 30 }}>
				<WalletText style={{ marginBottom: 15 }}>
					Please verify your mnemonic phrase: (3/3)
				</WalletText>
				<VerifyBox data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 21, 31]} />
			</View>
			<View>
				<WalletText style={{ marginBottom: 15 }}>
					Select word number 3:
				</WalletText>
				<VerifyBox
					choose={setChooseWord}
					chooseWord={chooseWord}
					data={[1, 2, 3, 4, 5, 6, 7, 8]}
				/>
			</View>
			<WalletButton style={{ marginTop: 'auto' }} to='/'>
				Next
			</WalletButton>
		</View>
	)
}
