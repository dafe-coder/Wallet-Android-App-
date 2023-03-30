import React from 'react'
import { ScrollView } from 'react-native'
import { PhraseBox } from '../Components/PhraseBox'
import { useSelector } from 'react-redux'

export const ExportPrivateKeyCopyScreen = ({ navigation }) => {
	const { dataUser, currentAccount } = useSelector((state) => state.storage)

	return (
		<ScrollView style={{ paddingTop: 32, paddingHorizontal: 24 }}>
			{dataUser.map((d) => {
				if (d.name === currentAccount) {
					return (
						<PhraseBox
							alert
							key={Math.random().toString()}
							style={{ marginTop: 32 }}
							edit
							phrase={atob(d.privateKey)}
							textAlert={`Never share Private Key with ${'\n'}anyone, store it securely!`}
						/>
					)
				}
			})}
		</ScrollView>
	)
}
