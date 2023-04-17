import React, { useState, useRef, useEffect } from 'react'
import { View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { WalletNav, PortfolioList, WalletBottomSheet } from './../Components/'
import { WalletText } from '../Components/UI'
import { Filters, ChooseAssets } from './../Components/modal'
import { useSelector, useDispatch } from 'react-redux'
import { filterData } from '../../services/funcWallet/filterData'
import { LoaderListItem } from '../Components/Loader/LoaderListItem'
import { THEME } from './../Theme'
import { SvgIcon } from './../Components/svg/svg'
import { setChooseAssets } from '../store/actions/storageAction'
import { InfoPriseSlide } from './../Components/sliders/InfoPriceSlide'

export const WalletScreen = ({ navigation }) => {
	const dispatch = useDispatch()
	const [portfolioCoinsInit, setPortfolioCoinsInit] = useState([])
	const [filterPortfolioCoins, setFilterPortfolioCoins] = useState([])
	const [filterPortfolioCoinsLoader, setFilterPortfolioCoinsLoader] =
		useState(false)
	const {
		portfolioCoins,
		allCoins,
		coinsAccountZero,
		portfolioSort,
		loaderSkeleton,
	} = useSelector((state) => state.wallet)
	const { chooseAssets, backup } = useSelector((state) => state.storage)

	React.useEffect(() => {
		navigation.setOptions({
			headerTransparent: true,
		})
	}, [navigation])

	useEffect(() => {
		if (portfolioCoinsInit.length) {
			setFilterPortfolioCoinsLoader(false)
			const data = filterData(portfolioSort, portfolioCoinsInit)
			setFilterPortfolioCoins(data)
			setTimeout(() => {
				setFilterPortfolioCoinsLoader(true)
			}, 1)
		}
	}, [portfolioCoinsInit, portfolioSort])

	useEffect(() => {
		if (portfolioCoins.length > 0) {
			setPortfolioCoinsInit(portfolioCoins)
		} else {
			setPortfolioCoinsInit(
				allCoins.filter((c) => coinsAccountZero.indexOf(c.symbol) != -1)
			)
		}
	}, [portfolioCoins, allCoins])

	const filterRef = useRef(null)
	const chooseAssetsRef = useRef(null)

	const onCloseFilters = () => {
		filterRef.current?.close()
	}

	const onCloseAssets = () => {
		chooseAssetsRef.current?.close()
	}

	const onChooseAssets = (coin) => {
		onCloseAssets()
		dispatch(setChooseAssets(coin.symbol.toLowerCase()))
	}

	return (
		<>
			<ScrollView
				overScrollMode='never'
				style={{
					flex: 1,
				}}>
				<InfoPriseSlide />
				<View
					style={{
						marginHorizontal: 24,
						flex: 1,
						position: 'relative',
					}}>
					<WalletNav navigation={navigation} />
					<View
						style={{
							marginTop: 40,
							marginBottom: 30,
							justifyContent: 'space-between',
							flexDirection: 'row',
						}}>
						<WalletText size='m' color='disabled'>
							Wallet
						</WalletText>
						<TouchableOpacity
							onPress={() =>
								navigation.navigate('ManageCryptos', { home: true })
							}
							activeOpacity={0.7}
							style={{ flexDirection: 'row', alignItems: 'center' }}>
							<WalletText
								style={{ fontFamily: 'mt-med', marginRight: 6 }}
								color='gold'>
								Manage
							</WalletText>
							<SvgIcon type='play' />
						</TouchableOpacity>
					</View>
					{filterPortfolioCoinsLoader && loaderSkeleton ? (
						<PortfolioList
							navigation={navigation}
							coins={filterPortfolioCoins}
							style={{ marginBottom: 105 }}
						/>
					) : (
						<View style={{ marginBottom: 105 }}>
							<LoaderListItem style={{ marginBottom: 10 }} />
							<LoaderListItem style={{ marginBottom: 10 }} />
							<LoaderListItem style={{ marginBottom: 10 }} />
							<LoaderListItem style={{ marginBottom: 10 }} />
							<LoaderListItem style={{ marginBottom: 10 }} />
						</View>
					)}
				</View>
			</ScrollView>
			<WalletBottomSheet ref={filterRef} snapPoints={['55%']}>
				<Filters onClose={onCloseFilters} />
			</WalletBottomSheet>
			<WalletBottomSheet ref={chooseAssetsRef} snapPoints={['55%']}>
				<ChooseAssets
					onCoinPress={onChooseAssets}
					chooseAssets={chooseAssets}
					allCoins={allCoins}
				/>
			</WalletBottomSheet>
		</>
	)
}

const styles = StyleSheet.create({
	btnAddedAsset: {
		height: 50,
		width: 50,
		position: 'absolute',
		right: 20,
		bottom: 105,
		backgroundColor: 'rgba(189, 165, 228, 0.4)',
		borderRadius: 50,
		borderColor: THEME.VIOLET,
		borderWidth: 1,
		zIndex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
})
