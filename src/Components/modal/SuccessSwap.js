import React from 'react'
import { View, StyleSheet } from 'react-native'
import { SvgIcon } from '../svg/svg'
import { WalletText } from '../UI/WalletText'
import { WalletButton } from '../UI/WalletButton'
import { THEME } from '../../Theme'

export const SuccessSwap = ({ onPress, close }) => {
	return (
		<View style={{ paddingTop: 30 }}>
			<View style={styles.circle}>
				<SvgIcon
					type='check-with-box'
					width={30}
					height={20}
					fill={THEME.SUCCESS}
				/>
			</View>
			<WalletText size='m' center>
				Request sent
			</WalletText>
			<WalletText center size='xs' style={{ marginTop: 15, marginBottom: 25 }}>
				Pending block validation...
			</WalletText>
			<View style={{ flexDirection: 'row' }}>
				<WalletButton
					style={{ width: '48%', marginRight: '4%' }}
					onPress={onPress}
					type='border'>
					View Details
				</WalletButton>
				<WalletButton
					styleBtn={{ borderWidth: 0 }}
					style={{ width: '48%' }}
					onPress={() => close(false)}>
					Got it
				</WalletButton>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	circle: {
		alignItems: 'center',
		height: 75,
		width: 75,
		position: 'absolute',
		borderRadius: 50,
		borderWidth: 1,
		borderColor: THEME.WHITE,
		top: -75,
		left: '50%',
		marginLeft: -33,
		backgroundColor: THEME.GREEN_LIGHT,
		justifyContent: 'center',
		alignItems: 'center',
	},
})
