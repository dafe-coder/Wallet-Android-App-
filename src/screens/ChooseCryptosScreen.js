import React from 'react'
import {
	TouchableOpacity,
	View,
	StyleSheet,
	Image,
	Keyboard,
	FlatList,
} from 'react-native'
import { THEME } from '../Theme'
import { WalletText } from '../Components/UI'
import { useSelector } from 'react-redux'
import fixNum from '../../services/funcWallet/fixNum'
import { SearchButton } from '../Components'
import { TitleLeft } from '../navigation'
import {
	useAnimatedStyle,
	useSharedValue,
	Easing,
	withSpring,
	withTiming,
} from 'react-native-reanimated'

export const ChooseCryptosScreen = ({ navigation, route }) => {
	const offsetWidth = useSharedValue('45%')
	const from = route.params ? route.params.from : undefined
	const network = route.params ? route.params.network : undefined
	const coinSwap = route.params ? route.params.coinSwap : undefined
	const { allCoins, allCoinsSwap } = useSelector((state) => state.wallet)
	const [filteredCoins, setFilteredCoins] = React.useState([])
	const [active, setActive] = React.useState(false)
	const [value, setValue] = React.useState('')
	const [coinsData, setCoinsData] = React.useState([])
	const width = useAnimatedStyle(() => {
		return {
			width: withSpring(offsetWidth.value),
		}
	})

	React.useEffect(() => {
		if (
			(allCoinsSwap.length && from == 'swapFirst' && network !== undefined) ||
			(allCoinsSwap.length && from == 'swapSecond' && network !== undefined)
		) {
			const filtered = allCoinsSwap.filter((item) => {
				return (
					(item.chain && item.chain == network.toLowerCase()) ||
					(item.chain == undefined &&
						item.platforms &&
						item.platforms[
							network == 'Ethereum' ? 'ethereum' : 'polygon-pos'
						] !== undefined) ||
					item.market_data.chain == network.toLowerCase()
				)
			})
			setCoinsData(filtered)
		} else {
			setCoinsData(allCoins)
		}
	}, [allCoinsSwap, route, network])

	React.useEffect(() => {
		if (value !== '' && coinsData.length) {
			const filtered = coinsData.filter(
				(item) =>
					item.symbol.toLowerCase().includes(value.toLowerCase()) ||
					item.name.toLowerCase().includes(value.toLowerCase())
			)
			setFilteredCoins(filtered)
		} else {
			setFilteredCoins(coinsData)
		}
	}, [value, coinsData])

	const onAnim = () => {
		offsetWidth.value = withTiming('45%', {
			duration: 500,
			easing: Easing.inOut(Easing.cubic),
		})
	}
	const onAnimEnd = () => {
		offsetWidth.value = withTiming('100%', {
			duration: 500,
			easing: Easing.inOut(Easing.cubic),
		})
	}

	React.useEffect(() => {
		const showSubscription = Keyboard.addListener('keyboardDidHide', () => {
			setActive(false)
		})
		return () => {
			showSubscription.remove()
		}
	}, [Keyboard])
	React.useEffect(() => {
		if (active == false) {
			onAnim()
		} else {
			onAnimEnd()
		}
	}, [active])

	const onOpenSearch = () => {
		setActive(!active)
	}

	React.useEffect(() => {
		navigation.setOptions({
			headerLeft: () => (
				<TitleLeft>
					Choose a crypto to{' '}
					{(from == 'swapFirst' && network !== undefined) ||
					(from == 'swapSecond' && network !== undefined)
						? 'swap'
						: 'send'}
				</TitleLeft>
			),
		})
	}, [navigation])

	const onChooseCrypto = (item) => {
		if (from == 'swapFirst') {
			navigation.navigate('Swap', {
				itemFirst: item,
				itemSecond: coinSwap,
			})
		} else if (from == 'swapSecond') {
			navigation.navigate('Swap', { itemSecond: item, itemFirst: coinSwap })
		} else if (from == 'Buy') {
			navigation.navigate('Buy', { name: item.symbol })
		} else {
			navigation.navigate('Sent', { item })
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
				ListFooterComponent={() => <></>}
				ListFooterComponentStyle={{ paddingBottom: 100 }}
				initialNumToRender={8}
				keyExtractor={(item) =>
					item.contract_address !== '' ? item.contract_address : item.id
				}
				data={filteredCoins}
				renderItem={coin}
			/>
			<SearchButton
				value={value}
				setValue={setValue}
				width={width}
				active={active}
				onPress={onOpenSearch}
				style={active && { justifyContent: 'flex-start' }}
			/>
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
