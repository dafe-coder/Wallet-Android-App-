import React, { useState } from 'react'
import { TouchableOpacity, View, Image, StyleSheet } from 'react-native'
import { SvgIcon } from '../../Components/svg/svg'
import { THEME } from '../../Theme'

export const HistoryBtn = ({ navigation }) => {
	const [filled, setFilled] = useState(false)
	const onPressButton = () => {
		navigation.navigate('TransactionHistory')
		setFilled(true)
		setTimeout(() => {
			setFilled(false)
		}, 400)
	}
	return (
		<View>
			<TouchableOpacity
				style={{ marginLeft: 16 }}
				activeOpacity={0.7}
				onPress={onPressButton}>
				<View style={styles.btn}>
					<SvgIcon type='history' fill={filled ? THEME.GOLD : '#D3D0C9'} />
				</View>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	btn: {
		width: 32,
		height: 32,
		borderRadius: 50,
		overflow: 'hidden',
		borderColor: '#44444480',
		backgroundColor: '#51515130',
		borderWidth: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
})
