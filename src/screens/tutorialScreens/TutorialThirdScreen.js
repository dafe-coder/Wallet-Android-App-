import React from 'react'
import {
	TouchableOpacity,
	View,
	Image,
	StyleSheet,
	Dimensions,
} from 'react-native'
import { WalletText, WalletButton } from '../../Components/UI'
import { Indicators } from '../../Components/Indicators'
import { Card } from '../../Components'
const width = Dimensions.get('window').width
import { THEME } from '../../Theme'

export const TutorialThirdScreen = ({ navigation }) => {
	return (
		<View
			style={{
				position: 'relative',
				flex: 1,
				justifyContent: 'space-between',
				paddingBottom: 40,
			}}>
			<View>
				<View style={styles.center}>
					<TouchableOpacity
						style={styles.skipLink}
						activeOpacity={0.7}
						onPress={() => navigation.navigate('TutorialEnd')}>
						<WalletText color='white'>Skip</WalletText>
					</TouchableOpacity>
					<Card
						style={{ marginTop: '40%' }}
						title='Access the world of cryto & DeFi'>
						<View style={{ justifyContent: 'center', alignItems: 'center' }}>
							<Image
								style={{ width: '100%', maxWidth: 326, maxHeight: 158 }}
								source={require('../../../assets/coins-tutorial.png')}
							/>
						</View>
					</Card>
				</View>
			</View>
			<View style={{ justifyContent: 'center', alignItems: 'center' }}>
				<Indicators active={3} />
				<WalletButton onPress={() => navigation.navigate('TutorialEnd')}>
					Continue
				</WalletButton>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	coinBlock: {
		backgroundColor: THEME.GREY,
		width: 44,
		height: 44,
		borderRadius: 6,
		justifyContent: 'center',
		alignItems: 'center',
	},
	logoBig: {
		height: width / 1.14,
		width: width / 1.14,
	},
	center: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	skipLink: {
		position: 'absolute',
		right: 25,
		top: 50,
		zIndex: 10,
	},
})
