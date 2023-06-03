import React from 'react'
import { View, StyleSheet } from 'react-native'
import { WalletText } from './UI/WalletText'
import { SvgIcon } from './svg/svg'
import { THEME } from '../Theme'
import fixNum from '../../services/funcWallet/fixNum'

export const TransactionItem = ({ data }) => {
	switch (data.attributes.operation_type) {
		case 'send':
			return (
				<View style={styles.item}>
					<View style={styles.top}>
						<View style={{ flexDirection: 'row', alignItems: 'center' }}>
							{/* <SvgIcon style={{ marginRight: 15 }} type='receive' /> */}
							<SvgIcon style={{ marginRight: 15 }} type='send' />
							<WalletText color='red'>Sent</WalletText>
						</View>
						<WalletText color='red'>
							- {fixNum(data.attributes.transfers[0].quantity.float) + ' '}
							{data.attributes.transfers[0].fungible_info.symbol}
						</WalletText>
					</View>
					<View
						style={{
							paddingTop: 10,
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'space-between',
						}}>
						<WalletText size='xs'>
							To:{' '}
							{data.attributes.sent_to.slice(0, 16) +
								'...' +
								data.attributes.sent_to.slice(-5)}
						</WalletText>
						<WalletText size='xs'>
							{data.attributes.mined_at.slice(0, 10).split('-').join('.')}
						</WalletText>
					</View>
				</View>
			)
		case 'trade':
			return (
				<View style={styles.item}>
					<View style={styles.top}>
						<View style={{ flexDirection: 'row', alignItems: 'center' }}>
							{/* <SvgIcon style={{ marginRight: 15 }} type='receive' /> */}
							<SvgIcon style={{ marginRight: 15 }} type='trade' />
							<WalletText color='white'>Trade </WalletText>
						</View>
						<WalletText color='green-light'>
							+ {fixNum(data.attributes.transfers[0].quantity.float) + ' '}
							{data.attributes.transfers[0].fungible_info.symbol}
						</WalletText>
					</View>
					<View
						style={{
							paddingTop: 10,
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'space-between',
						}}>
						<WalletText size='xs'>
							{data.attributes.transfers[1].fungible_info.symbol +
								' / ' +
								data.attributes.transfers[0].fungible_info.symbol}
						</WalletText>
						<WalletText size='xs'>
							{data.attributes.mined_at.slice(0, 10).split('-').join('.')}
						</WalletText>
					</View>
				</View>
			)
		case 'mint':
			return (
				<View style={styles.item}>
					<View style={styles.top}>
						<View style={{ flexDirection: 'row', alignItems: 'center' }}>
							{/* <SvgIcon style={{ marginRight: 15 }} type='receive' /> */}
							<SvgIcon style={{ marginRight: 15 }} type='send' />
							<WalletText color='red'>Receive</WalletText>
						</View>
						<WalletText color='red'>
							- {fixNum(data.attributes.transfers[0].quantity.float) + ' '}
							{data.attributes.transfers[0].fungible_info.symbol}
						</WalletText>
					</View>
					<View
						style={{
							paddingTop: 10,
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'space-between',
						}}>
						<WalletText size='xs'>
							To:{' '}
							{data.attributes.sent_to.slice(0, 16) +
								'...' +
								data.attributes.sent_to.slice(-5)}
						</WalletText>
						<WalletText size='xs'>
							{data.attributes.mined_at.slice(0, 10).split('-').join('.')}
						</WalletText>
					</View>
				</View>
			)
		default:
			break
	}
}

const styles = StyleSheet.create({
	item: {
		borderRadius: 16,
		borderWidth: 1,
		borderColor: THEME.WHITE,
		backgroundColor: THEME.GREEN_LIGHT,
		paddingHorizontal: 20,
		paddingVertical: 16,
		marginBottom: 10,
	},
	top: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderBottomColor: THEME.WHITE,
		borderBottomWidth: 1,
		paddingBottom: 10,
	},
})
