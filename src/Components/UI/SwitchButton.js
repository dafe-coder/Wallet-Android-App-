import React, { useState, useEffect } from 'react'
import { View, Switch } from 'react-native'
import { THEME } from './../../Theme'
import { setShareAnalytics } from './../../store/actions/storageAction'
import { useDispatch } from 'react-redux'
export const SwitchButton = ({ style, enabled }) => {
	const dispatch = useDispatch()
	const toggleSwitch = () => {
		dispatch(setShareAnalytics(!enabled))
	}
	return (
		<View style={style}>
			<Switch
				trackColor={{ false: THEME.GREY, true: THEME.GREY }}
				thumbColor={enabled ? THEME.VIOLET : THEME.DISABLED_TEXT}
				ios_backgroundColor={THEME.GREY}
				onValueChange={toggleSwitch}
				value={enabled}
			/>
		</View>
	)
}
