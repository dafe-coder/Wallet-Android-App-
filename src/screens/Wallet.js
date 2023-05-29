import React from 'react'
import { View, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import { Header, PortfolioItem, Menu } from './../Components/'
import { WalletText, WalletButton, WalletTitle } from '../Components/UI'
import { SvgIcon } from './../Components/svg/svg'
import data from '../../coinsWithBalance.json'
import { useNavigate } from 'react-router-native'

export const Wallet = () => {
	const navigate = useNavigate()

	return (
		<View
			style={{
				flex: 1,
			}}>
			<ScrollView
				contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 24 }}>
				<Header title='Your Balance' />
				<View style={styles.pricesBlock}>
					<WalletTitle color='white' fw='bold' style={{ marginBottom: 8 }}>
						$290 083.32
					</WalletTitle>
					<View style={{ flexDirection: 'row' }}>
						<WalletText>+ $5 422.86 (1.87%)</WalletText>
						<WalletText style={{ marginLeft: 10 }}>last 24h</WalletText>
					</View>
				</View>
				<View style={styles.btns}>
					<WalletButton
						to='/receive'
						type='green'
						style={{ marginRight: '6%', width: '47%' }}>
						Receive Crypto
					</WalletButton>
					<WalletButton type='green' style={{ width: '47%' }}>
						Send Crypto
					</WalletButton>
				</View>
				<View style={styles.nav}>
					<TouchableOpacity
						style={{ flexDirection: 'row', alignItems: 'center' }}>
						<SvgIcon style={{ marginRight: 5 }} type='plus' />
						<WalletText>Manage assets</WalletText>
					</TouchableOpacity>
					<TouchableOpacity
						style={{ flexDirection: 'row', alignItems: 'center' }}>
						<SvgIcon style={{ marginRight: 5 }} type='filter' />
						<WalletText>Portfolio Value</WalletText>
						<SvgIcon style={{ marginLeft: 5 }} type='angle-down' />
					</TouchableOpacity>
				</View>
				<View style={{ marginTop: 20, marginBottom: 50 }}>
					{data.positions.length ? (
						data.positions.map((item, i) => (
							<PortfolioItem
								key={i}
								title={item.attributes.fungible_info.name}
								price={item.attributes.value}
								count={item.attributes.quantity.float}
								percent={item.attributes.changes.percent_1d}
								img={item.attributes.fungible_info.icon.url}
							/>
						))
					) : (
						<></>
					)}
				</View>
			</ScrollView>
			<Menu />
		</View>
	)
}

const styles = StyleSheet.create({
	btns: {
		flexDirection: 'row',
	},
	pricesBlock: {
		alignItems: 'center',
		marginBottom: 50,
	},
	nav: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginTop: 30,
	},
})
