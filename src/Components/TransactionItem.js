import React, { useEffect } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { WalletText } from './UI'
import { THEME } from './../Theme'
import fixNum from '../../services/funcWallet/fixNum'
import Web3 from 'web3'

export const TransactionItem = ({
	prevDate,
	setDate,
	type = 'send',
	itemData,
	index,
}) => {
	useEffect(() => {
		if (index !== 0) {
			setDate((state) => {
				return [
					...state,
					getDateTransaction(+itemData.mined_at)
						.map((item) => (item.length == 2 ? item + '.' : item))
						.join(''),
				]
			})
		}
	}, [itemData])

	let path =
		type == 'receive'
			? require('../../assets/icons/receive.png')
			: type == 'send'
			? require('../../assets/icons/send.png')
			: require('../../assets/icons/swap.png')

	function getDateTransaction(time) {
		let dmy = [],
			date = new Date(+time * 1000)

		dmy = [
			('0' + date.getDate()).slice(-2),
			('0' + (date.getMonth() + 1)).slice(-2),
			date.getFullYear(),
		]
		return dmy
	}

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
			getDateTransaction(+itemData.mined_at)
				.map((item) => (item.length == 2 ? item + '.' : item))
				.join('') ? (
				<WalletText
					color='gold'
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
						<Image source={path} />
					</View>
					<View>
						<WalletText color='white'>
							{type == 'receive' ? 'Receive' : type == 'send' ? 'Send' : 'Swap'}
						</WalletText>
						<WalletText color='brown'>
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
								: ''}
						</WalletText>
					</View>
				</View>
				<View style={{ alignItems: 'flex-end' }}>
					<WalletText color='white'>
						{fixNum(
							Number(
								Web3.utils.fromWei(
									itemData.changes[0].value.noExponents(),
									'ether'
								)
							)
						)}{' '}
						{itemData.changes[0].asset.symbol}
					</WalletText>
					<WalletText color='brown'>
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
		backgroundColor: '#334D3F',
	},
	iconRed: {
		backgroundColor: '#45292F',
	},
	iconYellow: {
		backgroundColor: '#F9B446',
	},
	item: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: THEME.BROWN,
		paddingHorizontal: 20,
		borderRadius: 5,
		paddingVertical: 10,
		marginBottom: 8,
	},
	itemLeft: {
		flexDirection: 'row',
		alignItems: 'center',
	},
})
