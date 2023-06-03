import React from 'react'
import {
	View,
	StyleSheet,
	TextInput,
	Image,
	TouchableOpacity,
} from 'react-native'
import { Header } from '../Components'
import { WalletText } from '../Components/UI'
import { THEME } from '../Theme'
import { SvgIcon } from '../Components/svg/svg'
const arrBuy = [
	{ img: require('../../assets/logo/buy/usd.png'), title: 'usd', id: 0 },
	{ img: require('../../assets/logo/buy/cny.png'), title: 'cny', id: 1 },
	{ img: require('../../assets/logo/buy/cad.png'), title: 'cad', id: 2 },
	{ img: require('../../assets/logo/buy/eur.png'), title: 'eur', id: 3 },
	{ img: require('../../assets/logo/buy/jpy.png'), title: 'jpy', id: 4 },
]
export const Buy = () => {
	const [chooseBuy, setChooseBuy] = React.useState(arrBuy[0])

	return (
		<View style={{ flex: 1, paddingHorizontal: 24 }}>
			<Header title='Buy Crypto' />
			<View style={{ marginBottom: 30 }}>
				<WalletText style={{ marginBottom: 15 }}>You pay</WalletText>
				<View style={styles.item}>
					<TouchableOpacity
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
			</View>
			<View style={{ marginBottom: 30 }}>
				<WalletText style={{ marginBottom: 15 }}>You pay</WalletText>
				<View style={styles.item}>
					<TouchableOpacity
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
					<View pointerEvents='none'>
						<TextInput
							style={{ color: THEME.WHITE }}
							placeholderTextColor={THEME.WHITE}
							placeholder='0'
						/>
					</View>
				</View>
			</View>
			<View style={{ justifyContent: 'center', alignItems: 'center' }}>
				<WalletText size='xs'>1 MATIC ~ $100</WalletText>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	item: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: THEME.GREEN_LIGHT,
		borderWidth: 1,
		borderColor: THEME.WHITE,
		paddingHorizontal: 20,
		paddingVertical: 16,
		borderRadius: 16,
	},
})
