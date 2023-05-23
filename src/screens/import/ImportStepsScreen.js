import React from 'react'
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { WalletTitle, WalletText } from '../../Components/UI'
import { THEME } from './../../Theme'
import { SvgIcon } from '../../Components/svg/svg'
import { useSelector } from 'react-redux'
export const ImportStepsScreen = ({ navigation }) => {
	const { backup } = useSelector((state) => state.storage)
	const [isDisabled, setIsDisabled] = React.useState(false)

	React.useEffect(() => {
		setIsDisabled(!backup)
	}, [backup])

	const goImport = () => {
		if (!isDisabled) navigation.navigate('ImportWallet')
	}
	return (
		<View style={{ flex: 1, paddingHorizontal: 20 }}>
			<WalletTitle size='m' color='white' style={{ marginBottom: 40 }}>
				Follow these steps to {'\n'} import your wallet
			</WalletTitle>

			<TouchableOpacity
				onPress={() =>
					navigation.navigate('ConfirmPassword', { from: 'backup' })
				}
				activeOpacity={0.7}
				style={styles.item}>
				<WalletText size='m' fw='bold'>
					Create a backup for you {'\n'}current Name Wallet
				</WalletText>
				<WalletText
					color='white-dark'
					style={{ marginTop: 10, fontSize: 12, lineHeight: 14 }}>
					This step is required, even if your current{'\n'}Name wallet is empty,
					for security.
				</WalletText>
				<View style={styles.arrow}>
					<SvgIcon type='arrow-right' />
				</View>
			</TouchableOpacity>
			<TouchableOpacity
				style={[styles.item, { marginTop: 10 }]}
				onPress={goImport}
				activeOpacity={isDisabled ? 1 : 0.7}>
				<View style={isDisabled && { opacity: 0.4 }}>
					<WalletText
						color={isDisabled ? 'disabled' : 'white'}
						size='m'
						fw='bold'>
						Import your other wallet {'\n'}using a recovery phrase
					</WalletText>
					<View style={{ flexDirection: 'row', marginTop: 10 }}>
						<Image
							style={[styles.logo]}
							resizeMode='cover'
							source={require('../../../assets/logo/1.png')}
						/>
						<Image
							style={[styles.logo]}
							resizeMode='cover'
							source={require('../../../assets/logo/2.png')}
						/>
						<Image
							style={[styles.logo]}
							resizeMode='cover'
							source={require('../../../assets/logo/3.png')}
						/>
						<Image
							style={[styles.logo]}
							resizeMode='cover'
							source={require('../../../assets/logo/4.png')}
						/>
						<Image
							style={[styles.logo]}
							resizeMode='cover'
							source={require('../../../assets/logo/5.png')}
						/>
						<Image
							style={[styles.logo]}
							resizeMode='cover'
							source={require('../../../assets/logo/5.png')}
						/>
					</View>
					<View style={styles.arrow}>
						<SvgIcon
							type='arrow-right'
							fill={isDisabled && THEME.DISABLED_TEXT}
						/>
					</View>
				</View>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	item: {
		backgroundColor: THEME.BLACK,
		borderRadius: 16,
		paddingHorizontal: 13,
		paddingVertical: 24,
		position: 'relative',
	},
	arrow: {
		position: 'absolute',
		top: 24,
		right: 13,
	},
	logo: {
		marginRight: 6,
		width: 18,
		height: 18,
	},
})
