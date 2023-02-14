import React, { useRef } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
	WalletComponent,
	TransactionHistoryPageComponent,
	SwapComponent,
	AccountComponent,
	NftComponent,
} from './pages'
const Tab = createBottomTabNavigator()
import { THEME } from '../Theme'
import { Text } from 'react-native'
import { HistoryBtn } from './HeaderButtons/HistoryBtn'
import { AccountBtn } from './HeaderButtons/AccountBtnBottomNav'
import { HeaderTitle } from './HeaderButtons/HeaderTitleBottomNav'
import { MyTabBar } from './BottomTabBar'
import { WalletBottomSheet } from '../Components'
import { ChangeCurrentNetwork, SelectAccount } from '../Components/modal'
import { useNavigation } from '@react-navigation/native'
import { View } from 'react-native'
export default function BottomTabNavigator() {
	const navigation = useNavigation()
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
	return (
		<>
			<Tab.Navigator
				style={{ flex: 1 }}
				screenOptions={{
					headerStyle: {
						borderBottomColor: 'transparent',
						shadowColor: 'transparent',
						elevation: 0,
						backgroundColor: THEME.GREY_LIGHT,
					},
					tabBarStyle: {
						display: 'none',
						elevation: 0,
						borderWidth: 0,
						position: 'absolute',
						left: 0,
						right: 0,
						bottom: 0,
						elevation: 0,
						backgroundColor: 'blue',
					},
					headerRightContainerStyle: {
						paddingRight: 16,
					},
					headerLeftContainerStyle: {
						paddingLeft: 16,
					},
					headerTitleAlign: 'center',
					headerTitle: (title) => (
						<Text
							style={{
								fontFamily: 'ub-regular',
								color: THEME.VIOLET,
								fontSize: 18,
							}}>
							{title.children}
						</Text>
					),
					headerShadowVisible: false,
				}}
				tabBar={(props) => <MyTabBar {...props} />}>
				<Tab.Screen
					name='Wallet'
					component={WalletComponent}
					options={({ navigation }) => ({
						headerLeft: () => <HistoryBtn navigation={navigation} />,
						headerTitle: () => (
							<HeaderTitle openModalSelectAccount={openModalSelectAccount} />
						),
						headerRight: () => (
							<AccountBtn
								openModalSelect={openModalSelect}
								navigation={navigation}
							/>
						),
					})}
				/>
				<Tab.Screen
					name='TransactionPage'
					component={TransactionHistoryPageComponent}
					options={({ navigation }) => ({
						headerLeft: () => <></>,
						headerTitle: () => (
							<HeaderTitle openModalSelectAccount={openModalSelectAccount} />
						),
						headerRight: () => (
							<AccountBtn
								openModalSelect={openModalSelect}
								navigation={navigation}
							/>
						),
					})}
				/>
				<Tab.Screen
					name='Swap'
					component={SwapComponent}
					options={({ navigation }) => ({
						headerLeft: () => <></>,
						headerRight: () => (
							<AccountBtn
								openModalSelect={openModalSelect}
								navigation={navigation}
							/>
						),
					})}
				/>
				<Tab.Screen
					name='Nft'
					component={NftComponent}
					options={({ navigation }) => ({
						headerLeft: () => <></>,
						headerTitle: () => (
							<HeaderTitle openModalSelectAccount={openModalSelectAccount} />
						),
						headerRight: () => (
							<AccountBtn
								openModalSelect={openModalSelect}
								navigation={navigation}
							/>
						),
					})}
				/>
				<Tab.Screen
					name='Account'
					component={AccountComponent}
					options={({ navigation }) => ({
						headerLeft: () => <></>,
						headerRight: () => (
							<AccountBtn
								openModalSelect={openModalSelect}
								navigation={navigation}
							/>
						),
					})}
				/>
			</Tab.Navigator>
			<WalletBottomSheet ref={chooseNetwork} snapPoints={['55%']}>
				<ChangeCurrentNetwork onPress={closeModalSelectAccount} />
			</WalletBottomSheet>
			<WalletBottomSheet ref={selectAccountRef} snapPoints={['55%']}>
				<SelectAccount onCloseModal={onCloseModal} navigation={navigation} />
			</WalletBottomSheet>
		</>
	)
}
