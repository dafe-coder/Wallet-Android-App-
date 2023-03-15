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
import { LoaderCard } from './Loader/LoaderCard'

export const AccountCard = ({ style, navigation, edit = false }) => {
	const dispatch = useDispatch()
	const [errorValue, setErrorValue] = useState(false)
	const [loader, setLoader] = useState(false)
	const [value, setValue] = useState('')
	const { loaderSkeleton } = useSelector((state) => state.wallet)
	const { currentAccount, dataUser } = useSelector((state) => state.storage)
	useEffect(() => {
		setLoader(loaderSkeleton)
	}, [loaderSkeleton])
	useEffect(() => {
		if (value != '') {
			const accountSameName = dataUser.filter((d) => d.name == value.trim())
			if (accountSameName.length == 0 && value.length <= 20) {
				dispatch(setAccountName(value))
				setErrorValue(false)
			} else {
				dispatch(setAccountName(''))
				setErrorValue(true)
			}
		}
	}, [value, dataUser])
	useEffect(() => {}, [dataUser])
	if (
		loader &&
		currentAccount != '' &&
		dataUser.filter((d) => d.name == currentAccount)[0].address !== undefined
	) {
		return (
			<View style={[styles.wrap, style]}>
				<View style={styles.logo}>
					{dataUser.map((n) =>
						n.name == currentAccount ? (
							<Image
								key={Math.random().toString()}
								style={{
									borderRadius: 50,
									width: 60,
									height: 60,
									overflow: 'hidden',
								}}
								resizeMode='cover'
								source={
									n.avatar != ''
										? { uri: n.avatar }
										: require('../../assets/avatar.png')
								}
							/>
						) : null
					)}
				</View>
				<View style={styles.info}>
					<View style={{ flexDirection: 'row', marginBottom: 4 }}>
						{edit ? (
							<TextInput
								style={[styles.input, errorValue ? { color: THEME.RED } : {}]}
								placeholderTextColor={THEME.DARK_TEXT}
								placeholder={currentAccount}
								autoFocus
								value={value}
								onChangeText={(text) => setValue(text)}
							/>
						) : (
							<WalletText
								size='m'
								style={{ color: '#8247E5', fontFamily: 'mt-reg' }}>
								{currentAccount}
							</WalletText>
						)}

						<TouchableOpacity
							onPress={() => (!edit ? navigation.navigate('EditProfile') : {})}
							style={{ marginLeft: 35 }}
							activeOpacity={!edit ? 0.7 : 1}>
							<SvgIcon type='pen' />
						</TouchableOpacity>
					</View>
					<WalletText size='m'>
						{dataUser.length
							? dataUser
									.filter((d) => d.name == currentAccount)[0]
									.address.slice(0, 12) +
							  '...' +
							  dataUser
									.filter((d) => d.name == currentAccount)[0]
									.address.slice(-6)
							: ''}
					</WalletText>
					<ButtonCopy
						text={
							dataUser.length
								? dataUser.filter((d) => d.name == currentAccount)[0].address
								: ''
						}
						style={{ right: 0, bottom: 0 }}
					/>
				</View>
			</View>
		)
	} else {
		return <LoaderCard />
	}
}

const styles = StyleSheet.create({
	wrap: {
		backgroundColor: THEME.GREY_LIGHT_BG,
		borderRadius: 15,
		paddingVertical: 12,
		paddingHorizontal: 14,
		flexDirection: 'row',
		position: 'relative',
	},
	input: {
		fontFamily: 'mt-reg',
		minWidth: 90,
		maxWidth: 200,
		color: THEME.DARK_TEXT,
	},
	logo: {
		marginRight: 10,
		borderRadius: 50,
		width: 50,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		overflow: 'hidden',
	},
	info: {
		flexGrow: 1,
	},
})
