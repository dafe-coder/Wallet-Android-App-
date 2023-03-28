import React from 'react'
import { ScrollView, View, Image, StyleSheet } from 'react-native'
import { WalletInput, WalletText, ButtonCopy } from '../../Components/UI'
import { Card } from '../../Components'
import { WalletButton } from './../../Components/UI/WalletButton'

export const ImportScreen = () => {
	const [value, setValue] = React.useState('')
	return (
		<ScrollView
			contentContainerStyle={{
				flexGrow: 1,
				paddingVertical: 40,
				justifyContent: 'space-between',
			}}>
			<View>
				<View style={{ paddingHorizontal: 24 }}>
					<WalletInput
						setValue={setValue}
						value={value}
						placeholder={`Enter or paste here the 12 or 24 words ${'\n'} from your recovery phrase.`}
					/>
					<WalletText style={{ fontSize: 12, marginTop: 10 }} color='disabled'>
						Each word should be separated by a single space. {'\n'}No numbers,
						special characters or line breaks.
					</WalletText>
					<View style={{ alignItems: 'center', marginTop: 40 }}>
						<ButtonCopy setText={setValue} paste />
					</View>
				</View>
				<View>
					<Card
						styleBody={{ paddingVertical: 30 }}
						imgSize={{ top: -20 }}
						size='sm'
						style={{ marginTop: 60 }}>
						<WalletText center fw='bold' size='m' style={{ marginBottom: 15 }}>
							Supported wallets
						</WalletText>
						<View
							style={{
								flexDirection: 'row',
								marginTop: 10,
								justifyContent: 'center',
							}}>
							<Image
								style={[styles.logo]}
								resizeMode='contain'
								source={require('../../../assets/logo/meta.png')}
							/>
							<Image
								style={[styles.logo]}
								resizeMode='contain'
								source={require('../../../assets/logo/mask.png')}
							/>
							<Image
								style={[styles.logo]}
								resizeMode='contain'
								source={require('../../../assets/logo/enjin.png')}
							/>
							<Image
								style={[styles.logo]}
								resizeMode='contain'
								source={require('../../../assets/logo/vector.png')}
							/>
							<Image
								style={[styles.logo]}
								resizeMode='contain'
								source={require('../../../assets/logo/exodus.png')}
							/>
							<Image
								style={[styles.logo, { marginRight: 0 }]}
								resizeMode='contain'
								source={require('../../../assets/logo/dots.png')}
							/>
						</View>
					</Card>
				</View>
			</View>
			<View style={{ alignItems: 'center', marginTop: 40 }}>
				<WalletButton size='m'>Import</WalletButton>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	logo: {
		height: 32,
		width: 32,
		marginRight: 11,
	},
})
