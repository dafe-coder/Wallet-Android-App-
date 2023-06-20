import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { WalletText } from './UI'
import { SvgIcon } from './svg/svg'
import { THEME } from '../Theme'
import { useNavigate } from 'react-router-native'

export const ChooseCrypto = ({ chooseCoin, from = '' }) => {
	const navigate = useNavigate()

	return (
		<TouchableOpacity
			style={styles.item}
			activeOpacity={0.7}
			onPress={() => navigate('/choose-crypto', { state: { from } })}>
			<View style={{ flexDirection: 'row', alignItems: 'center' }}>
				<Image
					source={{ uri: chooseCoin.image.thumb }}
					resizeMode='cover'
					style={{
						width: 24,
						height: 24,
						borderRadius: 50,
						overflow: 'hidden',
						marginRight: 15,
					}}
				/>
				<View>
					<WalletText>{chooseCoin.symbol.toUpperCase()}</WalletText>
					<WalletText>{chooseCoin.name}</WalletText>
				</View>
			</View>
			<SvgIcon type='angle-down' width={12} height={10} />
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	item: {
		backgroundColor: THEME.GREEN_LIGHT,
		borderRadius: 16,
		borderColor: THEME.WHITE,
		borderWidth: 1,
		paddingHorizontal: 20,
		paddingVertical: 13,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
})
