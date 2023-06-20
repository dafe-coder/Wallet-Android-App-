import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { THEME } from '../Theme'
import { WalletText } from './UI/WalletText'
import { SvgIcon } from './svg/svg'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-native'

export const SwapDetails = ({ address = '' }) => {
	const navigate = useNavigate()
	const { slippage, deadline, slippageCustom } = useSelector(
		(state) => state.transaction
	)
	const { walletAddress } = useSelector((state) => state.wallet)

	return (
		<View style={styles.wrap}>
			<View style={styles.item}>
				<WalletText size='xs' fw='bold'>
					Slippage
				</WalletText>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<WalletText size='xs' style={{ alignItems: 'center' }}>
						{slippageCustom !== '' ? slippageCustom : slippage}%
					</WalletText>
					<TouchableOpacity
						onPress={() => navigate('/details-settings')}
						activeOpacity={0.7}
						style={{ paddingLeft: 10 }}>
						<SvgIcon type='cog' />
					</TouchableOpacity>
				</View>
			</View>
			{/* <View style={styles.item}>
				<WalletText size='xs' fw='bold'>
					Price
				</WalletText>
				<WalletText size='xs' style={{ alignItems: 'center' }}>
					1 USDT = 0.0008 ETH
				</WalletText>
			</View> */}
			<View style={styles.item}>
				<WalletText size='xs' fw='bold'>
					Price impact
				</WalletText>
				<WalletText size='xs' style={{ alignItems: 'center' }}>
					{'<'}0.01%
				</WalletText>
			</View>
			<View style={styles.item}>
				<WalletText size='xs' fw='bold'>
					Arrival Time
				</WalletText>
				<WalletText size='xs' style={{ alignItems: 'center' }}>
					{'<'}
					{deadline} min
				</WalletText>
			</View>
			<View style={styles.item}>
				<WalletText size='xs' fw='bold'>
					TX Fee
				</WalletText>
				<WalletText size='xs' style={{ alignItems: 'center' }}>
					0.3%
				</WalletText>
			</View>
			<View style={styles.item}>
				<WalletText size='xs' fw='bold'>
					Receiver
				</WalletText>
				<WalletText size='xs' style={{ alignItems: 'center' }}>
					{address !== ''
						? address.slice(0, 23) + '...' + address.slice(-5)
						: walletAddress.slice(0, 23) + '...' + walletAddress.slice(-5)}
				</WalletText>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	wrap: {
		backgroundColor: THEME.GREEN_LIGHT,
		borderRadius: 16,
		borderColor: THEME.WHITE,
		borderWidth: 1,
		paddingHorizontal: 20,
		paddingVertical: 16,
		paddingBottom: 6,
	},
	item: {
		justifyContent: 'space-between',
		flexDirection: 'row',
		marginBottom: 10,
	},
})
