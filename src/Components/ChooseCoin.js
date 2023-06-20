import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { THEME } from '../Theme'
import { WalletText } from './UI'
import { SvgIcon } from './svg/svg'
import { useNavigate } from 'react-router-native'

export const ChooseCoin = ({ title }) => {
	const navigate = useNavigate()

	return (
		<TouchableOpacity
			activeOpacity={0.7}
			onPress={() => navigate('/choose-crypto', { state: { page: 'receive' } })}
			style={styles.wrap}>
			<WalletText>{title}</WalletText>
			<SvgIcon type='angle-down' width={15} height={9} />
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	wrap: {
		backgroundColor: THEME.GREEN_BG,
		borderColor: THEME.WHITE,
		borderWidth: 1,
		paddingHorizontal: 20,
		paddingVertical: 16,
		borderRadius: 16,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
})
