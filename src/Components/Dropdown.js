import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { WalletText } from './UI'
import { SvgIcon } from './svg/svg'
import { THEME } from '../Theme'
import { useNavigate } from 'react-router-native'

export const Dropdown = ({ title, children }) => {
	const navigate = useNavigate()
	const [expand, setExpand] = React.useState(false)

	const onChoose = () => {
		navigate('/import-data', { state: title })
	}

	return (
		<View style={styles.wrap}>
			<TouchableOpacity
				onPress={onChoose}
				style={styles.headerBtn}
				activeOpacity={1}>
				<SvgIcon type='wallet' style={{ marginRight: 10 }} />
				<WalletText>{title}</WalletText>
			</TouchableOpacity>
			<View style={styles.body}>
				<View style={[styles.content, expand && { display: 'flex' }]}>
					<WalletText>{children}</WalletText>
				</View>
				<TouchableOpacity
					onPress={() => setExpand(!expand)}
					style={[styles.footerBtn, expand && { borderTopWidth: 1 }]}
					activeOpacity={0.7}>
					<WalletText size='xs'>Learn More</WalletText>
					<SvgIcon type='angle-down' style={{ marginLeft: 2 }} />
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	body: {
		backgroundColor: THEME.GREEN_LIGHT,
		borderColor: THEME.WHITE,
		borderLeftWidth: 1,
		borderRightWidth: 1,
		borderBottomWidth: 1,
		top: -15,
		width: '100%',
		borderBottomLeftRadius: 16,
		borderBottomRightRadius: 16,
		overflow: 'hidden',
		paddingTop: 15,
	},
	content: {
		paddingHorizontal: 20,
		paddingBottom: 8,
		display: 'none',
		paddingTop: 15,
	},
	headerBtn: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: THEME.WHITE,
		borderRadius: 16,
		paddingHorizontal: 20,
		paddingVertical: 16,
		backgroundColor: THEME.GREEN_LIGHT,
		zIndex: 2,
	},
	footerBtn: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		borderTopColor: 'rgba(253, 253, 255, 0.2)',
		paddingHorizontal: 20,
		paddingVertical: 10,
		backgroundColor: THEME.GREEN_LIGHT,
	},
})
