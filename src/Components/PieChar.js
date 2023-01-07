import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Svg, Path } from 'react-native-svg'
import {
	VictoryPie,
	VictoryLegend,
	VictoryTooltip,
	VictoryContainer,
	VictoryLabel,
	VictoryTheme,
	VictoryChart,
	VictoryAxis,
} from 'victory-native'
import { THEME } from './../Theme'
// ...
// const data = [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }]
const graphicData = [
		{ y: 10, x: '5%' },
		{ y: 90, x: '90%' },
		{ y: 50, x: '50%' },
		{ y: 20, x: '20%' },
		{ y: 20, x: '50%' },
		{ y: 10, x: '5%' },
		{ y: 30, x: '40%' },
		{ y: 50, x: '50%' },
		{ y: 40, x: '50%' },
		{ y: 50, x: '40%' },
	],
	graphicColor = [
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
export const PieChar = () => {
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
						stroke='#0C0B07'
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
							<VictoryTooltip
								events={[
									{
										target: 'data',
										eventHandlers: {
											onFocus: () => ({
												target: 'labels',
												mutation: () => ({ active: true }),
											}),
										},
									},
								]}
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
							labels: {
								fill: 'white',
								fontSize: 15,
								padding: 7,
								display: 'none',
							},
						}}
						events={[
							{
								target: 'data',
								eventHandlers: {
									onPress: () => {
										console.log(1)
										return [
											{
												target: 'data',
												mutation: ({ style }) => {
													return style.fill === '#c43a31'
														? null
														: { style: { fill: '#c43a31' } }
												},
											},
											{
												target: 'labels',
												mutation: ({ text }) => {
													return text === 'clicked' ? null : { text: 'clicked' }
												},
											},
										]
									},
								},
							},
						]}
					/>
					<VictoryLabel
						textAnchor='middle'
						verticalAnchor='middle'
						x={125}
						y={125}
						style={[
							{ fontSize: 16, fill: THEME.WHITE },
							{ fill: 'green', fontFamily: 'monospace' },
						]}
						text={['Label', '8220.34']}
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
							textTransform: 'uppercase',
						},
					}}
					events={[
						{
							target: 'data',
							eventHandlers: {
								onPress: () => {
									console.log(2)
									return [
										{
											target: 'data',
											mutation: (props) => {
												const fill = props.style && props.style.fill
												return fill === '#c43a31'
													? null
													: { style: { fill: '#c43a31' } }
											},
										},
										{
											target: 'labels',
											mutation: (props) => {
												return props.text === 'clicked'
													? null
													: { text: 'clicked' }
											},
										},
									]
								},
							},
						},
					]}
					data={[
						{ name: 'BTC 26%' },
						{ name: 'GALA 32%' },
						{ name: 'USDC 2%' },
						{ name: 'BTC 26%' },
						{ name: 'GALA 32%' },
						{ name: 'USDC 2%' },
						{ name: 'BTC 26%' },
						{ name: 'GALA 32%' },
						{ name: 'USDC 2%' },
						{ name: 'BTC 26%' },
						{ name: 'GALA 32%' },
						{ name: 'USDC 2%' },
					]}
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
