import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { WalletTitle, WalletText } from '../../Components/UI'
import { Card } from './../../Components/Card'
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
		<View style={{ flex: 1, paddingTop: 40 }}>
			<WalletTitle color='white'>
				Follow these steps to {'\n'} import your wallet
			</WalletTitle>

			<Card style={{ marginTop: 40 }}>
				<TouchableOpacity
					onPress={() =>
						navigation.navigate('ConfirmPassword', { from: 'backup' })
					}
					activeOpacity={0.7}
					style={{
						borderBottomColor: THEME.GREY,
						borderBottomWidth: 1,
						paddingBottom: 30,
						position: 'relative',
					}}>
					<WalletText size='m' fw='bold'>
						Create a backup for you {'\n'}current Name Wallet
					</WalletText>
					<WalletText
						color='disabled'
						style={{ marginTop: 10, fontSize: 12, lineHeight: 14 }}>
						This step is required, even if your current{'\n'}Name wallet is
						empty, for security.
					</WalletText>
					<View style={styles.arrow}>
						<SvgIcon type='arrow-right' />
					</View>
				</TouchableOpacity>
				<TouchableOpacity
					style={{
						marginTop: 30,
						position: 'relative',
					}}
					onPress={goImport}
					activeOpacity={isDisabled ? 1 : 0.7}>
					<WalletText
						color={isDisabled ? 'disabled' : 'white'}
						size='m'
						fw='bold'>
						Import your other wallet {'\n'}using a recovery phrase
					</WalletText>
					<View style={{ flexDirection: 'row', marginTop: 10 }}>
						<Image
							style={[
								styles.logo,
								isDisabled && { tintColor: THEME.DISABLED_TEXT },
							]}
							resizeMode='cover'
							source={require('../../../assets/logo/meta.png')}
						/>
						<Image
							style={[
								styles.logo,
								isDisabled && { tintColor: THEME.DISABLED_TEXT },
							]}
							resizeMode='cover'
							source={require('../../../assets/logo/mask.png')}
						/>
						<Image
							style={[
								styles.logo,
								isDisabled && { tintColor: THEME.DISABLED_TEXT },
							]}
							resizeMode='cover'
							source={require('../../../assets/logo/enjin.png')}
						/>
						<Image
							style={[
								styles.logo,
								isDisabled && { tintColor: THEME.DISABLED_TEXT },
							]}
							resizeMode='cover'
							source={require('../../../assets/logo/vector.png')}
						/>
						<Image
							style={[
								styles.logo,
								isDisabled && { tintColor: THEME.DISABLED_TEXT },
							]}
							resizeMode='cover'
							source={require('../../../assets/logo/exodus.png')}
						/>
						<Image
							style={[
								styles.logo,
								isDisabled && { tintColor: THEME.DISABLED_TEXT },
							]}
							resizeMode='cover'
							source={require('../../../assets/logo/dots.png')}
						/>
					</View>
					<View style={styles.arrow}>
						<SvgIcon
							type='arrow-right'
							fill={isDisabled && THEME.DISABLED_TEXT}
						/>
					</View>
				</TouchableOpacity>
			</Card>
		</View>
	)
}

const styles = StyleSheet.create({
	arrow: {
		position: 'absolute',
		top: 0,
		right: 0,
	},
	logo: {
		marginRight: 6,
		width: 18,
		height: 18,
	},
})
