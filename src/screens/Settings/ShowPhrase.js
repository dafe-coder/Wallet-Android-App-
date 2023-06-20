import React from 'react'
import { View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { Header, Alert } from './../../Components/'
import { WalletText, WalletInput } from '../../Components/UI'
import { WalletButton } from './../../Components/UI/WalletButton'
import { THEME } from '../../Theme'
import { SvgIcon } from './../../Components/svg/svg'
import { useSelector } from 'react-redux'
import { ButtonCopySm } from './../../Components/UI/ButtonCopySm'

export const ShowPhrase = () => {
	const { dataUser, currentAccount, password } = useSelector(
		(state) => state.storage
	)
	const [phrase, setPhrase] = React.useState('')
	const [showPhrase, setShowPhrase] = React.useState(false)
	const [passwordValue, setPasswordValue] = React.useState('')

	React.useEffect(() => {
		if (dataUser.length && currentAccount !== '') {
			setPhrase(dataUser.find((item) => item.name === currentAccount).phrase)
		}
	}, [dataUser])

	const confirmPassword = () => {
		if (password === passwordValue) {
			setShowPhrase(true)
		} else {
			setPasswordValue('')
		}
	}

	return (
		<ScrollView
			keyboardShouldPersistTaps={'handled'}
			contentContainerStyle={{
				flex: 1,
				paddingHorizontal: 24,
				paddingBottom: 25,
			}}>
			<Header title='Seed Phrase' />
			<View style={{ flex: 1, marginBottom: 40 }}>
				<WalletText style={{ marginBottom: 30 }}>
					If you ever change browsers or move computers, you will need this seed
					phrase to access your accounts. Save them somewhere safe and secret.
				</WalletText>
				<Alert title='Keep Mnemonic Phrase Safe!'>
					Do not share this phrase with anyone! These words can be used to steal
					all of your accounts.
				</Alert>
				{!showPhrase ? (
					<WalletInput
						password
						setValue={setPasswordValue}
						value={passwordValue}
						style={{ marginTop: 30 }}
						placeholder='Password'
					/>
				) : (
					<></>
				)}
				{showPhrase ? (
					<View style={{ marginTop: 30 }}>
						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center',
								justifyContent: 'space-between',
							}}>
							<WalletText style={{ marginBottom: 10 }}>
								Your seed phrase
							</WalletText>
							<ButtonCopySm
								text={atob(phrase)}
								style={{ position: 'relative', top: -2 }}
							/>
						</View>
						<View style={styles.wrapPhrase}>
							<WalletText size='m' fw='bold'>
								{atob(phrase)}
							</WalletText>
						</View>
					</View>
				) : (
					<></>
				)}
			</View>
			{!showPhrase ? (
				<WalletButton
					onPress={confirmPassword}
					style={{ marginTop: 'auto', marginBottom: 10 }}>
					Next
				</WalletButton>
			) : (
				<></>
			)}
			<WalletButton type='border' to={-1}>
				Cancel
			</WalletButton>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	wrapPhrase: {
		backgroundColor: THEME.GREEN_BG,
		borderColor: THEME.SUCCESS,
		borderWidth: 1,
		borderRadius: 16,
		paddingHorizontal: 20,
		paddingVertical: 16,
	},
})
