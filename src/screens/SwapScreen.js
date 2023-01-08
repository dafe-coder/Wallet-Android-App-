import React, { useState, useEffect, useRef } from 'react'
import { ScrollView } from 'react-native'
import { WalletTitle, WalletButton } from '../Components/UI'
import { SelectCoinSwap, SwapDetails, WalletBottomSheet } from '../Components'
import { ChooseCoins } from './../Components/modal'
import { useSelector, useDispatch } from 'react-redux'
import {
	setChooseCoinSwapSecond,
	setChooseCoin,
} from './../store/actions/walletActions'

export const SwapScreen = ({ navigation }) => {
	const dispatch = useDispatch()
	const { allCoins } = useSelector((state) => state.wallet)
	const firstSwapRef = useRef(null)
	const secondSwapRef = useRef(null)
	const [swapCoinFirst, setSwapTokenFirst] = useState(null)
	const { chooseCoin, chooseCoinSwapSecond } = useSelector(
		(state) => state.wallet
	)

	useEffect(() => {
		dispatch(
			setChooseCoinSwapSecond(
				allCoins.filter((d) => d.symbol.includes('btc'))[0]
			)
		)
	}, [allCoins])

	const onOpenFirstSwap = () => {
		firstSwapRef.current?.expand()
	}
	const onCloseFirstSwap = (coin) => {
		dispatch(setChooseCoin(coin))
		firstSwapRef.current?.close()
	}
	const onOpenSecondSwap = () => {
		secondSwapRef.current?.expand()
	}
	const onCloseSecondSwap = (coin) => {
		dispatch(setChooseCoinSwapSecond(coin))
		secondSwapRef.current?.close()
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
			<WalletButton style={{ marginBottom: 80 }}>Swap</WalletButton>
			<WalletBottomSheet ref={firstSwapRef} snapPoints={['65%']}>
				<ChooseCoins
					onCoinPress={onCloseFirstSwap}
					chooseCoin={chooseCoin}
					allCoins={allCoins}
				/>
			</WalletBottomSheet>
			<WalletBottomSheet ref={secondSwapRef} snapPoints={['65%']}>
				<ChooseCoins
					onCoinPress={onCloseSecondSwap}
					chooseCoin={chooseCoinSwapSecond}
					allCoins={allCoins}
				/>
			</WalletBottomSheet>
		</ScrollView>
	)
}
