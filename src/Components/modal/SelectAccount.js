import React, { useEffect } from 'react'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { WalletTitle, WalletText } from '../UI'
import { THEME } from '../../Theme'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentAccount } from '../../store/actions/storageAction'
import { BottomSheetScrollView } from '@gorhom/bottom-sheet'
import { SvgIcon } from './../svg/svg'
export const SelectAccount = ({ navigation, onCloseModal }) => {
	const dispatch = useDispatch()
	const { dataUser, currentAccount } = useSelector((state) => state.storage)
	const onSelectAccount = (item) => {
		if (item.name !== currentAccount) {
			dispatch(setCurrentAccount(item.name))
			navigation.reset({ index: 0, routes: [{ name: 'Home' }] })
			onCloseModal()
		}
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
								<View style={styles.logoImage}>
									<Image
										style={styles.image}
										resizeMode='cover'
										source={
											n.avatar != ''
												? { uri: n.avatar }
												: require('../../../assets/avatar.png')
										}
									/>
								</View>
								<WalletText style={{ marginLeft: 12 }} size='m'>
									{n.name}
								</WalletText>
							</View>
							{currentAccount == n.name ? <SvgIcon type='check' /> : <></>}
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
		borderBottomColor: THEME.GREY_LIGHT,
		borderBottomWidth: 1,
	},
	info: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	logoImage: {
		width: 35,
		height: 35,
		overflow: 'hidden',
		borderRadius: 50,
		alignItems: 'center',
		justifyContent: 'center',
	},
	image: {
		width: 42,
		height: 42,
		overflow: 'hidden',
		borderRadius: 50,
	},
})
