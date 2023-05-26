import React, { useState, useEffect } from 'react'
import { WalletText, WalletTitle } from '../UI/'
import { View, StyleSheet, ImageBackground, Dimensions } from 'react-native'
import { THEME } from '../../Theme'
import { useSelector } from 'react-redux'
import fixNum from './../../../services/funcWallet/fixNum'
import { LoaderCard } from '../Loader/LoaderCard'
// import { useHeaderHeight } from '@react-navigation/elements'
const width = Dimensions.get('window').width
export const InfoPriseSlide = () => {
	const height = 100
	const { portfolioBalance } = useSelector((state) => state.wallet)
	const [balance, setBalance] = useState(null)
	useEffect(() => {
		if (portfolioBalance != null) setBalance(portfolioBalance)
	}, [portfolioBalance])

	return (
		<View
			style={{
				position: 'relative',
				paddingHorizontal: 24,
				marginBottom: 30,
				justifyContent: 'center',
				alignItems: 'center',
				marginTop: height + 20,
			}}>
			<ImageBackground
				style={styles.bgImage}
				resizeMode='contain'
				source={require('../../../assets/bg-card-wallet.png')}
			/>
			{balance != null ? (
				<View style={styles.wrap}>
					<WalletTitle
						style={{
							color: THEME.WHITE,
							fontSize: 35,
							lineHeight: 40,
							marginTop: 7,
							fontFamily: 'mt-semi-bold',
						}}>
						$ {balance.absolute_change_24h && fixNum(balance['total_value'])}
					</WalletTitle>
					<View style={styles.priceBlock}>
						<WalletText
							fw='bold'
							style={{ marginRight: 15 }}
							color={balance.relative_change_24h > 0 ? 'green-light' : 'red'}>
							{balance.absolute_change_24h &&
								fixNum(balance.absolute_change_24h) + ' $'}
						</WalletText>
						<View
							style={[
								balance.relative_change_24h > 0
									? styles.greenBox
									: styles.redBox,
							]}>
							<WalletText
								fw='bold'
								style={{ marginLeft: 7 }}
								color={balance.relative_change_24h > 0 ? 'green-light' : 'red'}>
								{balance.absolute_change_24h
									? balance.relative_change_24h > 0
										? '+ ' + fixNum(balance.relative_change_24h)
										: fixNum(balance.relative_change_24h)
									: '0'}
								%
							</WalletText>
						</View>
					</View>
				</View>
			) : (
				<LoaderCard />
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	redBox: {
		backgroundColor: 'rgba(222, 57, 87, 0.2)',
		borderRadius: 6,
		paddingRight: 6,
		paddingVertical: 4,
	},
	greenBox: {
		backgroundColor: ' rgba(72, 212, 158, 0.2)',
		borderRadius: 6,
		paddingRight: 6,
		paddingVertical: 4,
	},
	bgImage: {
		width: width * 1.3,
		height: width * 1.4,
		position: 'absolute',
	},
	wrap: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-start',
		backgroundColor: THEME.PRIMARY,
		padding: 24,
		paddingBottom: 28,
		borderRadius: 24,
		width: '100%',
	},
	imageUp: {
		marginRight: 4,
		marginLeft: 10,
	},
	priceBlock: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 20,
	},
})
