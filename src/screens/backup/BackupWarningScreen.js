import React from 'react'
import { ScrollView, Dimensions, View, StyleSheet, Text } from 'react-native'
import { Card } from '../../Components/Card'
import { WalletButton, WalletText } from '../../Components/UI'
import { SubscribeBlock } from '../../Components/UI'
import { SvgIcon } from './../../Components/svg/svg'
import { THEME } from './../../Theme'

const width = Dimensions.get('window').width
export const BackupWarningScreen = ({ navigation }) => {
	React.useEffect(() => {
		navigation.setOptions({
			headerTransparent: true,
			headerStyle: {
				backgroundColor: 'transparent',
			},
		})
	}, [navigation])

	return (
		<ScrollView contentContainerStyle={styles.wrap}>
			<View
				style={{
					flex: 1,
					justifyContent: 'space-between',
				}}>
				<Card
					styleBody={{ paddingHorizontal: 24 }}
					imgSize={{ height: width * 1.4, top: -20 }}>
					<WalletText size='m' style={{ marginBottom: 32 }}>
						Wallet Name now will show your recovery phrase.
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
				</Card>
				<View
					style={{
						alignItems: 'center',
						marginTop: 50,
						paddingHorizontal: 24,
					}}>
					<WalletButton
						onPress={() => navigation.navigate('BackupPhrase')}
						type='white'
						style={{ width: 200, marginTop: 32, marginBottom: 40 }}>
						I understand
					</WalletButton>
				</View>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	wrap: {
		paddingTop: 160,
		flexGrow: 1,
	},
})
