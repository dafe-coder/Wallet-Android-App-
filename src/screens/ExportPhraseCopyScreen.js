import React from 'react'
import { View, StyleSheet } from 'react-native'
import { WalletTitle } from './../Components/UI/WalletTitle'
import { THEME } from './../Theme'
import { WalletText } from './../Components/UI/WalletText'
import { SvgIcon } from './../Components/svg/svg'
import { PhraseBox } from './../Components/PhraseBox'
import { useSelector } from 'react-redux'
export const ExportPhraseCopyScreen = () => {
	const { dataUser, currentAccount } = useSelector((state) => state.storage)

	return (
		<View style={{ paddingTop: 32 }}>
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
							phrase={d.phrase}
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
		</View>
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
	},
})
