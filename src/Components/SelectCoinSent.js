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
import { THEME } from './../Theme'
import fixNum from './../../services/funcWallet/fixNum'
import { useSelector } from 'react-redux'

export const SelectCoinSent = ({ style, onChooseCoin }) => {
	const { chooseCoin } = useSelector((state) => state.wallet)
	return (
		<View style={[styles.wrap, style]}>
			<View style={{ marginBottom: 27 }}>
				<View style={[styles.header, { paddingHorizontal: 20 }]}>
					<WalletText color='brown'>Select Token</WalletText>
					<WalletText color='brown'>
						Balance: {fixNum(chooseCoin.market_data.balance)}
					</WalletText>
				</View>
				<View style={styles.item}>
					<View style={styles.itemTop}>
						<TouchableOpacity
							activeOpacity={0.7}
							style={styles.chooseCoin}
							onPress={onChooseCoin}>
							<Image
								style={styles.logo}
								source={{ uri: chooseCoin.image.thumb }}
							/>
							<Image
								style={{ marginLeft: 7 }}
								source={require('../../assets/check-dark.png')}
							/>
						</TouchableOpacity>
						<View>
							<WalletText color='white' size='m'>
								≈ $1.69 <Text style={styles.textGreen}> (0.1%)</Text>
							</WalletText>
						</View>
					</View>
					<View style={styles.itemBottom}>
						<WalletText colro='white' size='m'>
							1 ETH
						</WalletText>
						<TextInput
							placeholderTextColor={THEME.BROWN_TEXT}
							style={styles.input}
							placeholder='0.00'
						/>
					</View>
				</View>
			</View>
			<View style={styles.item}>
				<View style={styles.itemTop}>
					<WalletText color='white' size='m'>
						0.0031
					</WalletText>
					<TouchableOpacity>
						<WalletText color='white' size='m'>
							MAX
						</WalletText>
					</TouchableOpacity>
				</View>
				<View style={styles.itemBottom}>
					<WalletText color='brown' size='m'>
						≈ $0.0
					</WalletText>
					<WalletText color='brown' size='m'>
						USDT
					</WalletText>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
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
		paddingVertical: 15,
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
	itemBottom: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	input: {
		color: THEME.BROWN_TEXT,
		fontSize: 16,
		fontFamily: 'ub-regular',
	},
	logo: {
		width: 35,
		height: 35,
		borderRadius: 50,
		backgroundColor: THEME.WHITE,
	},
})
