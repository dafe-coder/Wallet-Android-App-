import React from 'react'
import { ScrollView, Dimensions, View, StyleSheet, Text } from 'react-native'
import { WalletButton, WalletText } from '../../Components/UI'
import { SvgIcon } from './../../Components/svg/svg'
import { THEME } from './../../Theme'

export const BackupWarningScreen = ({ navigation }) => {
	return (
		<ScrollView contentContainerStyle={styles.wrap}>
			<View
				style={{
					flex: 1,
					justifyContent: 'space-between',
				}}>
				<View style={{ paddingHorizontal: 20 }}>
					<WalletText color='white-dark' size='m' style={{ marginBottom: 24 }}>
						Wallet Name now will show your {'\n'}recovery phrase.
					</WalletText>
					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							marginBottom: 24,
						}}>
						<SvgIcon type='warning-triangle' width={30} height={30} />
						<WalletText style={{ marginLeft: 6 }}>
							<Text style={{ color: THEME.RED }}>Never share</Text> your
							recovery phrase {'\n'} with anyone.
						</WalletText>
					</View>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<SvgIcon type='warning-triangle' width={30} height={30} />
						<WalletText style={{ marginLeft: 6 }}>
							<Text style={{ color: THEME.RED }}>Wallet name never ask</Text>{' '}
							for your {'\n'} recovery phrase.
						</WalletText>
					</View>
				</View>
				<View
					style={{
						marginTop: 50,
						paddingHorizontal: 20,
					}}>
					<WalletButton
						onPress={() => navigation.navigate('BackupPhrase')}
						type='white'
						style={{ marginTop: 32, marginBottom: 40 }}>
						I understand
					</WalletButton>
				</View>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	wrap: {
		paddingTop: 20,
		flexGrow: 1,
	},
})
