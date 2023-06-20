import React from 'react'
import { View, StyleSheet } from 'react-native'
import { WalletText, WalletButton } from '../UI'
import { SvgIcon } from '../svg/svg'
import { THEME } from '../../Theme'
export const TransactionFail = ({ close }) => {
	return (
		<View style={{ paddingTop: 30, width: '100%' }}>
			<View style={styles.circle}>
				<SvgIcon fill={THEME.RED} type='alert-octagon' />
			</View>
			<WalletText fw='bold' size='m' center style={{ marginBottom: 15 }}>
				insufficient funds
			</WalletText>
			<WalletText center size='xs'>
				Not enough funds for the gas fee
			</WalletText>
			<View style={{ alignItems: 'center', marginTop: 30 }}>
				<WalletButton onPress={() => close(false)} size='s' type='border'>
					Take Me Back
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
		marginLeft: -36,
		backgroundColor: THEME.GREEN_LIGHT,
		justifyContent: 'center',
		alignItems: 'center',
	},
})
