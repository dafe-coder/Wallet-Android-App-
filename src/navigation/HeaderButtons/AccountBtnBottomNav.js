import React from 'react'
import { TouchableOpacity, View, Image, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import { THEME } from '../../Theme'
export const AccountBtn = ({ openModalSelect }) => {
	const { dataUser, currentAccount } = useSelector((state) => state.storage)

	return (
		<TouchableOpacity
			activeOpacity={0.7}
			onPress={openModalSelect}
			style={[styles.logoImage, { backgroundColor: THEME.BROWN_DARK }]}>
			{dataUser.map((n) =>
				n.name == currentAccount ? (
					<Image
						key={Math.random().toString()}
						style={styles.image}
						resizeMode='cover'
						source={
							n.avatar != ''
								? { uri: n.avatar }
								: require('../../../assets/avatar.png')
						}
					/>
				) : null
			)}
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	image: {
		width: 42,
		height: 42,
		borderRadius: 50,
		overflow: 'hidden',
	},
	logoImage: {
		width: 32,
		height: 32,
		borderRadius: 50,
		overflow: 'hidden',
		justifyContent: 'center',
		alignItems: 'center',
	},
})
