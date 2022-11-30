import React, { useState } from 'react'
import { View, Switch } from 'react-native'
import { THEME } from './../../Theme'

export const SwitchButton = ({ enabled }) => {
	const [isEnabled, setIsEnabled] = useState(enabled)
	const toggleSwitch = () => setIsEnabled((previousState) => !previousState)

	return (
		<View>
			<Switch
				trackColor={{ false: THEME.BROWN, true: THEME.BROWN }}
				thumbColor={THEME.GOLD}
				ios_backgroundColor={THEME.BROWN}
				onValueChange={toggleSwitch}
				value={isEnabled}
			/>
		</View>
	)
}
