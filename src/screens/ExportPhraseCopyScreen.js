import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { WalletTitle } from './../Components/UI/WalletTitle'
import { THEME } from './../Theme'
import { WalletText } from './../Components/UI/WalletText'
import { SvgIcon } from './../Components/svg/svg'
import { PhraseBox } from './../Components/PhraseBox'
import { useSelector } from 'react-redux'
import { WalletButton } from './../Components/UI/WalletButton'
export const ExportPhraseCopyScreen = ({ navigation }) => {
	const { dataUser, currentAccount } = useSelector((state) => state.storage)

	return (
		<ScrollView style={{ paddingTop: 32 }}>
			<View style={{ justifyContent: 'center', alignItems: 'center' }}>
				<SvgIcon type='logo' />
				<WalletTitle style={{ marginTop: 50 }}>You seed Phrase</WalletTitle>
			</View>
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
					<WalletText color='red' style={{ marginLeft: 8 }}>
						Keep phrase safe! {'\n'}Do not share this phrase with anyone! These
						words can be used to steal all of your accounts
					</WalletText>
				</View>
			</View>
			<View style={{ paddingHorizontal: 16, marginTop: 60, marginBottom: 50 }}>
				<WalletButton onPress={() => navigation.goBack()}>close</WalletButton>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	alert: {
		marginTop: 20,
		backgroundColor: THEME.GREY_LIGHT,
		borderRadius: 10,
		paddingHorizontal: 10,
		paddingVertical: 15,
		flexDirection: 'row',
		marginHorizontal: 16,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	},
})
