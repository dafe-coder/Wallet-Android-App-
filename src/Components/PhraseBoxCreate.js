import React from 'react'
import { View, StyleSheet } from 'react-native'
import { THEME } from './../Theme'
import { WalletText } from './UI'
import { ButtonCopy } from './UI/ButtonCopy'
export const PhraseBoxCreate = ({ phrase, phraseText }) => {
	return (
		<View style={styles.box}>
			<View style={styles.item}>
				{phrase.map((item, i) =>
					i + 1 <= 4 ? (
						<WalletText key={i} style={styles.itemText} size='m' color='white'>
							{i + 1 + '.' + item}
						</WalletText>
					) : (
						<></>
					)
				)}
			</View>
			<View style={styles.item}>
				{phrase.map((item, i) =>
					i + 1 >= 5 && i + 1 <= 8 ? (
						<WalletText key={i} style={styles.itemText} size='m' color='white'>
							{i + 1 + '.' + item}
						</WalletText>
					) : (
						<></>
					)
				)}
			</View>
			<View style={styles.item}>
				{phrase.map((item, i) =>
					i + 1 >= 9 ? (
						<WalletText key={i} style={styles.itemText} size='m' color='white'>
							{i + 1 + '.' + item}
						</WalletText>
					) : (
						<></>
					)
				)}
			</View>
			<ButtonCopy style={{ bottom: 10 }} text={phraseText} />
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
