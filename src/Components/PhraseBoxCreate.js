import React from 'react'
import { View, StyleSheet } from 'react-native'
import { THEME } from './../Theme'
import { WalletText } from './UI'
import { ButtonCopy } from './UI/ButtonCopy'
export const PhraseBoxCreate = () => {
	return (
		<View style={styles.box}>
			<View style={styles.item}>
				<WalletText style={styles.itemText} size='m' color='white'>
					1.hero
				</WalletText>
				<WalletText style={styles.itemText} size='m' color='white'>
					2.pave
				</WalletText>
				<WalletText style={styles.itemText} size='m' color='white'>
					3.heropave
				</WalletText>
				<WalletText style={styles.itemText} size='m' color='white'>
					1.hero
				</WalletText>
			</View>
			<View style={styles.item}>
				<WalletText style={styles.itemText} size='m' color='white'>
					1.hero
				</WalletText>
				<WalletText style={styles.itemText} size='m' color='white'>
					1.hero
				</WalletText>
				<WalletText style={styles.itemText} size='m' color='white'>
					1.hero
				</WalletText>
				<WalletText style={styles.itemText} size='m' color='white'>
					1.hero
				</WalletText>
			</View>
			<View style={styles.item}>
				<WalletText style={styles.itemText} size='m' color='white'>
					1.hero
				</WalletText>
				<WalletText style={styles.itemText} size='m' color='white'>
					1.hero
				</WalletText>
				<WalletText style={styles.itemText} size='m' color='white'>
					1.hero
				</WalletText>
				<WalletText style={styles.itemText} size='m' color='white'>
					12.feature
				</WalletText>
			</View>
			<ButtonCopy style={{ bottom: 10 }} onPress={() => {}} />
		</View>
	)
}

const styles = StyleSheet.create({
	box: {
		backgroundColor: THEME.BROWN,
		paddingHorizontal: 20,
		paddingVertical: 20,
		paddingBottom: 40,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: THEME.BROWN_TEXT,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	item: {
		flexBasis: '30%',
	},
	itemText: {
		lineHeight: 27,
	},
})
