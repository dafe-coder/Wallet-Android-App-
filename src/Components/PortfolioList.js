import React, { useState, useEffect, useCallback } from 'react'
import { View } from 'react-native'
import { PortfolioItem } from './PortfolioItem'
import fixNum from './../../services/funcWallet/fixNum'

export const PortfolioList = ({ coins, style, navigation }) => {
	const [coinsInit, setCoinsInit] = useState([])
	useEffect(() => {
		setCoinsInit(coins)
	}, [coins])
	const onOpenPortfolioCoin = useCallback((coin) => {
		navigation.navigate({
			name: 'PortfolioOpen',
			params: { coin: coin },
		})
	})
	return (
		<View style={[style]}>
			{coinsInit.map((c, i) => {
				return (
					<PortfolioItem
						coin={c}
						key={i}
						img={c.image.thumb}
						symbol={c.symbol}
						title={c.symbol}
						balance={+c.market_data.balance > 0 ? +c.market_data.balance : 0}
						balanceDollar={
							+c.market_data.balance_crypto.usd > 0
								? +c.market_data.balance_crypto.usd
								: 0
						}
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
						onOpenPortfolioCoin={onOpenPortfolioCoin}
					/>
				)
			})}
		</View>
	)
}
