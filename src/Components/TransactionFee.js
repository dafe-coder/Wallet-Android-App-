import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { THEME } from './../Theme'
import { WalletText } from './UI'

export const TransactionFee = () => {
	const [active, setActive] = React.useState(false)
	return (
		<View style={styles.box}>
			<View style={styles.tumblers}>
				<TouchableOpacity
					activeOpacity={0.8}
					onPress={() => setActive(false)}
					style={[styles.textBtn, !active && styles.activeBtn]}>
					<WalletText style={{ fontSize: 12, lineHeight: 14 }} fw='bold'>
						Fast
					</WalletText>
				</TouchableOpacity>
				<TouchableOpacity
					activeOpacity={0.8}
					onPress={() => setActive(true)}
					style={[styles.textBtn, active && styles.activeBtn]}>
					<WalletText style={{ fontSize: 12, lineHeight: 14 }} fw='bold'>
						Standard
					</WalletText>
				</TouchableOpacity>
			</View>
			<View>
				<WalletText style={{ marginBottom: 6 }} size='m' color='disabled'>
					Transaction fee
				</WalletText>
				<WalletText fw='bold' size='m'>
					{!active ? '0.34 USD' : '0.14 USD'}
				</WalletText>
			</View>
			<View style={{ marginTop: 20 }}>
				<WalletText style={{ marginBottom: 6 }} size='m' color='disabled'>
					Reception time
				</WalletText>
				{!active ? (
					<WalletText fw='bold' size='m'>
						⚡️ Instant{' '}
						<Text style={{ fontFamily: 'mt-reg', color: THEME.DISABLED_TEXT }}>
							(0 to 30 minutes)
						</Text>
					</WalletText>
				) : (
					<WalletText fw='bold' size='m'>
						🌱 2 hours in average
					</WalletText>
				)}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	box: {
		backgroundColor: THEME.GREY,
		borderRadius: 24,
		paddingHorizontal: 16,
		paddingVertical: 30,
	},
	tumblers: {
		position: 'absolute',
		right: 12,
		top: 12,
		borderRadius: 40,
		backgroundColor: THEME.PRIMARY,
		flexDirection: 'row',
		padding: 5,
	},
	textBtn: {
		paddingHorizontal: 12,
		paddingVertical: 4,
		borderRadius: 40,
	},
	activeBtn: {
		backgroundColor: THEME.VIOLET,
	},
})
