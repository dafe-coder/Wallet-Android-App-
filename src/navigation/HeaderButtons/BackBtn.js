import React from 'react'
import { TouchableOpacity, View, StyleSheet } from 'react-native'
import { SvgIcon } from '../../Components/svg/svg'
import { THEME } from '../../Theme'

export const BackBtn = ({ navigation }) => {
	const onPressButton = () => {
		navigation.goBack()
	}
	return (
		<View>
			<TouchableOpacity activeOpacity={0.7} onPress={onPressButton}>
				<View style={styles.btn}>
					<SvgIcon
						type='check-left'
						width={10}
						height={16}
						style={{ marginLeft: -2 }}
						fill={THEME.VIOLET_LIGHT}
					/>
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
		borderColor: THEME.VIOLET_LIGHT,
		borderWidth: 1,
		borderRadius: 50,
		justifyContent: 'center',
		alignItems: 'center',
	},
})
