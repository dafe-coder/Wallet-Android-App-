import React, { useRef, useEffect, useState } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { WalletText, WalletButton } from '../Components/UI'
import { THEME } from '../Theme'
import { TransactionInfo } from './../Components'
import { WalletBottomSheet } from './../Components'
import { TransactionFee, Success, Gas } from './../Components/modal'
import transactionsSend from '../../services/funcWallet/transaction'
import { useSelector } from 'react-redux'
import fixNum from './../../services/funcWallet/fixNum'

export const ConfirmTransactionScreen = ({ navigation }) => {
	const infoRef = useRef(null)
	const infoSuccess = useRef(null)
	const gasRef = useRef(null)
	const { addressTo, amountSend, chooseCoin } = useSelector(
		(state) => state.wallet
	)
	const { dataUser, currentAccount } = useSelector((state) => state.storage)
	const [checkEther, setCheckEther] = useState(true)
	const [hash, setHash] = useState('')

	useEffect(() => {
		setCheckEther(chooseCoin.symbol.toUpperCase().includes('ETH'))
	}, [chooseCoin])

	const openInfo = () => {
		infoRef.current?.expand()
	}
	const closeInfo = () => {
		infoRef.current?.close()
	}
	const onOpenSuccess = () => {
		infoSuccess.current?.expand()
	}
	const onCloseSuccess = () => {
		infoSuccess.current?.close()
	}
	const onOpenGas = () => {
		gasRef.current?.expand()
	}
	const onCloseGas = () => {
		gasRef.current?.close()
	}
	const onSendTransaction = () => {
		const addressFrom = dataUser.filter((d) => d.name == currentAccount)[0]
			.address
		const privateKey = dataUser.filter((d) => d.name == currentAccount)[0]
			.privateKey
		const amount = fixNum(
			Number(amountSend) / chooseCoin.market_data.current_price.usd
		)
		transactionsSend(
			addressFrom,
			addressTo,
			chooseCoin.contract_address,
			amount,
			checkEther,
			setHash,
			onOpenSuccess,
			onOpenGas,
			privateKey
		)
		// navigation.navigate('Sent')
	}
	return (
		<ScrollView contentContainerStyle={{ flex: 1 }}>
			<View
				style={{
					flex: 1,
					paddingTop: 29,
					paddingBottom: 50,
					justifyContent: 'space-between',
				}}>
				<View style={{ paddingHorizontal: 16 }}>
					<View style={{ marginBottom: 24 }}>
						<WalletText
							color='disabled'
							style={{ marginBottom: 7, paddingHorizontal: 18 }}>
							From
						</WalletText>
						<View style={styles.item}>
							<WalletText size='m' color='dark'>
								{dataUser.map((d) => {
									if (d.name === currentAccount) {
										return d.address.slice(0, 13) + '...' + d.address.slice(-10)
									}
								})}
							</WalletText>
						</View>
					</View>
					<View style={{ marginBottom: 24 }}>
						<WalletText
							color='disabled'
							style={{ marginBottom: 7, paddingHorizontal: 18 }}>
							To
						</WalletText>
						<View style={styles.item}>
							<WalletText size='m' color='dark'>
								{addressTo.slice(0, 13) + '...' + addressTo.slice(-10)}
							</WalletText>
						</View>
					</View>
					<TransactionInfo
						chooseCoin={chooseCoin}
						amountSend={amountSend}
						onPress={openInfo}
					/>
				</View>
				<View style={styles.btns}>
					<WalletButton
						arrow={false}
						type='border'
						style={styles.btn}
						onPress={() => navigation.navigate('Sent')}>
						Reject
					</WalletButton>
					<WalletButton onPress={onSendTransaction} style={styles.btn}>
						Confirm
					</WalletButton>
				</View>
				<WalletBottomSheet ref={infoRef} snapPoints={['55%']}>
					<TransactionFee onPress={closeInfo} />
				</WalletBottomSheet>
				<WalletBottomSheet ref={infoSuccess} snapPoints={['48%']}>
					<Success onPress={onCloseSuccess} />
				</WalletBottomSheet>
				<WalletBottomSheet ref={gasRef} snapPoints={['48%']}>
					<Gas onPress={onCloseGas} />
				</WalletBottomSheet>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	item: {
		backgroundColor: THEME.GREY_LIGHT_BG,
		paddingHorizontal: 20,
		paddingVertical: 15,
		borderRadius: 30,
	},
	btns: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 16,
	},
	btn: {
		width: '48.5%',
		marginTop: 50,
	},
})
