import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { WalletText } from './UI'
import { THEME } from './../Theme'

export const TransactionItem = ({ type = 'send' }) => {
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
					<WalletText color='white'>Receive</WalletText>
					<WalletText color='brown'>From: {itemData.address_from}</WalletText>
				</View>
			</View>
			<View>
				<WalletText color='white'>6.458980 ETH</WalletText>
				<WalletText color='brown'>$1.574.47 USD</WalletText>
			</View>
		</View>
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
	},
	itemLeft: {
		flexDirection: 'row',
		alignItems: 'center',
	},
})
