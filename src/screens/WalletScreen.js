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

export const WalletScreen = ({ navigation }) => {
	const [portfolioCoinsInit, setPortfolioCoinsInit] = useState([])
	const { portfolioCoins, allCoins, coinsAccountZero } = useSelector(
		(state) => state.wallet
	)
	useEffect(() => {
		if (portfolioCoins.length > 0) {
			setPortfolioCoinsInit(portfolioCoins)
		} else {
			setPortfolioCoinsInit(
				allCoins.filter((c) => coinsAccountZero.indexOf(c.symbol) != -1)
			)
		}
	}, [portfolioCoins])

	const dispatch = useDispatch()
	const filterRef = useRef(null)

	const openModalFilter = () => {
		filterRef.current.expand()
	}

	useEffect(() => {
		dispatch(setNavigation(navigation))
	}, [navigation])

	return (
		<>
			<ScrollView style={{ flex: 1, paddingTop: 20 }}>
				<Slider />
				<View style={{ paddingHorizontal: 16 }}>
					<WalletNav navigation={navigation} />
					<PortfolioSort style={{ marginTop: 24 }} onPress={openModalFilter} />
					<PortfolioList
						navigation={navigation}
						coins={portfolioCoinsInit}
						style={{ marginTop: 32, marginBottom: 70 }}
					/>
				</View>
			</ScrollView>
			<WalletBottomSheet ref={filterRef} snapPoints={['55%']}>
				<Filters />
			</WalletBottomSheet>
		</>
	)
}
