import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { THEME } from './../Theme'
import { WalletText } from './UI/WalletText'
import { SwitchButton } from './UI'
export const SettingsItemMenu = ({
	title,
	subTitle,
	switchButton,
	onPress,
}) => {
	return (
		<TouchableOpacity activeOpacity={0.9} onPress={() => onPress(title)}>
			<View style={styles.item}>
				<View style={styles.titles}>
					<WalletText>{title}</WalletText>
					<WalletText color='brown'>{subTitle}</WalletText>
				</View>
				{switchButton ? (
					<SwitchButton enabled={true} />
				) : (
					<Image source={require('../../assets/polygon.png')} />
				)}
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	item: {
		borderRadius: 5,
		paddingHorizontal: 20,
		backgroundColor: THEME.BROWN_DARK,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 12,
		paddingVertical: 8,
	},
	titles: {},
})
