import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { THEME } from '../Theme'
import { WalletText, SwitchButton } from './UI'
import fixNum from '../../services/funcWallet/fixNum'
import { useSelector } from 'react-redux'

const AssetsItem = ({ item, choose = false, onChooseCoin }) => {
	const { chooseAssets } = useSelector((state) => state.storage)
	const [enabled, setEnabled] = React.useState(false)
	React.useEffect(() => {
		setEnabled(chooseAssets.includes(item.symbol.toLowerCase()))
	}, [chooseAssets])
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
			{choose ? (
				<WalletText size='xs'>{fixNum(item.market_data.balance)}</WalletText>
			) : (
				<SwitchButton coin={item} enabled={enabled} setEnabled={onChooseCoin} />
			)}
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
