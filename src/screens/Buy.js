import React from 'react'
import {
	View,
	StyleSheet,
	TextInput,
	Image,
	TouchableOpacity,
	Linking,
} from 'react-native'
import { Header } from '../Components'
import { WalletText } from '../Components/UI'
import { THEME } from '../Theme'
import { SvgIcon } from '../Components/svg/svg'
import { useNavigate } from 'react-router-native'
import { useSelector } from 'react-redux'
import { WalletButton } from './../Components/UI/WalletButton'
import { LoaderBuy } from '../Components/Loader/LoaderBuy'

const arrBuy = [
	{ img: require('../../assets/logo/buy/usd.png'), title: 'usd', id: 0 },
]
import { useLocation } from 'react-router-native'

export const Buy = () => {
	const { state } = useLocation()
	const navigate = useNavigate()
	const { currencyBuy } = useSelector((state) => state.transaction)
	const { allCoins } = useSelector((state) => state.wallet)
	const [chooseBuy, setChooseBuy] = React.useState(arrBuy[0])
	const [chooseCoin, setChooseCoin] = React.useState(null)

	React.useEffect(() => {
		if (state !== null) {
			setChooseCoin(state.item)
		} else {
			if (allCoins !== null) {
				setChooseCoin(allCoins[0])
			}
		}
	}, [allCoins, state])

	React.useEffect(() => {
		if (currencyBuy !== null) {
			setChooseBuy(currencyBuy)
		}
	}, [currencyBuy])

	return (
		<View style={{ flex: 1, paddingHorizontal: 24 }}>
			<Header backPath='/wallet' title='Buy Crypto' />
			{/* <View style={{ marginBottom: 30 }}>
				<WalletText style={{ marginBottom: 15 }}>You pay</WalletText>
				<View style={styles.item}>
					<TouchableOpacity
						onPress={() => navigate('/choose-currency')}
						activeOpacity={0.7}
						style={{ flexDirection: 'row', alignItems: 'center' }}>
						<Image
							source={chooseBuy.img}
							style={{
								width: 25,
								height: 25,
								borderRadius: 50,
								overflow: 'hidden',
								marginRight: 15,
							}}
							resizeMode='cover'
						/>
						<WalletText>{chooseBuy.title.toUpperCase()}</WalletText>
						<SvgIcon type='angle-down' style={{ marginLeft: 10 }} />
					</TouchableOpacity>
					<TextInput
						style={{ color: THEME.WHITE }}
						placeholderTextColor={THEME.WHITE}
						placeholder='0'
					/>
				</View>
			</View> */}
			<View style={{ marginBottom: 30 }}>
				<WalletText style={{ marginBottom: 15 }}>You buy</WalletText>
				{chooseCoin !== null ? (
					<>
						<View style={styles.item}>
							<TouchableOpacity
								activeOpacity={0.7}
								style={{
									flexDirection: 'row',
									alignItems: 'center',
									width: '100%',
									justifyContent: 'space-between',
								}}
								onPress={() =>
									navigate('/choose-crypto', { state: { page: 'buy' } })
								}>
								<View style={{ flexDirection: 'row', alignItems: 'center' }}>
									<Image
										source={{ uri: chooseCoin.image.thumb }}
										style={{
											width: 25,
											height: 25,
											borderRadius: 50,
											overflow: 'hidden',
											marginRight: 15,
										}}
										resizeMode='cover'
									/>
									<WalletText>{chooseCoin.symbol.toUpperCase()}</WalletText>
								</View>
								<SvgIcon type='angle-down' style={{ marginLeft: 10 }} />
							</TouchableOpacity>
							{/* <View pointerEvents='none'>
							<TextInput
								style={{ color: THEME.WHITE }}
								placeholderTextColor={THEME.WHITE}
								placeholder='0'
							/>
						</View> */}
						</View>
						<View
							style={{
								marginTop: 20,
								justifyContent: 'center',
								alignItems: 'center',
							}}>
							<WalletText size='xs'>
								1 {chooseCoin.symbol.toUpperCase()} ~ $
								{chooseCoin.market_data.current_price.toFixed(2)}
							</WalletText>
						</View>
					</>
				) : (
					<LoaderBuy />
				)}
			</View>

			<View style={{ marginTop: 'auto', marginBottom: 25 }}>
				<WalletButton
					onPress={() =>
						Linking.openURL('https://www.moonpay.com/buy').catch((e) =>
							console.log(e)
						)
					}>
					Continue
				</WalletButton>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	item: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: THEME.GREEN_LIGHT,
		borderWidth: 1,
		borderColor: THEME.WHITE,
		paddingHorizontal: 20,
		paddingVertical: 16,
		borderRadius: 16,
	},
})
