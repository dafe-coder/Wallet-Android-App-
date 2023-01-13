import React, { useState, useEffect } from 'react'
import {
	Text,
	View,
	TextInput,
	StyleSheet,
	TouchableOpacity,
} from 'react-native'
import { THEME } from './../Theme'
import { WalletText, ButtonCopy } from './UI/'
import { setPhrase, setPrivateKey } from '../store/actions/walletActions'
import { useDispatch } from 'react-redux'

export const PhraseBox = ({
	edit,
	style,
	setBtnDisabled,
	phrase = '',
	paste,
}) => {
	const dispatch = useDispatch()
	const [active, setActive] = useState(true)
	const [success, setSuccess] = useState('default')
	const [text, setText] = useState('')

	useEffect(() => {
		if (text !== '' && active) {
			validPhrase(text)
		} else if (text !== '' && !active) {
			validKey(text)
		}
	}, [text, active])

	const validPhrase = (text) => {
		let textArr = text.trim().split(' ')
		if (
			(active && textArr.length == 12) ||
			textArr.length == 15 ||
			textArr.length == 24
		) {
			setSuccess('success')
			setBtnDisabled(false)
			dispatch(setPhrase(text))
		} else {
			setBtnDisabled(true)
			setSuccess('error')
		}
	}

	const validKey = (text) => {
		let textArr = text.trim().split(' ')
		if (textArr.length == 1 && text.length > 40) {
			setSuccess('success')
			setBtnDisabled(false)
			dispatch(setPrivateKey(text))
		} else {
			setBtnDisabled(true)
			setSuccess('error')
		}
	}

	return (
		<View style={[styles.wrap, style, edit ? { marginBottom: 0 } : {}]}>
			{!edit ? (
				<View style={{ flexDirection: 'row' }}>
					<TouchableOpacity activeOpacity={0.7} onPress={() => setActive(true)}>
						<WalletText
							color={active ? 'white-dark' : 'brown'}
							style={{ marginBottom: 7 }}>
							Recovery Phrase
						</WalletText>
					</TouchableOpacity>
					<TouchableOpacity
						activeOpacity={0.7}
						onPress={() => setActive(false)}>
						<WalletText
							color={!active ? 'white-dark' : 'brown'}
							style={{ marginLeft: 15 }}>
							Private Key
						</WalletText>
					</TouchableOpacity>
				</View>
			) : (
				<></>
			)}
			<View pointerEvents={edit ? 'none' : 'auto'}>
				<TextInput
					autoCapitalize='none'
					style={[
						styles.textarea,
						success == 'error'
							? { borderColor: THEME.RED }
							: success == 'success'
							? { borderColor: THEME.BROWN_TEXT }
							: {},
						edit ? styles.editInput : {},
					]}
					value={text}
					multiline={true}
					numberOfLines={7}
					onChangeText={setText}
					placeholder={phrase != '' ? phrase : 'Enter Secret Recovery Phrase'}
					placeholderTextColor={edit ? THEME.WHITE_DARK_TEXT : THEME.BROWN_TEXT}
					underlineColorAndroid='transparent'
				/>
			</View>
			<ButtonCopy
				setText={setText}
				paste={paste}
				text={phrase != '' ? phrase : text}
				style={{ right: 35, bottom: 20 }}
			/>
			{success == 'error' && active ? (
				<Text style={styles.errorText}>Invalid Secret Recovery Phrase!</Text>
			) : success == 'error' && !active ? (
				<Text style={styles.errorText}>Invalid Private Key!</Text>
			) : (
				<></>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	textarea: {
		borderWidth: 1,
		backgroundColor: THEME.BROWN,
		borderRadius: 5,
		padding: 15,
		fontSize: 14,
		lineHeight: 20,
		color: THEME.WHITE_DARK_TEXT,
		textAlignVertical: 'top',
		minHeight: 142,
		maxHeight: 200,
	},
	wrap: {
		position: 'relative',
		paddingHorizontal: 16,
		marginBottom: 150,
	},
	errorText: {
		color: THEME.RED,
		fontSize: 12,
		position: 'absolute',
		bottom: -23,
		left: 35,
	},
	editInput: {
		borderWidth: 1,
		borderColor: THEME.BROWN_TEXT,
		paddingRight: 80,
	},
})
