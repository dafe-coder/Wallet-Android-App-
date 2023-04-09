import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { WalletText, SwitchButton } from './UI'
import { THEME } from '../Theme'
import { useDispatch, useSelector } from 'react-redux'
import fixNum from './../../services/funcWallet/fixNum'
import { setChooseAssets } from '../store/actions/storageAction'

export const ChooseCryptosHome = ({ allCoins, style }) => {
	const dispatch = useDispatch()
	const [checkedSwitch, setCheckedSwitch] = React.useState([])
	const { chooseAssets } = useSelector((state) => state.storage)

	const onChooseAssets = (active, coin) => {
		dispatch(setChooseAssets(coin.symbol.toLowerCase()))
	}

	React.useEffect(() => {
		if (allCoins.length) {
			const arr = allCoins.map((item) => {
				const switchItem = chooseAssets.includes(item.symbol.toLowerCase())
				return {
					...item,
					switch: switchItem,
				}
			})
			setCheckedSwitch(arr)
		}
	}, [chooseAssets, allCoins])

	return (
		<View style={style}>
			{checkedSwitch.map((item) => (
				<View
					key={item.contract_address !== '' ? item.contract_address : item.id}
					style={styles.item}>
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

					<SwitchButton
						coin={item}
						setEnabled={onChooseAssets}
						style={{ marginLeft: 'auto' }}
						enabled={item.switch}
					/>
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
