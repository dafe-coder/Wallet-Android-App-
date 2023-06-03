import React from 'react'
import { View } from 'react-native'
import { THEME } from './../../Theme'
import { Switch } from 'react-native-switch'

export const SwitchButton = ({ coin, style, enabled = false, setEnabled }) => {
	const switchStyleContainer = !enabled
		? { borderWidth: 1, borderColor: 'rgba(255, 255, 255, 0.5)' }
		: { borderWidth: 1, borderColor: THEME.WHITE }

	return (
		<View style={style}>
			<Switch
				value={enabled}
				onValueChange={(val) => setEnabled(val, coin)}
				disabled={false}
				circleSize={8}
				barHeight={19}
				circleBorderWidth={0}
				backgroundActive={THEME.GREEN_LIGHT}
				backgroundInactive={THEME.GREEN_LIGHT}
				containerStyle={switchStyleContainer}
				circleActiveColor={THEME.WHITE}
				circleInActiveColor={'rgba(255, 255, 255, 0.5)'}
				changeValueImmediately={true}
				innerCircleStyle={{ alignItems: 'center', justifyContent: 'center' }}
				outerCircleStyle={{}}
				renderActiveText={false}
				renderInActiveText={false}
				switchLeftPx={2.7}
				switchRightPx={1.5}
				switchWidthMultiplier={3.7}
				switchBorderRadius={40}
			/>
		</View>
	)
}
