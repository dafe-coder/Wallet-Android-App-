import React from 'react'
import { TouchableOpacity, View, StyleSheet } from 'react-native'
import { SvgIcon } from '../../Components/svg/svg'

export const HistoryBtn = ({ navigation }) => {
	const onPressButton = () => {
		navigation.navigate('TransactionHistory')
	}
	return (
		<TouchableOpacity activeOpacity={0.7} onPress={onPressButton}>
			<View style={styles.btn}>
				<SvgIcon type='history' fill={'#9667E5'} />
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	btn: {
		width: 32,
		height: 32,
		borderRadius: 50,
		overflow: 'hidden',
		borderWidth: 1,
		borderColor: '#BDA5E4',
		justifyContent: 'center',
		alignItems: 'center',
	},
})
