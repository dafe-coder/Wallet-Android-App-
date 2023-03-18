import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { THEME } from '../Theme'
import { WalletText } from './UI'
import { SvgIcon } from './svg/svg'
export const ChooseCoin = ({ style }) => {
	return (
		<TouchableOpacity style={[styles.wrap, style]}>
			<View style={{ flexDirection: 'row' }}>
				<View style={styles.box}>
					<Image />
				</View>
				<View>
					<WalletText fw='bold' size='m'>
						Ethereum
					</WalletText>
				</View>
			</View>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				<WalletText fw='bold' size='m'>
					$ 0
				</WalletText>
				<SvgIcon style={{ marginLeft: 7 }} type='triangle-bottom' />
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	wrap: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderBottomColor: '#6C757D',
		borderBottomWidth: 1,
		alignItems: 'flex-start',
		width: '100%',
		paddingBottom: 16,
	},
	box: {
		marginRight: 8,
		backgroundColor: THEME.GREY,
		width: 44,
		height: 44,
		borderRadius: 6,
		justifyContent: 'center',
		alignItems: 'center',
	},
})
