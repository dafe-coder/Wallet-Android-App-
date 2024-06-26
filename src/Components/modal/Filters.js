import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { WalletText } from './../UI'
import { THEME } from './../../Theme'
import { useDispatch, useSelector } from 'react-redux'
import { setPortfolioSort } from '../../store/actions/walletActions'
import { SvgIcon } from './../svg/svg'

export const Filters = ({ onClose }) => {
	const dispatch = useDispatch()
	const { portfolioSort } = useSelector((state) => state.wallet)
	const onChooseSort = (sort) => {
		onClose()
		dispatch(setPortfolioSort(sort))
	}
	return (
		<View
			style={{
				width: '100%',
			}}>
			<TouchableOpacity
				activeOpacity={0.7}
				style={styles.item}
				onPress={() => onChooseSort('value')}>
				<WalletText size='m' color='white'>
					Portfolio Value
				</WalletText>
				{portfolioSort == 'value' ? <SvgIcon type='check' /> : <></>}
			</TouchableOpacity>
			<TouchableOpacity
				activeOpacity={0.7}
				style={styles.item}
				onPress={() => onChooseSort('name')}>
				<WalletText size='m' color='white'>
					Name
				</WalletText>
				{portfolioSort == 'name' ? <SvgIcon type='check' /> : <></>}
			</TouchableOpacity>
			<TouchableOpacity
				activeOpacity={0.7}
				style={styles.item}
				onPress={() => onChooseSort('change')}>
				<WalletText size='m' color='white'>
					Daily change
				</WalletText>
				{portfolioSort == 'change' ? <SvgIcon type='check' /> : <></>}
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	item: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderBottomColor: THEME.BROWN,
		borderBottomWidth: 1,
		paddingVertical: 10,
	},
})
