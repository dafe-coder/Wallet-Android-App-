import React, { useState } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { WalletText } from './UI/WalletText'

export const GenerateItem = ({
	first = false,
	loadWallet = true,
	delay = 10,
	title,
	image,
	mb = false,
}) => {
	const [load, setLoad] = React.useState(true)
	const [loadID, setLoadID] = React.useState(null)
	const [showID, setShowID] = React.useState(null)
	const [show, setShow] = React.useState(false)

	React.useEffect(() => {
		if (!loadWallet) {
			setShowID(
				setTimeout(() => {
					setShow(true)
				}, delay)
			)
		}

		return () => clearTimeout(showID)
	}, [loadWallet])

	React.useEffect(() => {
		if (!loadWallet && !first) {
			setLoadID(
				setTimeout(() => {
					setLoad(false)
				}, delay + 3000)
			)
		} else if (!loadWallet && first) {
			setLoadID(
				setTimeout(() => {
					setLoad(false)
				}, delay)
			)
		}
		return () => clearTimeout(loadID)
	}, [loadWallet])
	return (
		<View
			style={[
				styles.center,
				mb && { marginBottom: 40 },
				show || first ? { opacity: 1 } : { opacity: 0 },
			]}>
			<Image
				resizeMode='cover'
				style={{ height: 24, width: 24, marginBottom: 10 }}
				source={load ? require('../../assets/spinner-light.gif') : image}
			/>
			<WalletText size='xl' center>
				{title}
			</WalletText>
		</View>
	)
}

const styles = StyleSheet.create({
	center: {
		justifyContent: 'center',
		alignItems: 'center',
	},
})
