import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
	WalletComponent,
	TransactionHistoryPageComponent,
	SwapComponent,
	AccountComponent,
	NftComponent,
} from './pages'
const Tab = createBottomTabNavigator()
import { THEME } from '../Theme'
import { SvgIconNav } from '../Components/svg/svgNav'
import { WalletText } from '../Components/UI'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { HistoryBtn } from './HeaderButtons/HistoryBtn'
import { AccountBtn } from './HeaderButtons/AccountBtn'
import { HeaderTitle } from './HeaderButtons/HeaderTitle'

function MyTabBar({ state, descriptors, navigation }) {
	return (
		<View style={styles.wrap}>
			{state.routes.map((route, index) => {
				const { options } = descriptors[route.key]
				const label =
					options.tabBarLabel !== undefined
						? options.tabBarLabel
						: options.title !== undefined
						? options.title
						: route.name

				const isFocused = state.index === index

				const onPress = () => {
					const event = navigation.emit({
						type: 'tabPress',
						target: route.key,
						canPreventDefault: true,
					})

					if (!isFocused && !event.defaultPrevented) {
						// The `merge: true` option makes sure that the params inside the tab screen are preserved
						navigation.navigate({ name: route.name, merge: true })
					}
				}

				const onLongPress = () => {
					navigation.emit({
						type: 'tabLongPress',
						target: route.key,
					})
				}

				const initLabel = (label) => {
					switch (label) {
						case 'Nft':
							return 'NFTs'
						case 'Wallet':
							return 'Coins'
						case 'TransactionPage':
							return 'Activity'
						default:
							return label
					}
				}
				const initSvgType = (label) => {
					switch (label) {
						case 'Nft':
							return 'bar'
						case 'TransactionPage':
							return 'activity'
						case 'Account':
							return 'man'
						default:
							return label.toLowerCase()
					}
				}

				return (
					<TouchableOpacity
						accessibilityRole='button'
						accessibilityLabel={options.tabBarAccessibilityLabel}
						accessibilityState={isFocused ? { selected: true } : {}}
						activeOpacity={0.9}
						key={index.toString()}
						testID={options.tabBarTestID}
						onLongPress={onLongPress}
						onPress={onPress}>
						<View style={[styles.item]}>
							{label == 'Swap' ? (
								<View
									style={[styles.mainBtn, { position: 'absolute', top: -43 }]}>
									<SvgIconNav type='swap' width={22} height={24} />
								</View>
							) : (
								<SvgIconNav
									height='20'
									type={initSvgType(label)}
									fill={isFocused ? THEME.GOLD_DARK : ''}
								/>
							)}
							<WalletText
								style={label == 'Swap' ? { marginTop: 20 } : {}}
								color={isFocused ? 'gold' : 'brown'}>
								{initLabel(label)}
							</WalletText>
						</View>
					</TouchableOpacity>
				)
			})}
		</View>
	)
}
export default function BottomTabNavigator() {
	return (
		<Tab.Navigator
			style={{ flex: 1 }}
			options={{
				headerShadowVisible: false,
			}}
			screenOptions={{
				headerStyle: {
					borderBottomColor: '#2f2d2b',
					borderBottomWidth: 0.6,
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
							fontFamily: 'gt-medium',
							color: THEME.GOLD_DARK,
							fontSize: 14,
							textTransform: 'uppercase',
						}}>
						{title.children.toUpperCase()}
					</Text>
				),
			}}
			tabBar={(props) => <MyTabBar {...props} />}>
			<Tab.Screen
				name='Wallet'
				component={WalletComponent}
				options={({ navigation }) => ({
					headerLeft: () => <HistoryBtn navigation={navigation} />,
					headerTitle: () => <HeaderTitle />,
					headerRight: () => <AccountBtn navigation={navigation} />,
				})}
			/>
			<Tab.Screen
				name='TransactionPage'
				component={TransactionHistoryPageComponent}
				options={({ navigation }) => ({
					headerShown: true,
					headerLeft: () => <></>,
					headerTitle: () => <HeaderTitle />,
					headerRight: () => <AccountBtn navigation={navigation} />,
				})}
			/>
			<Tab.Screen
				name='Swap'
				component={SwapComponent}
				options={({ navigation }) => ({
					headerShown: true,
					headerLeft: () => <></>,
					headerRight: () => <AccountBtn navigation={navigation} />,
				})}
			/>
			<Tab.Screen
				name='Nft'
				component={NftComponent}
				options={({ navigation }) => ({
					headerShown: true,
					headerLeft: () => <></>,
					headerTitle: () => <HeaderTitle />,
					headerRight: () => <AccountBtn navigation={navigation} />,
				})}
			/>
			<Tab.Screen
				name='Account'
				component={AccountComponent}
				options={({ navigation }) => ({
					headerShown: true,
					headerLeft: () => <></>,
					headerRight: () => <AccountBtn navigation={navigation} />,
				})}
			/>
		</Tab.Navigator>
	)
}

const styles = StyleSheet.create({
	item: {
		justifyContent: 'center',
		alignItems: 'center',
		width: 58,
	},
	wrap: {
		position: 'relative',
		width: '100.1%',
		borderTopEndRadius: 10,
		borderTopLeftRadius: 10,
		backgroundColor: THEME.BROWN,
		paddingTop: 15,
		paddingBottom: 24,
		borderColor: '#312F2A',
		borderWidth: 1,
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		bottom: -1,
		left: -1,
	},
	mainBtn: {
		width: 56,
		height: 56,
		backgroundColor: THEME.GOLD,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 50,
		// elevation: 24,
		// shadowColor: THEME.GOLD,
		// overflow: 'hidden',
	},
})