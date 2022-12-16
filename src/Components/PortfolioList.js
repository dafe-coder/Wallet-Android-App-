import React from 'react'
import { View } from 'react-native'
import { PortfolioItem } from './PortfolioItem'
import fixNum from './../../services/funcWallet/fixNum'

export const PortfolioList = ({ coins, style }) => {
	return (
		<View style={[style]}>
			{coins.map((c) => (
				<PortfolioItem
					key={c.id}
					img={c.image.thumb}
					title={c.name}
					currentPrice={fixNum(c.market_data.current_price)}
					balance={fixNum(c.market_data.balance)}
					changePercent={fixNum(c.market_data.relativeChange)}
				/>
			))}
		</View>
	)
}
