import React from 'react'
import { View, Dimensions, Image, StyleSheet } from 'react-native'
import { Card } from '../Components'
import { WalletText } from './../Components/UI/WalletText'

const width = Dimensions.get('window').width
export const CreateWalletScreen = ({ navigation }) => {
	React.useEffect(() => {
		navigation.setOptions({
			headerTransparent: true,
			headerStyle: {
				backgroundColor: 'transparent',
			},
		})
	}, [navigation])

	return (
		<View style={{ paddingTop: 150 }}>
			<Card
				imgSize={{ height: width * 5 }}
				size='xl'
				styleBody={{ height: 490 }}>
				<View style={styles.center}>
					<Image
						resizeMode='contain'
						style={{ height: 24, marginBottom: 10 }}
						source={require('../../assets/finger.png')}
					/>
					<WalletText>Generating your new</WalletText>
				</View>
			</Card>
		</View>
	)
}

const styles = StyleSheet.create({
	center: {
		justifyContent: 'center',
		alignItems: 'center',
	},
})
