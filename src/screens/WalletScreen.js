import React, { useState, useRef, useEffect } from 'react'
import { View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import {
	WalletNav,
	PortfolioList,
	Slider,
	PortfolioSort,
} from './../Components/'
import { WalletBottomSheet } from '../Components/'
import { Filters, ChooseAssets } from './../Components/modal'
import { useSelector, useDispatch } from 'react-redux'
import { filterData } from '../../services/funcWallet/filterData'
import { LoaderListItem } from '../Components/Loader/LoaderListItem'
import { THEME } from './../Theme'
import { SvgIcon } from './../Components/svg/svg'
import { setChooseAssets } from '../store/actions/storageAction'

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
	const { chooseAssets } = useSelector((state) => state.storage)

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
	const openModalFilter = () => {
		filterRef.current?.expand()
	}
	const onCloseAssets = () => {
		chooseAssetsRef.current?.close()
	}
	const onOpenAssets = () => {
		chooseAssetsRef.current?.expand()
	}

	const onChooseAssets = (coin) => {
		onCloseAssets()
		dispatch(setChooseAssets(coin.symbol.toLowerCase()))
	}

	return (
		<>
			<ScrollView
				style={{
					flex: 1,
					paddingTop: 20,
				}}>
				<Slider portfolioCoinsInit={portfolioCoinsInit} />
				<View style={{ paddingHorizontal: 16, flex: 1, position: 'relative' }}>
					<WalletNav navigation={navigation} />
					<PortfolioSort
						style={{ marginTop: 10, marginBottom: 13 }}
						onPress={openModalFilter}
					/>
					{filterPortfolioCoinsLoader && loaderSkeleton ? (
						<PortfolioList
							navigation={navigation}
							coins={filterPortfolioCoins}
							style={{ marginBottom: 175 }}
						/>
					) : (
						<View style={{ marginBottom: 175 }}>
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
			<TouchableOpacity activeOpacity={0.7} onPress={onOpenAssets}>
				<View style={styles.btnAddedAsset}>
					<SvgIcon type='plus-small' />
				</View>
			</TouchableOpacity>
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
