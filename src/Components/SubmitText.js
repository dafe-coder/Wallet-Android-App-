import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { WalletText, CheckBox } from './UI'

export const SubmitText = ({ children, style }) => {
	const [checked, setChecked] = React.useState(false)
	return (
		<TouchableOpacity
			activeOpacity={0.7}
			style={[styles.wrap, style]}
			onPress={() => setChecked(!checked)}>
			<CheckBox checked={checked} />
			<WalletText size='xs'>{children}</WalletText>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	wrap: {
		flexDirection: 'row',
		alignItems: 'center',
	},
})
