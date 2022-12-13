import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { THEME } from './../Theme'
import { View, Button } from 'react-native'
import {
	LoginScreen,
	CreateScreen,
	SubscribeScreen,
	PhraseScreen,
	CreatePasswordScreen,
	AllSetScreen,
	NftScreen,
	ContactsScreen,
	ActivityScreen,
	AccountScreen,
	SettingsScreen,
	ExportPhraseScreen,
	ExportPrivateKeyScreen,
	SentScreen,
	ConfirmTransactionScreen,
	SwapScreen,
	ReceiveScreen,
	WalletScreen,
	PortfolioOpenScreen,
} from '../screens'
import { WalletBottomNav } from './WalletBottomNav'

const Stack = createStackNavigator()

const screens = [
	{
		name: 'Wallet',
		options: {
			headerShown: true,
			title: 'Ethereum',
		},
		component: WalletScreen,
	},
	{
		name: 'PortfolioOpen',
		options: {
			headerShown: true,
			title: 'Ethereum',
		},
		component: PortfolioOpenScreen,
	},
	{
		name: 'Receive',
		options: {
			headerShown: true,
			title: 'You Wallet Address',
		},
		component: ReceiveScreen,
	},
	{
		name: 'Swap',
		options: {
			headerShown: true,
			title: 'ETHEREUM',
		},
		component: SwapScreen,
	},
	{
		name: 'ConfirmTransaction',
		options: {
			headerShown: true,
			title: 'Confirm Transaction',
		},
		component: ConfirmTransactionScreen,
	},
	{
		name: 'Sent',
		options: {
			headerShown: true,
			title: 'Ethereum',
		},
		component: SentScreen,
	},
	{
		name: 'ExportPhrase',
		options: {
			headerShown: true,
			title: 'Export Account - Secret Phrase',
		},
		component: ExportPhraseScreen,
	},
	{
		name: 'Login',
		component: LoginScreen,
		options: {
			headerShown: false,
		},
	},
	{
		name: 'RecoverPhrase',
		component: PhraseScreen,
		options: {
			headerShown: true,
			title: 'Before We Begin',
		},
	},
	{
		name: 'Subscribe',
		component: SubscribeScreen,
		options: {
			headerShown: true,
			title: 'Before We Begin',
		},
	},
	{
		name: 'CreatePassword',
		component: CreatePasswordScreen,
		options: {
			headerShown: true,
			title: 'By Bit Wallet',
		},
	},
	{
		name: 'AllSet',
		component: AllSetScreen,
		options: {
			headerShown: true,
			title: 'By Bit Wallet',
		},
	},
	{
		name: 'Nft',
		component: NftScreen,
		options: {
			headerShown: true,
			title: 'By Bit Wallet',
		},
	},
	{
		name: 'Contacts',
		component: ContactsScreen,
		options: {
			headerShown: true,
			title: 'Contacts',
		},
	},
	{
		name: 'Activity',
		component: ActivityScreen,
		options: {
			headerShown: true,
			title: 'Ethereum',
		},
	},
	{
		name: 'Account',
		component: AccountScreen,
		options: {
			headerShown: true,
			title: 'Ethereum',
		},
	},
	{
		name: 'Settings',
		component: SettingsScreen,
		options: {
			headerShown: true,
			title: 'Settings',
		},
	},
	{
		name: 'ExportPrivateKey',
		component: ExportPrivateKeyScreen,
		options: {
			headerShown: true,
			title: 'Export Account - Private Key',
		},
	},
]

const Tab = createBottomTabNavigator()

export function MyTabs() {
	return (
		// <Tab.Navigator>
		// 	<Tab.Screen name='Wallet' component={WalletScreen} />
		// 	<Tab.Screen name='Settings' component={SettingsScreen} />
		// </Tab.Navigator>
		<Tab.Navigator
			initialRouteName='Wallet'
			screenOptions={{
				headerStyle: {
					backgroundColor: THEME.PRIMARY,
				},
				headerTitleAlign: 'center',
				headerTitleStyle: {
					fontFamily: 'gt-medium',
					color: THEME.GOLD_DARK,
					textTransform: 'uppercase',
					fontSize: 14,
				},
				cardStyle: {
					backgroundColor: THEME.PRIMARY,
				},
			}}
			tabBar={(props) => <WalletBottomNav {...props} />}>
			{screens.map((s) => (
				<Stack.Screen
					key={s.name}
					name={s.name}
					options={s.options}
					component={s.component}
				/>
			))}
		</Tab.Navigator>
	)
}

export function MyStack() {
	return (
		<Stack.Navigator
			animationEnabled={false}
			style={{ flex: 1 }}
			initialRouteName='Wallet'
			backgroundStyle={{
				backgroundColor: THEME.PRIMARY,
			}}
			screenOptions={{
				headerStyle: {
					backgroundColor: THEME.PRIMARY,
				},
				headerTitleAlign: 'center',
				headerTitleStyle: {
					fontFamily: 'gt-medium',
					color: THEME.GOLD_DARK,
					textTransform: 'uppercase',
					fontSize: 14,
				},
				cardStyle: {
					backgroundColor: THEME.PRIMARY,
				},
			}}>
			{screens.map((s) => (
				<Stack.Screen
					key={s.name}
					name={s.name}
					options={s.options}
					component={s.component}
				/>
			))}
		</Stack.Navigator>
	)
}
