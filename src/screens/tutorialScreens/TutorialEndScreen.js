import React from 'react'
import {
	View,
	StyleSheet,
	Image,
	Dimensions,
	TouchableOpacity,
	ScrollView,
} from 'react-native'
import { WalletText, WalletTitle } from '../../Components/UI'
import { THEME } from './../../Theme'
import { SvgIcon } from './../../Components/svg/svg'
import { Rules } from './../../Components/Rules'

const width = Dimensions.get('window').width
export const TutorialEndScreen = ({ navigation }) => {
	return (
		<ScrollView
			contentContainerStyle={{
				justifyContent: 'space-between',
				paddingBottom: 20,
			}}>
			<View>
				<View style={styles.center}>
					<Image
						resizeMode='cover'
						style={styles.logoBig}
						source={require('../../../assets/logoBig.png')}
					/>
					<WalletTitle color='white' style={{ marginBottom: 40 }}>
						Let's get {'\n'} you started!
					</WalletTitle>
				</View>
				<View style={styles.card}>
					<TouchableOpacity
						activeOpacity={0.7}
						onPress={() => navigation.navigate('CreateWallet')}
						style={[
							styles.cardItem,
							{ borderBottomColor: THEME.GREY, borderBottomWidth: 1 },
						]}>
						<View style={{ paddingRight: 40 }}>
							<WalletText style={{ marginBottom: 10 }} size='m'>
								Get a new wallet
							</WalletText>
							<WalletText color='disabled'>
								I am new to crypto, or I want a shiny new wallet!
							</WalletText>
						</View>
						<View style={styles.svg}>
							<SvgIcon type='arrow-right' />
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						activeOpacity={0.7}
						onPress={() => navigation.navigate('RecoverPhrase')}
						style={styles.cardItem}>
						<View style={{ paddingRight: 40 }}>
							<WalletText style={{ marginBottom: 10 }} size='m'>
								Import an existing wallet
							</WalletText>
							<WalletText color='disabled'>
								I already have a wallet and I want to access my cryptos in App
								Name
							</WalletText>
						</View>
						<View style={styles.svg}>
							<SvgIcon type='arrow-right' />
						</View>
					</TouchableOpacity>
				</View>
			</View>
			<View style={{ alignItems: 'center' }}>
				<Rules style={{ width: 209 }} />
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	svg: {
		position: 'absolute',
		right: 0,
		top: 27,
	},
	cardItem: {
		position: 'relative',
		paddingVertical: 30,
		paddingHorizontal: 20,
	},
	card: {
		marginHorizontal: 24,
		marginBottom: 40,
	},
	logoBig: {
		height: width / 1.14,
		width: width / 1.14,
	},
	center: {
		justifyContent: 'center',
		alignItems: 'center',
	},
})
