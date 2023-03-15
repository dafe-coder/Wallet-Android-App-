import React from 'react'
import {
	TouchableOpacity,
	View,
	Image,
	StyleSheet,
	Dimensions,
} from 'react-native'
import { WalletTitle, WalletText, WalletButton } from './../../Components/UI'
import { Indicators } from './../../Components/Indicators'

const width = Dimensions.get('window').width

export const TutorialFirstScreen = ({ navigation }) => {
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
					<Image
						resizeMode='cover'
						style={styles.logoBig}
						source={require('../../../assets/logoBig.png')}
					/>
				</View>
				<View style={styles.center}>
					<WalletTitle style={{ width: 222 }} color='white'>
						The crypto wallet for everyone
					</WalletTitle>
				</View>
			</View>
			<View style={{ justifyContent: 'center', alignItems: 'center' }}>
				<Indicators active={1} />
				<WalletButton onPress={() => navigation.navigate('TutorialSecond')}>
					Continue
				</WalletButton>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
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
