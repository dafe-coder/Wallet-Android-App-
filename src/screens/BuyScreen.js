import React from 'react'
import {
	ScrollView,
	View,
	StyleSheet,
	Linking,
	TouchableOpacity,
} from 'react-native'
import {
	WalletKeyboard,
	WalletText,
	WalletTitle,
	WalletButton,
} from './../Components/UI/'
import { THEME } from '../Theme'
import { SvgIcon } from '../Components/svg/svg'

export const BuyScreen = ({ route, navigation }) => {
	let name = route.params !== undefined ? route.params.name : 'Eth'
	const [value, setValue] = React.useState('')
	const [btnDisabled, setBtnDisabled] = React.useState(true)

	React.useEffect(() => {
		return () => (name = undefined)
	}, [])

	return (
		<ScrollView style={{ flexGrow: 1, paddingTop: 70 }}>
			<View style={{ justifyContent: 'center', alignItems: 'center' }}>
				<View
					style={{
						width: '100%',
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'row',
					}}>
					<WalletTitle center fw='bold' color='white' size='l'>
						{value !== '' ? '$ ' + value : '$ 0'}
					</WalletTitle>
				</View>
				<TouchableOpacity
					onPress={() => navigation.navigate('ChooseCryptos', { from: 'Buy' })}
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						marginTop: 10,
					}}
					activeOpacity={0.7}>
					<WalletText style={{ fontSize: 12, marginRight: 10 }}>
						0 {name.toUpperCase()}
					</WalletText>
					<SvgIcon type='play' width={9} fill={THEME.WHITE} />
				</TouchableOpacity>
			</View>
			<WalletKeyboard
				setValue={setValue}
				style={{ paddingHorizontal: 24, marginTop: 70, marginBottom: 40 }}
			/>
			<View style={{ alignItems: 'center', marginBottom: 170 }}>
				<WalletButton
					size='m'
					onPress={() =>
						Linking.openURL('https://www.moonpay.com/buy').catch((err) =>
							console.error('An error occurred', err)
						)
					}>
					Buy
				</WalletButton>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	text: {
		lineHeight: 46,
		fontSize: 38,
		color: THEME.WHITE,
		fontFamily: 'mt-med',
		minWidth: 100,
		textAlign: 'center',
	},
})
