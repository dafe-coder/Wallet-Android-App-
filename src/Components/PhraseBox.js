import React, { useState } from 'react'
import {
	Text,
	View,
	TextInput,
	StyleSheet,
	TouchableOpacity,
	Image,
} from 'react-native'
import { THEME } from './../Theme'
import { WalletText } from './UI/WalletText'

export const PhraseBox = ({ style }) => {
	const [colorCopy, setColorCopy] = useState(false)
	const changeColorCopy = () => {
		setColorCopy(true)
		const timer = setTimeout(() => {
			setColorCopy(false)
			clearTimeout(timer)
		}, 500)
	}
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
			<TouchableOpacity onPress={changeColorCopy} activeOpacity={1}>
				<Image
					source={
						!colorCopy
							? require('../../assets/copy.png')
							: require('../../assets/copy-active.png')
					}
					width={24}
					height={24}
					style={[styles.copyBtn]}
				/>
			</TouchableOpacity>
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
	copyBtn: {
		position: 'absolute',
		right: 15,
		bottom: 15,
		width: 24,
		height: 24,
	},
	errorText: {
		color: THEME.RED,
		fontSize: 12,
		marginTop: 8,
		marginLeft: 18,
	},
})
