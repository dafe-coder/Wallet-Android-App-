import React, { useState, useEffect } from 'react'
import {
	View,
	Image,
	StyleSheet,
	TouchableOpacity,
	TextInput,
} from 'react-native'
import { WalletText, WalletTitle } from './UI/'
import { THEME } from '../Theme'
import { SvgIcon } from './svg/svg'
import { useSelector, useDispatch } from 'react-redux'
import { setAccountName } from '../store/actions/walletActions'
import { LoaderCard } from './Loader/LoaderCard'
import fixNum from './../../services/funcWallet/fixNum'

export const AccountCard = ({ style, navigation, edit = false }) => {
	const dispatch = useDispatch()
	const [errorValue, setErrorValue] = useState(false)
	const [loader, setLoader] = useState(false)
	const [value, setValue] = useState('')
	const { loaderSkeleton, portfolioBalance, addressWallet } = useSelector(
		(state) => state.wallet
	)
	const { currentAccount, dataUser, currentNetwork } = useSelector(
		(state) => state.storage
	)

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
	if (loader && currentAccount != '' && addressWallet !== '') {
		return (
			<View style={[styles.wrap, style]}>
				<View style={styles.info}>
					<View style={{ flexDirection: 'row', marginBottom: 4 }}>
						<WalletText size='m'>
							{addressWallet !== ''
								? addressWallet.slice(0, 22) + '...' + addressWallet.slice(-4)
								: ''}
						</WalletText>
					</View>
					<WalletTitle
						color='white'
						fw='bold'
						size='m'
						style={{ marginTop: 12 }}>
						${' ' + fixNum(portfolioBalance['total_value'])}
					</WalletTitle>
				</View>
			</View>
		)
	} else {
		return <LoaderCard />
	}
}

const styles = StyleSheet.create({
	wrap: {
		borderColor: THEME.GREY,
		borderWidth: 1,
		borderRadius: 16,
		padding: 16,
		flexDirection: 'row',
		position: 'relative',
	},
	input: {
		fontFamily: 'int-reg',
		minWidth: 90,
		maxWidth: 200,
		color: THEME.DARK_TEXT,
	},
	info: {
		flexGrow: 1,
		alignItems: 'flex-start',
	},
})
