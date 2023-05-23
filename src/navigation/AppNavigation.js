import React, { useRef } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { THEME } from './../Theme'
import { useSelector } from 'react-redux'
import { BackBtn, TextBtn } from './'
import { Text } from 'react-native'
import BottomTabNavigator from './BottomTabNavigation'
import { DoubleButtons } from './'

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
		options: {
			headerShown: true,
			title: `Import an existing wallet using ${'\n'}a recovery phrase`,
			headerRight: () => <BackBtn />,
		},
		component: ImportComponent,
	},
	{
		name: 'ImportSteps',
		options: {
			headerShown: true,
			title: '',
			headerRight: () => <BackBtn />,
		},
		component: ImportStepsComponent,
	},
	{
		name: 'Notification',
		options: {
			headerShown: true,
			title: 'Notifications',
			headerRight: () => <BackBtn />,
		},
		component: NotificationComponent,
	},
	{
		name: 'DApps',
		options: {
			headerShown: true,
			title: 'dApps',
			headerRight: () => <BackBtn />,
		},
		component: DAppsComponent,
	},
	{
		name: 'About',
		options: () => ({
			headerShown: true,
			title: 'About',
		}),
		component: AboutComponent,
	},
	{
		name: 'Security',
		options: {
			headerRight: () => <BackBtn />,
			headerShown: true,
			title: 'Security',
		},
		component: SecurityComponent,
	},
	{
		name: 'BackupWords',
		options: {
			headerRight: () => <BackBtn />,
			headerShown: true,
			title: 'Finish backup',
		},
		component: BackupWordsComponent,
	},
	{
		name: 'BackupPhrase',
		options: {
			headerRight: () => <BackBtn />,
			headerShown: true,
			title: 'Save your phrase',
		},
		component: BackupPhraseComponent,
	},
	{
		name: 'BackupWarning',
		options: {
			headerRight: () => <BackBtn />,
			headerShown: true,
			title: 'Warning',
		},
		component: BackupWarningComponent,
	},
	{
		name: 'BackupSubscribe',
		options: {
			headerRight: () => <BackBtn />,
			headerShown: true,
			title: 'Manual backup',
		},
		component: BackupSubscribeComponent,
	},
	{
		name: 'BackupPrimary',
		options: {
			headerRight: () => <BackBtn />,
			headerShown: true,
			title: 'Manual backup',
		},
		component: BackupPrimaryComponent,
	},
	{
		name: 'SentAddress',
		options: {
			headerRight: () => <BackBtn />,
			headerShown: true,
			title: '',
		},
		component: SentAddressComponent,
	},
	{
		name: 'ChooseCryptos',
		options: {
			headerRight: () => <BackBtn />,
			headerShown: true,
			title: '',
		},
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
			headerRight: () => <BackBtn />,
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
		options: {
			headerShown: true,
			title: 'Polygon',
			headerLeft: () => <BackBtn />,
		},
		component: CreatePhraseComponent,
	},
	{
		name: 'ConfirmSwap',
		options: {
			headerShown: true,
			title: 'Confirm Transaction',
			headerLeft: () => <BackBtn />,
		},
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
		options: {
			headerShown: true,
			title: '',
			headerLeft: () => <BackBtn />,
		},
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
		options: {
			headerShown: true,
			title: 'Your recovery phrase',
			headerRight: () => <BackBtn go='home' />,
		},
		component: ExportPhraseCopyComponent,
	},
	{
		name: 'ExportPrivateKeyCopy',
		options: {
			headerShown: true,
			title: 'Your private key',
			headerRight: () => <BackBtn go='home' />,
		},
		component: ExportPrivateKeyCopyComponent,
	},

	{
		name: 'EditProfile',
		options: {
			headerShown: true,
			title: 'Wallet',
			headerRight: () => <></>,
		},
		component: EditProfileComponent,
	},
	{
		name: 'ExportPhrase',
		options: {
			headerShown: true,
			title: 'Export Account - Secret Phrase',
			headerLeft: () => <BackBtn />,
		},
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
		options: {
			headerShown: true,
			title: 'Add wallet',
			headerLeft: () => <></>,
		},
	},
	{
		name: 'Subscribe',
		component: SubscribeComponent,
		options: {
			headerShown: true,
			title: 'Before We Begin',
			headerLeft: () => <BackBtn />,
		},
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
		options: {
			headerShown: true,
			title: 'Export Account - Private Key',
			headerLeft: () => <BackBtn />,
		},
	},
	{
		name: 'SubscribeCreate',
		component: SubscribeCreateComponent,
		options: {
			headerShown: true,
			title: 'Before We Begin',
			headerLeft: () => <BackBtn />,
		},
	},
	{
		name: 'ConfirmPassword',
		component: ConfirmPasswordComponent,
		options: {
			headerRight: () => <BackBtn />,
			headerShown: true,
			title: 'Enter Ordinals Wallet Passcode',
		},
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
					headerTitleAlign: 'left',
					headerStyle: {
						backgroundColor: THEME.PRIMARY,
					},
					animation: 'none',
					headerTitle: (title) => (
						<Text
							style={{
								paddingLeft: 6,
								fontFamily: 'int-semi-bold',
								color: THEME.WHITE,
								fontSize: 16,
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
					options={{
						headerRight: () => <BackBtn />,
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
						headerTitleAlign: 'center',
						headerLeft: () => <></>,
						headerTitle: () => (
							<DoubleButtons active={false} navigation={navigation} />
						),
						headerRight: () => <BackBtn />,
					})}
				/>
				<Stack.Screen
					name='PortfolioOpen'
					component={PortfolioOpenComponent}
					options={{
						headerShown: true,
						title: '',
						headerLeft: () => <BackBtn />,
					}}
				/>
				<Stack.Screen
					name='Receive'
					component={ReceiveComponent}
					options={{
						headerShown: true,
						title: 'Receive',
						headerRight: () => <BackBtn />,
					}}
				/>
				<Stack.Screen
					name='ConfirmTransaction'
					component={ConfirmTransactionComponent}
					options={{
						headerShown: true,
						title: '',
						headerRight: () => <BackBtn />,
					}}
				/>
				<Stack.Screen
					name='Sent'
					component={SentComponent}
					options={{
						headerShown: true,
						title: '',
						headerRight: () => <BackBtn />,
					}}
				/>
				<Stack.Screen
					name='Contacts'
					component={ContactsComponent}
					options={{
						headerShown: true,
						title: 'Contacts',
						headerLeft: () => <BackBtn />,
					}}
				/>
				<Stack.Screen
					name='Settings'
					component={SettingsComponent}
					options={{
						headerShown: true,
						title: 'Settings',
						headerLeft: () => <BackBtn />,
					}}
				/>
			</Stack.Navigator>
		</>
	)
}
