import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Svg, Path } from 'react-native-svg'
import {
	VictoryPie,
	VictoryLegend,
	VictoryContainer,
	VictoryLabel,
	VictoryTheme,
	VictoryChart,
	VictoryAxis,
} from 'victory-native'
import { THEME } from './../Theme'
import { useSelector } from 'react-redux'
import fixNum from './../../services/funcWallet/fixNum'
const graphicColor = [
	'#0096A6',
	'#45BA62',
	'#4766F9',
	'#7B61FF',
	'#7BDC50',
	'#ADE5E0',
	'#C3B4FF',
	'#CE93D8',
	'#EB513C',
	'#F39898',
	'#F3F574',
	'#FFBF50',
]
export const PieChar = ({ portfolioCoinsInit }) => {
	const { portfolioBalance, portfolioCoins } = useSelector(
		(state) => state.wallet
	)
	const [textLabel, setTextLabel] = useState(['$0.00'])
	const [indexActive, setIndexActive] = useState('')
	const [graphicData, setGraphicData] = useState([])
	const [legendsArr, setLegendsArr] = useState([])
	useEffect(() => {
		setGraphicData(
			portfolioCoinsInit.map((c) => ({
				y:
					c.market_data.balance_crypto.usd > 0
						? c.market_data.balance_crypto.usd
						: 0.000000001,
				x: [
					c.name.toUpperCase(),
					fixNum(c.market_data.balance) + ' ' + c.symbol.toUpperCase(),
					'$' + fixNum(c.market_data.balance_crypto.usd),
				],
			}))
		)
		if (portfolioBalance != null) {
			setLegendsArr(
				portfolioCoinsInit.map((c) => ({
					name:
						c.symbol.toUpperCase() +
						` ${(
							(c.market_data.balance_crypto.usd > 0
								? c.market_data.balance_crypto.usd
								: 0.1 * 100) /
							(portfolioBalance.total_value > 0
								? portfolioBalance.total_value
								: 0.3)
						).toFixed(0)}%`,
				}))
			)
		}
	}, [portfolioBalance, portfolioCoinsInit])
	useEffect(() => {
		if (portfolioBalance != null) {
			setTextLabel([`$${fixNum(portfolioBalance.total_value)}`])
		}
	}, [portfolioBalance])
	return (
		<View style={styles.body}>
			<View style={styles.circle}>
				<Svg
					width={166}
					height={166}
					viewBox='0 0 147 147'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<Path
						d='M138 73.5c0 35.622-28.878 64.5-64.5 64.5S9 109.122 9 73.5 37.878 9 73.5 9 138 37.878 138 73.5z'
						stroke='#2D0F61'
						strokeWidth={17}
					/>
				</Svg>
			</View>
			<View style={styles.pieBlock}>
				<VictoryChart
					theme={VictoryTheme.material}
					width={252}
					height={252}
					animate={{
						duration: 2000,
						onLoad: { duration: 1000 },
					}}>
					<VictoryPie
						containerComponent={
							<VictoryContainer
								onTouchStart={() => this.setState({ scrollEnabled: false })}
								onTouchEnd={() => this.setState({ scrollEnabled: true })}
							/>
						}
						labelComponent={
							<VictoryLabel
								textAnchor='middle'
								verticalAnchor='middle'
								lineHeight={[2, 1]}
								x={129}
								y={127}
								style={
									textLabel.length == 1
										? [
												{
													fontSize: 16,
													fill: THEME.WHITE,
												},
										  ]
										: [
												{
													fontSize: 12,
													fill: THEME.WHITE,
												},
												{
													fontSize: 14,
													fill: THEME.WHITE,
												},
												{
													fontSize: 12,
													fill: '#9C94AC',
												},
										  ]
								}
								text={textLabel}
							/>
						}
						data={graphicData}
						width={252}
						height={252}
						innerRadius={69}
						colorScale={graphicColor}
						padAngle={5}
						cornerRadius={50}
						style={{
							data: {
								stroke: null,
								strokeWidth: 0,
							},
							labels: {
								fill: 'white',
								fontSize: 15,
								padding: 7,
								display: 'none',
							},
						}}
						events={[
							{
								childName: 'all',
								target: 'data',
								eventHandlers: {
									onPressIn: () => {
										return [
											{
												target: 'data',
												eventKey: 'all',
												mutation: () => {
													return null
												},
											},
											{
												target: 'data',
												mutation: (props) => {
													if (props.index === Number(indexActive)) {
														setIndexActive(-1)
														return null
													} else {
														setIndexActive(props.index)
														return {
															style: {
																fill: THEME.VIOLET,
															},
														}
													}
												},
											},
											{
												target: 'labels',
												mutation: ({ text }) => {
													return text.split(',').join(' ') ===
														textLabel.join(' ')
														? setTextLabel([
																`$${fixNum(portfolioBalance.total_value)}`,
														  ])
														: setTextLabel(text.split(','))
												},
											},
										]
									},
								},
							},
						]}
					/>
					<VictoryAxis
						style={{
							axis: { stroke: 'none' },
							ticks: { stroke: 'none' },
							tickLabels: { fill: 'none' },
							grid: { stroke: 'transparent' },
						}}
						standalone={false}
					/>
				</VictoryChart>
			</View>

			<View style={{ position: 'relative', paddingTop: 17, left: -60 }}>
				<VictoryLegend
					colorScale={graphicColor}
					itemsPerRow={6}
					gutter={20}
					style={{
						labels: {
							fill: THEME.WHITE,
							fontSize: 13,
						},
					}}
					data={legendsArr}
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	pieBlock: {
		position: 'relative',
		top: -23,
		left: -28,
	},
	circle: {
		borderRadius: 200,
		height: 166,
		width: 166,
		overflow: 'hidden',
		position: 'absolute',
		top: 20,
		left: 15,
	},
	body: {
		alignItem: 'center',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		flex: 1,
	},
})
