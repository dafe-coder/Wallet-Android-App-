import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { WalletText } from './UI/WalletText'
import { THEME } from '../Theme'
import { useDispatch, useSelector } from 'react-redux'
import { setValidWords } from '../store/slices/walletSlice'

export const VerifyBox = ({ data, choose = false, chooseWord, id = 0 }) => {
	const dispatch = useDispatch()

	const onChooseWord = (item) => {
		dispatch(setValidWords([id, item]))
	}
	return (
		<View style={styles.box}>
			{choose == false && data.length ? (
				data.map((item, id) => (
					<View
						style={[styles.word, (id + 1) % 4 == 0 && { marginRight: 0 }]}
						key={id}>
						<WalletText size='xs' center>
							{item}
						</WalletText>
					</View>
				))
			) : (
				<></>
			)}
			{choose && data.length ? (
				data.map((item, id) => (
					<TouchableOpacity
						activeOpacity={0.7}
						style={[
							styles.word,
							(id + 1) % 4 == 0 && { marginRight: 0 },
							chooseWord == item && { borderColor: THEME.SUCCESS },
						]}
						onPress={() => onChooseWord(item)}
						key={id}>
						<WalletText
							size='xs'
							center
							style={[chooseWord == item && { color: THEME.SUCCESS }]}>
							{item}
						</WalletText>
					</TouchableOpacity>
				))
			) : (
				<></>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	box: {
		backgroundColor: THEME.GREEN_LIGHT,
		borderRadius: 16,
		borderWidth: 1,
		borderColor: THEME.WHITE,
		width: '100%',
		padding: 20,
		paddingBottom: 15,
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	word: {
		paddingVertical: 5,
		flexBasis: '23.5%',
		borderWidth: 1,
		borderColor: THEME.WHITE,
		backgroundColor: 'rgba(255, 255, 255, 0.2)',
		borderRadius: 8,
		marginRight: 5,
		marginBottom: 5,
		justifyContent: 'center',
		alignItems: 'center',
	},
})
