import React from 'react'
import { View } from 'react-native'
import { PortfolioItem } from './PortfolioItem'
import fixNum from './../../services/funcWallet/fixNum'

export const PortfolioList = ({ coins, style }) => {
	return (
		<View style={[style]}>
			{coins.map((c) => {
				console.log(c.image)
				return (
					<PortfolioItem
						key={c.id}
						img={c.image.thumb}
						title={c.symbol}
						currentPrice={fixNum(item.market_data.current_price.usd)}
						balance={
							+item.market_data.balance > 0 ? +item.market_data.balance : 0
						}
						changePercent={
							c.market_data.relativeChange
								? item.market_data.relativeChange.toFixed(2)
								: item.market_data.current_price
								? (
										(item.market_data.current_price.usd /
											item.market_data.high_24h.usd) *
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
