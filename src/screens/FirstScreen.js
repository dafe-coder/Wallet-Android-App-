import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { WalletButton } from './../Components/UI/WalletButton'

export const FirstScreen = () => {
	return (
		<View style={styles.wrap}>
			<Image
				style={styles.img}
				source={require('../../assets/logo/logo.png')}
			/>
			<View style={{ width: '100%' }}>
				<WalletButton
					to='create-data'
					style={{ marginBottom: 15 }}
					icon='wallet'>
					Create wallet
				</WalletButton>
				<WalletButton type='link' icon='reload' to='/count-phrase'>
					Restore wallet
				</WalletButton>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	wrap: {
		flex: 1,
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingBottom: 25,
	},
	img: {
		marginTop: 'auto',
		marginBottom: 'auto',
	},
})
