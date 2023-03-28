import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { THEME } from './../Theme'
import { WalletText } from './../Components/UI/WalletText'
import { SvgIcon } from './../Components/svg/svg'
import { PhraseBox } from './../Components/PhraseBox'
import { useSelector } from 'react-redux'

export const ExportPhraseCopyScreen = ({ navigation }) => {
	const { dataUser, currentAccount } = useSelector((state) => state.storage)

	return (
		<ScrollView style={{ paddingTop: 32, paddingHorizontal: 24 }}>
			{dataUser.map((d) => {
				if (d.name === currentAccount) {
					return (
						<PhraseBox
							key={Math.random().toString()}
							style={{ marginTop: 32 }}
							edit
							phrase={atob(d.phrase)}
						/>
					)
				}
			})}

			<View style={styles.alert}>
				<View style={{ flexBasis: '9%', marginTop: 6 }}>
					<SvgIcon type='alert' />
				</View>
				<View style={{ flexBasis: '89%' }}>
					<WalletText color='blue' style={{ marginLeft: 8 }}>
						Never share recovery phrase with anyone, store it securely!
					</WalletText>
				</View>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	alert: {
		marginTop: 20,
		backgroundColor: THEME.GREY,
		borderRadius: 10,
		padding: 16,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	},
})
