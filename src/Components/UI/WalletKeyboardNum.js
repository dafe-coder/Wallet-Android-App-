import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { WalletText } from './WalletText'
import { THEME } from './../../Theme'
import { SvgIcon } from '../svg/svg'

export const WalletKeyboardNum = ({ setItem, item }) => {
	const [active, setActive] = React.useState(false)
	const [timeoutId, setTimeOutId] = React.useState(null)
	const onPress = () => {
		setActive(true)
		if (item.value >= 0 || item.value === '.') {
			setItem((state) => state + item.value)
		} else {
			setItem((state) => state.slice(0, -1))
		}
		setTimeOutId(
			setTimeout(() => {
				setActive(false)
			}, 300)
		)
	}
	React.useEffect(() => {
		return () => {
			clearTimeout(timeoutId)
		}
	}, [])
	return (
		<TouchableOpacity
			onPress={onPress}
			style={[styles.numBtn, { alignItems: item.justifyContent }]}
			activeOpacity={0.8}>
			<WalletText
				color='disabled'
				style={[styles.num, active && { color: THEME.WHITE }]}
				styleWrap={[
					styles.wrapText,
					active && { backgroundColor: THEME.VIOLET },
				]}>
				{item.value == 'clear' ? (
					<SvgIcon
						type='clear'
						fill={!active ? THEME.DISABLED_TEXT : THEME.WHITE}
					/>
				) : (
					item.value
				)}
			</WalletText>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	numBtn: {
		flexBasis: '33.3%',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 20,
	},
	num: {
		fontSize: 24,
		lineHeight: 29,
	},
	wrapText: {
		overflow: 'hidden',
		height: 50,
		width: 50,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 50,
	},
})
