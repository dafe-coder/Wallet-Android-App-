import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Header } from './../../Components/Header'
import { WalletText } from '../../Components/UI'
import { SvgIcon } from './../../Components/svg/svg'
import { THEME } from '../../Theme'
import { Switch } from 'react-native-elements'

export const Security = () => {
	const [switcher, setSwitcher] = React.useState(false)
	return (
		<View style={{ flex: 1 }}>
			<View style={{ paddingHorizontal: 24 }}>
				<Header title='Security and Privacy' />
				<WalletText fw='bold'>Auto Lock Timer</WalletText>
				<WalletText size='xs' style={{ marginBottom: 15, marginTop: 5 }}>
					Set the idle time in minutes before Pepe Wallet is locked.
				</WalletText>
				<View style={styles.item}>
					<WalletText>30 mins</WalletText>
					<SvgIcon
						type='angle-down'
						height={10}
						width={10}
						style={{ transform: [{ rotate: '-90deg' }] }}
					/>
				</View>
			</View>
			<View style={styles.allow}>
				<View style={{ width: '70%' }}>
					<WalletText style={{ marginBottom: 6 }} upperCase>
						Allow Data Collection
					</WalletText>
					<WalletText size='xs'>
						Polygon Wallet collects your data to provide you with an improved
						user experience.
					</WalletText>
				</View>
				<Switch
					onChange={() => setSwitcher(!switcher)}
					value={switcher}
					trackColor={{ true: '#2F4925' }}
					thumbColor={switcher ? '#83EE68' : '#fff'}
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	item: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: THEME.GREEN_LIGHT,
		borderRadius: 16,
		borderWidth: 1,
		borderColor: THEME.WHITE,
		paddingHorizontal: 20,
		paddingVertical: 16,
	},
	allow: {
		backgroundColor: THEME.GREEN_LIGHT,
		borderTopColor: THEME.WHITE,
		borderBottomColor: THEME.WHITE,
		borderTopWidth: 1,
		borderBottomWidth: 1,
		paddingVertical: 24,
		marginTop: 70,
		paddingHorizontal: 24,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
})
