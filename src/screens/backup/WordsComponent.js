import React from 'react'
import { View, StyleSheet } from 'react-native'
import { WalletText } from '../../Components/UI'
import { THEME } from '../../Theme'

export const WordsComponent = ({
	phrase = 'danger whisper educate own honey theory',
}) => {
	return (
		<View style={styles.wrap}>
			{phrase.split(' ').length &&
				phrase.split(' ').map((item, i) => (
					<View style={styles.item}>
						<WalletText size='m' color='blue'>
							{item}
						</WalletText>
					</View>
				))}
		</View>
	)
}

const styles = StyleSheet.create({
	wrap: {
		backgroundColor: THEME.BLACK,
		borderRadius: 16,
		paddingHorizontal: 20,
		paddingTop: 24,
		paddingBottom: 7,
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		marginTop: 22,
	},
	item: {
		backgroundColor: '#191F30',
		padding: 8,
		borderRadius: 16,
		paddingLeft: 16,
		width: '48%',
		marginBottom: 17,
	},
})
