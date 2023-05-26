import React from 'react'
import { View, StyleSheet } from 'react-native'
import { THEME } from '../../Theme'
import { SvgIcon } from './../svg/svg'

export const CheckBox = ({ checked, style }) => {
	return (
		<View style={[styles.checkbox, style]}>
			{checked && <SvgIcon style={styles.icon} type='check' />}
		</View>
	)
}

const styles = StyleSheet.create({
	checkbox: {
		width: 13,
		height: 13,
		borderWidth: 1,
		borderColor: THEME.WHITE,
		borderRadius: 3,
		marginRight: 15,
		position: 'relative',
	},
	icon: {
		position: 'absolute',
		left: 1,
		top: 0,
	},
})
