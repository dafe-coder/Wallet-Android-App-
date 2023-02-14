import React, { useRef, useState, useEffect } from 'react'
import {
	View,
	TouchableOpacity,
	StyleSheet,
	ScrollView,
	Keyboard,
	TouchableWithoutFeedback,
} from 'react-native'
import { WalletInput, WalletText } from './../Components/UI/'
import { SelectCoinSent } from '../Components'
import { WalletButton } from './../Components/UI/WalletButton'
import { WalletBottomSheet } from '../Components'
import { ChooseCoins } from '../Components/modal'
import { useSelector, useDispatch } from 'react-redux'
import { setAddressTo, setChooseCoin } from './../store/actions/walletActions'
import { SvgIcon } from './../Components/svg/svg'

import useIsReady from '../../hooks/useIsReady'
import { BusyIndicator } from '../Components/Loader'
export const SentScreen = ({ navigation }) => {
	const dispatch = useDispatch()
	const { allCoins, chooseCoin, addressTo } = useSelector(
		(state) => state.wallet
	)
	const coinsRef = useRef(null)
	const [fromAddress, setFromAddress] = useState('')
	const [openKeyboard, setOpenKeyboard] = useState(false)
	const [btnDisabled, setBtnDisabled] = useState(true)
	const isReady = useIsReady()
	const onAddAddress = (text) => {
		setFromAddress(text)
		dispatch(setAddressTo(text))
	}

	useEffect(() => {
		if (addressTo != '') {
			setFromAddress(addressTo)
		}
	}, [addressTo])
	const onChooseCoin = () => {
		coinsRef.current.expand()
	}
	const onCoinPress = (coin) => {
		dispatch(setChooseCoin(coin))
		coinsRef.current.close()
	}
	useEffect(() => {
		const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
			setOpenKeyboard(true)
		})
		const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
			setOpenKeyboard(false)
		})

		return () => {
			showSubscription.remove()
			hideSubscription.remove()
		}
	}, [])

	const onSubmitSent = () => {
		if (!btnDisabled) {
			dispatch(setAddressTo(fromAddress))
			navigation.navigate('ConfirmTransaction')
		}
	}
	if (!isReady) {
		return <BusyIndicator></BusyIndicator>
	}
	return (
		<TouchableWithoutFeedback
			onPress={() => Keyboard.dismiss()}
			accessible={false}>
			<ScrollView
				contentContainerStyle={{
					flexGrow: 1,
					paddingBottom: 50,
					paddingTop: 29,
					justifyContent: 'space-between',
				}}>
				<View
					style={{
						flex: 1,
					}}>
					<View style={{ marginBottom: 39, flex: 0, paddingHorizontal: 16 }}>
						<WalletText
							color='disabled'
							style={{ paddingLeft: 19, marginBottom: 7 }}>
							Recipient Address
						</WalletText>
						<TouchableOpacity
							style={styles.qrButton}
							activeOpacity={0.7}
							onPress={() => navigation.navigate('Scanner')}>
							<SvgIcon type='qr-camera' />
						</TouchableOpacity>
						<WalletInput
							styleInput={{ paddingRight: 50 }}
							autoCapitalize='none'
							setValue={onAddAddress}
							value={fromAddress}
							placeholder='Public Address (0x...) or ENS'
						/>
					</View>
					<View
						style={{
							marginHorizontal: 16,
							flex: 1,
							justifyContent: 'space-between',
						}}>
						{chooseCoin != null ? (
							<SelectCoinSent
								setBtnDisabled={setBtnDisabled}
								onChooseCoin={onChooseCoin}
							/>
						) : (
							<></>
						)}
						<WalletButton
							disabled={btnDisabled}
							style={{
								marginTop: 60,
							}}
							onPress={onSubmitSent}>
							Send
						</WalletButton>
					</View>
				</View>
				<WalletBottomSheet
					ref={coinsRef}
					snapPoints={[openKeyboard ? '100%' : '65%']}>
					{allCoins.length ? (
						<ChooseCoins
							chooseCoin={chooseCoin}
							allCoins={allCoins}
							onCoinPress={onCoinPress}
						/>
					) : (
						<></>
					)}
				</WalletBottomSheet>
			</ScrollView>
		</TouchableWithoutFeedback>
	)
}

const styles = StyleSheet.create({
	qrButton: {
		position: 'absolute',
		bottom: 19,
		right: 35,
		zIndex: 1,
	},
})
