import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { WalletTitle, WalletText } from '../UI'
import { THEME } from '../../Theme'

export const SelectAccount = () => {
	const networks = [
		{
			id: new Date().toString(),
			title: 'Ethereum',
			img: require('../../../assets/avatar.png'),
			choose: true,
		},
		{
			id: new Date().toString(),
			title: 'Loopring',
			img: require('../../../assets/avatar2.png'),
			choose: false,
		},
	]
	return (
		<View style={{ width: '100%', paddingHorizontal: 16 }}>
			<WalletTitle style={{ marginBottom: 30 }}>
				Change Current Network
			</WalletTitle>
			<View>
				{networks.map((n) => {
					return (
						<TouchableOpacity activeOpacity={0.7} style={styles.item}>
							<View style={styles.info}>
								<Image source={n.img} />
								<WalletText style={{ marginLeft: 12 }} size='m'>
									{n.title}
								</WalletText>
							</View>
							{n.choose ? (
								<Image source={require('../../../assets/check.png')} />
							) : (
								<></>
							)}
						</TouchableOpacity>
					)
				})}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	item: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: 7,
		borderBottomColor: THEME.BROWN,
		borderBottomWidth: 1,
	},
	info: {
		flexDirection: 'row',
		alignItems: 'center',
	},
})
