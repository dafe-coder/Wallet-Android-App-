import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { WalletText } from '../../Components/UI/WalletText'
import { SvgIcon } from '../../Components/svg/svg'
import { THEME } from '../../Theme'
import { useSelector } from 'react-redux'

export const HeaderTitle = ({ openModalSelectAccount }) => {
	const { currentNetwork } = useSelector((state) => state.storage)

	return (
		<TouchableOpacity
			style={{ flexDirection: 'row', alignItems: 'center' }}
			activeOpacity={0.7}
			onPress={() => openModalSelectAccount()}>
			<WalletText
				color='gold'
				style={{ fontSize: 18, marginRight: 5, fontFamily: 'ub-regular' }}>
				{currentNetwork.title == 'Polygon'
					? 'Polygon Network'
					: currentNetwork.title + ''}
			</WalletText>
			<SvgIcon type='check' fill={THEME.VIOLET} />
		</TouchableOpacity>
	)
}
