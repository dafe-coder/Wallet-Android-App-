import React from 'react'
import { View, StyleSheet } from 'react-native'
import { WalletTitle, WalletInput } from './../UI/'
import { SvgIcon } from '../svg/svg'
import { THEME } from './../../Theme'
import { BottomSheetScrollView } from '@gorhom/bottom-sheet'
import { useSelector } from 'react-redux'
import { AllCoinsItem } from '../'

export const ChooseCoins = () => {
	const { allCoins } = useSelector((state) => state.wallet)
	return (
		<View style={{ flex: 1 }}>
			<WalletTitle style={{ marginBottom: 24 }}>choose tokens</WalletTitle>
			<View style={{ position: 'relative' }}>
				<View style={styles.svg}>
					<SvgIcon type='search' style={{ width: 20, height: 20 }} />
				</View>
				<WalletInput
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
				{allCoins.map((c) => (
					<AllCoinsItem coin={c} key={c.id} />
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
