import React from 'react'
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { THEME } from '../Theme'
import { WalletText } from './UI'
import { SvgIconNav } from './svg/svgNav'
import { SvgIcon } from './svg/svg'
import { useSelector } from 'react-redux'

export const AccountItemMenu = ({ image, title, topLine, onPress }) => {
	const { backup } = useSelector((state) => state.storage)

	return (
		<TouchableOpacity activeOpacity={0.7} onPress={() => onPress(title)}>
			<View style={[{ ...styles.item }, topLine ? { ...styles.topLine } : {}]}>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<View style={styles.circle}>
						<SvgIconNav type={image} style={{}} />
					</View>
					<WalletText color='white' size='m' fw='bold'>
						{title}
					</WalletText>
				</View>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					{title == 'Backup' && backup && (
						<View style={styles.circleCheck}>
							<SvgIcon fill={THEME.GREEN_LIGHT} type='check' />
						</View>
					)}
					<SvgIcon fill={THEME.WHITE} type='play' />
				</View>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	circleCheck: {
		width: 24,
		height: 24,
		borderRadius: 50,
		backgroundColor: '#1A1B28',
		marginRight: 20,
		justifyContent: 'center',
		alignItems: 'center',
	},
	circle: {
		width: 30,
		height: 30,
		borderRadius: 50,
		justifyContent: 'center',
		alignItems: 'flex-start',
		marginRight: 4,
	},
	item: {
		paddingVertical: 16,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingRight: 17,
	},
	img: {
		marginRight: 20,
	},
	topLine: {
		borderColor: THEME.DISABLED_TEXT,
		borderBottomWidth: 1,
	},
})
