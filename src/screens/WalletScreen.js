import React, { useState, useRef, useEffect } from 'react'
import {
	View,
	ScrollView,
	StyleSheet,
	TouchableOpacity,
	Pressable,
} from 'react-native'
import {
	WalletNav,
	PortfolioList,
	Slider,
	PortfolioSort,
} from './../Components/'
import { WalletBottomSheet } from '../Components/'
import {
	Filters,
	ChooseAssets,
	ChangeCurrentNetwork,
	SelectAccount,
} from './../Components/modal'
import { useSelector, useDispatch } from 'react-redux'
import { filterData } from '../../services/funcWallet/filterData'
import { LoaderListItem } from '../Components/Loader/LoaderListItem'
import { THEME } from './../Theme'
import { SvgIcon } from './../Components/svg/svg'
import { setChooseAssets } from '../store/actions/storageAction'
import { AccountBtn, HeaderTitle } from '../navigation'

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
	React.useEffect(() => {
		navigation.setOptions({
			headerTitle: () => (
				<HeaderTitle openModalSelectAccount={openModalSelectAccount} />
			),
			headerRight: () => (
				<AccountBtn openModalSelect={openModalSelect} navigation={navigation} />
			),
		})
	}, [navigation])
	const filterRef = useRef(null)
	const chooseAssetsRef = useRef(null)
	const chooseNetwork = useRef(null)
	const selectAccountRef = useRef(null)

	const openModalSelect = () => {
		selectAccountRef.current.expand()
	}

	const onCloseModal = () => {
		selectAccountRef.current.close()
	}
	const openModalSelectAccount = () => {
		chooseNetwork.current?.expand()
	}
	const closeModalSelectAccount = () => {
		chooseNetwork.current?.close()
	}
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
			<WalletBottomSheet ref={chooseNetwork} snapPoints={['55%']}>
				<ChangeCurrentNetwork
					onPress={closeModalSelectAccount}
					navigation={navigation}
				/>
			</WalletBottomSheet>
			<WalletBottomSheet ref={selectAccountRef} snapPoints={['55%']}>
				<SelectAccount onCloseModal={onCloseModal} navigation={navigation} />
			</WalletBottomSheet>
			<TouchableOpacity
				style={styles.btnAddedAsset}
				activeOpacity={0.7}
				onPress={onOpenAssets}>
				<SvgIcon type='plus-small' />
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
