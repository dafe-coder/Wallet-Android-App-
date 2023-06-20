import React from 'react'
import {
	View,
	FlatList,
	TouchableOpacity,
	Image,
	StyleSheet,
} from 'react-native'
import { Header } from '../Components'
import { SearchInput } from '../Components/UI'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-native'
import { fetchIdCoin } from '../store/slices/walletSlice'
import { WalletText } from '../Components/UI'
import { THEME } from '../Theme'
import { setCurrencyBuy } from '../store/slices/transactionSlice'
const arrBuy = [
	{ img: require('../../assets/logo/buy/usd.png'), title: 'Usd', id: 0 },
	{ img: require('../../assets/logo/buy/cny.png'), title: 'Cny', id: 1 },
	{ img: require('../../assets/logo/buy/cad.png'), title: 'Cad', id: 2 },
	{ img: require('../../assets/logo/buy/eur.png'), title: 'Eur', id: 3 },
	{ img: require('../../assets/logo/buy/jpy.png'), title: 'Jpy', id: 4 },
]
export const ChooseCurrencyPage = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const [currencyName, setCurrencyName] = React.useState('')
	const [filtered, setFiltered] = React.useState([])

	React.useEffect(() => {
		console.log(filtered)
	}, [filtered])

	const onChoose = (item) => {
		navigate('/buy')
		dispatch(setCurrencyBuy(item))
	}

	React.useEffect(() => {
		if (currencyName !== '') {
			const filtered = arrBuy.filter((item) =>
				item.title.toLowerCase().includes(currencyName.toLowerCase())
			)
			setFiltered(filtered !== undefined ? filtered : [])
		} else {
			setFiltered(arrBuy)
		}
	}, [arrBuy, currencyName])

	const renderItem = React.useCallback(
		({ item }) => (
			<TouchableOpacity
				style={styles.item}
				activeOpacity={0.7}
				onPress={() => onChoose(item)}>
				<Image style={styles.circleImg} source={item.img} />
				<WalletText style={{ marginLeft: 10 }}>
					{item.title.toUpperCase()}
				</WalletText>
			</TouchableOpacity>
		),
		[]
	)

	return (
		<View style={{ flex: 1 }}>
			<View style={{ paddingHorizontal: 24 }}>
				<Header title='Choose Crypto' />
				<SearchInput
					value={currencyName}
					setValue={setCurrencyName}
					placeholder='Search for currency'
				/>
			</View>
			{filtered.length ? (
				<FlatList
					style={{ paddingHorizontal: 24 }}
					initialNumToRender={10}
					data={filtered}
					renderItem={renderItem}
					ListFooterComponent={() => <View />}
					ListFooterComponentStyle={{ marginBottom: 50 }}
				/>
			) : (
				<></>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	circleImg: {
		borderRadius: 50,
		width: 25,
		height: 25,
		overflow: 'hidden',
	},
	item: {
		borderRadius: 16,
		paddingHorizontal: 20,
		paddingVertical: 16,
		borderWidth: 1,
		borderColor: THEME.WHITE,
		backgroundColor: THEME.GREEN_LIGHT,
		flexDirection: 'row',
		marginBottom: 10,
	},
})
