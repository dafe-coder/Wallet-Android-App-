import React from 'react'
import {
	TouchableOpacity,
	View,
	StyleSheet,
	ScrollView,
	Dimensions,
	Image,
} from 'react-native'
import { WalletTitle, WalletText } from './../Components/UI/'
import { TimelineItem } from '../Components/'
import { THEME } from '../Theme'
import fixNum from './../../services/funcWallet/fixNum'
import { SvgIcon } from './../Components/svg/svg'
import { SvgIconNav } from '../Components/svg/svgNav'
import { Chart, Line, Area } from 'react-native-responsive-linechart'
import axios from 'axios'
import { LoaderCard } from '../Components/Loader/LoaderCard'

const width = Dimensions.get('window').width

export const PortfolioOpenScreen = ({ navigation, route }) => {
	const coin = route.params.coin
	const [activeTimeline, setActiveTimeLine] = React.useState('All')
	const [dataTimeline, setDataTimeline] = React.useState([])
	const [coinContractAddress, setCoinContractAddress] = React.useState('')
	const [loadedToken, setLoadedToken] = React.useState(true)
	const [loadedChart, setLoadedChart] = React.useState(false)

	React.useEffect(() => {
		if (coin.id.length < 40 && coin.id != 'eth') {
			setLoadedToken(false)
			setCoinContractAddress(
				(coin.platforms && coin.platforms['ethereum']) ||
					(coin.platforms && coin.platforms['polygon-pos'])
			)
		} else {
			setLoadedToken(false)
			setCoinContractAddress(
				coin.id === 'eth'
					? '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'
					: coin.id
			)
		}
	}, [coin])

	const setPeriod = (eth) => {
		const day = eth ? '1' : 'day'
		const week = eth ? '7' : 'week'
		const month = eth ? '30' : 'month'
		const year = eth ? '360' : 'day'
		const all = eth ? 'max' : 'max'
		switch (activeTimeline) {
			case '1D':
				return day
			case '7D':
				return week
			case '1M':
				return month
			case '1Y':
				return year
			case 'All':
				return all
			default:
				break
		}
	}

	React.useEffect(() => {
		if (
			!loadedToken &&
			coinContractAddress != '' &&
			coinContractAddress !== '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'
		) {
			axios
				.get(
					`https://polygonfinance.org/${coinContractAddress}/getChart/${setPeriod(
						false
					)}`
				)
				.then((response) => {
					setLoadedChart(true)
					setDataTimeline(
						response.data.attributes.points.map((item) => ({
							x: item[0],
							y: item[1],
						}))
					)
				})
				.catch((err) => {
					console.log(err)
					setLoadedChart(true)
				})
		} else if (
			coinContractAddress === '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'
		) {
			axios
				.get(
					`https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=${setPeriod(
						true
					)}`
				)
				.then((response) => {
					setLoadedChart(true)
					setDataTimeline(
						response.data.prices.map((item) => ({
							x: item[0],
							y: item[1],
						}))
					)
				})
				.catch((err) => {
					console.log(err)
					setLoadedChart(true)
				})
		}
	}, [activeTimeline, coin, coinContractAddress])

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
			headerLeft: () => (
				<>
					<TouchableOpacity
						activeOpacity={0.7}
						onPress={() => navigation.goBack()}
						style={{ marginRight: 10 }}>
						<SvgIcon
							type='arrow-right'
							style={{ transform: [{ rotate: '-180deg' }] }}
						/>
					</TouchableOpacity>
					<WalletText size='m' color='white'>
						{coin.name}
					</WalletText>
				</>
			),
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
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
					marginBottom: 24,
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
						<SvgIcon
							type='bottom-arrow'
							height={10}
							width={10}
							style={{
								transform: [{ rotate: '-90deg' }],
							}}
							fill={relativeChange > 0 ? THEME.GREEN_LIGHT : THEME.RED}
						/>
						<WalletText
							size='s'
							fw='bold'
							style={{ marginLeft: 6 }}
							color={relativeChange > 0 ? 'green-light' : 'red'}>
							{relativeChange.slice('-')}%
						</WalletText>
					</View>
				</View>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}>
					<TouchableOpacity
						activeOpacity={0.7}
						onPress={() => navigation.navigate('Sent', { item: coin })}
						style={{ marginRight: 24 }}>
						<WalletText fw='bold' color='white'>
							Send
						</WalletText>
					</TouchableOpacity>
					<TouchableOpacity
						activeOpacity={0.7}
						onPress={() => navigation.navigate('Receive')}>
						<WalletText fw='bold' color='white'>
							Receive
						</WalletText>
					</TouchableOpacity>
				</View>
			</View>

			{dataTimeline.length ? (
				<View style={styles.cardBlack}>
					<View style={styles.card}>
						<Chart
							style={{
								marginTop: 10,
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
					<View
						style={{
							paddingTop: 10,
							flexDirection: 'row',
							justifyContent: 'space-around',
						}}>
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
				</View>
			) : (
				<View
					style={{
						justifyContent: 'center',
						alignItems: 'center',
						position: 'relative',
					}}>
					<LoaderCard style={{ height: 236, marginTop: 10 }} />
					{loadedChart && (
						<View style={{ position: 'absolute', top: '44%' }}>
							<WalletText center style={{ opacity: 0.4 }}>
								This chart is currently {'\n'} not available
							</WalletText>
						</View>
					)}
				</View>
			)}
			<View style={{ marginBottom: 40, marginTop: 32 }}>
				<WalletText style={{ marginBottom: 25 }} color='disabled' size='m'>
					Available Balance
				</WalletText>
				<View style={styles.item}>
					<Image
						style={styles.itemImg}
						resizeMode='cover'
						source={{ uri: coin.image.thumb }}
					/>
					<View>
						<WalletText size='m' color='white'>
							$ {fixNum(coin.market_data.balance_crypto.usd)}
						</WalletText>
						<WalletText
							color='white-dark'
							style={{ fontSize: 14, lineHeight: 17, marginTop: 4 }}>
							{fixNum(coin.market_data.balance) + ' '}
							{coin.symbol.toUpperCase()}
						</WalletText>
					</View>
				</View>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	cardBlack: {
		borderRadius: 16,
		backgroundColor: THEME.BLACK,
		paddingVertical: 24,
	},
	itemImg: {
		width: 40,
		height: 40,
		borderRadius: 50,
		overflow: 'hidden',
		marginRight: 16,
	},
	item: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: THEME.BLACK,
		borderRadius: 16,
		padding: 16,
	},
	boxPercent: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 9,
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
