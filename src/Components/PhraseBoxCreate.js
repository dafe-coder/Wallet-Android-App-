import React from 'react'
import { View, StyleSheet } from 'react-native'
import { WalletText } from './UI'
import { ButtonCopy } from './UI/ButtonCopy'
import { THEME } from '../Theme'
export const PhraseBoxCreate = ({ phrase, phraseText }) => {
	return (
		<View style={styles.box}>
			<View style={styles.item}>
				{phrase.map(
					(item, i) =>
						i + 1 <= 4 && (
							<WalletText
								fw='regular'
								key={Math.random().toString()}
								style={styles.itemText}
								size='m'
								color='dark'>
								{i + 1 + '. ' + item}
							</WalletText>
						)
				)}
			</View>
			<View style={styles.item}>
				{phrase.map(
					(item, i) =>
						i + 1 >= 5 &&
						i + 1 <= 8 && (
							<WalletText
								fw='regular'
								key={Math.random().toString()}
								style={styles.itemText}
								size='m'
								color='dark'>
								{i + 1 + '. ' + item}
							</WalletText>
						)
				)}
			</View>
			<View style={styles.item}>
				{phrase.map(
					(item, i) =>
						i + 1 >= 9 && (
							<WalletText
								fw='regular'
								key={Math.random().toString()}
								style={styles.itemText}
								size='m'
								color='dark'>
								{i + 1 + '. ' + item}
							</WalletText>
						)
				)}
			</View>
			<ButtonCopy style={{ bottom: 15, right: 10 }} text={phraseText} />
		</View>
	)
}

const styles = StyleSheet.create({
	box: {
		backgroundColor: THEME.GREY_LIGHT_BG,
		paddingHorizontal: 20,
		paddingVertical: 20,
		paddingBottom: 45,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: THEME.GREY_LIGHT_BG,
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
