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
		<ScrollView style={{ flexGrow: 1 }}>
			<WalletText size='m' center fw='bold'>
				Add Cash
			</WalletText>
			<View
				style={{
					paddingTop: 70,
					justifyContent: 'center',
					alignItems: 'center',
				}}>
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
					<WalletText
						color='white-dark'
						style={{ fontSize: 12, marginRight: 10 }}>
						{name.toUpperCase()}
					</WalletText>
					<SvgIcon type='play' width={9} fill={THEME.DARK_TEXT} />
				</TouchableOpacity>
			</View>
			<WalletKeyboard
				setValue={setValue}
				style={{ paddingHorizontal: 24, marginTop: 40, marginBottom: 20 }}
			/>
			<View style={{ marginBottom: 170, paddingHorizontal: 20 }}>
				<WalletButton
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
		fontFamily: 'int-med',
		minWidth: 100,
		textAlign: 'center',
	},
})
