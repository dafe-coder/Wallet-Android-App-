import React from 'react'
import { View, StyleSheet } from 'react-native'
import { AccountCard } from '../../Components'
import { AccountListMenu } from './../../Components'
export const AccountScreen = () => {
	return (
		<View style={styles.wrap}>
			<View
				style={{
					paddingHorizontal: 16,
				}}>
				<AccountCard />
			</View>
			<AccountListMenu />
		</View>
	)
}

const styles = StyleSheet.create({
	wrap: {
		paddingTop: 30,
	},
})
