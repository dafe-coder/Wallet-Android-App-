import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { Header, SubmitText } from './../../Components/'
import { SvgIcon } from './../../Components/svg/svg'
import { WalletButton, WalletText } from './../../Components/UI/'

export const Submit = () => {
	return (
		<ScrollView contentContainerStyle={styles.wrap}>
			<Header title='Create Wallet' />
			<SvgIcon type='like' style={{ marginTop: 20 }} />
			<WalletText
				size='m'
				fw='bold'
				style={{ marginTop: 30, marginBottom: 50 }}>
				Wallet Created Successfully
			</WalletText>
			<View style={{ width: '100%' }}>
				<WalletText style={{ marginBottom: 40 }}>
					On the following screen, you will see a set of 12-24 random words.
					{'\n'}
					{'\n'}
					This is your wallet backup phrase. It can be entered in any version
					of Name in order to back up or restore your wallet’s funds and
					private key.
				</WalletText>
			</View>
			<View style={{ width: '100%', marginTop: 'auto', marginBottom: 25 }}>
				<SubmitText style={{ marginBottom: 30 }}>
					Make sure nobody looks into your screen unless you want them to have
					access to your funds.
				</SubmitText>
				<WalletButton disabled={false} to='/take-notebook'>
					{' '}
					Continue
				</WalletButton>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	wrap: {
		flex: 1,
		alignItems: 'center',
	},
})
