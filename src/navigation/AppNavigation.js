import { createStackNavigator } from '@react-navigation/stack'
import { Image } from 'react-native-elements'
import { THEME } from './../Theme'
import {
	LoginScreen,
	CreatePhraseScreen,
	SubscribeCreateScreen,
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
	ConfirmPasswordScreen,
	TransactionHistoryScreen,
} from '../screens'
import { AccountBtn, HistoryBtn, HeaderTitle, BackBtn } from './'
const Stack = createStackNavigator()

const screens = [
	{
		name: 'Wallet',
		component: WalletScreen,
		options: ({ navigation }) => ({
			headerShown: true,
			title: 'Ethereum',
			headerLeft: () => <HistoryBtn navigation={navigation} />,
			headerTitle: () => <HeaderTitle />,
			headerRight: () => <AccountBtn />,
		}),
	},
	{
		name: 'CreatePhrase',
		options: {
			headerShown: true,
			title: '',
		},
		component: CreatePhraseScreen,
	},
	{
		name: 'TransactionHistory',
		options: ({ navigation }) => ({
			headerShown: true,
			title: '',
			headerLeft: () => <BackBtn navigation={navigation} />,
			headerTitle: () => <HeaderTitle />,
			headerRight: () => <AccountBtn />,
		}),
		component: TransactionHistoryScreen,
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
		options: ({ navigation }) => ({
			headerShown: true,
			title: 'You Wallet Adress',
			headerLeft: () => <BackBtn navigation={navigation} />,
			headerRight: () => <AccountBtn />,
		}),
		component: ReceiveScreen,
	},
	{
		name: 'Swap',
		options: ({ navigation }) => ({
			headerShown: true,
			title: 'Ethereum',
			headerLeft: () => <BackBtn navigation={navigation} />,
			headerTitle: () => <HeaderTitle />,
			headerRight: () => <AccountBtn />,
		}),
		component: SwapScreen,
	},
	{
		name: 'ConfirmTransaction',
		options: ({ navigation }) => ({
			headerShown: true,
			title: 'Confirm Transaction',
			headerLeft: () => <BackBtn navigation={navigation} />,
			headerRight: () => <AccountBtn />,
		}),
		component: ConfirmTransactionScreen,
	},
	{
		name: 'Sent',
		options: ({ navigation }) => ({
			headerShown: true,
			title: 'Ethereum',
			headerLeft: () => <BackBtn navigation={navigation} />,
			headerTitle: () => <HeaderTitle />,
			headerRight: () => <AccountBtn />,
		}),
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
			headerLeft: () => <></>,
			headerTitle: () => <HeaderTitle />,
			headerRight: () => <AccountBtn />,
		},
	},
	{
		name: 'Contacts',
		component: ContactsScreen,
		options: ({ navigation }) => ({
			headerShown: true,
			title: 'Contacts',
			headerLeft: () => <BackBtn navigation={navigation} />,
			headerRight: () => <AccountBtn />,
		}),
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
			title: 'Account',
			headerShown: true,
			headerLeft: () => <></>,
			headerRight: () => <AccountBtn />,
		},
	},
	{
		name: 'Settings',
		component: SettingsScreen,
		options: ({ navigation }) => ({
			headerShown: true,
			title: 'Settings',
			headerLeft: () => <BackBtn navigation={navigation} />,
			headerRight: () => <AccountBtn />,
		}),
	},
	{
		name: 'ExportPrivateKey',
		component: ExportPrivateKeyScreen,
		options: {
			headerShown: true,
			title: 'Export Account - Private Key',
		},
	},
	{
		name: 'SubscribeCreate',
		component: SubscribeCreateScreen,
		options: {
			headerShown: true,
			title: 'Before We Begin',
		},
	},
	{
		name: 'ConfirmPassword',
		component: ConfirmPasswordScreen,
		options: {
			headerShown: true,
			title: 'enter pin code',
		},
	},
]

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
					borderBottomColor: '#302F2C',
					borderBottomWidth: 0.6,
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
