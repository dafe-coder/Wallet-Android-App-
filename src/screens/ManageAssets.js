import React from 'react'
import { View, TextInput, StyleSheet, FlatList } from 'react-native'
import { Header } from '../Components'
import { useSelector, useDispatch } from 'react-redux'
import { THEME } from '../Theme'
import { SvgIcon } from './../Components/svg/svg'
import AssetsItem from '../Components/AssetsItem'
import { setChooseAssets } from '../store/slices/storageSlice'

export const ManageAssets = () => {
	const dispatch = useDispatch()
	const { allCoins } = useSelector((state) => state.wallet)
	const { chooseAssets } = useSelector((state) => state.storage)
	const [value, setValue] = React.useState('')
	const [filtered, setFiltered] = React.useState([])

	React.useEffect(() => {
		if (allCoins !== null) {
			if (value !== '') {
				const filtered = allCoins.filter(
					(item) =>
						item.name.toLowerCase().includes(value.toLowerCase()) ||
						item.symbol.toLowerCase().includes(value.toLowerCase())
				)
				setFiltered(filtered !== undefined ? filtered : [])
			} else {
				setFiltered(allCoins)
			}
		}
	}, [allCoins, value])

	const onChooseCoin = React.useCallback((coin) => {
		const coinSymbol = coin.symbol
		dispatch(setChooseAssets(coinSymbol))
	}, [])

	const renderItem = React.useCallback(
		({ item }) => <AssetsItem item={item} onChooseCoin={onChooseCoin} />,
		[]
	)
	const renderHeader = () => (
		<View
			style={{
				marginBottom: 20,
			}}>
			<SvgIcon type='search' style={styles.iconSearch} />
			<TextInput
				value={value}
				onChangeText={(text) => setValue(text)}
				placeholderTextColor={THEME.WHITE}
				placeholder='Search for asset'
				style={styles.searchInp}
			/>
		</View>
	)
	return (
		<View style={{ flex: 1 }}>
			<View style={{ paddingHorizontal: 24 }}>
				<Header
					title={`Assets (${chooseAssets.length}/${
						allCoins !== null && allCoins.length
					})`}
				/>
				{renderHeader()}
			</View>
			{filtered.length ? (
				<FlatList
					keyboardShouldPersistTaps='handled'
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
	searchInp: {
		borderRadius: 16,
		borderColor: THEME.WHITE,
		borderWidth: 1,
		paddingHorizontal: 20,
		paddingVertical: 16,
		paddingTop: 14,
		backgroundColor: THEME.GREEN_BG,
		paddingLeft: 45,
		fontSize: 14,
		lineHeight: 16,
		fontFamily: 'mt-reg',
		color: THEME.WHITE,
	},
	iconSearch: {
		position: 'absolute',
		top: 23,
		zIndex: 1,
		left: 20,
	},
})
