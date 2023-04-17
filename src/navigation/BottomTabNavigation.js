import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
	WalletComponent,
	TransactionHistoryPageComponent,
	AccountComponent,
	BuyComponent,
	SwapComponent,
} from './pages'
const Tab = createBottomTabNavigator()
import { THEME } from '../Theme'
import { Text } from 'react-native'
import { DoubleButtons, TitleLeft } from './'
import { MyTabBar } from './BottomTabBar'
import { HeaderSettings } from './HeaderButtons/HeaderSettings'

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
					headerTransparent: false,
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
								color: THEME.DISABLED_TEXT,
								fontSize: 16,
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
						headerRight: () => <HeaderSettings navigation={navigation} />,
						headerLeft: () => (
							<DoubleButtons active={true} navigation={navigation} />
						),
					})}
				/>
				<Tab.Screen
					name='Buy'
					component={BuyComponent}
					options={{
						title: 'Add Cash',
						headerLeft: () => <></>,
					}}
				/>
				<Tab.Screen
					name='Swap'
					component={SwapComponent}
					options={{
						headerTitle: () => <></>,
						headerLeft: () => <TitleLeft>Settings account</TitleLeft>,
					}}
				/>
				<Tab.Screen
					name='Account'
					component={AccountComponent}
					options={{
						headerTitle: () => <></>,
						headerLeft: () => <TitleLeft>Settings account</TitleLeft>,
					}}
				/>
			</Tab.Navigator>
		</>
	)
}
