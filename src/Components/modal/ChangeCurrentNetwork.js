import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { WalletTitle, WalletText } from './../UI'
import { THEME } from './../../Theme'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentNetwork } from '../../store/actions/storageAction'
import { SvgIcon } from '../svg/svg'
export const ChangeCurrentNetwork = ({ onPress }) => {
	const { currentNetwork } = useSelector((state) => state.storage)
	const dispatch = useDispatch()
	const networks = [
		{
			id: Math.random().toString(),
			title: 'Polygon',
			img: require('../../../assets/network/pol.png'),
			choose: currentNetwork == 'Polygon',
		},
		{
			id: Math.random().toString(),
			title: 'Ethereum',
			img: require('../../../assets/network/eth.png'),
			choose: currentNetwork == 'Ethereum',
		},
	]
	const onChooseNetwork = (item) => {
		dispatch(setCurrentNetwork(item.title))
		onPress()
	}
	return (
		<View style={{ width: '100%' }}>
			<WalletTitle style={{ marginBottom: 30 }}>Select Network</WalletTitle>
			<View>
				{networks.map((n) => {
					return (
						<TouchableOpacity
							onPress={() => onChooseNetwork(n)}
							activeOpacity={0.7}
							style={styles.item}
							key={n.id}>
							<View style={styles.info}>
								<Image
									source={n.img}
									style={{
										width: 36,
										height: 36,
										overflow: 'hidden',
										borderRadius: 50,
									}}
								/>
								<WalletText style={{ marginLeft: 12 }} size='m'>
									{n.title}
								</WalletText>
							</View>
							{n.choose ? <SvgIcon type='check' /> : <></>}
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
		borderBottomColor: THEME.GREY_LIGHT,
		borderBottomWidth: 1,
	},
	info: {
		flexDirection: 'row',
		alignItems: 'center',
	},
})
