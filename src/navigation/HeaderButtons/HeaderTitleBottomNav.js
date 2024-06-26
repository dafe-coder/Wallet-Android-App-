import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { WalletText } from '../../Components/UI/WalletText'
import { SvgIcon } from '../../Components/svg/svg'
import { THEME } from '../../Theme'
import { useSelector } from 'react-redux'

export const HeaderTitle = ({ openModalSelectAccount }) => {
	const { currentNetwork } = useSelector((state) => state.storage)

	return (
		<>
			<TouchableOpacity activeOpacity={0.7} onPress={openModalSelectAccount}>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<WalletText
						color='gold'
						style={{ marginRight: 5, fontFamily: 'gt-medium' }}
						upperCase>
						{currentNetwork}
					</WalletText>
					<SvgIcon type='check' fill={THEME.GOLD_DARK} />
				</View>
			</TouchableOpacity>
		</>
	)
}
