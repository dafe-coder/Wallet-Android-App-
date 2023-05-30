import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { WalletText, WalletInput, WalletButton } from './../Components/UI/'
import { SvgIcon } from './../Components/svg/svg'
import { THEME } from './../Theme'
import * as Clipboard from 'expo-clipboard'

export const SentAddressScreen = ({ navigation }) => {
	const [disabledBtn, setDisabledBtn] = React.useState(true)
	const [value, setValue] = React.useState('')

	const onPaste = async () => {
		const text = await Clipboard.getStringAsync()
		setValue(text)
	}

	React.useEffect(() => {
		if (value !== '' && value.includes('0x') && value.length > 10) {
			setDisabledBtn(false)
		} else {
			setDisabledBtn(true)
		}
	}, [value])

	React.useEffect(() => {
		navigation.setOptions({
			headerLeft: () => (
				<WalletText color='disabled' size='m' style={{ paddingLeft: 10 }}>
					Send to address
				</WalletText>
			),
		})
	}, [navigation])

	return (
		<View style={styles.wrap}>
			<View>
				<WalletInput
					setValue={setValue}
					value={value}
					style={{ marginTop: 20 }}
					placeholder='Paste address'
				/>
				<TouchableOpacity
					onPress={onPaste}
					activeOpacity={0.7}
					style={styles.btn}>
					<SvgIcon fill={THEME.VIOLET} type='copy' />
					<WalletText
						width={24}
						height={24}
						color='gold'
						style={{ marginLeft: 6 }}>
						Paste from clipboard
					</WalletText>
				</TouchableOpacity>
			</View>
			<View style={{ alignItems: 'center' }}>
				<WalletText
					color='disabled'
					style={{ fontSize: 12, marginBottom: 20 }}
					center>
					Check the address you have copied
				</WalletText>
				<WalletButton
					disabled={disabledBtn}
					onPress={() =>
						navigation.navigate('ConfirmTransaction', { addressTo: value })
					}>
					<WalletText>Preview transaction</WalletText>
				</WalletButton>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	wrap: {
		paddingHorizontal: 24,
		justifyContent: 'space-between',
		flex: 1,
		paddingBottom: 40,
	},
	btn: {
		backgroundColor: THEME.GREY,
		borderRadius: 6,
		marginTop: 16,
		paddingHorizontal: 16,
		paddingVertical: 13,
		flexDirection: 'row',
	},
})
