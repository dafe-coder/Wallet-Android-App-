import React, { useState, useEffect } from 'react'
import { WalletText, WalletTitle } from '../UI/'
import { View, StyleSheet, ImageBackground, Dimensions } from 'react-native'
import { THEME } from '../../Theme'
import { useSelector } from 'react-redux'
import fixNum from './../../../services/funcWallet/fixNum'
import { LoaderCard } from '../Loader/LoaderCard'
import { useHeaderHeight } from '@react-navigation/elements'
import { WalletNav } from '../WalletNav'

const width = Dimensions.get('window').width
export const InfoPriseSlide = () => {
	const height = useHeaderHeight()
	const { portfolioBalance } = useSelector((state) => state.wallet)
	const [balance, setBalance] = useState(null)
	useEffect(() => {
		if (portfolioBalance != null) setBalance(portfolioBalance)
	}, [portfolioBalance])

	return (
		<View
			style={{
				position: 'relative',
				paddingHorizontal: 20,
				marginBottom: 30,
				justifyContent: 'center',
				alignItems: 'center',
				marginTop: height + 20,
			}}>
			{balance != null ? (
				<ImageBackground
					imageStyle={styles.imgBg}
					resizeMode='cover'
					style={styles.wrap}
					source={require('../../../assets/bg-card-wallet.png')}>
					<WalletTitle
						style={{
							color: THEME.WHITE,
							fontSize: 28,
							lineHeight: 33,
							fontFamily: 'int-semi-bold',
						}}>
						$ {balance.absolute_change_24h && fixNum(balance['total_value'])}
					</WalletTitle>
					<View style={styles.priceBlock}>
						<WalletText
							size='s'
							fw='bold'
							style={{ marginRight: 7 }}
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
								size='s'
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
				</ImageBackground>
			) : (
				<LoaderCard />
			)}
			<WalletNav />
		</View>
	)
}

const styles = StyleSheet.create({
	priceBlock: {
		position: 'absolute',
		right: 15,
		top: 15,
		flexDirection: 'row',
		alignItems: 'center',
	},
	imgBg: {
		width: width,
		position: 'absolute',
		left: -width / 16,
	},
	redBox: {
		backgroundColor: 'rgba(200, 62, 46, 0.2)',
		borderRadius: 6,
		paddingRight: 4,
		paddingVertical: 2,
	},
	greenBox: {
		backgroundColor: 'rgba(106, 210, 138, 0.2)',
		borderRadius: 6,
		paddingRight: 4,
		paddingVertical: 2,
	},
	wrap: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: THEME.PRIMARY,
		borderRadius: 24,
		width: '100%',
		height: 180,
		overflow: 'hidden',
	},
	imageUp: {
		marginRight: 4,
		marginLeft: 10,
	},
})
