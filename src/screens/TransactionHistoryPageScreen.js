import React, { useEffect, useState, useRef } from 'react'
import { View, ScrollView } from 'react-native'
import { WalletTitle, WalletText } from '../Components/UI'
import { THEME } from '../Theme'
import { TransactionsList } from '../Components'
import { useSelector } from 'react-redux'
import { SvgIcon } from '../Components/svg/svg'
import useIsReady from '../../hooks/useIsReady'
import { BusyIndicator } from '../Components/Loader'
import { WalletBottomSheet } from '../Components'
import { ChangeCurrentNetwork, SelectAccount } from '../Components/modal'
import { HeaderTitle, AccountBtn } from '../navigation'
export const TransactionHistoryPageScreen = ({ navigation }) => {
	const { transactions } = useSelector((state) => state.wallet)
	const [transactionList, setTransactionList] = useState([])
	const isReady = useIsReady()
	const selectAccountRef = useRef(null)
	const chooseNetwork = useRef(null)

	useEffect(() => {
		if (transactions.length) {
			let filtered = transactions.filter((item) => item.status !== 'failed')
			setTransactionList(filtered)
		}
	}, [transactions])
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
	if (!isReady) {
		return <BusyIndicator></BusyIndicator>
	}
	return (
		<ScrollView
			style={{
				paddingTop: 29,
			}}>
			<View
				style={{
					marginHorizontal: 16,
					paddingHorizontal: 16,
					paddingBottom: 16,
					borderBottomColor: THEME.GREY_LIGHT,
					borderBottomWidth: 1,
				}}>
				<WalletTitle style={{ fontSize: 16, lineHeigh: 24, textAlign: 'left' }}>
					Transaction history
				</WalletTitle>
			</View>
			<View style={{ paddingHorizontal: 16, paddingBottom: 70 }}>
				{transactionList.length < 1 ? (
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'center',
							alignItems: 'center',
							marginTop: 24,
							height: 450,
						}}>
						<SvgIcon type='bar' />
						<WalletText style={{ color: THEME.DISABLED_TEXT, marginLeft: 7 }}>
							No transactions history yet
						</WalletText>
					</View>
				) : (
					<TransactionsList data={transactions} />
				)}
			</View>
			<WalletBottomSheet ref={chooseNetwork} snapPoints={['55%']}>
				<ChangeCurrentNetwork
					onPress={closeModalSelectAccount}
					navigation={navigation}
				/>
			</WalletBottomSheet>
			<WalletBottomSheet ref={selectAccountRef} snapPoints={['55%']}>
				<SelectAccount onCloseModal={onCloseModal} navigation={navigation} />
			</WalletBottomSheet>
		</ScrollView>
	)
}
