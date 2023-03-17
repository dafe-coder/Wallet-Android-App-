import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { WalletText, SwitchButton } from './UI'
import { THEME } from '../Theme'
import { useSelector } from 'react-redux'
import fixNum from './../../services/funcWallet/fixNum'

export const ChooseCryptosHome = ({ style }) => {
	const { allCoins } = useSelector((state) => state.wallet)
	return (
		<View style={style}>
			{allCoins.map((item) => (
				<View key={item.id} style={styles.item}>
					<Image
						style={{ marginRight: 8, width: 40, height: 40 }}
						source={{ uri: item.image.thumb }}
					/>
					<View>
						<WalletText size='m' fw='bold'>
							{item.name}
						</WalletText>
						<WalletText style={{ fontSize: 12 }}>
							{fixNum(item.market_data.balance) + ' '}
							{item.symbol.toUpperCase()}
						</WalletText>
					</View>

					<SwitchButton style={{ marginLeft: 'auto' }} enabled={true} />
				</View>
			))}
		</View>
	)
}

const styles = StyleSheet.create({
	coinBlock: {
		backgroundColor: THEME.GREY,
		width: 44,
		height: 44,
		borderRadius: 6,
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 8,
	},
	item: {
		marginHorizontal: 24,
		paddingRight: 6,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		paddingBottom: 16,
		marginBottom: 24,
		borderBottomColor: THEME.DISABLED_TEXT,
		borderBottomWidth: 1,
	},
})
