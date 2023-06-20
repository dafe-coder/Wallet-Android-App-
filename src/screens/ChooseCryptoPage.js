import React from 'react'
import { View, FlatList, TouchableOpacity } from 'react-native'
import { Header } from '../Components'
import { SearchInput } from './../Components/UI/'
import { useDispatch, useSelector } from 'react-redux'
import AssetsItem from '../Components/AssetsItem'
import { useNavigate, useLocation } from 'react-router-native'
import { fetchIdCoin } from '../store/slices/walletSlice'

export const ChooseCryptoPage = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { state } = useLocation()
	const { allCoins } = useSelector((state) => state.wallet)
	const [coinName, setCoinName] = React.useState('')
	const [filtered, setFiltered] = React.useState([])

	React.useEffect(() => {
		if (allCoins !== null) {
			if (coinName !== '') {
				const filtered = allCoins.filter(
					(item) =>
						item.name.toLowerCase().includes(coinName.toLowerCase()) ||
						item.symbol.toLowerCase().includes(coinName.toLowerCase())
				)
				setFiltered(filtered !== undefined ? filtered : [])
			} else {
				setFiltered(allCoins)
			}
		}
	}, [allCoins, coinName])

	const onChoose = (item) => {
		if (state !== null) {
			if (state.page && state.page === 'buy') {
				navigate('/buy', { state: { item, from: state.from } })
			} else if (state.page && state.page === 'receive') {
				navigate('/receive', { state: { item } })
			} else if (state.page && state.page === 'sent') {
				navigate('/send', { state: item })
			} else {
				if (item.contract_address === '') {
					dispatch(fetchIdCoin(item.id))
				}
				navigate('/swap', { state: { item, from: state.from } })
			}
		}
	}

	const renderItem = React.useCallback(
		({ item }) => (
			<TouchableOpacity activeOpacity={0.7} onPress={() => onChoose(item)}>
				<AssetsItem choose item={item} />
			</TouchableOpacity>
		),
		[]
	)

	return (
		<View style={{ flex: 1 }}>
			<View style={{ paddingHorizontal: 24 }}>
				<Header title='Choose Crypto' />
				<SearchInput value={coinName} setValue={setCoinName} />
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
