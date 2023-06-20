import React from 'react'
import { View, StyleSheet } from 'react-native'
import { WalletText } from '../UI'
import { SvgIcon } from '../svg/svg'
import { THEME } from '../../Theme'
export const VerificationSuccess = () => {
	return (
		<View style={{ paddingTop: 30, paddingBottom: 20, width: '100%' }}>
			<View style={styles.circle}>
				<SvgIcon type='user-check' />
			</View>
			<WalletText fw='bold' size='m' center style={{ marginBottom: 15 }}>
				Verification Success!
			</WalletText>
			<WalletText center size='xs'>
				You will be redirected to your wallet in a while.
			</WalletText>
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
