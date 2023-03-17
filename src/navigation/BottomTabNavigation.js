import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
	WalletComponent,
	TransactionHistoryPageComponent,
	AccountComponent,
} from './pages'
const Tab = createBottomTabNavigator()
import { THEME } from '../Theme'
import { Text } from 'react-native'
import { DoubleButtons } from './'
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
						backgroundColor: THEME.PRIMARY,
					},
					headerTransparent: true,
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
						headerTitle: () => <></>,
						headerLeft: () => <DoubleButtons navigation={navigation} />,
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
