import React from 'react'
import { View, StyleSheet } from 'react-native'
import { THEME } from '../Theme'
import { WalletText } from './UI/WalletText'
import { useSelector } from 'react-redux'
import fixNum from '../../services/funcWallet/fixNum'
import { LoaderCardRestore } from './Loader/LoaderCardRestore'

export const ImportBalanceCard = ({ style }) => {
	const { walletAddress, dataWallet } = useSelector((state) => state.wallet)
	const [balanceEth, setBalanceEth] = React.useState('')

	React.useEffect(() => {
		if (dataWallet !== null && dataWallet?.positions?.length) {
			const eth = dataWallet.positions.find(
				(item) => item.attributes.fungible_info.symbol.toLowerCase() === 'eth'
			)
			if (eth !== undefined) {
				setBalanceEth(fixNum(eth.attributes.quantity.float))
			} else {
				setBalanceEth(0.0)
			}
		}
	}, [dataWallet])

	if (dataWallet !== null) {
		return (
			<View style={[styles.wrap, style]}>
				<WalletText style={{ marginBottom: 10 }} fw='bold'>
					Account
				</WalletText>
				<WalletText
					style={{
						marginBottom: 10,
						textOverflow: 'hidden',
						textWrap: 'no-wrap',
					}}
					numberOfLines={1}
					size='xs'
					fw='bold'>
					{walletAddress !== '' && walletAddress.length ? walletAddress : ''}
				</WalletText>
				<WalletText fw='bold'>Balance: {balanceEth} ETH</WalletText>
			</View>
		)
	} else {
		return <LoaderCardRestore />
	}
}

const styles = StyleSheet.create({
	wrap: {
		backgroundColor: THEME.GREEN_LIGHT,
		borderWidth: 1,
		borderColor: THEME.WHITE,
		borderRadius: 16,
		paddingHorizontal: 20,
		paddingVertical: 16,
	},
})
