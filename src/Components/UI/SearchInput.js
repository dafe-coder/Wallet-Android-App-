import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import { THEME } from '../../Theme'
import { SvgIcon } from '../svg/svg'

export const SearchInput = ({
	value,
	setValue,
	placeholder = 'Search for asset',
}) => {
	return (
		<View
			style={{
				marginBottom: 20,
			}}>
			<SvgIcon type='search' style={styles.iconSearch} />
			<TextInput
				value={value}
				onChangeText={(text) => setValue(text)}
				placeholderTextColor={THEME.WHITE}
				placeholder={placeholder}
				style={styles.searchInp}
			/>
		</View>
	)
}
const styles = StyleSheet.create({
	searchInp: {
		borderRadius: 16,
		borderColor: THEME.WHITE,
		borderWidth: 1,
		paddingHorizontal: 20,
		paddingVertical: 16,
		paddingTop: 14,
		backgroundColor: THEME.GREEN_BG,
		paddingLeft: 45,
		fontSize: 14,
		lineHeight: 16,
		fontFamily: 'mt-reg',
		color: THEME.WHITE,
	},
	iconSearch: {
		position: 'absolute',
		top: 23,
		zIndex: 1,
		left: 20,
	},
})
