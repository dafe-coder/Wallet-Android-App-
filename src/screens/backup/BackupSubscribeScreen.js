import React from 'react'
import { ScrollView, Dimensions, View, StyleSheet } from 'react-native'
import { Card } from '../../Components/Card'
import { WalletButton, WalletText } from '../../Components/UI/'
import { SubscribeBlock } from '../../Components/UI/'

const width = Dimensions.get('window').width
export const BackupSubscribeScreen = ({ navigation }) => {
	const [chk1, setChk1] = React.useState(false)
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
						Wallet Name will display the 12 words of your recovery phrase. This
						is your password and the only way to restore your wallet.
					</WalletText>
					<WalletText size='m'>
						To backup your recovery phrase
						{'\n'}
						{'\n'} Either write it on a paper that you will store in a safe
						place;
					</WalletText>
				</Card>
				<View
					style={{
						alignItems: 'center',
						marginTop: 50,
						paddingHorizontal: 24,
					}}>
					<SubscribeBlock check={chk1} setCheck={setChk1}>
						<WalletText style={{ marginLeft: 20 }}>
							I understand that if I lose my recovery {'\n'}phrase, I will lose
							my funds.
						</WalletText>
					</SubscribeBlock>
					<WalletButton
						checked
						onPress={() => navigation.navigate('BackupWarning')}
						disabled={!chk1}
						style={{ width: 200, marginTop: 32, marginBottom: 40 }}>
						Continue
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
