import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { THEME } from './../Theme'
import { useSelector } from 'react-redux'
import { AccountBtn, HistoryBtn, HeaderTitle, BackBtn, TextBtn } from './'
import { Text } from 'react-native'
import BottomTabNavigator from './BottomTabNavigation'
import {
	SwapComponent,
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
} from './pages'
const Stack = createNativeStackNavigator()
const screens = [
	{
		name: 'Home',
		component: BottomTabNavigator,
		options: ({ navigation }) => ({
			contentStyle: {
				borderTopWidth: 0,
			},
			headerShown: false,
			title: 'Ethereum',
			headerLeft: () => <HistoryBtn navigation={navigation} />,
			headerTitle: () => <HeaderTitle />,
			headerRight: () => <AccountBtn navigation={navigation} />,
		}),
	},
	{
		name: 'CreatePhrase',
		options: ({ navigation }) => ({
			headerShown: true,
			title: '',
			headerLeft: () => <BackBtn navigation={navigation} />,
		}),
		component: CreatePhraseComponent,
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
		name: 'TransactionHistory',
		options: ({ navigation }) => ({
			headerShown: true,
			title: '',
			headerLeft: () => <BackBtn navigation={navigation} />,
			headerTitle: () => <HeaderTitle />,
			headerRight: () => <AccountBtn navigation={navigation} />,
		}),
		component: TransactionHistoryComponent,
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
		name: 'PortfolioOpen',
		options: ({ navigation }) => ({
			headerShown: true,
			title: 'Ethereum',
			headerLeft: () => <BackBtn navigation={navigation} />,
			headerTitle: () => <HeaderTitle />,
			headerRight: () => <AccountBtn navigation={navigation} />,
		}),
		component: PortfolioOpenComponent,
	},
	{
		name: 'Receive',
		options: ({ navigation }) => ({
			headerShown: true,
			title: 'You Wallet Adress',
			headerLeft: () => <BackBtn navigation={navigation} />,
			headerRight: () => <AccountBtn navigation={navigation} />,
		}),
		component: ReceiveComponent,
	},
	{
		name: 'Swap',
		options: ({ navigation }) => ({
			headerShown: true,
			title: 'Ethereum',
			headerLeft: () => <></>,
			headerTitle: () => <HeaderTitle />,
			headerRight: () => <AccountBtn navigation={navigation} />,
		}),
		component: SwapComponent,
	},
	{
		name: 'ConfirmTransaction',
		options: ({ navigation }) => ({
			headerShown: true,
			title: 'Confirm Transaction',
			headerLeft: () => <BackBtn navigation={navigation} />,
			headerRight: () => <AccountBtn navigation={navigation} />,
		}),
		component: ConfirmTransactionComponent,
	},
	{
		name: 'Sent',
		options: ({ navigation }) => ({
			headerShown: true,
			title: 'Ethereum',
			headerBackVisible: false,
			headerLeft: () => <BackBtn navigation={navigation} />,
			headerTitle: () => <HeaderTitle />,
			headerRight: () => <AccountBtn navigation={navigation} />,
		}),
		component: SentComponent,
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
			title: 'By Bit Wallet',
			headerLeft: () => <></>,
		},
	},
	{
		name: 'AllSet',
		component: AllSetComponent,
		options: {
			headerShown: true,
			title: 'By Bit Wallet',
		},
	},
	{
		name: 'Contacts',
		component: ContactsComponent,
		options: ({ navigation }) => ({
			headerShown: true,
			title: 'Contacts',
			headerLeft: () => <BackBtn navigation={navigation} />,
			headerRight: () => <AccountBtn navigation={navigation} />,
		}),
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
		name: 'Settings',
		component: SettingsComponent,
		options: ({ navigation }) => ({
			headerShown: true,
			title: 'Settings',
			headerLeft: () => <BackBtn navigation={navigation} />,
			headerRight: () => <AccountBtn navigation={navigation} />,
		}),
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

export function MyStack() {
	const { lockWallet, dataUser } = useSelector((state) => state.storage)
	return (
		<Stack.Navigator
			style={{ flex: 1 }}
			initialRouteName={
				dataUser.length ? (lockWallet ? 'Unlock' : 'Home') : 'Login'
			}
			options={{
				headerShadowVisible: false,
			}}
			screenOptions={{
				headerTitleContainerStyle: { paddingVertical: 30 },
				headerBackVisible: false,
				contentStyle: {
					borderTopColor: '#2f2d2b',
					borderTopWidth: 0.6,
				},
				headerTitleAlign: 'center',
				headerStyle: {
					backgroundColor: THEME.PRIMARY,
				},
				animation: 'none',
				headerTitle: (title) => (
					<Text
						style={{
							fontFamily: 'gt-medium',
							color: THEME.GOLD_DARK,
							fontSize: 14,
							textTransform: 'uppercase',
						}}>
						{title.children.toUpperCase()}
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
		</Stack.Navigator>
	)
}
