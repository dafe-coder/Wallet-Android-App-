import React, { useRef, useState, useEffect } from 'react'
import {
	View,
	TouchableOpacity,
	Image,
	StyleSheet,
	ScrollView,
} from 'react-native'
import { WalletInput, WalletText } from './../Components/UI/'
import { SelectCoinSent } from '../Components'
import { WalletButton } from './../Components/UI/WalletButton'
import { WalletBottomSheet } from '../Components'
import { ChooseCoins } from '../Components/modal'
import { useSelector } from 'react-redux'
export const SentScreen = ({ navigation }) => {
	const { allCoins, chooseCoin } = useSelector((state) => state.wallet)
	const coinsRef = useRef(null)

	const onChooseCoin = () => {
		coinsRef.current.expand()
	}
	const onCoinPress = () => {
		coinsRef.current.close()
	}

	return (
		<ScrollView
			contentContainerStyle={{
				flexGrow: 1,
				paddingBottom: 50,
				paddingTop: 29,
				justifyContent: 'space-between',
			}}>
			<View
				style={{
					flex: 1,
				}}>
				<View style={{ marginBottom: 39, flex: 0, paddingHorizontal: 16 }}>
					<WalletText
						color='brown'
						style={{ paddingLeft: 19, marginBottom: 7 }}>
						Recipient Address
					</WalletText>
					<TouchableOpacity style={styles.qrButton}>
						<Image source={require('../../assets/camera-qr.png')} />
					</TouchableOpacity>
					<WalletInput placeholder='Public Address (0x...) or ENS' />
				</View>
				<View
					style={{
						marginHorizontal: 16,
						flex: 1,
						justifyContent: 'space-between',
					}}>
					{chooseCoin != null ? (
						<SelectCoinSent onChooseCoin={onChooseCoin} />
					) : (
						<></>
					)}
					<WalletButton
						style={{
							marginTop: 60,
						}}
						onPress={() => navigation.navigate('ConfirmTransaction')}>
						Send
					</WalletButton>
				</View>
			</View>
			<WalletBottomSheet ref={coinsRef} snapPoints={['55%']}>
				{allCoins.length ? (
					<ChooseCoins allCoins={allCoins} onCoinPress={onCoinPress} />
				) : (
					<></>
				)}
			</WalletBottomSheet>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	qrButton: {
		position: 'absolute',
		bottom: 19,
		right: 35,
		zIndex: 1,
	},
})
