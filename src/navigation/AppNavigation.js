import { createStackNavigator } from '@react-navigation/stack'
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
	EditProfileScreen,
	ExportPhraseCopyScreen,
	ExportPrivateKeyCopyScreen,
	UnlockScreen,
	RiskAlertScreen,
	Scanner,
	PreloaderScreen,
} from '../screens'
import { AccountBtn, HistoryBtn, HeaderTitle, BackBtn, TextBtn } from './'

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
		component: CreatePhraseScreen,
	},
	{
		name: 'Unlock',
		options: {
			headerShown: true,
			title: '',
		},
		component: UnlockScreen,
	},
	{
		name: 'RiskAlert',
		options: ({ navigation }) => ({
			headerShown: true,
			title: '',
			headerLeft: () => <BackBtn navigation={navigation} />,
		}),
		component: RiskAlertScreen,
	},
	{
		name: 'ExportPhraseCopy',
		options: ({ navigation }) => ({
			headerShown: true,
			title: 'Seed Phrase',
			headerLeft: () => <BackBtn navigation={navigation} />,
		}),
		component: ExportPhraseCopyScreen,
	},
	{
		name: 'ExportPrivateKeyCopy',
		options: ({ navigation }) => ({
			headerShown: true,
			title: 'Private Key',
			headerLeft: () => <BackBtn navigation={navigation} />,
		}),
		component: ExportPrivateKeyCopyScreen,
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
		component: TransactionHistoryScreen,
	},
	{
		name: 'EditProfile',
		options: ({ navigation }) => ({
			headerShown: true,
			title: 'Settings',
			headerLeft: () => (
				<TextBtn position='left' onPress={() => navigation.goBack()}>
					Cancel
				</TextBtn>
			),
			headerRight: () => (
				<TextBtn position='right' navigation={navigation} type='ready'>
					Ready
				</TextBtn>
			),
		}),
		component: EditProfileScreen,
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
		component: PortfolioOpenScreen,
	},
	{
		name: 'Receive',
		options: ({ navigation }) => ({
			headerShown: true,
			title: 'You Wallet Adress',
			headerLeft: () => <BackBtn navigation={navigation} />,
			headerRight: () => <AccountBtn navigation={navigation} />,
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
			headerRight: () => <AccountBtn navigation={navigation} />,
		}),
		component: SwapScreen,
	},
	{
		name: 'ConfirmTransaction',
		options: ({ navigation }) => ({
			headerShown: true,
			title: 'Confirm Transaction',
			headerLeft: () => <BackBtn navigation={navigation} />,
			headerRight: () => <AccountBtn navigation={navigation} />,
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
			headerRight: () => <AccountBtn navigation={navigation} />,
		}),
		component: SentScreen,
	},
	{
		name: 'ExportPhrase',
		options: ({ navigation }) => ({
			headerShown: true,
			title: 'Export Account - Secret Phrase',
			headerLeft: () => <BackBtn navigation={navigation} />,
		}),
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
		options: ({ navigation }) => ({
			headerShown: true,
			title: 'Before We Begin',
			headerLeft: () => <BackBtn navigation={navigation} />,
		}),
	},
	{
		name: 'Subscribe',
		component: SubscribeScreen,
		options: ({ navigation }) => ({
			headerShown: true,
			title: 'Before We Begin',
			headerLeft: () => <BackBtn navigation={navigation} />,
		}),
	},
	{
		name: 'CreatePassword',
		component: CreatePasswordScreen,
		options: ({ navigation }) => ({
			headerShown: true,
			title: 'By Bit Wallet',
			headerLeft: () => <BackBtn navigation={navigation} />,
		}),
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
		options: ({ navigation }) => ({
			headerShown: true,
			headerLeft: () => <></>,
			headerTitle: () => <HeaderTitle />,
			headerRight: () => <AccountBtn navigation={navigation} />,
		}),
	},
	{
		name: 'Contacts',
		component: ContactsScreen,
		options: ({ navigation }) => ({
			headerShown: true,
			title: 'Contacts',
			headerLeft: () => <BackBtn navigation={navigation} />,
			headerRight: () => <AccountBtn navigation={navigation} />,
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
		options: ({ navigation }) => ({
			title: 'Account',
			headerShown: true,
			headerLeft: () => <></>,
			headerRight: () => <AccountBtn navigation={navigation} />,
		}),
	},
	{
		name: 'Settings',
		component: SettingsScreen,
		options: ({ navigation }) => ({
			headerShown: true,
			title: 'Settings',
			headerLeft: () => <BackBtn navigation={navigation} />,
			headerRight: () => <AccountBtn navigation={navigation} />,
		}),
	},
	{
		name: 'ExportPrivateKey',
		component: ExportPrivateKeyScreen,
		options: ({ navigation }) => ({
			headerShown: true,
			title: 'Export Account - Private Key',
			headerLeft: () => <BackBtn navigation={navigation} />,
		}),
	},
	{
		name: 'SubscribeCreate',
		component: SubscribeCreateScreen,
		options: ({ navigation }) => ({
			headerShown: true,
			title: 'Before We Begin',
			headerLeft: () => <BackBtn navigation={navigation} />,
		}),
	},
	{
		name: 'ConfirmPassword',
		component: ConfirmPasswordScreen,
		options: {
			headerShown: true,
			title: 'enter pin code',
		},
	},
	{
		name: 'Scanner',
		component: Scanner,
		options: {
			headerShown: true,
			title: 'Scan Address',
		},
	},
	{
		name: 'Preloader',
		component: PreloaderScreen,
		options: {
			headerShown: false,
		},
	},
]

export function MyStack() {
	return (
		<Stack.Navigator
			animationEnabled={false}
			style={{ flex: 1 }}
			initialRouteName={'Preloader'}
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
