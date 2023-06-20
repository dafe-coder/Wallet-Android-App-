import React from 'react'
import { View, Modal, StyleSheet } from 'react-native'
import { THEME } from '../../Theme'

export const WalletModal = ({ isVisible, children, styleBody }) => {
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
		backgroundColor: 'rgba(47, 73, 37, .9)',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	modal: {
		maxWidth: '90%',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: THEME.GREEN_LIGHT,
		borderWidth: 1,
		borderColor: THEME.WHITE,
		paddingHorizontal: 24,
		paddingVertical: 40,
		borderRadius: 16,
		width: '90%',
	},
})
