import React from 'react'
import { Dimensions, View, StyleSheet } from 'react-native'
import { Card } from '../../Components/Card'
import { WalletButton } from './../../Components/UI/WalletButton'

const width = Dimensions.get('window').width
export const BackupPrimaryScreen = ({ navigation }) => {
	React.useEffect(() => {
		navigation.setOptions({
			headerTransparent: true,
			headerStyle: {
				backgroundColor: 'transparent',
			},
		})
	}, [navigation])
	return (
		<View style={styles.wrap}>
			<Card
				styleBody={{ paddingHorizontal: 24 }}
				imgSize={{ height: width * 1.3, top: -30 }}>
				<WalletButton
					onPress={() =>
						navigation.navigate('ConfirmPassword', { from: 'backup' })
					}
					style={{ marginBottom: 24 }}>
					Perform manual backup
				</WalletButton>
				<WalletButton
					onPress={() =>
						navigation.navigate('ConfirmPassword', { from: 'backupRestore' })
					}
					type='border'>
					Restore another wallet
				</WalletButton>
			</Card>
		</View>
	)
}

const styles = StyleSheet.create({
	wrap: {
		marginTop: 180,
	},
})
