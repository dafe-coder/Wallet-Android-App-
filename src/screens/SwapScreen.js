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

export const SwapScreen = ({ navigation }) => {
	const isReady = useIsReady()

	const dispatch = useDispatch()
	const { allCoins } = useSelector((state) => state.wallet)
	const firstSwapRef = useRef(null)
	const secondSwapRef = useRef(null)
	const { chooseCoin, chooseCoinSwapSecond } = useSelector(
		(state) => state.wallet
	)

	if (!isReady) {
		return <BusyIndicator></BusyIndicator>
	}
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
				borderTopColor: '#2f2d2b',
				borderTopWidth: 0.6,
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
				style={{ marginBottom: 80 }}
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
