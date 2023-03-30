import React from 'react'
import { View, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { WalletText } from './UI'
import { THEME } from './../Theme'
import { SvgIcon } from './svg/svg'
import Animated from 'react-native-reanimated'
const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity)

import { Rules, SelectCoinSent } from './'

export const SearchButton = ({ width, active, style, onPress }) => {
	return (
		<View style={styles.btn}>
			<AnimatedTouchable
				style={[styles.btnBody, style, width]}
				onPress={onPress}
				activeOpacity={0.9}>
				<SvgIcon type='search' />
				{!active && (
					<WalletText fw='bold' style={{ marginLeft: 10, color: '#000' }}>
						Search
					</WalletText>
				)}
				{active && <TextInput style={styles.input} autoFocus />}
			</AnimatedTouchable>
		</View>
	)
}

const styles = StyleSheet.create({
	input: {
		paddingLeft: 15,
	},
	btnBody: {
		backgroundColor: THEME.WHITE,
		paddingVertical: 14,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 50,
		paddingHorizontal: 16,
	},
	btn: {
		paddingHorizontal: 24,
		position: 'absolute',
		bottom: 30,
		justifyContent: 'center',
		alignItems: 'center',
		left: 0,
		right: 0,
	},
})
