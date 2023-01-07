import React, { useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { WalletTitle, WalletInput } from './../UI/'
import { SvgIcon } from '../svg/svg'
import { THEME } from './../../Theme'
import { BottomSheetScrollView } from '@gorhom/bottom-sheet'
import { AllCoinsItem } from '../'

export const ChooseCoins = ({ onCoinPress, allCoins, chooseCoin }) => {
	const [value, setValue] = useState('')
	const [filteredCoins, setFilteredCoins] = useState([])

	useEffect(() => {
		if (value != '') {
			const filtered = allCoins.filter(
				(c) =>
					c.symbol.toLowerCase().includes(value.toLowerCase()) ||
					c.name.toLowerCase().includes(value.toLowerCase())
			)
			setFilteredCoins(filtered)
		} else {
			setFilteredCoins(allCoins)
		}
	}, [value, allCoins])

	return (
		<View style={{ flex: 1 }}>
			<WalletTitle style={{ marginBottom: 24 }}>choose tokens</WalletTitle>
			<View style={{ position: 'relative' }}>
				<View style={styles.svg}>
					<SvgIcon type='search' style={{ width: 20, height: 20 }} />
				</View>
				<WalletInput
					value={value}
					setValue={setValue}
					styleInput={{
						paddingVertical: 8,
						paddingLeft: 55,
						borderRadius: 10,
						borderWidth: 1,
						borderColor: THEME.BROWN_TEXT,
						backgroundColor: THEME.BROWN_DARK,
					}}
					style={{ width: '100%' }}
					placeholder='Search token'
				/>
			</View>
			<BottomSheetScrollView
				style={{
					marginTop: 20,
				}}>
				{filteredCoins.map((c) => (
					<AllCoinsItem
						chooseCoin={chooseCoin}
						onPress={onCoinPress}
						coin={c}
						key={c.id}
					/>
				))}
			</BottomSheetScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	svg: {
		position: 'absolute',
		top: 13,
		left: 20,
		zIndex: 1,
		width: 20,
		height: 20,
	},
})
