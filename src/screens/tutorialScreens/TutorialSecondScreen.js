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
import { Card } from './../../Components'
import { SvgCoin } from '../../Components/svg/svgCoin'
const width = Dimensions.get('window').width
import { THEME } from '../../Theme'
const coins = ['btc', 'eth', 'bnb', 'polygon', 'avax']
export const TutorialSecondScreen = ({ navigation }) => {
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
						title='A non-custodial & secure wallet for'>
						<View
							style={{
								marginVertical: 75,
								flexDirection: 'row',
								justifyContent: 'space-between',
							}}>
							{coins.map((item, i) => (
								<View key={i} style={styles.coinBlock}>
									<SvgCoin type={item} />
								</View>
							))}
						</View>
						<WalletText center size='m' color='disabled'>
							and many more
						</WalletText>
					</Card>
				</View>
			</View>
			<View style={{ justifyContent: 'center', alignItems: 'center' }}>
				<Indicators active={2} />
				<WalletButton onPress={() => navigation.navigate('TutorialThird')}>
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
