import React, { useState, useEffect } from 'react'
import {
	Text,
	View,
	TextInput,
	StyleSheet,
	TouchableOpacity,
} from 'react-native'
import { THEME } from './../Theme'
import { ButtonCopy } from './UI/'
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
		if (text !== '' && text.trim().split(' ').length > 2) {
			setActive(true)
		} else {
			setActive(false)
		}
	}, [text])

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
			<View pointerEvents={edit ? 'none' : 'auto'}>
				<TextInput
					autoCapitalize='none'
					style={[
						styles.textarea,
						success == 'error'
							? { borderBottomColor: THEME.RED }
							: success == 'success'
							? { borderBottomColor: THEME.DARK_TEXT }
							: {},
						edit ? styles.editInput : {},
					]}
					value={text}
					multiline={true}
					numberOfLines={7}
					onChangeText={setText}
					placeholder={
						phrase != ''
							? phrase
							: `Enter or paste here the 12 or 24${'\n'} words from your recovery phrase, private key.`
					}
					placeholderTextColor={THEME.WHITE}
					underlineColorAndroid='transparent'
				/>
			</View>
			<ButtonCopy
				setText={setText}
				paste={paste}
				text={phrase != '' ? phrase : text}
				style={{ marginTop: 30 }}
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
		paddingVertical: 20,
		fontSize: 14,
		lineHeight: 17,
		paddingHorizontal: 20,
		color: THEME.WHITE,
		textAlignVertical: 'center',
		height: 80,
		textAlign: 'center',
		borderBottomColor: '#262838',
		borderBottomWidth: 1,
	},
	wrap: {
		position: 'relative',
		alignItems: 'center',
	},
	errorText: {
		color: THEME.RED,
		fontSize: 12,
		position: 'absolute',
		bottom: -43,
		paddingHorizontal: 35,
		textAlign: 'center',
	},
})
