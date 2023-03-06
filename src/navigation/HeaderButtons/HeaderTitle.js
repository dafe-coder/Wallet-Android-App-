import React, { useRef } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { WalletText } from './../../Components/UI/WalletText'
import { SvgIcon } from './../../Components/svg/svg'
import { WalletBottomSheet } from '../../Components'
import { ChangeCurrentNetwork } from '../../Components/modal'
import { THEME } from './../../Theme'
import { useSelector } from 'react-redux'

export const HeaderTitle = () => {
	const { currentNetwork } = useSelector((state) => state.storage)
	const chooseNetwork = useRef(null)

	const openModalSelectAccount = () => {
		chooseNetwork.current?.expand()
	}
	const closeModalSelectAccount = () => {
		chooseNetwork.current?.close()
	}
	return (
		<>
			<TouchableOpacity activeOpacity={0.7} onPress={openModalSelectAccount}>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<WalletText
						color='gold'
						style={{ marginRight: 5, fontFamily: 'ub-regular' }}>
						{currentNetwork.title}
					</WalletText>
					<SvgIcon type='check' fill={THEME.VIOLET} />
				</View>
			</TouchableOpacity>
			<WalletBottomSheet ref={chooseNetwork} snapPoints={['55%']}>
				<ChangeCurrentNetwork onPress={closeModalSelectAccount} />
			</WalletBottomSheet>
		</>
	)
}
