import React from 'react'
import { TouchableOpacity, View, StyleSheet } from 'react-native'
import { SvgIcon } from '../../Components/svg/svg'

export const BackBtn = ({ navigation }) => {
	const onPressButton = () => {
		navigation.goBack()
	}
	return (
		<View>
			<TouchableOpacity activeOpacity={0.7} onPress={onPressButton}>
				<View style={styles.btn}>
					<SvgIcon type='check-left' />
				</View>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	btn: {
		width: 32,
		height: 32,
		justifyContent: 'center',
		alignItems: 'center',
	},
})
