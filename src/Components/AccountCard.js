import React, { useState, useEffect } from 'react'
import {
	View,
	Image,
	StyleSheet,
	TouchableOpacity,
	TextInput,
} from 'react-native'
import { WalletText, ButtonCopy } from './UI/'
import { THEME } from '../Theme'
import { SvgIcon } from './svg/svg'
import { useSelector, useDispatch } from 'react-redux'
import { setAccountName } from '../store/actions/walletActions'
export const AccountCard = ({ style, navigation, edit = false }) => {
	const dispatch = useDispatch()
	const [errorValue, setErrorValue] = useState(false)
	const [value, setValue] = useState('')
	const { currentAccount, dataUser } = useSelector((state) => state.storage)

	useEffect(() => {
		if (value != '') {
			const accountSameName = dataUser.filter((d) => d.name == value.trim())
			if (accountSameName.length == 0) {
				dispatch(setAccountName(value))
				setErrorValue(false)
			} else {
				dispatch(setAccountName(''))
				setErrorValue(true)
			}
		}
	}, [value, dataUser])
	return (
		<View
			style={[
				styles.wrap,
				style,
				edit ? { borderWidth: 1, borderColor: THEME.BROWN_TEXT } : {},
			]}>
			<View style={styles.logo}>
				<Image
					style={{
						borderRadius: 50,
						width: 50,
						height: 50,
						overflow: 'hidden',
					}}
					resizeMode='cover'
					source={require('../../assets/avatar.png')}
				/>
			</View>
			<View style={styles.info}>
				<View style={{ flexDirection: 'row', marginBottom: 4 }}>
					{edit ? (
						<TextInput
							style={[styles.input, errorValue ? { color: THEME.RED } : {}]}
							placeholderTextColor={THEME.BROWN_TEXT}
							placeholder={currentAccount}
							autoFocus
							value={value}
							onChangeText={(text) => setValue(text)}
						/>
					) : (
						<WalletText
							color='brown'
							size='m'
							style={{ fontFamily: 'ub-medium' }}>
							{currentAccount}
						</WalletText>
					)}

					<TouchableOpacity
						onPress={() => navigation.navigate('EditProfile')}
						style={{ marginLeft: 35 }}
						activeOpacity={0.7}>
						<SvgIcon type='pen' />
					</TouchableOpacity>
				</View>
				<WalletText size='m'>
					{dataUser
						.filter((d) => d.name == currentAccount)[0]
						.address.slice(0, 12) +
						'...' +
						dataUser
							.filter((d) => d.name == currentAccount)[0]
							.address.slice(-6)}
				</WalletText>
				<ButtonCopy
					text={dataUser.filter((d) => d.name == currentAccount)[0].address}
					style={{ right: 0, bottom: 0 }}
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	wrap: {
		backgroundColor: THEME.BROWN_DARK,
		borderRadius: 5,
		paddingVertical: 12,
		paddingHorizontal: 14,
		flexDirection: 'row',
		position: 'relative',
	},
	input: {
		fontFamily: 'ub-medium',
		minWidth: 90,
		maxWidth: 200,
		color: THEME.BROWN_TEXT,
	},
	logo: {
		marginRight: 10,
	},
	info: {
		flexGrow: 1,
	},
})
