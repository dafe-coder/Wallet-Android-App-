import React from 'react'
import {
	TouchableOpacity,
	View,
	StyleSheet,
	Image,
	FlatList,
} from 'react-native'
import { THEME } from '../Theme'
import { WalletText } from '../Components/UI'
import { useSelector } from 'react-redux'
import fixNum from '../../services/funcWallet/fixNum'
import { SearchButton } from '../Components'
import { TitleLeft } from '../navigation'
import useWalletService from '../../services/WalletService'
export const ChooseCryptosScreen = ({ navigation, route }) => {
	const { getToken } = useWalletService()
	const from = route.params ? route.params.from : undefined
	const network = route.params ? route.params.network : undefined
	const coinSwap = route.params ? route.params.coinSwap : undefined
	const { allCoins } = useSelector((state) => state.wallet)
	const [filteredCoins, setFilteredCoins] = React.useState([])

	React.useEffect(() => {
		if (
			(allCoins.length && from == 'swapFirst' && network !== undefined) ||
			(allCoins.length && from == 'swapSecond' && network !== undefined)
		) {
			const filtered = allCoins.filter(
				(item) =>
					!item.market_data.chain ||
					item.market_data.chain == network.toLowerCase()
			)
			setFilteredCoins(filtered)
		} else if (from === undefined) {
			setFilteredCoins(allCoins)
		}
	}, [allCoins, from, network])

	React.useEffect(() => {
		navigation.setOptions({
			headerLeft: () => <TitleLeft>Choose a crypto to send</TitleLeft>,
		})
	}, [navigation])

	const onChooseCrypto = (item) => {
		if (from == 'swapFirst') {
			if (
				item.id.toLowerCase() !== 'ethereum' &&
				item.id.toLowerCase() !== 'eth' &&
				item.id.length < 15
			) {
				// getToken(false, item.id).then((data) => {
				// 	const coinInfo = {
				// 		...item,
				// 		contract_address: data.platforms[
				// 			currentNetwork.title.toLowerCase() == 'polygon'
				// 				? 'polygon-pos'
				// 				: 'ethereum'
				// 		]
				// 			? data.platforms[
				// 					currentNetwork.title.toLowerCase() == 'polygon'
				// 						? 'polygon-pos'
				// 						: 'ethereum'
				// 			  ]
				// 			: '',
				// 	}
				// })
				navigation.navigate('Swap', {
					itemFirst: coinInfo,
					itemSecond: coinSwap,
				})
			} else if (from == 'swapSecond') {
				navigation.navigate('Swap', { itemSecond: item, itemFirst: coinSwap })
			} else {
				navigation.navigate('Sent', { item })
			}
		}
	}
	const coin = React.useCallback(({ item }) => {
		return (
			<TouchableOpacity
				onPress={() => onChooseCrypto(item)}
				key={item.id}
				style={styles.item}
				activeOpacity={0.7}>
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
			</TouchableOpacity>
		)
	}, [])
	return (
		<View style={{ flex: 1, marginTop: 20 }}>
			<FlatList
				initialNumToRender={8}
				keyExtractor={(item) =>
					item.contract_address !== '' ? item.contract_address : item.id
				}
				data={filteredCoins}
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
