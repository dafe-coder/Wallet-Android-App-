import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { WalletTitle } from '../Components/UI/WalletTitle'
import { THEME } from '../Theme'
import { WalletText } from '../Components/UI/WalletText'
import { SvgIcon } from '../Components/svg/svg'
import { PhraseBox } from '../Components/PhraseBox'
import { useSelector } from 'react-redux'

export const ExportPrivateKeyCopyScreen = () => {
	const { dataUser, currentAccount } = useSelector((state) => state.storage)

	return (
		<ScrollView style={{ paddingTop: 32 }}>
			<View style={{ justifyContent: 'center', alignItems: 'center' }}>
				<SvgIcon type='logo' />
				<WalletTitle style={{ marginTop: 50 }}>You Private Key</WalletTitle>
			</View>
			{dataUser.map((d) => {
				if (d.name === currentAccount) {
					return (
						<PhraseBox
							key={Math.random().toString()}
							style={{ marginTop: 32 }}
							edit
							phrase={d.privateKey}
						/>
					)
				}
			})}

			<View style={styles.alert}>
				<View style={{ flexBasis: '9%', marginTop: 6 }}>
					<SvgIcon type='alert' />
				</View>
				<View style={{ flexBasis: '89%' }}>
					<WalletText color='red' style={{ marginLeft: 8 }}>
						Keep Private Key safe! {'\n'}Do not share this key with anyone!
						These key can be used to steal all of your accounts
					</WalletText>
				</View>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	alert: {
		marginTop: 20,
		backgroundColor: THEME.BROWN_DARK,
		borderRadius: 10,
		paddingHorizontal: 10,
		paddingVertical: 15,
		flexDirection: 'row',
		marginHorizontal: 16,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		marginBottom: 60,
	},
})
