import React, { useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { WalletTitle, WalletInput } from './../UI/'
import { SvgIcon } from '../svg/svg'
import { BottomSheetFlatList } from '@gorhom/bottom-sheet'
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
			<WalletTitle style={{ marginBottom: 24 }}>Choose Tokens</WalletTitle>
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
						borderRadius: 30,
						borderWidth: 1,
						borderColor: '#DACEF0',
					}}
					style={{ width: '100%' }}
					placeholder='Search token'
					placeholderTextColor='#9C94AC'
				/>
			</View>

			{filteredCoins.length >= 1 ? (
				<BottomSheetFlatList
					contentContainerStyle={{ marginTop: 20, paddingBottom: 20 }}
					data={filteredCoins}
					renderItem={(item, i) => (
						<AllCoinsItem
							chooseCoin={chooseCoin}
							onPress={onCoinPress}
							coin={item.item}
						/>
					)}
					keyExtractor={(item) => item.id + Math.random()}
				/>
			) : (
				<></>
			)}
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
