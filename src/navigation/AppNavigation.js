import { createStackNavigator } from '@react-navigation/stack'
import { THEME } from './../Theme'
import { LoginScreen, CreateScreen } from '../screens'
import { SubscribeScreen, PhraseScreen, CreatePasswordScreen } from '../screens'
const Stack = createStackNavigator()

export function MyStack() {
	return (
		<Stack.Navigator
			initialRouteName='CreatePassword'
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
			}}>
			<Stack.Screen
				name='Login'
				component={LoginScreen}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen name='Create' component={CreateScreen} />
			<Stack.Screen
				name='RecoverPhrase'
				component={PhraseScreen}
				options={{
					title: 'Before We Begin',
				}}
			/>
			<Stack.Screen
				name='Subscribe'
				options={{
					title: 'Before We Begin',
				}}
				component={SubscribeScreen}
			/>
			<Stack.Screen
				name='CreatePassword'
				options={{
					title: 'Game Stop Wallet',
				}}
				component={CreatePasswordScreen}
			/>
		</Stack.Navigator>
	)
}
