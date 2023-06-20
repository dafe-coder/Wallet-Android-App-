import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { THEME } from './../Theme'
import { WalletText } from './UI'
import { SvgIcon } from './svg/svg'
import * as Clipboard from 'expo-clipboard'

export const BoxWords = ({ arr, setOpenQr }) => {
	const [copied, setCopied] = React.useState(false)
	const [timeoutID, setTimeoutID] = React.useState(null)
	React.useEffect(() => {
		return () => clearTimeout(timeoutID)
	}, [])

	const onCopy = async () => {
		setCopied(true)
		if (arr.join(' ') !== '') await Clipboard.setStringAsync(arr.join(' '))
		setTimeoutID(
			setTimeout(() => {
				setCopied(false)
				clearTimeout(timeoutID)
			}, 1000)
		)
	}
	return (
		<View style={{ width: '100%' }}>
			<View style={styles.box}>
				{arr.map((item, id) => (
					<View
						key={id}
						style={[styles.word, (id + 1) % 4 == 0 && { marginRight: 0 }]}>
						<WalletText size='xs' center>
							{item}
						</WalletText>
					</View>
				))}
			</View>
			<View style={styles.btns}>
				<TouchableOpacity
					onPress={onCopy}
					style={styles.btn}
					activeOpacity={0.7}>
					<SvgIcon
						fill={THEME.SUCCESS}
						width={14}
						height={14}
						style={[{ marginRight: 7 }]}
						type={copied ? 'check' : 'copy'}
					/>
					{copied ? (
						<WalletText>Copied!</WalletText>
					) : (
						<WalletText>Copy</WalletText>
					)}
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.btn2}
					onPress={() => setOpenQr(true)}
					activeOpacity={0.7}>
					<SvgIcon style={{ marginRight: 7 }} type='qrcode' />
					<WalletText>QR Code</WalletText>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	box: {
		backgroundColor: THEME.GREEN_LIGHT,
		borderTopLeftRadius: 16,
		borderTopRightRadius: 16,
		borderWidth: 1,
		borderColor: THEME.WHITE,
		width: '100%',
		padding: 20,
		paddingBottom: 15,
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	word: {
		paddingVertical: 5,
		flexBasis: '23.5%',
		borderWidth: 1,
		borderColor: THEME.WHITE,
		backgroundColor: 'rgba(255, 255, 255, 0.2)',
		borderRadius: 8,
		marginRight: 5,
		marginBottom: 5,
	},
	btns: {
		flexDirection: 'row',
	},
	btn: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		width: '50%',
		borderWidth: 1,
		borderTopWidth: 0,
		borderColor: THEME.WHITE,
		borderBottomLeftRadius: 16,
		backgroundColor: THEME.GREEN_LIGHT,
		paddingVertical: 10,
		borderRightWidth: 0,
	},
	btn2: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		width: '50%',
		borderWidth: 1,
		borderTopWidth: 0,
		borderColor: THEME.WHITE,
		borderBottomRightRadius: 16,
		backgroundColor: THEME.GREEN_LIGHT,
		paddingVertical: 10,
	},
})
