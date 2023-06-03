import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { THEME } from '../Theme'
import { WalletText, SwitchButton } from './UI'

const AssetsItem = ({ item }) => {
	const [enabled, setEnabled] = React.useState(false)
	return (
		<View style={styles.item}>
			<View style={{ flexDirection: 'row', alignItems: 'center' }}>
				<Image
					resizeMode='cover'
					source={{ uri: item.image.thumb }}
					style={{
						width: 20,
						height: 20,
						marginRight: 10,
						borderRadius: 50,
						overflow: 'hidden',
					}}
				/>
				<WalletText size='xs' upperCase>
					{item.name}
				</WalletText>
			</View>
			<SwitchButton enabled={enabled} setEnabled={setEnabled} />
		</View>
	)
}

export default React.memo(AssetsItem)

const styles = StyleSheet.create({
	item: {
		borderWidth: 1,
		borderColor: THEME.WHITE,
		backgroundColor: THEME.GREEN_LIGHT,
		paddingHorizontal: 20,
		paddingVertical: 16,
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		borderRadius: 16,
		marginBottom: 10,
	},
})
