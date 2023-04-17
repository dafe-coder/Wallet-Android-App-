import React, { useState, useEffect } from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'
import { THEME } from './../Theme'
import { ButtonCopy, WalletText } from './UI/'
import { setPhrase, setPrivateKey } from '../store/actions/walletActions'
import { useDispatch } from 'react-redux'
import { SvgIcon } from './svg/svg'

export const PhraseBox = ({
	edit,
	text,
	setText,
	style,
	setBtnDisabled,
	phrase = '',
	paste,
	textAlert,
	alert,
}) => {
	const dispatch = useDispatch()
	const [active, setActive] = useState(true)
	const [success, setSuccess] = useState('default')

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
		if (textArr.length == 1 && text.length == 64) {
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
			{alert && (
				<View style={styles.alert}>
					<View style={{ flexBasis: '9%', marginTop: 6 }}>
						<SvgIcon type='alert' />
					</View>
					<View style={{ flexBasis: '89%' }}>
						<WalletText color='blue' style={{ marginLeft: 8 }}>
							{textAlert}
						</WalletText>
					</View>
				</View>
			)}
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
	alert: {
		marginTop: 20,
		backgroundColor: THEME.GREY,
		borderRadius: 10,
		padding: 16,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	},
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
