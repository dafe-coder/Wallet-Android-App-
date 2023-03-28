import React from 'react'
import { Dimensions, View } from 'react-native'
import { Card } from '../Components'
import { WalletText, WalletButton } from '../Components/UI'
import { SvgIcon } from './../Components/svg/svg'

const width = Dimensions.get('window').width
export const DAppsScreen = ({ navigation }) => {
	React.useEffect(() => {
		navigation.setOptions({
			headerTransparent: true,
		})
	}, [navigation])
	return (
		<View
			style={{
				flex: 1,
				paddingTop: 220,
				paddingBottom: 40,
				justifyContent: 'space-between',
			}}>
			<Card
				size='sm'
				styleBody={{ alignItems: 'center' }}
				imgSize={{ width: width * 1.55, top: -15, left: -5 }}>
				<SvgIcon type='qrCode' />
				<WalletText style={{ marginTop: 16 }} size='m' center>
					No dApp connected yet.
				</WalletText>
			</Card>
			<View style={{ alignItems: 'center', paddingHorizontal: 24 }}>
				<WalletText center>
					Your Name Wallet is compatible with WalletConnect.
				</WalletText>
				<WalletText style={{ marginTop: 16, marginBottom: 32 }}>
					Tap to connect a dApp.
				</WalletText>
				<WalletButton onPress={() => navigation.goBack()} size='m'>
					Done
				</WalletButton>
			</View>
		</View>
	)
}
