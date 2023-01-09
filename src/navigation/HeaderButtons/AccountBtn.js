import React, { useRef } from 'react'
import { TouchableOpacity, View, Image, StyleSheet } from 'react-native'
import { WalletBottomSheet } from '../../Components'
import { SelectAccount } from '../../Components/modal'
import { useSelector } from 'react-redux'
export const AccountBtn = ({ navigation }) => {
	const { dataUser, currentAccount } = useSelector((state) => state.storage)
	const selectAccountRef = useRef(null)

	const openModalSelectAccount = () => {
		selectAccountRef.current.expand()
	}

	return (
		<View>
			<TouchableOpacity
				style={{ marginRight: 16 }}
				activeOpacity={0.7}
				onPress={openModalSelectAccount}>
				<View>
					{dataUser.map((n) =>
						n.name == currentAccount ? (
							<Image
								key={Math.random().toString()}
								style={styles.image}
								source={
									n.avatar
										? { uri: n.avatar }
										: require('../../../assets/avatar.png')
								}
							/>
						) : null
					)}
				</View>
			</TouchableOpacity>

			<WalletBottomSheet ref={selectAccountRef} snapPoints={['55%']}>
				<SelectAccount navigation={navigation} />
			</WalletBottomSheet>
		</View>
	)
}

const styles = StyleSheet.create({
	image: {
		width: 32,
		height: 32,
		borderRadius: 50,
		overflow: 'hidden',
	},
})
