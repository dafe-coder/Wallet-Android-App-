import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Header } from './../../Components/Header'
import { SearchInput } from './../../Components/UI/SearchInput'
import { WalletText } from '../../Components/UI'
import { THEME } from '../../Theme'
import { setCurrentNetwork } from '../../store/slices/storageSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-native'
const networks = [
	{ id: 1, title: 'Polygon' },
	{ id: 2, title: 'Ethereum' },
]

export const Network = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const [networkName, setNetworkName] = React.useState('')
	const [filteredNetwork, setFilteredNetwork] = React.useState([])
	const { currentNetwork } = useSelector((state) => state.storage)

	React.useEffect(() => {
		if (networkName !== '') {
			const filtered = networks.filter((network) =>
				network.title.toLowerCase().includes(networkName.toLowerCase())
			)
			setFilteredNetwork(filtered)
		} else {
			setFilteredNetwork(networks)
		}
	}, [networkName])

	const chooseNetwork = (title) => {
		dispatch(setCurrentNetwork(title))
		navigate('/wallet')
	}

	return (
		<View style={{ flex: 1, paddingHorizontal: 24 }}>
			<Header title='Network' />
			<SearchInput
				placeholder='Select network'
				value={networkName}
				setValue={setNetworkName}
			/>
			<View style={styles.wrap}>
				{filteredNetwork.length ? (
					filteredNetwork.map((item, i) => (
						<TouchableOpacity
							onPress={() => chooseNetwork(item.title)}
							activeOpacity={0.7}
							style={[
								styles.item,
								i + 1 == filteredNetwork.length && { borderBottomWidth: 0 },
							]}
							key={item.id}>
							<WalletText
								color={currentNetwork == item.title ? 'green-light' : 'white'}
								fw={currentNetwork == item.title && 'bold'}>
								{item.title}
							</WalletText>
						</TouchableOpacity>
					))
				) : (
					<WalletText center style={{ marginVertical: 16 }}>
						Nothing
					</WalletText>
				)}
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
