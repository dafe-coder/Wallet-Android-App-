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
import { WalletButton } from './../Components/UI/WalletButton'
import { THEME } from '../Theme'
import { ChooseCoin } from './../Components/ChooseCoin'
import fixNum from '../../services/funcWallet/fixNum'
import { WalletModal } from '../Components/modal'
import { useSelector } from 'react-redux'

export const SentScreen = ({ navigation, route }) => {
	const { allCoins } = useSelector((state) => state.wallet)
	const coin = route.params.item && route.params.item
	const [btnDisabled, setBtnDisabled] = useState(true)
	const [openFunds, setOpenFunds] = useState(false)
	const [ethCoin, setEthCoin] = useState({})
	const [value, setValue] = useState(0)
	const [balance, setBalance] = useState(0)

	React.useEffect(() => {
		setEthCoin(allCoins.find((item) => item.symbol.toLowerCase() === 'eth'))
	}, [allCoins])

	const onSubmitSent = () => {
		if (!btnDisabled) {
			if (ethCoin.market_data.balance > 0) {
				navigation.navigate('ConfirmTransaction')
			} else {
				setOpenFunds(true)
			}
		}
	}

	const onMax = () => {
		setValue(fixNum(coin.market_data.balance_crypto.usd).toString())
		setBalance(fixNum(coin.market_data.balance).toString())
	}

	React.useEffect(() => {
		if (+value <= coin.market_data.balance_crypto.usd && +value > 0) {
			setBtnDisabled(false)
		} else {
			setBtnDisabled(true)
		}

		if (value != '' + value > 0) {
			setBalance(fixNum(Number(value) * coin.market_data.current_price.usd))
		}
	}, [value])

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
						<TouchableOpacity
							style={styles.maxBtn}
							activeOpacity={0.7}
							onPress={onMax}>
							<Text style={styles.maxBtnText}>MAX</Text>
						</TouchableOpacity>
					</View>
					<WalletText style={{ fontSize: 12, marginTop: 10 }}>
						{balance} {coin.symbol.toUpperCase()}
					</WalletText>
				</View>
				<View
					style={{
						marginHorizontal: 16,
						flex: 1,
						justifyContent: 'space-between',
					}}></View>
			</View>
			<View style={{ alignItems: 'center' }}>
				<ChooseCoin setValue={setValue} coin={coin} style={{ marginTop: 70 }} />
				<WalletKeyboard
					style={{ marginTop: 50, marginBottom: 30 }}
					setValue={setValue}
				/>
				<WalletButton size='m' disabled={btnDisabled} onPress={onSubmitSent}>
					Send
				</WalletButton>
			</View>
			<WalletModal isVisible={openFunds} styleBody={{ paddingHorizontal: 70 }}>
				<WalletText fw='bold' center size='m' style={{ marginBottom: 40 }}>
					Not enough funds.
				</WalletText>
				<WalletButton onPress={() => setOpenFunds(false)} size='sm'>
					Ok
				</WalletButton>
			</WalletModal>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	maxBtn: {
		backgroundColor: 'rgba(82, 140, 254, 0.2)',
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
