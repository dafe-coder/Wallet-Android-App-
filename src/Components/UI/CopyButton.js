import React, { useState } from 'react'
import { TouchableOpacity, Image, StyleSheet, View } from 'react-native'

export const CopyButton = ({ style }) => {
	const [colorCopy, setColorCopy] = useState(false)
	const changeColorCopy = () => {
		setColorCopy(true)
		const timer = setTimeout(() => {
			setColorCopy(false)
			clearTimeout(timer)
		}, 500)
	}
	return (
		<TouchableOpacity
			onPress={changeColorCopy}
			activeOpacity={1}
			style={{
				position: 'absolute',
				zIndex: 10,
				right: 15,
				bottom: 15,
				...style,
			}}>
			<View>
				<Image
					source={
						!colorCopy
							? require('../../../assets/copy.png')
							: require('../../../assets/copy-active.png')
					}
					width={24}
					height={24}
					style={[styles.copyBtn]}
				/>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	copyBtn: {
		position: 'absolute',
		width: 24,
		height: 24,
	},
})
