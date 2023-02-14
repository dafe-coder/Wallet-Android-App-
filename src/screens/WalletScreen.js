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
import { useSelector } from 'react-redux'
import { filterData } from '../../services/funcWallet/filterData'
import { LoaderListItem } from '../Components/Loader/LoaderListItem'

export const WalletScreen = ({ navigation }) => {
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
	const onCloseFilters = () => {
		filterRef.current?.close()
	}
	const openModalFilter = () => {
		filterRef.current?.expand()
	}

	return (
		<>
			<ScrollView
				style={{
					flex: 1,
					paddingTop: 20,
				}}>
				<Slider portfolioCoinsInit={portfolioCoinsInit} />
				<View style={{ paddingHorizontal: 16, flex: 1 }}>
					<WalletNav navigation={navigation} />
					<PortfolioSort
						style={{ marginTop: 10, marginBottom: 13 }}
						onPress={openModalFilter}
					/>
					{filterPortfolioCoinsLoader && loaderSkeleton ? (
						<PortfolioList
							navigation={navigation}
							coins={filterPortfolioCoins}
							style={{ marginBottom: 145 }}
						/>
					) : (
						<View style={{ marginBottom: 145 }}>
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
		</>
	)
}
