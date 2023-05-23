import React from 'react'
import { ScrollView, Dimensions, View, StyleSheet, Text } from 'react-native'
import { Alert } from '../../Components/'
import { WalletButton, WalletText } from '../../Components/UI'
import { THEME } from '../../Theme'
import { useSelector } from 'react-redux'
import { ButtonCopy } from './../../Components/UI/ButtonCopy'

const width = Dimensions.get('window').width
export const BackupPhraseScreen = ({ navigation }) => {
	const { dataUser } = useSelector((state) => state.storage)
	let length = atob(dataUser[0].phrase).split(' ').length / 2

	return (
		<ScrollView contentContainerStyle={styles.wrap}>
			<View
				style={{
					flex: 1,
					justifyContent: 'space-between',
				}}>
				<View style={{ paddingHorizontal: 24, marginBottom: 22 }}>
					<WalletText
						size='m'
						color='white-dark'
						center
						style={{ marginBottom: 32 }}>
						Write this 12 words carefully, or save {'\n'} them to a password
						manager.
					</WalletText>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
						}}>
						<View style={{ width: '47%' }}>
							{atob(dataUser[0].phrase)
								.split(' ')
								.map(
									(item, i) =>
										i < length && (
											<View key={i} style={styles.itemWord}>
												<WalletText size='m'>
													<Text>{i + 1}.</Text> {item}
												</WalletText>
											</View>
										)
								)}
						</View>
						<View style={{ width: '47%' }}>
							{atob(dataUser[0].phrase)
								.split(' ')
								.map(
									(item, i) =>
										i >= length && (
											<View key={i} style={styles.itemWord}>
												<WalletText size='m'>
													<Text>{i + 1}.</Text> {item}
												</WalletText>
											</View>
										)
								)}
						</View>
					</View>
					<ButtonCopy
						text={atob(dataUser[0].phrase)}
						style={{ marginTop: 10 }}
					/>
				</View>
				<View
					style={{
						marginTop: 'auto',
						paddingHorizontal: 20,
					}}>
					<Alert
						color='red'
						style={{
							marginHorizontal: 20,
							marginBottom: 17,
						}}>
						Never share recovery phrase {'\n'}with anyone, store it securely!
					</Alert>
					<WalletButton
						onPress={() => navigation.navigate('BackupWords')}
						type='white'
						style={{ marginBottom: 40 }}>
						Next
					</WalletButton>
				</View>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	itemWord: {
		backgroundColor: THEME.BLACK,
		paddingHorizontal: 16,
		paddingVertical: 8,
		borderRadius: 16,
		marginBottom: 10,
	},
	wrap: {
		paddingTop: 20,
		flexGrow: 1,
	},
})
