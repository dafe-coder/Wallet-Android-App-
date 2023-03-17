import React from 'react'
import { TouchableOpacity } from 'react-native'
import { SvgIcon } from '../../Components/svg/svg'
import { THEME } from '../../Theme'

export const BackBtn = ({ navigation }) => {
	const onPressButton = () => {
		navigation.goBack()
	}
	return (
		<TouchableOpacity activeOpacity={1} onPress={onPressButton}>
			<SvgIcon
				type='close'
				width={15}
				height={15}
				style={{ marginRight: 10, marginBottom: -3 }}
				fill={THEME.VIOLET_LIGHT}
			/>
		</TouchableOpacity>
	)
}
