import React from 'react'
import { View, StyleSheet, Image, FlatList } from 'react-native'
import { THEME } from '../Theme'
import { WalletText } from '../Components/UI'
import { useSelector } from 'react-redux'
import fixNum from '../../services/funcWallet/fixNum'
import { SearchButton } from '../Components'

export const ChooseCryptosScreen = ({ navigation }) => {
	const { allCoins } = useSelector((state) => state.wallet)

	React.useEffect(() => {
		navigation.setOptions({
			headerLeft: () => (
				<WalletText color='disabled' size='m' style={{ marginLeft: 10 }}>
					Choose a crypto to send
				</WalletText>
			),
		})
	}, [navigation])

	const coin = React.useCallback(({ item }) => {
		return (
			<View key={item.id} style={styles.item}>
				<View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
					<Image
						resizeMode='contain'
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
				</View>
				<View>
					<WalletText fw='bold'>
						{'$ ' + fixNum(item.market_data.balance_crypto.usd)}
					</WalletText>
				</View>
			</View>
		)
	}, [])
	return (
		<View style={{ flex: 1, marginTop: 20 }}>
			<FlatList
				initialNumToRender={8}
				keyExtractor={(item) => item.id}
				data={allCoins}
				renderItem={(item) => coin(item)}
			/>
			<SearchButton />
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
		justifyContent: 'space-between',
		paddingBottom: 16,
		marginBottom: 24,
		borderBottomColor: THEME.DISABLED_TEXT,
		borderBottomWidth: 1,
	},
})
