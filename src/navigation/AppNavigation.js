import React, { useRef } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { THEME } from './../Theme'
import { useSelector } from 'react-redux'
import { BackBtn, TextBtn } from './'
import { Text } from 'react-native'
import BottomTabNavigator from './BottomTabNavigation'
import { HeaderTitle } from '../navigation/HeaderButtons/HeaderTitleBottomNav'
import { AccountBtn } from '../navigation/HeaderButtons/AccountBtnBottomNav'
import {
	SentComponent,
	LoginComponent,
	CreatePhraseComponent,
	ScannerComponent,
	RiskAlertLogoutComponent,
	RiskAlertComponent,
	UnlockComponent,
	ExportPrivateKeyCopyComponent,
	ExportPhraseCopyComponent,
	EditProfileComponent,
	TransactionHistoryComponent,
	ConfirmPasswordComponent,
	PortfolioOpenComponent,
	ReceiveComponent,
	ConfirmTransactionComponent,
	ExportPrivateKeyComponent,
	ExportPhraseComponent,
	SettingsComponent,
	ContactsComponent,
	ActivityComponent,
	SubscribeCreateComponent,
	SubscribeComponent,
	PhraseComponent,
	CreatePasswordComponent,
	AllSetComponent,
	ConfirmSwapComponent,
} from './pages'
const Stack = createNativeStackNavigator()
const screens = [
	{
		name: 'CreatePhrase',
		options: ({ navigation }) => ({
			headerShown: true,
			title: 'Polygon',
			headerLeft: () => <BackBtn navigation={navigation} />,
		}),
		component: CreatePhraseComponent,
	},
	{
		name: 'ConfirmSwap',
		options: ({ navigation }) => ({
			headerShown: true,
			title: 'Confirm Transaction',
			headerLeft: () => <BackBtn navigation={navigation} />,
		}),
		component: ConfirmSwapComponent,
	},
	{
		name: 'Unlock',
		options: {
			headerShown: true,
			title: '',
			headerLeft: () => <></>,
		},
		component: UnlockComponent,
	},
	{
		name: 'RiskAlert',
		options: ({ navigation }) => ({
			headerShown: true,
			title: '',
			headerLeft: () => <BackBtn navigation={navigation} />,
		}),
		component: RiskAlertComponent,
	},
	{
		name: 'RiskAlertLogout',
		options: {
			headerShown: true,
			title: '',
			headerLeft: () => <></>,
		},
		component: RiskAlertLogoutComponent,
	},
	{
		name: 'ExportPhraseCopy',
		options: ({ navigation }) => ({
			headerShown: true,
			title: 'Seed Phrase',
			headerLeft: () => <BackBtn navigation={navigation} />,
		}),
		component: ExportPhraseCopyComponent,
	},
	{
		name: 'ExportPrivateKeyCopy',
		options: ({ navigation }) => ({
			headerShown: true,
			title: 'Private Key',
			headerLeft: () => <BackBtn navigation={navigation} />,
		}),
		component: ExportPrivateKeyCopyComponent,
	},

	{
		name: 'EditProfile',
		options: ({ navigation }) => ({
			headerShown: true,
			title: 'Settings',
			headerLeft: () => (
				<TextBtn onPress={() => navigation.goBack()}>Cancel</TextBtn>
			),
			headerRight: () => (
				<TextBtn navigation={navigation} type='ready'>
					Ready
				</TextBtn>
			),
		}),
		component: EditProfileComponent,
	},
	{
		name: 'ExportPhrase',
		options: ({ navigation }) => ({
			headerShown: true,
			title: 'Export Account - Secret Phrase',
			headerLeft: () => <BackBtn navigation={navigation} />,
		}),
		component: ExportPhraseComponent,
	},
	{
		name: 'Login',
		component: LoginComponent,
		options: {
			headerShown: false,
			contentStyle: {
				borderTopWidth: 0,
			},
		},
	},
	{
		name: 'RecoverPhrase',
		component: PhraseComponent,
		options: ({ navigation }) => ({
			headerShown: true,
			title: 'Before We Begin',
			headerLeft: () => <BackBtn navigation={navigation} />,
		}),
	},
	{
		name: 'Subscribe',
		component: SubscribeComponent,
		options: ({ navigation }) => ({
			headerShown: true,
			title: 'Before We Begin',
			headerLeft: () => <BackBtn navigation={navigation} />,
		}),
	},
	{
		name: 'CreatePassword',
		component: CreatePasswordComponent,
		options: {
			headerShown: true,
			title: 'Create pin code',
			headerLeft: () => <></>,
		},
	},
	{
		name: 'AllSet',
		component: AllSetComponent,
		options: {
			headerShown: true,
			title: 'Wallet',
		},
	},
	{
		name: 'Activity',
		component: ActivityComponent,
		options: {
			headerShown: true,
			title: 'Ethereum',
		},
	},
	{
		name: 'ExportPrivateKey',
		component: ExportPrivateKeyComponent,
		options: ({ navigation }) => ({
			headerShown: true,
			title: 'Export Account - Private Key',
			headerLeft: () => <BackBtn navigation={navigation} />,
		}),
	},
	{
		name: 'SubscribeCreate',
		component: SubscribeCreateComponent,
		options: ({ navigation }) => ({
			headerShown: true,
			title: 'Before We Begin',
			headerLeft: () => <BackBtn navigation={navigation} />,
		}),
	},
	{
		name: 'ConfirmPassword',
		component: ConfirmPasswordComponent,
		options: ({ navigation }) => ({
			headerLeft: () => <BackBtn navigation={navigation} />,
			headerShown: true,
			title: 'enter pin code',
		}),
	},
	{
		name: 'Scanner',
		component: ScannerComponent,
		options: {
			headerShown: true,
			title: 'Scan Address',
		},
	},
]

function toUpperWords(title) {
	let words = title.split(' ')
	for (let i = 0; i < words.length; i++) {
		words[i] =
			words[i][0].toUpperCase() + words[i].substr(1).toLowerCase() + ' '
	}
	return words
}

export function MyStack() {
	const { lockWallet } = useSelector((state) => state.wallet)
	const { dataUser } = useSelector((state) => state.storage)
	return (
		<>
			<Stack.Navigator
				style={{ flex: 1 }}
				initialRouteName={
					dataUser.length ? (lockWallet ? 'Unlock' : 'Home') : 'Login'
				}
				screenOptions={{
					headerShadowVisible: false,
					headerBackVisible: false,
					contentStyle: {
						borderTopColor: '#D1C9FA',
						borderTopWidth: 0.5,
					},
					headerTitleAlign: 'center',
					headerStyle: {
						backgroundColor: THEME.GREY_LIGHT,
					},
					animation: 'none',
					headerTitle: (title) => (
						<Text
							style={{
								fontFamily: 'ub-regular',
								color: THEME.VIOLET,
								fontSize: 18,
							}}>
							{title.children.length > 1 ? toUpperWords(title.children) : ' '}
						</Text>
					),
				}}>
				{screens.map((s) => (
					<Stack.Screen
						key={s.name}
						name={s.name}
						options={s.options}
						component={s.component}
					/>
				))}
				<Stack.Screen
					name='Home'
					component={BottomTabNavigator}
					options={{
						headerShown: false,
						contentStyle: {
							borderTopColor: 'transparent',
							borderTopWidth: 0,
						},
					}}
				/>
				<Stack.Screen
					name='TransactionHistory'
					component={TransactionHistoryComponent}
					options={({ navigation }) => ({
						headerShown: true,
						title: '',
						headerLeft: () => <BackBtn navigation={navigation} />,
						// headerTitle: () => (
						// 	<HeaderTitle openModalSelectAccount={openModalSelectAccount} />
						// ),
						// headerRight: () => <AccountBtn openModalSelect={openModalSelect} />,
					})}
				/>
				<Stack.Screen
					name='PortfolioOpen'
					component={PortfolioOpenComponent}
					options={({ navigation }) => ({
						headerShown: true,
						title: '',
						headerLeft: () => <BackBtn navigation={navigation} />,
						// headerTitle: () => (
						// 	<HeaderTitle openModalSelectAccount={openModalSelectAccount} />
						// ),
						// headerRight: () => <AccountBtn openModalSelect={openModalSelect} />,
					})}
				/>
				<Stack.Screen
					name='Receive'
					component={ReceiveComponent}
					options={({ navigation }) => ({
						headerShown: true,
						title: 'You Wallet Address',
						headerLeft: () => <BackBtn navigation={navigation} />,
						// headerRight: () => <AccountBtn openModalSelect={openModalSelect} />,
					})}
				/>
				<Stack.Screen
					name='ConfirmTransaction'
					component={ConfirmTransactionComponent}
					options={({ navigation }) => ({
						headerShown: true,
						title: 'Confirm Transaction',
						headerLeft: () => <BackBtn navigation={navigation} />,
					})}
				/>
				<Stack.Screen
					name='Sent'
					component={SentComponent}
					options={({ navigation }) => ({
						headerShown: true,
						headerLeft: () => <BackBtn navigation={navigation} />,
						// headerTitle: () => (
						// 	<HeaderTitle openModalSelectAccount={openModalSelectAccount} />
						// ),
						// headerRight: () => <AccountBtn openModalSelect={openModalSelect} />,
					})}
				/>
				<Stack.Screen
					name='Contacts'
					component={ContactsComponent}
					options={({ navigation }) => ({
						headerShown: true,
						title: 'Contacts',
						headerLeft: () => <BackBtn navigation={navigation} />,
						// headerRight: () => <AccountBtn openModalSelect={openModalSelect} />,
					})}
				/>
				<Stack.Screen
					name='Settings'
					component={SettingsComponent}
					options={({ navigation }) => ({
						headerShown: true,
						title: 'Settings',
						headerLeft: () => <BackBtn navigation={navigation} />,
						// headerRight: () => <AccountBtn openModalSelect={openModalSelect} />,
					})}
				/>
			</Stack.Navigator>
		</>
	)
}
