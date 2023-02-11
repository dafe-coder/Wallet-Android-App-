import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { THEME } from '../../Theme'

export const BusyIndicator = () => {
	return (
		<View style={{ flex: 1, justifyContent: 'center' }}>
			<ActivityIndicator size='large' color={THEME.VIOLET} />
		</View>
	)
}
