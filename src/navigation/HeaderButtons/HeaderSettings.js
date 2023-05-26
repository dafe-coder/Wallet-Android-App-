import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { THEME } from './../../Theme'
import { WalletText } from './../../Components/UI/WalletText'
import { SvgIcon } from './../../Components/svg/svg'
import { useSelector, useDispatch } from 'react-redux'
import * as Clipboard from 'expo-clipboard'

export const HeaderSettings = ({ navigation }) => {
	const [isOpen, setIsOpen] = React.useState(false)
	const [copied, setCopied] = React.useState(false)
	const [timerID, setTimerID] = React.useState()
	const [viewID, setViewID] = React.useState()

	const { addressWallet } = useSelector((state) => state.wallet)
	const { dataUser } = useSelector((state) => state.storage)

	const onCopy = async () => {
		setCopied(true)
		if (addressWallet !== '') {
			await Clipboard.setStringAsync(addressWallet)
			setTimerID(
				setTimeout(() => {
					setCopied(false)
					setIsOpen(false)
					clearTimeout(timerID)
				}, 1500)
			)
		}
	}

	const onViewPhrase = () => {
		navigation.navigate('ConfirmPassword', { from: 'exportPhrase' })
		setViewID(
			setTimeout(() => {
				setIsOpen(false)
				clearTimeout(viewID)
			}, 500)
		)
	}
	const onViewKey = () => {
		navigation.navigate('ConfirmPassword', { from: 'exportKey' })
		setViewID(
			setTimeout(() => {
				setIsOpen(false)
				clearTimeout(viewID)
			}, 500)
		)
	}

	const onLockWallet = () => {
		navigation.reset({ index: 0, routes: [{ name: 'Unlock' }] })
	}

	React.useEffect(() => {
		return () => {
			clearTimeout(timerID)
			setIsOpen(false)
			clearTimeout(viewID)
		}
	}, [])

	return (
		<View
			style={{
				position: 'relative',
				width: 40,
				height: 50,
				justifyContent: 'center',
			}}>
			<TouchableOpacity
				onPress={() => setIsOpen(!isOpen)}
				activeOpacity={0.7}
				style={styles.btn}>
				{isOpen ? (
					<View style={styles.circleBtn}>
						<View style={styles.circle} />
						<View style={styles.circle} />
						<View style={styles.circle} />
					</View>
				) : (
					<SvgIcon type='user' />
				)}
			</TouchableOpacity>
			<View style={[styles.body, !isOpen && { display: 'none' }]}>
				<TouchableOpacity
					onPress={onCopy}
					style={styles.item}
					activeOpacity={0.7}>
					<View
						style={[
							styles.circleMenu,
							copied && { backgroundColor: THEME.GREEN_LIGHT },
						]}
					/>
					<WalletText
						style={{ fontFamily: 'mt-med' }}
						color={copied ? 'green-light' : 'disabled'}>
						{!copied ? 'Copy Address' : 'Address has been copied!'}
					</WalletText>
				</TouchableOpacity>
				{dataUser[0] && dataUser[0].phrase !== '' && (
					<TouchableOpacity
						onPress={onViewPhrase}
						style={styles.item}
						activeOpacity={0.7}>
						<View style={styles.circleMenu} />
						<WalletText style={{ fontFamily: 'mt-med' }} color={'disabled'}>
							View Recovery Phrase
						</WalletText>
						<SvgIcon
							type='play'
							fill={THEME.DISABLED_TEXT}
							style={styles.svg}
						/>
					</TouchableOpacity>
				)}
				<TouchableOpacity
					onPress={onViewKey}
					style={styles.item}
					activeOpacity={0.7}>
					<View style={styles.circleMenu} />
					<WalletText style={{ fontFamily: 'mt-med' }} color={'disabled'}>
						View Private Key
					</WalletText>
					<SvgIcon type='play' fill={THEME.DISABLED_TEXT} style={styles.svg} />
				</TouchableOpacity>
				<TouchableOpacity
					onPress={onLockWallet}
					style={styles.item}
					activeOpacity={0.7}>
					<View style={[styles.circleMenu, { backgroundColor: THEME.RED }]} />
					<WalletText style={{ fontFamily: 'mt-med' }} color={'red'}>
						Lock
					</WalletText>
					<SvgIcon type='lock' fill={THEME.DISABLED_TEXT} style={styles.svg} />
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	svg: {
		position: 'absolute',
		right: 16,
	},
	item: {
		position: 'relative',
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 16,
		paddingVertical: 12,
	},
	circleMenu: {
		width: 8,
		height: 8,
		borderRadius: 50,
		backgroundColor: THEME.DISABLED_TEXT,
		marginRight: 16,
	},
	body: {
		backgroundColor: '#1D1C2B',
		borderRadius: 24,
		padding: 6,
		position: 'absolute',
		top: 53,
		width: 275,
		right: 0,
	},
	circle: {
		height: 3.35,
		width: 3.35,
		borderRadius: 50,
		backgroundColor: THEME.PRIMARY,
	},
	btn: {
		height: 22,
		width: 22,
		justifyContent: 'center',
		alignItems: 'center',
	},
	circleBtn: {
		backgroundColor: THEME.WHITE,
		height: 22,
		width: 22,
		borderRadius: 50,
		paddingHorizontal: 4,
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
	},
})
