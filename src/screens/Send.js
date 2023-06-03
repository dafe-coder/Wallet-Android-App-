import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Header } from './../Components/'
import { WalletText, WalletInput } from './../Components/UI'
import { THEME } from '../Theme'
import { SvgIcon } from './../Components/svg/svg'

const percents = [20, 50, 75, 100]
export const Send = () => {
	return (
		<View style={{ flex: 1, paddingHorizontal: 24 }}>
			<Header title='Sent' />
			<View>
				<WalletText style={{ marginBottom: 10 }}>Asset Name</WalletText>
				<TouchableOpacity activeOpacity={0.7} style={styles.chooseAsset}>
					<WalletText>Select a token</WalletText>
					<SvgIcon
						type='angle-down'
						width={12}
						height={19}
						style={{ transform: [{ rotate: '-90deg' }] }}
					/>
				</TouchableOpacity>
				<WalletInput placeholder='Enter Address' />
				<WalletInput
					style={{ marginTop: 15, marginBottom: 20 }}
					placeholder='Amount'
				/>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					{percents.map((item, i) => (
						<TouchableOpacity
							activeOpacity={0.7}
							key={i}
							style={[styles.perc, i == percents.length && { marginRight: 0 }]}>
							<WalletText size='xs' center>
								{item}%
							</WalletText>
						</TouchableOpacity>
					))}
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	chooseAsset: {
		backgroundColor: THEME.GREEN_BG,
		borderColor: THEME.WHITE,
		borderWidth: 1,
		borderRadius: 16,
		marginBottom: 15,
		paddingHorizontal: 20,
		paddingVertical: 16,
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
	},
	perc: {
		backgroundColor: 'rgba(255, 255, 255, 0.2);',
		borderRadius: 8,
		paddingVertical: 5,
		flexBasis: '23.07%',
		justifyContent: 'center',
		flexDirection: 'row',
		alignItems: 'center',
		marginRight: '2.56%',
	},
})
