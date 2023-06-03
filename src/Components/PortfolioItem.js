import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { WalletText } from './UI/'
import { THEME } from '../Theme'
import fixNum from './../../services/funcWallet/fixNum'
import { useNavigate } from 'react-router'

export const PortfolioItem = ({ title, price, count, percent, img, item }) => {
	const navigate = useNavigate()
	return (
		<TouchableOpacity
			onPress={() => navigate('/portfolio-open', { state: item })}
			activeOpacity={0.7}
			style={styles.item}>
			<View style={styles.top}>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<Image
						resizeMode='cover'
						style={{
							width: 25,
							height: 25,
							borderRadius: 50,
							overflow: 'hidden',
							marginRight: 15,
						}}
						source={{ uri: img }}
					/>
					<WalletText upperCase fw='bold'>
						{title}
					</WalletText>
				</View>
				<WalletText>{fixNum(count)}</WalletText>
			</View>
			<View style={styles.bottom}>
				<WalletText>{fixNum(price)}</WalletText>
				<WalletText color={percent > 0 ? 'green-light' : 'red'}>
					{fixNum(percent)}
				</WalletText>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	item: {
		backgroundColor: THEME.GREEN_LIGHT,
		borderWidth: 1,
		borderColor: THEME.WHITE,
		marginBottom: 10,
		paddingHorizontal: 20,
		paddingVertical: 16,
		borderRadius: 16,
	},
	top: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderBottomColor: THEME.WHITE,
		borderBottomWidth: 1,
		paddingBottom: 10,
	},
	bottom: {
		paddingTop: 10,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
})
