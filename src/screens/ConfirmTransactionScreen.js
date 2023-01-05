import React, { useRef, useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { WalletText, WalletButton } from '../Components/UI'
import { THEME } from '../Theme'
import { TransactionInfo } from './../Components'
import { WalletBottomSheet } from './../Components'
import { TransactionFee } from './../Components/modal'
import transactionsSend from '../../services/funcWallet/transaction'
import { useSelector } from 'react-redux'
import fixNum from './../../services/funcWallet/fixNum'

export const ConfirmTransactionScreen = ({ navigation }) => {
	const infoRef = useRef(null)
	const { addressTo, amountSend, chooseCoin } = useSelector(
		(state) => state.wallet
	)
	const { dataUser, currentAccount } = useSelector((state) => state.storage)
	const [checkEther, setCheckEther] = useState(false)
	const [hash, setHash] = useState('')
	const [openModal, setOpenModal] = useState(false)
	const [openModalGas, setOpenModalGas] = useState(false)
	const openInfo = () => {
		infoRef.current.expand()
	}
	const closeInfo = () => {
		infoRef.current.close()
	}
	const onSendTransaction = () => {
		const addressFrom = dataUser.map((d) => d.name == currentAccount)[0].address
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
			setOpenModal,
			setOpenModalGas
		)
		// navigation.navigate('Sent')
	}
	return (
		<View
			style={{
				flex: 1,
				paddingTop: 29,
				paddingBottom: 50,
				justifyContent: 'space-between',
			}}>
			<View style={{ paddingHorizontal: 16 }}>
				<View style={{ marginBottom: 24 }}>
					<WalletText color='brown' style={{ marginBottom: 7 }}>
						From
					</WalletText>
					<View style={styles.item}>
						<WalletText size='m' color='white'>
							{dataUser.map((d) => {
								if (d.name === currentAccount) {
									return d.address.slice(0, 13) + '...' + d.address.slice(-10)
								}
							})}
						</WalletText>
					</View>
				</View>
				<View style={{ marginBottom: 24 }}>
					<WalletText color='brown' style={{ marginBottom: 7 }}>
						To
					</WalletText>
					<View style={styles.item}>
						<WalletText size='m' color='white'>
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
		</View>
	)
}

const styles = StyleSheet.create({
	item: {
		backgroundColor: THEME.BROWN,
		paddingHorizontal: 20,
		paddingVertical: 15,
		borderRadius: 5,
	},
	btns: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 16,
	},
	btn: {
		width: '48.5%',
	},
})
