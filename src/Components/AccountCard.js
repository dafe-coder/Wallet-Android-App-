import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { THEME } from '../Theme'
import { SvgIcon } from './svg/svg'
import { WalletText } from './UI/WalletText'
import { useNavigate } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentAccount } from '../store/slices/storageSlice'

export const AccountCard = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { dataUser, currentAccount } = useSelector((state) => state.storage)

	const chooseAccount = (name) => {
		dispatch(setCurrentAccount(name))
	}

	return (
		<View style={styles.wrap}>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
					marginBottom: 20,
				}}>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<SvgIcon type='user' />
					<WalletText style={{ marginLeft: 8 }}>My Account</WalletText>
				</View>
				<TouchableOpacity
					onPress={() => navigate('/account-manage')}
					style={styles.btn}>
					<WalletText size='xs'>Manage</WalletText>
				</TouchableOpacity>
			</View>
			<View>
				{dataUser !== null ? (
					dataUser.map((item) => (
						<TouchableOpacity
							onPress={() => chooseAccount(item.name)}
							key={item.name}
							activeOpacity={0.7}
							style={[
								styles.item,
								item.name === currentAccount && { borderColor: THEME.SUCCESS },
							]}>
							<WalletText
								fw='bold'
								style={{ marginBottom: 10 }}
								color={item.name === currentAccount ? 'green-light' : 'white'}>
								{item.name}
							</WalletText>
							<WalletText>D8ZEVbgf4yPs3MK8dMJJ7Ks...</WalletText>
						</TouchableOpacity>
					))
				) : (
					<></>
				)}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	wrap: {
		backgroundColor: THEME.GREEN_LIGHT,
		borderWidth: 1,
		borderColor: THEME.WHITE,
		padding: 20,
		paddingBottom: 10,
		borderRadius: 16,
		marginBottom: 50,
	},
	btn: {
		borderWidth: 1,
		borderColor: THEME.WHITE,
		paddingVertical: 3,
		paddingHorizontal: 10,
		borderRadius: 4,
	},
	item: {
		paddingHorizontal: 20,
		paddingVertical: 16,
		borderRadius: 16,
		borderWidth: 1,
		borderColor: THEME.WHITE,
		marginBottom: 10,
	},
})
