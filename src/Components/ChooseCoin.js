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
			<View style={{ flexDirection: 'row' }}>
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
				<SvgIcon style={{ marginLeft: 7 }} type='triangle-bottom' />
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	wrap: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderBottomColor: '#6C757D',
		borderBottomWidth: 1,
		alignItems: 'flex-start',
		width: '100%',
		paddingBottom: 16,
	},
	box: {
		marginRight: 8,
		// backgroundColor: THEME.GREY,
		width: 44,
		height: 44,
		borderRadius: 6,
		justifyContent: 'center',
		alignItems: 'center',
	},
})
