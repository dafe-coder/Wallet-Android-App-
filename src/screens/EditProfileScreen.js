import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { WalletText } from './../Components/UI/'
import { THEME } from './../Theme'
import { AccountCard } from './../Components/AccountCard'
import { WalletModal, DeleteWalletWarning } from '../Components/modal'
import { useSelector } from 'react-redux'
import { SvgIconNav } from './../Components/svg/svgNav'
import { SvgIcon } from '../Components/svg/svg'

export const EditProfileScreen = ({ navigation }) => {
	const [isVisible, setIsVisible] = React.useState(false)
	const [isPhrase, setIsPhrase] = React.useState(false)
	const { currentAccount, dataUser } = useSelector((state) => state.storage)

	React.useEffect(() => {
		const filterData = dataUser.filter((d) => d.name === currentAccount)
		if (filterData[0] && filterData[0].phrase) {
			setIsPhrase(true)
		} else {
			setIsPhrase(false)
		}
	}, [dataUser])

	const onDelete = () => {
		setIsVisible(false)
		setTimeout(() => {
			navigation.navigate('ConfirmPassword')
		}, 10)
	}

	return (
		<View style={{ paddingHorizontal: 24, paddingTop: 5 }}>
			<AccountCard edit style={{ marginBottom: 15 }} />
			<View>
				{isPhrase && (
					<TouchableOpacity
						style={styles.item}
						onPress={() =>
							navigation.navigate('ConfirmPassword', { from: 'exportPhrase' })
						}
						activeOpacity={0.7}>
						<View style={{ flexDirection: 'row', alignItems: 'center' }}>
							<SvgIconNav type='reorder' />
							<WalletText fw='bold' size='m' style={{ marginLeft: 8 }}>
								View Recovery Phrase
							</WalletText>
						</View>
						<SvgIcon fill={THEME.WHITE} type='play' />
					</TouchableOpacity>
				)}
				<TouchableOpacity
					style={styles.item}
					onPress={() =>
						navigation.navigate('ConfirmPassword', { from: 'exportKey' })
					}
					activeOpacity={0.7}>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<SvgIconNav type='key' />
						<WalletText fw='bold' size='m' style={{ marginLeft: 8 }}>
							View Private Key
						</WalletText>
					</View>
					<SvgIcon fill={THEME.WHITE} type='play' />
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.item}
					activeOpacity={0.7}
					onPress={() => setIsVisible(true)}>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<SvgIconNav type='trash' />
						<WalletText fw='bold' size='m' style={{ marginLeft: 8 }}>
							Delete wallet
						</WalletText>
					</View>
					<SvgIcon fill={THEME.WHITE} type='play' />
				</TouchableOpacity>
			</View>
			<WalletModal setIsVisible={setIsVisible} isVisible={isVisible}>
				<DeleteWalletWarning
					onDelete={onDelete}
					onClose={() => setIsVisible(false)}
				/>
			</WalletModal>
		</View>
	)
}

const styles = StyleSheet.create({
	item: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingVertical: 20,
		borderBottomColor: THEME.DISABLED_TEXT,
		borderBottomWidth: 1,
		paddingRight: 10,
	},
})
