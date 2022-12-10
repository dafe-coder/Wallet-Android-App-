import React, { useRef } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { WalletText, WalletButton } from '../Components/UI'
import { THEME } from '../Theme'
import { TransactionInfo } from './../Components'
import { WalletBottomSheet } from './../Components'
import { TransactionFee } from './../Components/modal'

export const ConfirmTransactionScreen = ({ navigation }) => {
	const infoRef = useRef(null)
	const openInfo = () => {
		infoRef.current.expand()
	}
	const closeInfo = () => {
		infoRef.current.close()
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
						Recipient Adress
					</WalletText>
					<View style={styles.item}>
						<WalletText size='m' color='white'>
							Public adress (0x...) or ENS
						</WalletText>
					</View>
				</View>
				<View style={{ marginBottom: 24 }}>
					<WalletText color='brown' style={{ marginBottom: 7 }}>
						From
					</WalletText>
					<View style={styles.item}>
						<WalletText size='m' color='white'>
							0x0A0B110107...4664a558D0
						</WalletText>
					</View>
				</View>
				<View style={{ marginBottom: 24 }}>
					<WalletText color='brown' style={{ marginBottom: 7 }}>
						To
					</WalletText>
					<View style={styles.item}>
						<WalletText size='m' color='white'>
							0x0A0B110107...4664ae6840
						</WalletText>
					</View>
				</View>
				<TransactionInfo onPress={openInfo} />
			</View>
			<View style={styles.btns}>
				<WalletButton
					type='border'
					style={styles.btn}
					onPress={() => navigation.navigate('Sent')}>
					Reject
				</WalletButton>
				<WalletButton style={styles.btn}>Confirm</WalletButton>
			</View>
			<WalletBottomSheet ref={infoRef} snapPoints={['55%']} index={0}>
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
