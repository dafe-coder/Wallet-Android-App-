import React, { useState, useEffect } from 'react'
import {
	TouchableOpacity,
	View,
	ImageBackground,
	StyleSheet,
	ScrollView,
	Dimensions,
} from 'react-native'
import { WalletTitle, WalletText } from './../Components/UI/'
import { WalletNav, TimelineItem } from '../Components/'
import { THEME } from '../Theme'
import { useSelector } from 'react-redux'
import fixNum from './../../services/funcWallet/fixNum'
import { SvgIcon } from './../Components/svg/svg'
import { SvgIconNav } from '../Components/svg/svgNav'
import { Chart, Line, Area } from 'react-native-responsive-linechart'
import axios from 'axios'

const width = Dimensions.get('window').width

export const PortfolioOpenScreen = ({ navigation, route }) => {
	const coin = route.params.coin
	const [activeTimeline, setActiveTimeLine] = React.useState('1D')
	const [dataTimeline, setDataTimeline] = React.useState([
		{ x: -1, y: 1 },
		{ x: -1, y: 1 },
		{ x: -1, y: 1 },
		{ x: -1, y: 1 },
	])

	// React.useEffect(() => {
	// 	console.log(dataTimeline)
	// }, [dataTimeline])

	const setPeriod = () => {
		switch (activeTimeline) {
			case '1D':
				return 'day'
			case '7D':
				return 'week'
			case '1M':
				return 'month'
			case '1Y':
				return 'year'
			case 'All':
				return 'max'
			default:
				break
		}
	}

	// React.useEffect(() => {
	// 	// if (coin.contract_address) {
	// 	// axios
	// 	// 	.get(
	// 	// 		`https://ebe9-185-195-233-148.eu.ngrok.io/0xdac17f958d2ee523a2206206994597c13d831ec7/getChart/${setPeriod()}`
	// 	// 	)
	// 	// 	.then((response) => {
	// 	// 		setDataTimeline(
	// 	// 			response.data.attributes.points.map((item) => ({
	// 	// 				x: item[0],
	// 	// 				y: item[1],
	// 	// 			}))
	// 	// 		)
	// 	// 	})
	// 	// 	.catch((err) => console.log(err))
	// 	// }
	// }, [activeTimeline, coin])

	const relativeChange = coin.market_data.relativeChange
		? coin.market_data.relativeChange.toFixed(2)
		: coin.market_data.current_price
		? (
				(coin.market_data.current_price.usd / coin.market_data.high_24h.usd) *
					100 -
				100
		  ).toFixed(3)
		: 0

	React.useEffect(() => {
		navigation.setOptions({
			headerLeft: () => <WalletTitle color='white'>{coin.name}</WalletTitle>,
			headerRight: () => (
				<TouchableOpacity
					onPress={() => navigation.navigate('Buy', { name: coin.name })}
					activeOpacity={0.7}
					style={{ flexDirection: 'row', alignItems: 'center' }}>
					<WalletText style={{ marginRight: 8, fontSize: 12, lineHeight: 14 }}>
						Buy
					</WalletText>
					<SvgIconNav type='buy' fill={THEME.WHITE} />
				</TouchableOpacity>
			),
		})
	}, [navigation])

	return (
		<ScrollView
			style={{
				paddingHorizontal: 16,
				paddingTop: 29,
			}}>
			<View style={{ alignItems: 'flex-start', marginBottom: 6 }}>
				<WalletText color='disabled' style={{ marginBottom: 4 }}>
					Price
				</WalletText>
				<WalletText color='white' size='m' style={{ marginBottom: 10 }}>
					$ {fixNum(coin.market_data.current_price.usd)}
				</WalletText>
				<View
					style={[
						styles.boxPercent,
						relativeChange > 0
							? { backgroundColor: 'rgba(72, 212, 158, 0.2)' }
							: { backgroundColor: 'rgba(222, 57, 87, 0.2)' },
					]}>
					<WalletText>
						<SvgIcon style={{ marginRight: 6 }} type='bottom-arrow' />
						{relativeChange}%
					</WalletText>
				</View>
			</View>
			<View style={styles.card}>
				<Chart
					style={{
						height: 190,
						width: width * 1.069,
						left: -(width / 10),
					}}
					data={dataTimeline}
					padding={{ left: 40, bottom: 20, right: 20, top: 20 }}>
					<Area
						theme={{
							gradient: {
								from: { color: THEME.VIOLET },
								to: { color: THEME.PRIMARY, opacity: 0.4 },
							},
						}}
					/>
					<Line
						theme={{
							stroke: { color: THEME.VIOLET, width: 2 },
						}}
					/>
				</Chart>
			</View>
			<View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
				<TimelineItem
					timelineText='1D'
					activeTimeline={activeTimeline}
					onPress={setActiveTimeLine}
				/>
				<TimelineItem
					timelineText='7D'
					activeTimeline={activeTimeline}
					onPress={setActiveTimeLine}
				/>
				<TimelineItem
					timelineText='1M'
					activeTimeline={activeTimeline}
					onPress={setActiveTimeLine}
				/>
				<TimelineItem
					timelineText='1Y'
					activeTimeline={activeTimeline}
					onPress={setActiveTimeLine}
				/>
				<TimelineItem
					timelineText='All'
					activeTimeline={activeTimeline}
					onPress={setActiveTimeLine}
				/>
			</View>
			<View style={{ marginTop: 30 }}>
				<WalletNav navigation={navigation} />
			</View>
			<View style={{ marginBottom: 40, marginTop: 50 }}>
				<WalletText style={{ marginBottom: 25 }} color='disabled' size='m'>
					Available Balance
				</WalletText>
				<View style={styles.item}>
					<WalletTitle color='white'>
						$ {fixNum(coin.market_data.balance_crypto.usd)}
					</WalletTitle>
					<WalletText style={{ fontSize: 12, lineHeight: 14, marginTop: 4 }}>
						{fixNum(coin.market_data.balance) + ' '}
						{coin.symbol.toUpperCase()}
					</WalletText>
				</View>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	item: {
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		borderBottomColor: 'rgba(185, 193, 217, 0.2)',
		borderBottomWidth: 1,
		paddingBottom: 14,
	},
	boxPercent: {
		paddingHorizontal: 6,
		paddingVertical: 4,
		borderRadius: 6,
		marginTop: 4,
	},
	card: {
		marginTop: -20,
		height: 180,
		width: '100%',
	},
	bgImage: {
		width: '100%',
		height: '100%',
		borderRadius: 15,
		overflow: 'hidden',
		alignItems: 'center',
	},
	priceBlock: {
		flexDirection: 'row',
		alignItems: 'center',
		borderRadius: 50,
		backgroundColor: THEME.VIOLET,
		paddingHorizontal: 15,
		paddingVertical: 7,
		marginTop: 25,
	},
})
