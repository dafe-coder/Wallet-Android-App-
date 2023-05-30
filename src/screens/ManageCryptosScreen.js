import React from 'react'
import { View, ScrollView, Keyboard } from 'react-native'
import { WalletText, WalletButton } from './../Components/UI/'
import { ChooseCryptos, ChooseCryptosHome, SearchButton } from './../Components'
import {
	useAnimatedStyle,
	useSharedValue,
	Easing,
	withSpring,
	withTiming,
} from 'react-native-reanimated'
import { useSelector } from 'react-redux'
import { BackBtn } from '../navigation'

export const ManageCryptosScreen = ({ navigation, route }) => {
	const isHome = route.params && route.params.home
	const [active, setActive] = React.useState(false)
	const [value, setValue] = React.useState('')
	const [filteredCoins, setFilteredCoins] = React.useState([])
	const offsetWidth = useSharedValue('45%')
	const { allCoins } = useSelector((state) => state.wallet)
	const width = useAnimatedStyle(() => {
		return {
			width: withSpring(offsetWidth.value),
		}
	})

	React.useEffect(() => {
		if (value !== '') {
			const filtered = allCoins.filter(
				(item) =>
					item.symbol.toLowerCase().includes(value.toLowerCase()) ||
					item.name.toLowerCase().includes(value.toLowerCase())
			)
			setFilteredCoins(filtered)
		} else {
			setFilteredCoins(allCoins)
		}
	}, [value])

	const onAnim = () => {
		offsetWidth.value = withTiming('45%', {
			duration: 500,
			easing: Easing.inOut(Easing.cubic),
		})
	}
	const onAnimEnd = () => {
		offsetWidth.value = withTiming('100%', {
			duration: 500,
			easing: Easing.inOut(Easing.cubic),
		})
	}

	React.useEffect(() => {
		const showSubscription = Keyboard.addListener('keyboardDidHide', () => {
			setActive(false)
		})
		return () => {
			showSubscription.remove()
		}
	}, [Keyboard])
	React.useEffect(() => {
		if (active == false) {
			onAnim()
		} else {
			onAnimEnd()
		}
	}, [active])

	const onOpenSearch = () => {
		setActive(!active)
	}

	React.useEffect(() => {
		if (isHome) {
			navigation.setOptions({
				headerLeft: () => (
					<WalletText color='disabled' size='m' style={{ marginLeft: 10 }}>
						Manage cryptos
					</WalletText>
				),
				headerRight: () => <BackBtn navigation={navigation} />,
				headerTitle: () => <></>,
			})
		}
	}, [])
	if (!isHome) {
		return (
			<ScrollView
				contentContainerStyle={{
					flexGrow: 1,
					justifyContent: 'space-between',
				}}>
				<View style={{ marginBottom: 50 }}>
					<WalletText
						size='m'
						style={{ paddingHorizontal: 24, marginBottom: 30 }}>
						Choose what tokens will be {'\n'}displayed in your wallet by
						default.
					</WalletText>
					<ChooseCryptos style={isHome && { marginTop: 30 }} />

					<WalletText
						color='disabled'
						style={{ paddingHorizontal: 24, marginTop: -10 }}>
						You can always change this later! ☺️
					</WalletText>
				</View>
				<View style={{ paddingHorizontal: 24, alignItems: 'center' }}>
					<WalletButton onPress={() => navigation.navigate('WalletSuccess')}>
						Go to my wallet
					</WalletButton>
				</View>
			</ScrollView>
		)
	} else {
		return (
			<View style={{ flexGrow: 1 }}>
				<View>
					<ChooseCryptosHome
						allCoins={filteredCoins}
						style={{ marginTop: 10 }}
					/>
				</View>
				<SearchButton
					value={value}
					setValue={setValue}
					width={width}
					active={active}
					onPress={onOpenSearch}
					style={active && { justifyContent: 'flex-start' }}
				/>
			</View>
		)
	}
}
