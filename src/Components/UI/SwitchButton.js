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
	return (
		<View>
			<Switch
				trackColor={{ false: '#DACEF0', true: '#DACEF0' }}
				thumbColor={THEME.VIOLET}
				ios_backgroundColor='#DACEF0'
				onValueChange={toggleSwitch}
				value={enabled}
			/>
		</View>
	)
}
