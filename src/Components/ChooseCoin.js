import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { THEME } from '../Theme'
import { WalletText } from './UI'
import { SvgIcon } from './svg/svg'
import { useNavigation } from '@react-navigation/native'
import fixNum from './../../services/funcWallet/fixNum'

let timerId
export const ChooseCoin = ({ style, coin, setValue }) => {
	const { navigate } = useNavigation()
	const onChooseCrypto = () => {
		navigate('ChooseCryptos')
		timerId = setTimeout(() => {
			setValue('0')
			clearTimeout(timerId)
		}, 400)
	}

	React.useEffect(() => {
		return () => clearTimeout(timerId)
	}, [])
	return (
		<TouchableOpacity
			onPress={onChooseCrypto}
			style={[styles.wrap, style]}
			activeOpacity={0.7}>
			<View style={{ flexDirection: 'row', alignItems: 'center' }}>
				<View style={styles.box}>
					<Image
						style={{ width: '100%', height: '100%' }}
						source={{ uri: coin.image.thumb }}
					/>
				</View>
				<View>
					<WalletText fw='bold' size='m'>
						{coin.name}
					</WalletText>
				</View>
				<SvgIcon style={{ marginLeft: 7 }} type='triangle-bottom' />
			</View>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				<WalletText fw='bold' size='m'>
					$ {fixNum(coin.market_data.balance_crypto.usd)}
				</WalletText>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	wrap: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: THEME.BLACK,
		alignItems: 'center',
		width: '100%',
		borderRadius: 16,
		padding: 16,
	},
	box: {
		marginRight: 16,
		width: 40,
		height: 40,
		borderRadius: 6,
		justifyContent: 'center',
		alignItems: 'center',
	},
})
