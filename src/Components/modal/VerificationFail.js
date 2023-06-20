import React from 'react'
import { View, StyleSheet } from 'react-native'
import { WalletText } from '../UI'
import { SvgIcon } from '../svg/svg'
import { THEME } from '../../Theme'
export const VerificationFail = () => {
	return (
		<View style={{ paddingTop: 30, width: '100%', paddingBottom: 20 }}>
			<View style={styles.circle}>
				<SvgIcon type='alert-octagon' />
			</View>
			<WalletText fw='bold' size='m' center style={{ marginBottom: 15 }}>
				Warning!
			</WalletText>
			<WalletText center size='xs'>
				Please check your details again!
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
