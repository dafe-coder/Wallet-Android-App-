import React, { useRef, useEffect } from 'react'
import { View, ScrollView } from 'react-native'
import {
	WalletNav,
	PortfolioList,
	Slider,
	PortfolioSort,
} from './../Components/'
import { WalletBottomSheet } from '../Components/'
import { Filters } from './../Components/modal'
import { WalletBottomNav } from '../navigation/WalletBottomNav'
import { setNavigation } from '../store/actions/wallet'
import { useDispatch } from 'react-redux'

export const WalletScreen = ({ navigation }) => {
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
					<PortfolioList style={{ marginTop: 32, marginBottom: 50 }} />
				</View>
			</ScrollView>
			{/* <WalletBottomNav navigation={navigation} /> */}
			<WalletBottomSheet ref={filterRef} snapPoints={['55%']}>
				<Filters />
			</WalletBottomSheet>
		</>
	)
}
