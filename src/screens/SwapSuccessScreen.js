import React from 'react'
import { Dimensions, View, Image, StyleSheet, Linking } from 'react-native'
import { WalletText, WalletButton } from '../Components/UI'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
export const SwapSuccessScreen = ({ navigation, route }) => {
	const [url, setUrl] = React.useState('')

	React.useEffect(() => {
		if (route.params !== undefined) {
			if (route.params.network.toLowerCase() == 'polygon') {
				setUrl(`https://polygonscan.com/tx/${route.params.hash}`)
			}
			if (route.params.network.toLowerCase() == 'ethereum') {
				setUrl(`https://etherscan.io/tx/${route.params.hash}`)
			}
		}
	}, [route])
	return (
		<View style={{ flex: 1, justifyContent: 'center' }}>
			<View
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					marginTop: -height / 5,
				}}>
				<Image
					resizeMode='contain'
					style={{
						position: 'absolute',
						width: width * 1.2,
						height: width * 1.2,
					}}
					source={require('../../assets/success.png')}
				/>
				<WalletText size='m' style={{ top: height / 4.7 }}>
					Request sent
				</WalletText>
				<WalletText color='disabled' style={{ top: height / 4.4 }}>
					Pending block validation...
				</WalletText>
			</View>
			<View style={styles.btn}>
				<WalletButton
					style={{ width: 140, marginRight: 20 }}
					onPress={() =>
						navigation.reset({ index: 0, routes: [{ name: 'Home' }] })
					}>
					Go it
				</WalletButton>
				<WalletButton
					onPress={() =>
						Linking.openURL(url).catch((err) =>
							console.error('An error occurred', err)
						)
					}
					type='border'>
					View Details
				</WalletButton>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	btn: {
		flexDirection: 'row',
		position: 'absolute',
		left: 0,
		right: 0,
		bottom: 40,
		justifyContent: 'center',
		alignItems: 'center',
	},
})
