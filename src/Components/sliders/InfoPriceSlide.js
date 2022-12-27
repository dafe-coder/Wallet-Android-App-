import React, { useEffect } from 'react'
import { WalletText, WalletTitle } from '../UI/'
import { View, StyleSheet, Image } from 'react-native'
import { THEME } from '../../Theme'
import { useSelector } from 'react-redux'
import fixNum from './../../../services/funcWallet/fixNum'
import { SvgIcon } from './../svg/svg'
export const InfoPriseSlide = () => {
	const { portfolioBalance } = useSelector((state) => state.wallet)
	return (
		<View style={styles.wrap}>
			<WalletText size='sm' style={THEME.WHITE_DARK_TEXT}>
				Your balance is equivalent
			</WalletText>
			<WalletTitle style={{ fontSize: 35, lineHeight: 40, marginTop: 7 }}>
				$
				{portfolioBalance.absolute_change_24h &&
					fixNum(portfolioBalance.assets_value)}
			</WalletTitle>
			<View style={styles.priceBlock}>
				<WalletText style={{ marginRight: 15 }}>
					~
					{portfolioBalance.absolute_change_24h &&
						fixNum(portfolioBalance.absolute_change_24h)}
				</WalletText>
				<SvgIcon
					type={portfolioBalance.relative_change_24h > 0 ? 'up' : 'down'}
				/>
				<WalletText
					style={{ marginLeft: 7 }}
					color={
						portfolioBalance.relative_change_24h > 0 ? 'green-light' : 'red'
					}>
					{portfolioBalance.absolute_change_24h
						? portfolioBalance.relative_change_24h > 0
							? '+ ' + fixNum(portfolioBalance.relative_change_24h)
							: fixNum(portfolioBalance.relative_change_24h)
						: '0'}
					%
				</WalletText>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	wrap: {
		flex: 1,
		alignItems: 'center',
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
