import React from 'react'
import { TouchableOpacity, View, Image, StyleSheet } from 'react-native'
import { WalletTitle, WalletText, WalletButton } from './../../Components/UI'
import { Indicators } from './../../Components/Indicators'

export const TutorialFirstScreen = ({ navigation }) => {
	return (
		<View
			style={{
				position: 'relative',
				flex: 1,
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
					<Indicators active={1} style={{ marginBottom: 120 }} />
					<Image
						resizeMode='cover'
						style={styles.logoBig}
						source={require('../../../assets/logoBig.png')}
					/>
				</View>
				<View style={styles.center}>
					<WalletTitle
						size='m'
						style={{ width: 252, marginTop: 50 }}
						color='white'>
						The crypto wallet for everyone
					</WalletTitle>
				</View>
			</View>
			<View style={{ paddingHorizontal: 20 }}>
				<WalletButton onPress={() => navigation.navigate('TutorialSecond')}>
					Continue
				</WalletButton>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	logoBig: {
		height: 160,
		width: 160,
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
