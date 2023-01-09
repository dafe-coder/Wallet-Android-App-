import React, { useState, useRef, useEffect } from 'react'
import { View, ScrollView } from 'react-native'
import {
	WalletNav,
	PortfolioList,
	Slider,
	PortfolioSort,
} from './../Components/'
import { WalletBottomSheet } from '../Components/'
import { Filters } from './../Components/modal'
import { setNavigation } from '../store/actions/walletActions'
import { useDispatch, useSelector } from 'react-redux'
import { filterData } from '../../services/funcWallet/filterData'

export const WalletScreen = ({ navigation }) => {
	const [portfolioCoinsInit, setPortfolioCoinsInit] = useState([])
	const [filterPortfolioCoins, setFilterPortfolioCoins] = useState([])
	const [filterPortfolioCoinsLoader, setFilterPortfolioCoinsLoader] =
		useState(false)
	const { portfolioCoins, allCoins, coinsAccountZero, portfolioSort } =
		useSelector((state) => state.wallet)

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

	const dispatch = useDispatch()
	const filterRef = useRef(null)
	const onCloseFilters = () => {
		filterRef.current?.close()
	}
	const openModalFilter = () => {
		filterRef.current?.expand()
	}

	useEffect(() => {
		dispatch(setNavigation(navigation))
	}, [navigation])

	return (
		<>
			<ScrollView style={{ flex: 1, paddingTop: 20 }}>
				<Slider portfolioCoinsInit={portfolioCoinsInit} />
				<View style={{ paddingHorizontal: 16, flex: 1 }}>
					<WalletNav navigation={navigation} />
					<PortfolioSort style={{ marginTop: 24 }} onPress={openModalFilter} />
					{filterPortfolioCoinsLoader ? (
						<PortfolioList
							navigation={navigation}
							coins={filterPortfolioCoins}
							style={{ marginTop: 32, marginBottom: 70 }}
						/>
					) : (
						<></>
					)}
				</View>
			</ScrollView>
			<WalletBottomSheet ref={filterRef} snapPoints={['55%']}>
				<Filters onClose={onCloseFilters} />
			</WalletBottomSheet>
		</>
	)
}
