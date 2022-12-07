import React from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'
import { THEME } from './../Theme'
import { WalletText } from './UI/WalletText'
import { CopyButton } from './UI/CopyButton'

export const PhraseBox = ({ style }) => {
	return (
		<View style={{ ...styles.wrap, style }}>
			<View style={{ flexDirection: 'row' }}>
				<WalletText style={{ color: '#DADEDE', marginBottom: 7 }}>
					Recovery Phrase{' '}
				</WalletText>
				<WalletText color='brown' style={{ marginLeft: 10 }}>
					Private Key
				</WalletText>
			</View>
			<TextInput
				style={styles.textarea}
				multiline={true}
				numberOfLines={7}
				onChangeText={() => {}}
				placeholder='Enter Secret Recovery Phrase'
				placeholderTextColor={THEME.BROWN_TEXT}
				underlineColorAndroid='transparent'
			/>
			<CopyButton />
			<Text style={styles.errorText}>Invalid Secret Recovery Phrase!</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	textarea: {
		backgroundColor: THEME.BROWN,
		borderRadius: 5,
		padding: 15,
		fontSize: 14,
		lineHeight: 20,
		color: THEME.BROWN_TEXT,
		textAlignVertical: 'top',
		maxHeight: 200,
	},
	wrap: {
		paddingHorizontal: 16,
	},
	errorText: {
		color: THEME.RED,
		fontSize: 12,
		marginTop: 8,
		marginLeft: 18,
	},
})
