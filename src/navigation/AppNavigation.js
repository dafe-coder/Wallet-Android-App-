import { createStackNavigator } from '@react-navigation/stack'
import { THEME } from './../Theme'
import { LoginScreen, CreateScreen } from '../screens'

const Stack = createStackNavigator()

export function MyStack() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: THEME.PRIMARY,
				},
				headerTintColor: '#fff',
				headerTitleAlign: 'center',
			}}>
			<Stack.Screen
				name='Login'
				component={LoginScreen}
				options={{
					headerMode: 'float',
				}}
			/>
			<Stack.Screen name='Create' component={CreateScreen} />
		</Stack.Navigator>
	)
}
