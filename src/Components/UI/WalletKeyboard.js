import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { WalletKeyboardNum } from './WalletKeyboardNum'

const keyboardArr = [
	{ id: 1, value: 1, justifyContent: 'flex-start' },
	{ id: 2, value: 2, justifyContent: 'center' },
	{ id: 3, value: 3, justifyContent: 'flex-end' },
	{ id: 4, value: 4, justifyContent: 'flex-start' },
	{ id: 5, value: 5, justifyContent: 'center' },
	{ id: 6, value: 6, justifyContent: 'flex-end' },
	{ id: 7, value: 7, justifyContent: 'flex-start' },
	{ id: 8, value: 8, justifyContent: 'center' },
	{ id: 9, value: 9, justifyContent: 'flex-end' },
	{ id: 10, value: '.', justifyContent: 'flex-start' },
	{ id: 11, value: 0, justifyContent: 'center' },
	{ id: 12, value: 'clear', justifyContent: 'flex-end' },
]
export const WalletKeyboard = ({ setValue, style }) => {
	return (
		<View style={[styles.wrap, style]}>
			{keyboardArr.map((item) => (
				<WalletKeyboardNum setItem={setValue} item={item} key={item.id} />
			))}
		</View>
	)
}

const styles = StyleSheet.create({
	wrap: {
		width: '100%',
		flexWrap: 'wrap',
		flexDirection: 'row',
	},
})
