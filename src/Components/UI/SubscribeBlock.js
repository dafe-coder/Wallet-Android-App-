import React from 'react'
import { View, Image } from 'react-native'
import { CheckBox } from 'react-native-elements'
import { THEME } from './../../Theme'

export const SubscribeBlock = ({ check, setCheck, children }) => {
	return (
		<View>
			<CheckBox
				checkedColor={THEME.GOLD}
				activeOpacity={0.7}
				uncheckedIcon={
					<Image source={require('../../../assets/arr-uncheck.png')} />
				}
				checkedIcon={<Image source={require('../../../assets/arr.png')} />}
				title={children}
				containerStyle={{
					backgroundColor: 'transparent',
					borderWidth: 0,
					justifyContent: 'flex-start',
					alignItems: 'flex-start',
				}}
				fontFamily='ub-medium'
				textStyle={{
					color: THEME.WHITE_DARK_TEXT,
				}}
				checked={check}
				onPress={() => setCheck(!check)}
			/>
		</View>
	)
}
