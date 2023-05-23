import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { WalletText } from './UI'
import { THEME } from './../Theme'

export const TimelineItem = ({ activeTimeline, timelineText, onPress }) => {
	return (
		<TouchableOpacity
			onPress={() => onPress(timelineText)}
			activeOpacity={0.7}
			style={[
				styles.itemChooseTimeline,
				activeTimeline === timelineText && styles.activeChooseTimeline,
			]}>
			<WalletText
				size='s'
				color={activeTimeline === timelineText ? 'white' : 'white-dark'}>
				{timelineText}
			</WalletText>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	itemChooseTimeline: {
		borderRadius: 6,
		padding: 6,
		minWidth: 41,
		justifyContent: 'center',
		alignItems: 'center',
	},
	activeChooseTimeline: {
		backgroundColor: THEME.PRIMARY,
		borderRadius: 16,
	},
})
