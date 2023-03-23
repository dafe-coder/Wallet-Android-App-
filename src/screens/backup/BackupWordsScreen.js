import React from 'react'
import { View } from 'react-native'
import { WalletText, WalletInput, WalletButton } from './../../Components/UI'

export const BackupWordsScreen = () => {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'space-between',
				paddingHorizontal: 24,
				marginTop: 30,
			}}>
			<View>
				<WalletText size='m' center>
					Check you have made a correct backup by entering the corresponding
					words from your recovery phrase below.
				</WalletText>
				<View style={{ marginTop: 30 }}>
					<WalletInput placeholder='word 6' />
					<WalletInput placeholder='word 8' />
					<WalletInput placeholder='word 12' />
				</View>
			</View>
			<View style={{ alignItems: 'center', marginBottom: 40 }}>
				<WalletButton style={{ width: 200 }} disabled={true}>
					Done
				</WalletButton>
			</View>
		</View>
	)
}
