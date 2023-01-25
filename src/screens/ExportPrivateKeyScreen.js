import React, { useRef, useState } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { WalletTextWithIcon } from '../Components'
import { WalletText } from '../Components/UI'
import { THEME } from '../Theme'
import PincodeInput from 'react-native-pincode-input'
import { useSelector } from 'react-redux'

export const ExportPrivateKeyScreen = ({ navigation }) => {
	const [pin, setPin] = useState('')
	const { password } = useSelector((state) => state.storage)

	const pincodeInput = useRef(null)

	const shakePincode = () => {
		pincodeInput.current?.shake()
	}

	const handleOnTextChange = (pin) => {
		setPin(pin)
		if (pin.length === 6 && pin === password) {
			navigation.navigate('ExportPrivateKeyCopy')
			setPin('')
		} else if (pin.length === 6 && pin !== password) {
			setPin('')
			shakePincode()
		}
	}
	return (
		<ScrollView style={{ paddingTop: 30, paddingBottom: 50, flex: 1 }}>
			<View style={{ flex: 1 }}>
				<View style={{ paddingHorizontal: 30, marginBottom: 25 }}>
					<WalletTextWithIcon img={'lock'}>
						Please write down your Secret Private Key on paper and store it
						somewhere safe. Make sure the mnemonic you see is the one you have
						written down.
					</WalletTextWithIcon>
					<WalletTextWithIcon img={'eye-slash'}>
						Anyone who has access to it will have complete access to your
						wallet.
					</WalletTextWithIcon>
					<WalletTextWithIcon img={'password'}>
						If you forget your wallet password you can use this to recover your
						wallet.
					</WalletTextWithIcon>
					<WalletTextWithIcon img={'warning'}>
						WEB3 WALLET employees will NEVER ask for your Secret Private Key. Do
						not share it with anyone.
					</WalletTextWithIcon>
				</View>

				<View style={styles.bodyPin}>
					<WalletText center size='m'>
						Enter your PIN code
					</WalletText>
					<PincodeInput
						ref={pincodeInput}
						length={6}
						containerStyle={{
							display: 'flex',
							width: '100%',
							height: 47,
							justifyContent: 'center',
						}}
						circleContainerStyle={{
							justifyContent: 'center',
							alignItems: 'center',
						}}
						circleEmptyStyle={{
							marginHorizontal: 4,
							width: 9,
							height: 9,
							borderWidth: 1,
							borderColor: THEME.BROWN_TEXT,
							backgroundColor: THEME.BROWN_TEXT,
							borderRadius: 50,
						}}
						circleFilledStyle={{
							backgroundColor: THEME.GOLD,
							width: 9,
							height: 9,
							marginHorizontal: 4,
						}}
						pin={pin}
						onTextChange={handleOnTextChange}
					/>
				</View>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	bodyPin: {
		backgroundColor: THEME.BROWN_DARK,
		borderRadius: 10,
		marginHorizontal: 16,
		paddingTop: 20,
		paddingBottom: 5,
		marginBottom: 100,
	},
})
