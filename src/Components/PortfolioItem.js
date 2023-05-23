import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { WalletText } from './UI/WalletText'
import { THEME } from './../Theme'
import fixNum from './../../services/funcWallet/fixNum'
export const PortfolioItem = ({
	img,
	title,
	balance,
	changePercent,
	onOpenPortfolioCoin,
	coin,
	balanceDollar,
	symbol = 'ETH',
}) => {
	return (
		<TouchableOpacity
			style={styles.item}
			activeOpacity={0.7}
			onPress={() => onOpenPortfolioCoin(coin)}>
			<View style={{ flexDirection: 'row' }}>
				<Image style={styles.logo} source={{ uri: img }} />
				<View style={{ marginLeft: 10 }}>
					<WalletText size='m' fw='bold'>
						{title.toUpperCase()}
					</WalletText>
					<WalletText
						style={{ fontSize: 12, lineHeight: 15, marginTop: 4 }}
						color='white-dark'>
						{fixNum(balance) + ' ' + symbol.toUpperCase()}
					</WalletText>
				</View>
			</View>
			<View style={{ alignItems: 'flex-end' }}>
				<WalletText fw='bold' size='m'>
					$ {fixNum(balanceDollar)}
				</WalletText>
				<View
					style={[
						styles.percentBox,
						changePercent > 0
							? { backgroundColor: 'rgba(72, 212, 158, 0.2)' }
							: { backgroundColor: 'rgba(222, 57, 87, 0.2)' },
					]}>
					<WalletText
						fw='bold'
						style={[
							{ fontSize: 10, lineHeight: 12 },
							changePercent > 0
								? { color: THEME.SUCCESS }
								: { color: THEME.RED },
						]}>
						{changePercent}%
					</WalletText>
				</View>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	percentBox: {
		paddingHorizontal: 6,
		paddingVertical: 4,
		borderRadius: 6,
		marginTop: 4,
	},
	logo: {
		height: 44,
		width: 44,
		borderRadius: 100,
		overflow: 'hidden',
	},
	item: {
		borderRadius: 16,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 4,
		backgroundColor: THEME.BLACK,
		padding: 16,
	},
})
