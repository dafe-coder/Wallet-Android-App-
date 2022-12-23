import React from 'react'
import {
	View,
	ImageBackground,
	StyleSheet,
	Image,
	ScrollView,
} from 'react-native'
import { WalletTitle, WalletText } from './../Components/UI/'
import { WalletNav, TransactionsList } from '../Components/'
import { THEME } from '../Theme'
import { useSelector } from 'react-redux'
export const PortfolioOpenScreen = () => {
	const { transactions } = useSelector((state) => state.wallet)
	return (
		<ScrollView
			style={{
				paddingHorizontal: 16,
				marginTop: 29,
			}}>
			<View style={styles.card}>
				<ImageBackground
					resizeMode='cover'
					style={styles.bgImage}
					source={require('../../assets/card.png')}>
					<WalletTitle style={{ fontSize: 35, lineHeight: 40, marginTop: 40 }}>
						6.458980 ETH
					</WalletTitle>
					<View style={styles.priceBlock}>
						<WalletText>~ $6,2334.56</WalletText>
					</View>
				</ImageBackground>
			</View>
			<View style={{ marginTop: 30 }}>
				<WalletNav />
			</View>
			<View style={{ marginBottom: 40 }}>
				{transactions.length < 1 ? (
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'center',
							alignItems: 'center',
							marginTop: 24,
						}}>
						<Image
							style={{ marginRight: 10 }}
							source={require('../../assets/icons/bar-chart.png')}
						/>
						<WalletText color='brown'>No transactoins history yet</WalletText>
					</View>
				) : (
					<TransactionsList data={transactions} />
				)}
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	card: {
		height: 180,
		width: '100%',
	},
	bgImage: {
		width: '100%',
		height: '100%',
		borderRadius: 15,
		overflow: 'hidden',
		alignItems: 'center',
	},
	priceBlock: {
		flexDirection: 'row',
		alignItems: 'center',
		borderRadius: 50,
		backgroundColor: THEME.BROWN_DARK,
		paddingHorizontal: 15,
		paddingVertical: 7,
		marginTop: 25,
	},
})
