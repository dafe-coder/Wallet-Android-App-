import React, { useState } from 'react'
import {
	View,
	Text,
	TouchableOpacity,
	TextInput,
	StyleSheet,
	ScrollView,
} from 'react-native'
import { WalletKeyboard, WalletText } from './../Components/UI/'
import { SelectCoinSent } from '../Components'
import { WalletButton } from './../Components/UI/WalletButton'
import { useSelector, useDispatch } from 'react-redux'
import { SvgIcon } from './../Components/svg/svg'
import { THEME } from '../Theme'
import { ChooseCoin } from './../Components/ChooseCoin'

export const SentScreen = ({ navigation }) => {
	const { chooseCoin } = useSelector((state) => state.wallet)
	const [btnDisabled, setBtnDisabled] = useState(true)
	const [value, setValue] = useState('')

	const onSubmitSent = () => {
		if (!btnDisabled) {
			navigation.navigate('ConfirmTransaction')
		}
	}
	return (
		<ScrollView
			contentContainerStyle={{
				flexGrow: 1,
				paddingBottom: 50,
				paddingTop: 29,
				paddingHorizontal: 24,
				justifyContent: 'space-between',
			}}>
			<View
				style={{
					flex: 1,
				}}>
				<View style={{ justifyContent: 'center', alignItems: 'center' }}>
					<View
						style={{
							width: '100%',
							justifyContent: 'center',
							alignItems: 'center',
							flexDirection: 'row',
						}}>
						<TextInput
							style={styles.text}
							placeholderTextColor={THEME.WHITE}
							placeholder='$ 0'
							value={value.length ? '$ ' + value : ''}
						/>
						<TouchableOpacity style={styles.maxBtn} activeOpacity={0.7}>
							<Text style={styles.maxBtnText}>MAX</Text>
						</TouchableOpacity>
					</View>
					<WalletText style={{ fontSize: 12, marginTop: 10 }}>0 ETH</WalletText>
				</View>
				<View
					style={{
						marginHorizontal: 16,
						flex: 1,
						justifyContent: 'space-between',
					}}></View>
			</View>
			<View style={{ alignItems: 'center' }}>
				<ChooseCoin style={{ marginTop: 70 }} />
				<WalletKeyboard
					style={{ marginTop: 50, marginBottom: 30 }}
					setValue={setValue}
				/>
				<WalletButton disabled={btnDisabled} onPress={onSubmitSent}>
					Send
				</WalletButton>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	maxBtn: {
		backgroundColor: ' rgba(82, 140, 254, 0.2)',
		borderRadius: 6,
		paddingHorizontal: 6,
		paddingVertical: 4,
		position: 'absolute',
		right: 0,
		zIndex: 10,
	},
	maxBtnText: { color: THEME.VIOLET, fontSize: 10, fontFamily: 'mt-semi-bold' },
	qrButton: {
		position: 'absolute',
		bottom: 19,
		right: 35,
		zIndex: 1,
	},
	text: {
		lineHeight: 46,
		fontSize: 38,
		color: THEME.WHITE,
		fontFamily: 'mt-med',
		minWidth: 100,
		textAlign: 'center',
	},
})
