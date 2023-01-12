import React, { useState, useEffect } from 'react'
import { View, Switch } from 'react-native'
import { THEME } from './../../Theme'
import { setShareAnalytics } from './../../store/actions/storageAction'
import { useDispatch } from 'react-redux'
export const SwitchButton = ({ enabled }) => {
	const dispatch = useDispatch()
	const toggleSwitch = () => {
		dispatch(setShareAnalytics(!enabled))
	}
	useEffect(() => {
		console.log(enabled)
	}, [enabled])
	return (
		<View>
			<Switch
				trackColor={{ false: THEME.BROWN, true: THEME.BROWN }}
				thumbColor={THEME.GOLD}
				ios_backgroundColor={THEME.BROWN}
				onValueChange={toggleSwitch}
				value={enabled}
			/>
		</View>
	)
}
