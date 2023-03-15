import React from 'react'
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
import { MyTabBar } from './BottomTabBar'

export default function BottomTabNavigator() {
	return (
		<>
			<Tab.Navigator
				style={{ flex: 1 }}
				screenOptions={{
					tabBarHideOnKeyboard: true,
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
								fontFamily: 'mt-reg',
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
					})}
				/>
				<Tab.Screen
					name='TransactionPage'
					component={TransactionHistoryPageComponent}
					options={{
						headerLeft: () => <></>,
					}}
				/>
				<Tab.Screen
					name='Swap'
					component={SwapComponent}
					options={{
						headerLeft: () => <></>,
					}}
				/>
				<Tab.Screen
					name='Nft'
					component={NftComponent}
					options={{
						headerLeft: () => <></>,
					}}
				/>
				<Tab.Screen
					name='Account'
					component={AccountComponent}
					options={{
						headerLeft: () => <></>,
					}}
				/>
			</Tab.Navigator>
		</>
	)
}
