import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { PortfolioItem } from './PortfolioItem'
import fixNum from './../../services/funcWallet/fixNum'

export const PortfolioList = ({ coins, style, navigation }) => {
	const [coinsInit, setCoinsInit] = useState([])
	useEffect(() => {
		setCoinsInit(coins)
	}, [coins])
	return (
		<View style={[style]}>
			{coinsInit.map((c) => {
				return (
					<PortfolioItem
						coin={c}
						key={c.id}
						navigation={navigation}
						img={c.image.thumb}
						title={c.symbol}
						currentPrice={fixNum(c.market_data.current_price.usd)}
						balance={+c.market_data.balance > 0 ? +c.market_data.balance : 0}
						changePercent={
							c.market_data.relativeChange
								? c.market_data.relativeChange.toFixed(2)
								: c.market_data.current_price
								? (
										(c.market_data.current_price.usd /
											c.market_data.high_24h.usd) *
											100 -
										100
								  ).toFixed(3)
								: 0
						}
					/>
				)
			})}
		</View>
	)
}
