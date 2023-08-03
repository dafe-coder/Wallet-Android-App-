import React from 'react'
import { View, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { THEME } from '../Theme'
import { WalletText } from './UI/'
import { PercentBlock } from './PercentBlock'
import fixNum from '../../services/funcWallet/fixNum'

export const SwapAmount = ({
	value,
	setValue,
	chooseCoin,
	style,
	type = 'in',
}) => {
	if (type == 'in') {
		const onMax = () => {
			if (chooseCoin !== null) {
				setValue(chooseCoin.market_data.balance.toString())
			}
		}
		return (
			<>
				<View style={[styles.wrap, style]}>
					<View
						style={{
							marginBottom: 10,
							justifyContent: 'space-between',
							flexDirection: 'row',
							alignItems: 'center',
						}}>
						<WalletText size='xs'>Sell</WalletText>
						<WalletText size='xs'>
							Balance:{' '}
							{fixNum(chooseCoin.market_data.balance) +
								' ' +
								chooseCoin.symbol.toUpperCase()}
						</WalletText>
					</View>
					<View
						style={{
							justifyContent: 'space-between',
							flexDirection: 'row',
							alignItems: 'center',
						}}>
						<TextInput
							placeholder='0.0'
							placeholderTextColor={THEME.WHITE}
							keyboardType='numeric'
							style={styles.inp}
							value={value}
							onChangeText={setValue}
						/>
						<TouchableOpacity activeOpacity={0.7} onPress={onMax}>
							<WalletText fw='bold'>Max</WalletText>
						</TouchableOpacity>
					</View>
				</View>
				<PercentBlock setValue={setValue} chooseCoin={chooseCoin} />
			</>
		)
	} else {
		return (
			<>
				<View style={[styles.wrap, style]}>
					<View
						style={{
							marginBottom: 10,
							justifyContent: 'space-between',
							flexDirection: 'row',
							alignItems: 'center',
						}}>
						<WalletText size='xs'>Buy</WalletText>
						<WalletText size='xs'>
							Balance:{' '}
							{fixNum(chooseCoin.market_data.balance) +
								' ' +
								chooseCoin.symbol.toUpperCase()}
						</WalletText>
					</View>
					<View
						pointerEvents='none'
						style={{
							justifyContent: 'space-between',
							flexDirection: 'row',
							alignItems: 'center',
						}}>
						<TextInput
							placeholder='0.0'
							placeholderTextColor={THEME.WHITE}
							keyboardType='numeric'
							style={styles.inp}
						/>
					</View>
				</View>
			</>
		)
	}
}

const styles = StyleSheet.create({
	wrap: {
		backgroundColor: THEME.GREEN_LIGHT,
		borderRadius: 16,
		borderColor: THEME.WHITE,
		borderWidth: 1,
		paddingHorizontal: 20,
		paddingVertical: 16,
	},
	inp: {
		color: THEME.WHITE,
	},
})
