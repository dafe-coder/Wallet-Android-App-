import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { WalletTitle, WalletText } from '../UI'
import { THEME } from '../../Theme'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentAccount } from '../../store/actions/storageAction'
import { BottomSheetScrollView } from '@gorhom/bottom-sheet'
export const SelectAccount = ({ navigation }) => {
	const dispatch = useDispatch()
	const { dataUser, currentAccount } = useSelector((state) => state.storage)

	const onSelectAccount = (item) => {
		dispatch(setCurrentAccount(item.name))
		navigation.navigate('Wallet')
	}

	return (
		<View style={{ flex: 1 }}>
			<WalletTitle style={{ marginBottom: 30 }}>Select an Account</WalletTitle>
			<BottomSheetScrollView>
				{dataUser.map((n) => {
					return (
						<TouchableOpacity
							activeOpacity={0.7}
							style={styles.item}
							key={Math.random().toString()}
							onPress={() => onSelectAccount(n)}>
							<View style={styles.info}>
								<Image
									style={styles.image}
									source={require('../../../assets/avatar.png')}
								/>
								<WalletText style={{ marginLeft: 12 }} size='m'>
									{n.name}
								</WalletText>
							</View>
							{currentAccount == n.name ? (
								<Image source={require('../../../assets/check.png')} />
							) : (
								<></>
							)}
						</TouchableOpacity>
					)
				})}
			</BottomSheetScrollView>
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
	image: {
		width: 35,
		height: 35,
		overflow: 'hidden',
		borderRadius: 50,
	},
})
