import React from 'react'
import { View, StyleSheet } from 'react-native'
import { WalletText } from './UI'
import { THEME } from './../Theme'
import fixNum from '../../services/funcWallet/fixNum'
import Web3 from 'web3'
import { SvgIconNav } from './svg/svgNav'
import dateFormat from 'dateformat'

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

	const checkColor = () => {
		switch (type) {
			case 'send':
				return 'yellow'
			case 'trade':
				return 'gold'
			default:
				return 'green-light'
		}
	}
	return (
		<>
			{prevDate[index - 1] !==
			getDateTransaction(+itemData.mined_at).join('.') ? (
				<WalletText
					color='disabled'
					style={{ marginBottom: 12, marginTop: 15 }}>
					{dateFormat(new Date(+itemData.mined_at * 1000), 'mmmm d, yyyy')}
				</WalletText>
			) : (
				<></>
			)}
			<View style={styles.item}>
				<View style={styles.itemLeft}>
					<View style={[styles.icon]}>
						<SvgIconNav type={path} />
					</View>
					<View>
						<WalletText size='m' fw='bold' color={checkColor()}>
							{type == 'receive' ? 'Receive' : type == 'send' ? 'Send' : 'Swap'}
						</WalletText>
						<WalletText color='white' style={{ fontSize: 12 }}>
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
								: itemData.changes[1] &&
								  itemData.changes[1].asset.symbol +
										' / ' +
										(itemData.changes[0] && itemData.changes[0].asset.symbol)}
						</WalletText>
					</View>
				</View>
				<View style={{ alignItems: 'flex-end' }}>
					<WalletText fw='bold' size='m' color={checkColor()}>
						${' '}
						{fixNum(
							Number(
								Web3.utils.fromWei(
									itemData.changes[0].value.noExponents(),
									'ether'
								)
							) * itemData.changes[0].asset.price.value
						)}
					</WalletText>
					<WalletText color='white' style={{ fontSize: 12 }}>
						{getDateTransaction(+itemData.mined_at).map((item) =>
							item.length == 2 ? item + '.' : item
						)}
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
		backgroundColor: THEME.GREY,
		borderRadius: 6,
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
		borderRadius: 15,
		paddingVertical: 10,
		marginBottom: 8,
	},
	itemLeft: {
		flexDirection: 'row',
		alignItems: 'center',
	},
})
