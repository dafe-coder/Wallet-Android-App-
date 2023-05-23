import React from 'react'
import { View, Image } from 'react-native'
import { CheckBox } from 'react-native-elements'
import { THEME } from './../../Theme'
import { SvgIcon } from '../svg/svg'
export const SubscribeBlock = ({ check, setCheck, children }) => {
	return (
		<CheckBox
			checkedColor={THEME.VIOLET}
			activeOpacity={0.7}
			uncheckedIcon={<SvgIcon type='check-box' />}
			checkedIcon={<SvgIcon type='check-box-checked' />}
			title={children}
			containerStyle={{
				position: 'relative',
				left: -14,
				width: '100%',
				backgroundColor: 'transparent',
				borderWidth: 0,
				justifyContent: 'flex-start',
				alignItems: 'flex-start',
			}}
			fontFamily='int-reg'
			textStyle={{
				color: THEME.WHITE,
				fontSize: 14,
			}}
			checked={check}
			onPress={() => setCheck(!check)}>
			{children}
		</CheckBox>
	)
}
