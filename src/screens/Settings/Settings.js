import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Header } from '../../Components'
import { THEME } from '../../Theme'
import { WalletText } from '../../Components/UI'
import { SvgIcon } from './../../Components/svg/svg'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'

export const Settings = () => {
	const navigate = useNavigate()
	const { currentNetwork, currentAccount, dataUser } = useSelector(
		(state) => state.storage
	)
	const [currentAccountData, setCurrentAccountData] = React.useState(null)

	React.useEffect(() => {
		if (dataUser !== null) {
			setCurrentAccountData(
				dataUser.find((item) => item.name === currentAccount)
			)
		}
	}, [dataUser])
	return (
		<View style={{ flex: 1, paddingHorizontal: 24 }}>
			<Header title='Settings' />
			<View style={styles.wrap}>
				{/* <TouchableOpacity
					style={styles.item}
					activeOpacity={0.7}
					onPress={() => navigate('/')}>
					<WalletText>Currency</WalletText>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<WalletText>Default (USD)</WalletText>
						<SvgIcon
							type='angle-down'
							height={10}
							width={10}
							style={{ marginLeft: 10, transform: [{ rotate: '-90deg' }] }}
						/>
					</View>
				</TouchableOpacity> */}
				<TouchableOpacity
					style={styles.item}
					activeOpacity={0.7}
					onPress={() => navigate('/network')}>
					<WalletText>Network</WalletText>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<WalletText>{currentNetwork}</WalletText>
						<SvgIcon
							type='angle-down'
							height={10}
							width={10}
							style={{ marginLeft: 10, transform: [{ rotate: '-90deg' }] }}
						/>
					</View>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.item}
					activeOpacity={0.7}
					onPress={() => navigate('/security')}>
					<WalletText>Security and Privacy</WalletText>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<SvgIcon
							type='angle-down'
							height={10}
							width={10}
							style={{ marginLeft: 10, transform: [{ rotate: '-90deg' }] }}
						/>
					</View>
				</TouchableOpacity>
				{currentAccountData !== null && currentAccountData.phrase !== '' ? (
					<TouchableOpacity
						style={styles.item}
						activeOpacity={0.7}
						onPress={() => navigate('/show-phrase')}>
						<WalletText>View Seed Phrase</WalletText>
						<View style={{ flexDirection: 'row', alignItems: 'center' }}>
							<SvgIcon
								type='angle-down'
								height={10}
								width={10}
								style={{ marginLeft: 10, transform: [{ rotate: '-90deg' }] }}
							/>
						</View>
					</TouchableOpacity>
				) : (
					<></>
				)}
				<TouchableOpacity
					style={styles.item}
					activeOpacity={0.7}
					onPress={() => navigate('/show-privateKey')}>
					<WalletText>View Private Key</WalletText>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<SvgIcon
							type='angle-down'
							height={10}
							width={10}
							style={{ marginLeft: 10, transform: [{ rotate: '-90deg' }] }}
						/>
					</View>
				</TouchableOpacity>
				<TouchableOpacity
					style={[styles.item]}
					activeOpacity={0.7}
					onPress={() => navigate('/about')}>
					<WalletText>About</WalletText>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<SvgIcon
							type='angle-down'
							height={10}
							width={10}
							style={{ marginLeft: 10, transform: [{ rotate: '-90deg' }] }}
						/>
					</View>
				</TouchableOpacity>
				<TouchableOpacity
					style={[styles.item]}
					activeOpacity={0.7}
					onPress={() => navigate('/welcome-back')}>
					<WalletText>Lock Wallet</WalletText>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<SvgIcon
							type='angle-down'
							height={10}
							width={10}
							style={{ marginLeft: 10, transform: [{ rotate: '-90deg' }] }}
						/>
					</View>
				</TouchableOpacity>
				<TouchableOpacity
					style={[styles.item, { borderBottomWidth: 0 }]}
					activeOpacity={0.7}
					onPress={() => navigate('/risk-alert')}>
					<WalletText>Logout</WalletText>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<SvgIcon
							type='angle-down'
							height={10}
							width={10}
							style={{ marginLeft: 10, transform: [{ rotate: '-90deg' }] }}
						/>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	wrap: {
		backgroundColor: THEME.GREEN_LIGHT,
		borderRadius: 16,
		borderWidth: 1,
		borderColor: THEME.WHITE,
		paddingHorizontal: 20,
		paddingVertical: 1,
	},
	item: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: 15,
		borderBottomColor: THEME.WHITE,
		borderBottomWidth: 1,
	},
})
