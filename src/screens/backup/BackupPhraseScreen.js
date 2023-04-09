import React from 'react'
import { ScrollView, Dimensions, View, StyleSheet, Text } from 'react-native'
import { Card, Alert } from '../../Components/'
import { WalletButton, WalletText } from '../../Components/UI'
import { THEME } from '../../Theme'
import { useSelector } from 'react-redux'
import { ButtonCopy } from './../../Components/UI/ButtonCopy'

const width = Dimensions.get('window').width
export const BackupPhraseScreen = ({ navigation }) => {
	const { dataUser } = useSelector((state) => state.storage)
	let length = atob(dataUser[0].phrase).split(' ').length / 2
	React.useEffect(() => {
		navigation.setOptions({
			headerTransparent: true,
			headerStyle: {
				backgroundColor: 'transparent',
			},
		})
	}, [navigation])

	return (
		<ScrollView contentContainerStyle={styles.wrap}>
			<View
				style={{
					flex: 1,
					justifyContent: 'space-between',
				}}>
				<Card
					style={{ paddingHorizontal: 24, marginBottom: 22 }}
					styleBody={{ paddingHorizontal: 24, paddingBottom: 28 }}
					imgSize={{ height: width * 1.5, top: -20 }}>
					<WalletText center style={{ marginBottom: 32 }}>
						Write this 12 words carefully, or save {'\n'} them to a password
						manager.
					</WalletText>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-around',
						}}>
						<View>
							{atob(dataUser[0].phrase)
								.split(' ')
								.map(
									(item, i) =>
										i < length && (
											<WalletText style={{ marginBottom: 16 }} key={i}>
												<Text style={{ color: THEME.DISABLED_TEXT }}>
													{i + 1}.
												</Text>{' '}
												{item}
											</WalletText>
										)
								)}
						</View>
						<View>
							{atob(dataUser[0].phrase)
								.split(' ')
								.map(
									(item, i) =>
										i >= length && (
											<WalletText key={i} style={{ marginBottom: 16 }}>
												<Text style={{ color: THEME.DISABLED_TEXT }}>
													{i + 1}.
												</Text>{' '}
												{item}
											</WalletText>
										)
								)}
						</View>
					</View>
				</Card>
				<View style={{ alignItems: 'center', marginBottom: 20 }}>
					<Alert color='red' style={{ marginHorizontal: 24 }}>
						Never share recovery phrase with {'\n'}anyone, store it securely!
					</Alert>
					<ButtonCopy
						text={atob(dataUser[0].phrase)}
						style={{ marginTop: 30 }}
					/>
				</View>
				<View
					style={{
						alignItems: 'center',
						marginTop: 'auto',
						paddingHorizontal: 24,
					}}>
					<WalletButton
						onPress={() => navigation.navigate('BackupWords')}
						type='white'
						style={{ width: 200, marginTop: 32, marginBottom: 40 }}>
						Next
					</WalletButton>
				</View>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	wrap: {
		paddingTop: 160,
		flexGrow: 1,
	},
})
