import React from 'react'
import { View } from 'react-native'
import { PortfolioItem } from './PortfolioItem'

const coins = [
	{
		key: Math.random().toString(),
		img: require('../../assets/network/eth.png'),
		title: 'ETH',
		currentPrice: '2,3465.76',
		balance: '29,850.15',
		changePercent: 2,
	},
	{
		key: Math.random().toString(),
		img: require('../../assets/network/loo.png'),
		title: 'ETH',
		currentPrice: '2,3465.76',
		balance: '29,850.15',
		changePercent: 2,
	},
	{
		key: Math.random().toString(),
		img: require('../../assets/network/dai.png'),
		title: 'ETH',
		currentPrice: '2,3465.76',
		balance: '29,850.15',
		changePercent: 2,
	},
	{
		key: Math.random().toString(),
		img: require('../../assets/network/eth.png'),
		title: 'ETH',
		currentPrice: '2,3465.76',
		balance: '29,850.15',
		changePercent: 2,
	},
	{
		key: Math.random().toString(),
		img: require('../../assets/network/loo.png'),
		title: 'ETH',
		currentPrice: '2,3465.76',
		balance: '29,850.15',
		changePercent: 2,
	},
	{
		key: Math.random().toString(),
		img: require('../../assets/network/dai.png'),
		title: 'ETH',
		currentPrice: '2,3465.76',
		balance: '29,850.15',
		changePercent: 2,
	},
	{
		key: Math.random().toString(),
		img: require('../../assets/network/eth.png'),
		title: 'ETH',
		currentPrice: '2,3465.76',
		balance: '29,850.15',
		changePercent: 2,
	},
	{
		key: Math.random().toString(),
		img: require('../../assets/network/loo.png'),
		title: 'ETH',
		currentPrice: '2,3465.76',
		balance: '29,850.15',
		changePercent: 2,
	},
	{
		key: Math.random().toString(),
		img: require('../../assets/network/dai.png'),
		title: 'ETH',
		currentPrice: '2,3465.76',
		balance: '29,850.15',
		changePercent: 2,
	},
	{
		key: Math.random().toString(),
		img: require('../../assets/network/eth.png'),
		title: 'ETH',
		currentPrice: '2,3465.76',
		balance: '29,850.15',
		changePercent: 2,
	},
	{
		key: Math.random().toString(),
		img: require('../../assets/network/loo.png'),
		title: 'ETH',
		currentPrice: '2,3465.76',
		balance: '29,850.15',
		changePercent: 2,
	},
	{
		key: Math.random().toString(),
		img: require('../../assets/network/dai.png'),
		title: 'ETH',
		currentPrice: '2,3465.76',
		balance: '29,850.15',
		changePercent: 2,
	},
	{
		key: Math.random().toString(),
		img: require('../../assets/network/eth.png'),
		title: 'ETH',
		currentPrice: '2,3465.76',
		balance: '29,850.15',
		changePercent: 2,
	},
	{
		key: Math.random().toString(),
		img: require('../../assets/network/loo.png'),
		title: 'ETH',
		currentPrice: '2,3465.76',
		balance: '29,850.15',
		changePercent: 2,
	},
	{
		key: Math.random().toString(),
		img: require('../../assets/network/dai.png'),
		title: 'ETH',
		currentPrice: '2,3465.76',
		balance: '29,850.15',
		changePercent: 2,
	},
	{
		key: Math.random().toString(),
		img: require('../../assets/network/eth.png'),
		title: 'ETH',
		currentPrice: '2,3465.76',
		balance: '29,850.15',
		changePercent: 2,
	},
	{
		key: Math.random().toString(),
		img: require('../../assets/network/loo.png'),
		title: 'ETH',
		currentPrice: '2,3465.76',
		balance: '29,850.15',
		changePercent: 2,
	},
	{
		key: Math.random().toString(),
		img: require('../../assets/network/dai.png'),
		title: 'ETH',
		currentPrice: '2,3465.76',
		balance: '29,850.15',
		changePercent: 2,
	},
	{
		key: Math.random().toString(),
		img: require('../../assets/network/eth.png'),
		title: 'ETH',
		currentPrice: '2,3465.76',
		balance: '29,850.15',
		changePercent: 2,
	},
	{
		key: Math.random().toString(),
		img: require('../../assets/network/loo.png'),
		title: 'ETH',
		currentPrice: '2,3465.76',
		balance: '29,850.15',
		changePercent: 2,
	},
	{
		key: Math.random().toString(),
		img: require('../../assets/network/dai.png'),
		title: 'ETH',
		currentPrice: '2,3465.76',
		balance: '29,850.15',
		changePercent: 2,
	},
	{
		key: Math.random().toString(),
		img: require('../../assets/network/eth.png'),
		title: 'ETH',
		currentPrice: '2,3465.76',
		balance: '29,850.15',
		changePercent: 2,
	},
	{
		key: Math.random().toString(),
		img: require('../../assets/network/loo.png'),
		title: 'ETH',
		currentPrice: '2,3465.76',
		balance: '29,850.15',
		changePercent: 2,
	},
	{
		key: Math.random().toString(),
		img: require('../../assets/network/dai.png'),
		title: 'ETH',
		currentPrice: '2,3465.76',
		balance: '29,850.15',
		changePercent: 2,
	},
]

export const PortfolioList = ({ style }) => {
	return (
		<View style={[style]}>
			{coins.map((c) => (
				<PortfolioItem
					img={c.img}
					title={c.title}
					currentPrice={c.currentPrice}
					balance={c.balance}
					changePercent={c.changePercent}
				/>
			))}
		</View>
	)
}
