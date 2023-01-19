import React, { useRef, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { THEME } from './../Theme'
import { WalletButton, WalletText } from '../Components/UI'
import { SvgIcon } from './../Components/svg/svg'
import PincodeInput from 'react-native-pincode-input'
import { useSelector, useDispatch } from 'react-redux'
import { setLockWallet } from '../store/actions/storageAction'

export const UnlockScreen = ({ navigation }) => {
	const dispatch = useDispatch()
	const [pin, setPin] = useState('')
	const { password } = useSelector((state) => state.storage)

	const pincodeInput = useRef(null)

	const shakePincode = () => {
		pincodeInput.current?.shake()
	}

	const handleOnTextChange = (pin) => {
		setPin(pin)
		if (pin.length === 6 && pin === password) {
			navigation.reset({ index: 0, routes: [{ name: 'Home' }] })
			dispatch(setLockWallet(false))
			setPin('')
		} else if (pin.length === 6 && pin !== password) {
			setPin('')
			shakePincode()
		}
	}

	return (
		<View style={styles.body}>
			<View style={styles.top}>
				<SvgIcon type='lockBig' />
				<View style={styles.bodyPin}>
					<WalletText center size='m' style={{ marginBottom: 10 }}>
						Enter your PIN to unlock
					</WalletText>
					<PincodeInput
						ref={pincodeInput}
						length={6}
						autoFocus={false}
						containerStyle={{
							width: '100%',
							height: 47,
							flexDirection: 'row',
							justifyContent: 'center',
							alignItems: 'center',
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
			<View
				style={{
					paddingHorizontal: 16,
				}}>
				<WalletText
					size='m'
					style={{ paddingHorizontal: '2%', marginBottom: 25, marginTop: 10 }}
					center>
					Wallet won’t unlock? You can ERASE your current wallet and setup a new
					one
				</WalletText>
				<WalletButton
					type='border'
					onPress={() => navigation.navigate('RiskAlert')}>
					Recover Wallet
				</WalletButton>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	top: {
		alignItems: 'center',
	},
	body: {
		flex: 1,
		justifyContent: 'space-between',
		paddingBottom: 40,
		paddingTop: 110,
	},
	title: {
		marginBottom: 20,
	},
	bodyPin: {
		marginTop: 40,
		borderRadius: 10,
		paddingBottom: 5,
		justifyContent: 'center',
		alignItems: 'center',
	},
})
