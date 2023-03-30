import React from 'react'
import { View, StyleSheet } from 'react-native'
import { WalletText } from './../Components/UI/'
import { SwitchButton } from './../Components/UI/SwitchButton'
import { THEME } from '../Theme'
import { useSelector, useDispatch } from 'react-redux'
import {
	switchNotifications,
	switchTransactions,
	switchWalletConnects,
} from './../store/actions/storageAction'

export const NotificationScreen = ({ navigation }) => {
	const dispatch = useDispatch()
	const { notifications, transactions, walletConnects } = useSelector(
		(state) => state.storage
	)

	const onNotifications = (value) => {
		dispatch(switchNotifications(value))
	}
	const onTransactions = (value) => {
		dispatch(switchTransactions(value))
	}
	const onWalletConnects = (value) => {
		dispatch(switchWalletConnects(value))
	}

	return (
		<View style={{ flex: 1, paddingHorizontal: 24 }}>
			<View>
				<View style={styles.item}>
					<WalletText fw='bold' size='m'>
						Activate notifications
					</WalletText>
					<SwitchButton setEnabled={onNotifications} enabled={notifications} />
				</View>
			</View>
			<View style={{ marginTop: 24 }}>
				<WalletText color='disabled' size='m'>
					Wallet
				</WalletText>
				<View style={styles.item}>
					<WalletText fw='bold' size='m'>
						Transactions
					</WalletText>
					<SwitchButton setEnabled={onTransactions} enabled={transactions} />
				</View>
				<View style={styles.item}>
					<WalletText fw='bold' size='m'>
						WalletConnect
					</WalletText>
					<SwitchButton
						setEnabled={onWalletConnects}
						enabled={walletConnects}
					/>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	item: {
		paddingVertical: 20,
		borderBottomColor: THEME.DISABLED_TEXT,
		borderBottomWidth: 1,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
})
