import React, { useRef } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { THEME } from './../Theme'
import { useSelector } from 'react-redux'
import { BackBtn, TextBtn } from './'
import { Text } from 'react-native'
import BottomTabNavigator from './BottomTabNavigation'
import { DoubleButtons, TitleLeft, HeaderSettings } from './'

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
	TutorialFirstComponent,
	TutorialSecondComponent,
	TutorialThirdComponent,
	TutorialEndComponent,
	ManageCryptosComponent,
	ChooseCryptosComponent,
	WalletSuccessComponent,
	SentAddressComponent,
	BackupPrimaryComponent,
	BackupSubscribeComponent,
	BackupWarningComponent,
	BackupPhraseComponent,
	BackupWordsComponent,
	SecurityComponent,
	AboutComponent,
	DAppsComponent,
	NotificationComponent,
	ImportStepsComponent,
	ImportComponent,
	SentSuccessComponent,
	CreateWalletComponent,
	SwapSuccessComponent,
} from './pages'
const Stack = createNativeStackNavigator()
const screens = [
	{
		name: 'CreateWallet',
		options: () => ({
			headerShown: true,
			title: 'Create Wallet',
		}),
		component: CreateWalletComponent,
	},
	{
		name: 'SentSuccess',
		options: () => ({
			headerShown: false,
			title: '',
		}),
		component: SentSuccessComponent,
	},
	{
		name: 'SwapSuccess',
		options: () => ({
			headerShown: false,
			title: '',
		}),
		component: SwapSuccessComponent,
	},
	{
		name: 'ImportWallet',
		options: ({ navigation }) => ({
			headerShown: true,
			title: '',
			headerLeft: () => (
				<TitleLeft>
					Import an existing wallet using {'\n'}a recovery phrase
				</TitleLeft>
			),
			headerRight: () => <BackBtn navigation={navigation} />,
		}),
		component: ImportComponent,
	},
	{
		name: 'ImportSteps',
		options: ({ navigation }) => ({
			headerShown: true,
			title: '',
			headerRight: () => <BackBtn navigation={navigation} />,
		}),
		component: ImportStepsComponent,
	},
	{
		name: 'Notification',
		options: ({ navigation }) => ({
			headerShown: true,
			title: '',
			headerLeft: () => <TitleLeft>Notifications</TitleLeft>,
			headerRight: () => <BackBtn navigation={navigation} />,
		}),
		component: NotificationComponent,
	},
	{
		name: 'DApps',
		options: ({ navigation }) => ({
			headerShown: true,
			title: 'dApps',
			headerRight: () => <BackBtn navigation={navigation} />,
		}),
		component: DAppsComponent,
	},
	{
		name: 'About',
		options: () => ({
			headerShown: true,
			title: '',
			headerLeft: () => <TitleLeft>About</TitleLeft>,
		}),
		component: AboutComponent,
	},
	{
		name: 'Security',
		options: ({ navigation }) => ({
			headerRight: () => <BackBtn navigation={navigation} />,
			headerShown: true,
			title: 'Security',
		}),
		component: SecurityComponent,
	},
	{
		name: 'BackupWords',
		options: ({ navigation }) => ({
			headerRight: () => <BackBtn navigation={navigation} />,
			headerShown: true,
			title: 'Finish backup',
		}),
		component: BackupWordsComponent,
	},
	{
		name: 'BackupPhrase',
		options: ({ navigation }) => ({
			headerRight: () => <BackBtn navigation={navigation} />,
			headerShown: true,
			title: 'Save your phrase',
		}),
		component: BackupPhraseComponent,
	},
	{
		name: 'BackupWarning',
		options: ({ navigation }) => ({
			headerRight: () => <BackBtn navigation={navigation} />,
			headerShown: true,
			title: 'Warning',
		}),
		component: BackupWarningComponent,
	},
	{
		name: 'BackupSubscribe',
		options: ({ navigation }) => ({
			headerRight: () => <BackBtn navigation={navigation} />,
			headerShown: true,
			title: 'Manual backup',
		}),
		component: BackupSubscribeComponent,
	},
	{
		name: 'BackupPrimary',
		options: ({ navigation }) => ({
			headerRight: () => <BackBtn navigation={navigation} />,
			headerShown: true,
			title: 'Manual backup',
		}),
		component: BackupPrimaryComponent,
	},
	{
		name: 'SentAddress',
		options: ({ navigation }) => ({
			headerRight: () => <BackBtn navigation={navigation} />,
			headerShown: true,
			title: '',
		}),
		component: SentAddressComponent,
	},
	{
		name: 'ChooseCryptos',
		options: ({ navigation }) => ({
			headerRight: () => <BackBtn navigation={navigation} />,
			headerShown: true,
			title: '',
		}),
		component: ChooseCryptosComponent,
	},
	{
		name: 'WalletSuccess',
		options: {
			headerShown: false,
			title: '',
		},
		component: WalletSuccessComponent,
	},
	{
		name: 'ManageCryptos',
		options: {
			headerShown: true,
			title: 'Manage cryptos',
		},
		component: ManageCryptosComponent,
	},
	{
		name: 'TutorialFirst',
		options: {
			headerShown: false,
			title: '',
		},
		component: TutorialFirstComponent,
	},
	{
		name: 'TutorialSecond',
		options: {
			headerShown: false,
			title: '',
		},
		component: TutorialSecondComponent,
	},
	{
		name: 'TutorialThird',
		options: {
			headerShown: false,
			title: '',
		},
		component: TutorialThirdComponent,
	},
	{
		name: 'TutorialEnd',
		options: {
			headerShown: false,
			title: '',
		},
		component: TutorialEndComponent,
	},
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
			title: 'Your recovery phrase',
			headerRight: () => <BackBtn navigation={navigation} go='home' />,
		}),
		component: ExportPhraseCopyComponent,
	},
	{
		name: 'ExportPrivateKeyCopy',
		options: ({ navigation }) => ({
			headerShown: true,
			title: 'Your private key',
			headerRight: () => <BackBtn navigation={navigation} go='home' />,
		}),
		component: ExportPrivateKeyCopyComponent,
	},

	{
		name: 'EditProfile',
		options: ({ navigation }) => ({
			headerShown: true,
			title: 'Settings',
			headerLeft: () => <TitleLeft>Wallet name</TitleLeft>,
			headerRight: () => <></>,
			headerTitle: () => <></>,
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
			title: 'Add wallet',
			headerLeft: () => <></>,
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
			title: 'Create PIN code',
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
			headerRight: () => <BackBtn navigation={navigation} />,
			headerShown: true,
			title: 'Confirm PIN code',
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
					dataUser.length ? (lockWallet ? 'Unlock' : 'Home') : 'TutorialFirst'
				}
				screenOptions={{
					headerShadowVisible: false,
					headerBackVisible: false,
					headerTitleAlign: 'center',
					headerStyle: {
						backgroundColor: THEME.PRIMARY,
					},
					animation: 'none',
					headerTitle: (title) => (
						<Text
							style={{
								fontFamily: 'mt-reg',
								color: THEME.WHITE,
								fontSize: 24,
							}}>
							{title.children}
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
					options={({ navigation }) => ({
						headerRight: () => <BackBtn navigation={navigation} />,
						headerShown: false,
						contentStyle: {
							borderTopColor: 'transparent',
							borderTopWidth: 0,
						},
					})}
				/>
				<Stack.Screen
					name='TransactionHistory'
					component={TransactionHistoryComponent}
					options={({ navigation }) => ({
						headerShown: true,
						headerTitle: () => <></>,
						headerLeft: () => (
							<DoubleButtons active={false} navigation={navigation} />
						),
						headerRight: () => <BackBtn navigation={navigation} />,
					})}
				/>
				<Stack.Screen
					name='PortfolioOpen'
					component={PortfolioOpenComponent}
					options={({ navigation }) => ({
						headerShown: true,
						title: '',
						headerLeft: () => <BackBtn navigation={navigation} />,
					})}
				/>
				<Stack.Screen
					name='Receive'
					component={ReceiveComponent}
					options={({ navigation }) => ({
						headerShown: true,
						title: 'Receive',
						headerLeft: () => <></>,
						headerRight: () => <BackBtn navigation={navigation} />,
					})}
				/>
				<Stack.Screen
					name='ConfirmTransaction'
					component={ConfirmTransactionComponent}
					options={({ navigation }) => ({
						headerShown: true,
						title: '',
						headerRight: () => <BackBtn navigation={navigation} />,
					})}
				/>
				<Stack.Screen
					name='Sent'
					component={SentComponent}
					options={({ navigation }) => ({
						headerShown: true,
						title: '',
						headerRight: () => <BackBtn navigation={navigation} />,
					})}
				/>
				<Stack.Screen
					name='Contacts'
					component={ContactsComponent}
					options={({ navigation }) => ({
						headerShown: true,
						title: 'Contacts',
						headerLeft: () => <BackBtn navigation={navigation} />,
					})}
				/>
				<Stack.Screen
					name='Settings'
					component={SettingsComponent}
					options={({ navigation }) => ({
						headerShown: true,
						title: 'Settings',
						headerLeft: () => <BackBtn navigation={navigation} />,
					})}
				/>
			</Stack.Navigator>
		</>
	)
}
