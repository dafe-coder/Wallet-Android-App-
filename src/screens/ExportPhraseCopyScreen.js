import React from 'react'
import { ScrollView } from 'react-native'
import { WalletText } from './../Components/UI/WalletText'
import { PhraseBox } from './../Components/PhraseBox'
import { useSelector } from 'react-redux'

export const ExportPhraseCopyScreen = ({ navigation }) => {
	const { dataUser, currentAccount } = useSelector((state) => state.storage)

	return (
		<ScrollView style={{ paddingTop: 0, paddingHorizontal: 24 }}>
			<WalletText
				color='disabled'
				style={{ marginBottom: 32, marginTop: 5 }}
				center>
				Write down or copy these words in right order and save them somewhere
				safe.
			</WalletText>
			{dataUser.map((d) => {
				if (d.name === currentAccount) {
					return (
						<PhraseBox
							alert
							textAlert='Never share recovery phrase with anyone, store it securely!'
							key={Math.random().toString()}
							style={{ marginTop: 32 }}
							edit
							phrase={atob(d.phrase)}
						/>
					)
				}
			})}
		</ScrollView>
	)
}
