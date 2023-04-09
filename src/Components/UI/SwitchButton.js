import React from 'react'
import { View } from 'react-native'
import { THEME } from './../../Theme'
import { Switch } from 'react-native-switch'

export const SwitchButton = ({ coin, style, enabled = false, setEnabled }) => {
	return (
		<View style={style}>
			<Switch
				value={enabled}
				onValueChange={(val) => setEnabled(val, coin)}
				disabled={false}
				circleSize={12}
				barHeight={22}
				circleBorderWidth={0}
				backgroundActive={THEME.GREY}
				backgroundInactive={THEME.GREY}
				circleActiveColor={THEME.VIOLET}
				circleInActiveColor={THEME.DISABLED_TEXT}
				changeValueImmediately={true}
				innerCircleStyle={{ alignItems: 'center', justifyContent: 'center' }}
				outerCircleStyle={{}}
				renderActiveText={false}
				renderInActiveText={false}
				switchLeftPx={1.5}
				switchRightPx={1.5}
				switchWidthMultiplier={3.7}
				switchBorderRadius={40}
			/>
		</View>
	)
}
