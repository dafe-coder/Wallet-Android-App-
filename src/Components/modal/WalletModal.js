import React from 'react'
import { View, Modal, StyleSheet } from 'react-native'
import { THEME } from '../../Theme'

export const WalletModal = ({
	setIsVisible,
	isVisible,
	children,
	styleBody,
}) => {
	return (
		<Modal
			animationType={'fade'}
			transparent={true}
			visible={isVisible}
			onRequestClose={() => {
				console.log('Modal has been closed.')
			}}>
			<View style={styles.contentWrap}>
				<View style={[styles.modal, styleBody]}>{children}</View>
			</View>
		</Modal>
	)
}

const styles = StyleSheet.create({
	contentWrap: {
		backgroundColor: 'rgba(1, 2, 16, .9)',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	modal: {
		maxWidth: '90%',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: THEME.GREY,
		paddingHorizontal: 24,
		paddingVertical: 40,
		borderRadius: 24,
	},
	text: {
		color: '#3f2949',
		marginTop: 10,
	},
})
