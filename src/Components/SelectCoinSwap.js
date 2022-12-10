import React from 'react'
import {
	View,
	Image,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
} from 'react-native'
import { WalletText } from './UI'
import { THEME } from '../Theme'

export const SelectCoinSwap = ({ style }) => {
	return (
		<View style={[styles.wrap, style]}>
			<View style={{ marginBottom: 10 }}>
				<View style={[styles.header, { paddingHorizontal: 20 }]}>
					<WalletText color='brown'>Asset</WalletText>
					<WalletText color='brown'>Balance: {0}</WalletText>
				</View>
				<View style={styles.item}>
					<View style={styles.itemTop}>
						<View>
							<TextInput
								placeholderTextColor={THEME.BROWN_TEXT}
								style={styles.input}
								placeholder='0.00'
							/>
							<WalletText colro='white' size='m'>
								Enter an amount
							</WalletText>
						</View>
						<View>
							<View style={styles.chooseCoin}>
								<Image
									style={styles.image}
									source={require('../../assets/network/eth.png')}
								/>
								<WalletText size='m' color='white' style={{ marginLeft: 7 }}>
									ETH
								</WalletText>
								<Image
									style={{ marginLeft: 7 }}
									source={require('../../assets/check-dark.png')}
								/>
							</View>
						</View>
					</View>

					<View style={styles.itemBottom}></View>
				</View>
			</View>
			<TouchableOpacity
				activeOpacity={0.7}
				style={{ margin: 0, marginRight: 'auto', marginLeft: 'auto' }}>
				<View style={styles.btn}>
					<Image source={require('../../assets/icons/arrows.png')} />
				</View>
			</TouchableOpacity>
			<View style={{ marginBottom: 10, marginTop: 12 }}>
				<View style={[styles.header, { paddingHorizontal: 20 }]}>
					<WalletText color='brown'>You Receive</WalletText>
				</View>
				<View style={styles.item}>
					<View style={styles.itemTop}>
						<View>
							<TextInput
								placeholderTextColor={THEME.BROWN_TEXT}
								style={styles.input}
								placeholder='0.00'
							/>
							<WalletText colro='white' size='m'>
								Enter an amount
							</WalletText>
						</View>
						<View>
							<View style={styles.chooseCoin}>
								<Image
									style={styles.image}
									source={require('../../assets/network/dai.png')}
								/>
								<WalletText size='m' color='white' style={{ marginLeft: 7 }}>
									DAI
								</WalletText>
								<Image
									style={{ marginLeft: 7 }}
									source={require('../../assets/check-dark.png')}
								/>
							</View>
						</View>
					</View>
				</View>
				<View style={styles.listPercent}>
					<TouchableOpacity activeOpacity={0.7} style={styles.itemPercent}>
						<Text style={styles.percentText}>25%</Text>
					</TouchableOpacity>
					<TouchableOpacity activeOpacity={0.7} style={styles.itemPercent}>
						<Text style={styles.percentText}>50%</Text>
					</TouchableOpacity>
					<TouchableOpacity activeOpacity={0.7} style={styles.itemPercent}>
						<Text style={styles.percentText}>75%</Text>
					</TouchableOpacity>
					<TouchableOpacity activeOpacity={0.7} style={styles.itemPercent}>
						<Text style={styles.percentText}>100%</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	listPercent: {
		marginTop: 16,
		marginBottom: 24,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	itemPercent: {
		borderColor: THEME.BROWN_TEXT,
		borderWidth: 1,
		borderRadius: 25,
		width: '23%',
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 6,
		backgroundColor: THEME.BROWN_DARK,
	},
	percentText: {
		color: THEME.GOLD,
	},
	image: {
		width: 25,
		height: 25,
	},
	btn: {
		backgroundColor: '#51515130',
		borderRadius: 50,
		width: 40,
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: '#44444480',
	},
	chooseCoin: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 7,
	},
	item: {
		backgroundColor: THEME.BROWN,
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderRadius: 5,
	},
	itemTop: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 2,
	},
	textGreen: {
		color: THEME.SUCCESS,
	},
	input: {
		color: THEME.BROWN_TEXT,
		fontSize: 16,
		fontFamily: 'ub-regular',
	},
})
