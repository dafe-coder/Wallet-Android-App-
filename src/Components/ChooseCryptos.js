import React from 'react'
import { View, StyleSheet } from 'react-native'
import { SvgCoin } from './svg/svgCoin'
import { WalletText, SwitchButton } from './UI'
import { THEME } from '../Theme'
import { useSelector, useDispatch } from 'react-redux'
import { setChooseAssets } from '../store/actions/storageAction'

export const ChooseCryptos = ({ style }) => {
	const dispatch = useDispatch()
	const { chooseAssets } = useSelector((state) => state.storage)
	const [coins, setCoins] = React.useState([
		{
			id: 1,
			title: 'Bitcoin',
			symbol: 'Btc',
			image: <SvgCoin type='btc' />,
			switch: true,
			balance: 0.0,
		},
		{
			id: 2,
			title: 'Ethereum',
			symbol: 'Eth',
			image: <SvgCoin type='eth' />,
			switch: true,
			balance: 0.0,
		},
		{
			id: 3,
			title: 'BNB',
			symbol: 'BNB',
			image: <SvgCoin type='bnb' />,
			switch: true,
			balance: 0,
		},
		{
			id: 4,
			title: 'Polygon',
			symbol: 'Matic',
			image: <SvgCoin type='polygon' />,
			switch: true,
			balance: 0,
		},
		{
			id: 5,
			title: 'Avalanche',
			symbol: 'Aave',
			image: <SvgCoin type='avax' />,
			switch: true,
			balance: 0,
		},
	])

	React.useEffect(() => {
		const newArr = coins.map((item) => {
			const switchItem = chooseAssets.includes(item.symbol.toLowerCase())
			return {
				...item,
				switch: switchItem,
			}
		})
		setCoins(newArr)
	}, [chooseAssets])

	const onChooseAssets = (active, coin) => {
		dispatch(setChooseAssets(coin.symbol.toLowerCase()))
	}

	return (
		<View style={style}>
			{coins.map((item) => (
				<View key={item.id} style={styles.item}>
					<View style={styles.coinBlock}>{item.image}</View>
					<View>
						<WalletText size='m' fw='bold'>
							{item.title}
						</WalletText>
						<WalletText style={{ fontSize: 12 }}>
							{item.balance + ' '}
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
		paddingBottom: 16,
		marginBottom: 24,
		borderBottomColor: THEME.DISABLED_TEXT,
		borderBottomWidth: 1,
	},
})
