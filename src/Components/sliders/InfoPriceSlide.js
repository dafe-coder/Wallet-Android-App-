import React, { useState, useEffect } from 'react'
import { WalletText, WalletTitle } from '../UI/'
import { View, StyleSheet, Image } from 'react-native'
import { THEME } from '../../Theme'
import { useSelector } from 'react-redux'
import fixNum from './../../../services/funcWallet/fixNum'
import { SvgIcon } from './../svg/svg'
export const InfoPriseSlide = () => {
	const { portfolioBalance } = useSelector((state) => state.wallet)
	const [balance, setBalance] = useState(null)
	useEffect(() => {
		if (portfolioBalance != null) setBalance(portfolioBalance)
	}, [portfolioBalance])

	return (
		<>
			{balance != null ? (
				<View style={styles.wrap}>
					<WalletText size='sm' style={THEME.WHITE_DARK_TEXT}>
						Your balance is equivalent
					</WalletText>
					<WalletTitle style={{ fontSize: 35, lineHeight: 40, marginTop: 7 }}>
						${balance.absolute_change_24h && fixNum(balance.assets_value)}
					</WalletTitle>
					<View style={styles.priceBlock}>
						<WalletText style={{ marginRight: 15 }}>
							~
							{balance.absolute_change_24h &&
								fixNum(balance.absolute_change_24h)}
						</WalletText>
						<SvgIcon type={balance.relative_change_24h > 0 ? 'up' : 'down'} />
						<WalletText
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
			) : (
				<></>
			)}
		</>
	)
}

const styles = StyleSheet.create({
	wrap: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-start',
		paddingTop: 32,
	},
	imageUp: {
		marginRight: 4,
		marginLeft: 10,
	},
	priceBlock: {
		flexDirection: 'row',
		alignItems: 'center',
		borderRadius: 50,
		backgroundColor: THEME.BROWN_DARK,
		paddingHorizontal: 15,
		paddingVertical: 7,
		marginTop: 20,
	},
})
