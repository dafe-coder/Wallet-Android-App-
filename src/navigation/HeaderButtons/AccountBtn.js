import React, { useRef } from 'react'
import { TouchableOpacity, View, Image, StyleSheet } from 'react-native'
import { WalletBottomSheet } from '../../Components'
import { SelectAccount } from '../../Components/modal'
export const AccountBtn = ({ navigation }) => {
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
					<Image
						style={styles.image}
						source={require('../../../assets/avatar.png')}
					/>
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
