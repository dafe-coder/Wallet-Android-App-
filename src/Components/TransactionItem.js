import React from 'react'
import { View, StyleSheet } from 'react-native'
import { WalletText } from './UI'
import { THEME } from './../Theme'
import fixNum from '../../services/funcWallet/fixNum'
import Web3 from 'web3'
import { SvgIconNav } from './svg/svgNav'

export const TransactionItem = ({
	prevDate,
	getDateTransaction,
	type = 'send',
	itemData,
	index,
}) => {
	let path =
		type == 'receive'
			? 'receive-green'
			: type == 'send'
			? 'send-red'
			: 'swap-violet'

	Number.prototype.noExponents = function () {
		var data = String(this).split(/[eE]/)
		if (data.length == 1) return data[0]

		var z = '',
			sign = this < 0 ? '-' : '',
			str = data[0].replace('.', ''),
			mag = Number(data[1]) + 1

		if (mag < 0) {
			z = sign + '0.'
			while (mag++) z += '0'
			return z + str.replace(/^\-/, '')
		}
		mag -= str.length
		while (mag--) z += '0'
		return str + z
	}

	return (
		<>
			{prevDate[index - 1] !==
			getDateTransaction(+itemData.mined_at).join('.') ? (
				<WalletText
					color='disabled'
					style={{ paddingLeft: 20, marginBottom: 12, marginTop: 15 }}>
					{getDateTransaction(+itemData.mined_at).map((item) =>
						item.length == 2 ? item + '.' : item
					)}
				</WalletText>
			) : (
				<></>
			)}
			<View style={styles.item}>
				<View style={styles.itemLeft}>
					<View
						style={[
							styles.icon,
							type == 'receive'
								? styles.iconGreen
								: type == 'send'
								? styles.iconRed
								: styles.iconYellow,
						]}>
						<SvgIconNav type={path} />
					</View>
					<View>
						<WalletText color='dark'>
							{type == 'receive' ? 'Receive' : type == 'send' ? 'Send' : 'Swap'}
						</WalletText>
						<WalletText color='disabled'>
							{type == 'receive' ? 'From:' : type == 'send' ? 'To:' : ''}{' '}
							{type == 'receive'
								? itemData.address_from.length > 10
									? itemData.address_from.slice(0, 5) +
									  '...' +
									  itemData.address_from.slice(-4)
									: itemData.address_to
								: type == 'send'
								? itemData.address_to.length > 10
									? itemData.address_to.slice(0, 5) +
									  '...' +
									  itemData.address_to.slice(-4)
									: itemData.address_to
								: itemData.changes[0].asset.symbol +
								  ' / ' +
								  (itemData.changes[1] ? itemData.changes[1].asset.symbol : '')}
						</WalletText>
					</View>
				</View>
				<View style={{ alignItems: 'flex-end' }}>
					<WalletText color='dark'>
						{itemData.changes[1]
							? fixNum(
									Number(
										Web3.utils.fromWei(
											itemData.changes[1].value.noExponents(),
											'ether'
										)
									)
							  )
							: fixNum(
									Number(
										Web3.utils.fromWei(
											itemData.changes[0].value.noExponents(),
											'ether'
										)
									)
							  )}{' '}
						{type == 'trade' && itemData.changes[1]
							? itemData.changes[1].asset.symbol
							: itemData.changes[0].asset.symbol}
					</WalletText>
					<WalletText color='dark'>
						$
						{fixNum(
							Number(
								Web3.utils.fromWei(
									itemData.changes[0].value.noExponents(),
									'ether'
								)
							) * itemData.changes[0].asset.price.value
						)}{' '}
						USD
					</WalletText>
				</View>
			</View>
		</>
	)
}

const styles = StyleSheet.create({
	icon: {
		marginRight: 10,
		width: 36,
		height: 36,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 50,
	},
	iconGreen: {
		backgroundColor: THEME.GREY_LIGHT,
	},
	iconRed: {
		backgroundColor: THEME.GREY_LIGHT,
	},
	iconYellow: {
		backgroundColor: THEME.GREY_LIGHT,
	},
	item: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: THEME.GREY_LIGHT_BG,
		paddingHorizontal: 20,
		borderRadius: 15,
		paddingVertical: 10,
		marginBottom: 8,
	},
	itemLeft: {
		flexDirection: 'row',
		alignItems: 'center',
	},
})
