import React, { useRef } from 'react'
import { ScrollView } from 'react-native'
import { WalletTitle, WalletButton } from '../Components/UI'
import { SelectCoinSwap, SwapDetails, WalletBottomSheet } from '../Components'
import { ChooseCoins } from './../Components/modal'
import { useSelector, useDispatch } from 'react-redux'
import {
	setChooseCoinSwapSecond,
	setChooseCoin,
} from './../store/actions/walletActions'
import useIsReady from '../../hooks/useIsReady'
import { BusyIndicator } from '../Components/Loader'
import useWalletService from '../../services/WalletService'

export const SwapScreen = ({ navigation }) => {
	const [tokenIsLoading, setTokenIsLoading] = React.useState(true)
	const { getToken } = useWalletService()
	const isReady = useIsReady()

	const dispatch = useDispatch()
	const { currentNetwork } = useSelector((state) => state.storage)
	const firstSwapRef = useRef(null)
	const secondSwapRef = useRef(null)
	const { chooseCoin, chooseCoinSwapSecond, allCoins } = useSelector(
		(state) => state.wallet
	)

	if (!isReady) {
		return <BusyIndicator></BusyIndicator>
	}
	const onOpenFirstSwap = () => {
		firstSwapRef.current?.expand()
	}
	const onCloseFirstSwap = async (coin) => {
		firstSwapRef.current?.close()
		if (
			coin.id.toLowerCase() !== 'ethereum' &&
			coin.id.toLowerCase() !== 'eth' &&
			coin.id.length < 15
		) {
			await getToken(setTokenIsLoading, coin.id).then((data) => {
				const coinInfo = {
					...coin,
					contract_address: data.platforms[
						currentNetwork.title.toLowerCase() == 'polygon'
							? 'polygon-pos'
							: 'ethereum'
					]
						? data.platforms[
								currentNetwork.title.toLowerCase() == 'polygon'
									? 'polygon-pos'
									: 'ethereum'
						  ]
						: '',
				}
				dispatch(setChooseCoin(coinInfo))
			})
		} else {
			dispatch(setChooseCoin(coin))
		}
	}
	const onOpenSecondSwap = () => {
		secondSwapRef.current?.expand()
	}
	const onCloseSecondSwap = async (coin) => {
		secondSwapRef.current?.close()
		if (
			coin.id.toLowerCase() !== 'ethereum' &&
			coin.id.toLowerCase() !== 'eth' &&
			coin.id.length < 15
		) {
			await getToken(setTokenIsLoading, coin.id).then((data) => {
				const coinInfo = {
					...coin,
					contract_address: data.platforms[
						currentNetwork.title.toLowerCase() == 'polygon'
							? 'polygon-pos'
							: 'ethereum'
					]
						? data.platforms[
								currentNetwork.title.toLowerCase() == 'polygon'
									? 'polygon-pos'
									: 'ethereum'
						  ]
						: '',
				}
				dispatch(setChooseCoinSwapSecond(coinInfo))
			})
		} else {
			dispatch(setChooseCoinSwapSecond(coin))
		}
	}

	const onSwapCoins = () => {
		const frst = chooseCoin
		const scnd = chooseCoinSwapSecond
		dispatch(setChooseCoin(scnd))
		dispatch(setChooseCoinSwapSecond(frst))
	}
	return (
		<ScrollView
			style={{
				flex: 1,
				paddingTop: 29,
				paddingHorizontal: 16,
				paddingBottom: 30,
			}}>
			<WalletTitle style={{ marginBottom: 25 }}>Exchange</WalletTitle>
			{chooseCoin != null && chooseCoinSwapSecond != null ? (
				<SelectCoinSwap
					onSwapCoins={onSwapCoins}
					chooseCoinSwapFirst={chooseCoin}
					chooseCoinSwapSecond={chooseCoinSwapSecond}
					onOpenFirstSwap={onOpenFirstSwap}
					onOpenSecondSwap={onOpenSecondSwap}
				/>
			) : (
				<></>
			)}
			{chooseCoin != null && chooseCoinSwapSecond != null ? (
				<SwapDetails
					chooseCoinSwapFirst={chooseCoin}
					chooseCoinSwapSecond={chooseCoinSwapSecond}
				/>
			) : (
				<></>
			)}
			<WalletButton
				style={{ marginBottom: 160 }}
				onPress={() => navigation.navigate('ConfirmSwap')}>
				Swap
			</WalletButton>
			{chooseCoin != null ? (
				<WalletBottomSheet ref={firstSwapRef} snapPoints={['65%']}>
					<ChooseCoins
						onCoinPress={onCloseFirstSwap}
						chooseCoin={chooseCoin}
						allCoins={allCoins}
					/>
				</WalletBottomSheet>
			) : (
				<></>
			)}
			{chooseCoin != null ? (
				<WalletBottomSheet ref={secondSwapRef} snapPoints={['65%']}>
					<ChooseCoins
						onCoinPress={onCloseSecondSwap}
						chooseCoin={chooseCoinSwapSecond}
						allCoins={allCoins}
					/>
				</WalletBottomSheet>
			) : (
				<></>
			)}
		</ScrollView>
	)
}
