import React from 'react'
import { TouchableOpacity, View, StyleSheet, Image } from 'react-native'
import { WalletText, WalletButton, WalletTitle } from '../../Components/UI'
import { Indicators } from '../../Components/Indicators'
const coins = [
	{ img: require('../../../assets/logo/1.png') },
	{ img: require('../../../assets/logo/2.png') },
	{ img: require('../../../assets/logo/3.png') },
	{ img: require('../../../assets/logo/4.png') },
	{ img: require('../../../assets/logo/5.png') },
]

export const TutorialSecondScreen = ({ navigation }) => {
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
					<Indicators active={2} />
					<Image
						resizeMode='cover'
						style={styles.logoBig}
						source={require('../../../assets/logoBig.png')}
					/>
					<WalletTitle
						size='m'
						style={{ width: 254, marginTop: 50 }}
						color='white'>
						A non-custodial & secure wallet for
					</WalletTitle>
					<View
						style={{
							width: 265,
							marginTop: 35,
							marginBottom: 24,
							flexDirection: 'row',
							justifyContent: 'space-between',
						}}>
						{coins.map((item, i) => (
							<View key={i} style={styles.coinBlock}>
								<Image
									style={styles.img}
									resizeMode='contain'
									source={item.img}
								/>
							</View>
						))}
					</View>
					<WalletText center size='m' color='disabled'>
						and many more
					</WalletText>
				</View>
			</View>
			<View style={{ paddingHorizontal: 20 }}>
				<WalletButton onPress={() => navigation.navigate('TutorialThird')}>
					Continue
				</WalletButton>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	img: {
		width: 40,
		height: 40,
		borderRadius: 50,
	},
	logoBig: {
		height: 100,
		width: 100,
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
