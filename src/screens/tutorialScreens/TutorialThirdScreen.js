import React from 'react'
import {
	TouchableOpacity,
	View,
	Image,
	StyleSheet,
	Dimensions,
	ScrollView,
} from 'react-native'
import { WalletText, WalletButton } from '../../Components/UI'
import { Indicators } from '../../Components/Indicators'
const width = Dimensions.get('window').width
import { WalletTitle } from './../../Components/UI/WalletTitle'

export const TutorialThirdScreen = ({ navigation }) => {
	return (
		<ScrollView
			contentContainerStyle={{
				position: 'relative',
				flexGrow: 1,
				justifyContent: 'space-between',
				paddingBottom: 40,
				paddingTop: 30,
			}}>
			<View>
				<View style={styles.center}>
					<TouchableOpacity
						style={styles.skipLink}
						activeOpacity={0.7}
						onPress={() => navigation.navigate('TutorialEnd')}>
						<WalletText color='white'>Skip</WalletText>
					</TouchableOpacity>
					<Indicators active={3} />
					<View
						style={{
							marginBottom: 10,
							justifyContent: 'center',
							alignItems: 'center',
						}}>
						<Image
							resizeMode='cover'
							style={styles.logoBig}
							source={require('../../../assets/logoBig.png')}
						/>
						<WalletTitle size='m' color='white'>
							Access the world {'\n'}of cryto & DeFi
						</WalletTitle>
						<Image
							resizeMode='contain'
							style={{ width: width - 40, marginTop: -30 }}
							source={require('../../../assets/coins-tutorial.png')}
						/>
					</View>
				</View>
			</View>
			<View style={{ paddingHorizontal: 20 }}>
				<WalletButton onPress={() => navigation.navigate('TutorialEnd')}>
					Continue
				</WalletButton>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	logoBig: {
		height: 100,
		width: 100,
		marginBottom: 50,
	},
	center: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	skipLink: {
		position: 'absolute',
		right: 20,
		top: 20,
		zIndex: 10,
	},
})
