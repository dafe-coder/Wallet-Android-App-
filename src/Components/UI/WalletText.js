import React, { Children } from 'react'
import { THEME } from './../../Theme'

export const WalletText = ({ size = 'sm', children }) => {
	switch (size) {
		case 'sm':
			return (
				<View>
					<Text style={styles.sm}>{children}</Text>
				</View>
			)
		case 'm':
			return (
				<View>
					<Text>{children}</Text>
				</View>
			)
	}
}

const styles = StyleSheet.create({
	textPrimary: {
		color: THEME.WHITE,
	},
	sm: {
		fontSize: 14,
		fontFamily: 'ub-regular',
	},
	m: {
		fontSize: 16,
		fontFamily: 'ub-regular',
	},
})
