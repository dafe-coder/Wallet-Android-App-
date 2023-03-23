import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { WalletText, WalletButton } from '../UI'
import { SvgIcon } from '../svg/svg'
import { THEME } from './../../Theme'

export const DeleteWalletWarning = ({ onClose, onDelete }) => {
	return (
		<View>
			<View style={{ justifyContent: 'center', alignItems: 'center' }}>
				<SvgIcon type='warning-triangle' />
				<WalletText
					fw='bold'
					color='red'
					size='m'
					style={{ marginTop: 8, marginBottom: 16 }}>
					Warning
				</WalletText>
				<WalletText
					style={{ fontSize: 12, lineHeight: 15 }}
					center
					size='m'
					color='white'>
					Are you sure you want to delete the wallet?
					{'\n\n'} Please, make sure you saved the{' '}
					<Text
						style={{
							color: THEME.GREEN_LIGHT,
						}}>
						phrase.
					</Text>
					{'\n'}
					Funds associated with the wallet will not be affected.
				</WalletText>
			</View>
			<View style={styles.wrapBtn}>
				<WalletButton
					type='red'
					onPress={onDelete}
					style={{
						width: '43%',
						marginRight: '8%',
					}}>
					Delete
				</WalletButton>
				<WalletButton type='border' onPress={onClose} style={{ width: '43%' }}>
					Cancel
				</WalletButton>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	alert: {
		padding: 16,
		backgroundColor: '#ECE9F2',
		borderRadius: 15,
		marginTop: 24,
		flexDirection: 'row',
		alignItems: 'center',
	},
	wrapBtn: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 35,
	},
})
