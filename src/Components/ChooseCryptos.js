import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
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
			title: 'Arbitrum',
			symbol: 'Arb',
			image: require('../../assets/logo/1.png'),
			switch: false,
			balance: 0.0,
		},
		{
			id: 2,
			title: 'Ethereum',
			symbol: 'Eth',
			image: require('../../assets/logo/3.png'),
			switch: false,
			balance: 0.0,
		},
		{
			id: 3,
			title: 'BNB',
			symbol: 'BNB',
			image: require('../../assets/logo/4.png'),
			switch: false,
			balance: 0,
		},
		{
			id: 4,
			title: 'Polygon',
			symbol: 'Matic',
			image: require('../../assets/logo/5.png'),
			switch: false,
			balance: 0,
		},
		{
			id: 5,
			title: 'Aave',
			symbol: 'Aave',
			image: require('../../assets/logo/6.png'),
			switch: false,
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
					<Image
						resizeMode='cover'
						style={styles.coinImg}
						source={item.image}
					/>
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
	coinImg: {
		width: 40,
		height: 40,
		borderRadius: 50,
		marginRight: 8,
		overflow: 'hidden',
	},
	item: {
		marginHorizontal: 20,
		paddingHorizontal: 16,
		paddingVertical: 16,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		marginBottom: 10,
		backgroundColor: THEME.BLACK,
		borderRadius: 16,
	},
})
