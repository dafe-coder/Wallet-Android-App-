import React from 'react'
import { View, ScrollView, TextInput, StyleSheet } from 'react-native'
import { WalletText, WalletButton } from './../../Components/UI'
import { useSelector, useDispatch } from 'react-redux'
import { WalletModal } from './../../Components/modal'
import { setBackup } from './../../store/actions/storageAction'
import { THEME } from '../../Theme'
import { WordsComponent } from './WordsComponent'

export const BackupWordsScreen = ({ navigation }) => {
	const dispatch = useDispatch()
	const { dataUser } = useSelector((state) => state.storage)
	const [word1, setWord1] = React.useState('')
	const [word2, setWord2] = React.useState('')
	const [word3, setWord3] = React.useState('')
	const [word4, setWord4] = React.useState('')
	const [valid1, setValid1] = React.useState(false)
	const [valid2, setValid2] = React.useState(false)
	const [valid3, setValid3] = React.useState(false)
	const [disabledBtn, setDisabledBtn] = React.useState(true)

	const [isOpen, setIsOpen] = React.useState(false)
	const [isOpenErr, setIsOpenErr] = React.useState(false)

	const chooseWord = (item) => {
		if (word1 == '') {
			setWord1(item)
		} else if (word2 == '') {
			setWord2(item)
		} else if (word3 == '') {
			setWord3(item)
		} else if (word4 == '') {
			setWord4(item)
		}
	}

	React.useEffect(() => {
		if (atob(dataUser[0].phrase).split(' ')[5] === word1.toLowerCase()) {
			setValid1(true)
		} else {
			setValid1(false)
		}
		if (atob(dataUser[0].phrase).split(' ')[7] === word2.toLowerCase()) {
			setValid2(true)
		} else {
			setValid2(false)
		}
		if (atob(dataUser[0].phrase).split(' ')[11] === word3.toLowerCase()) {
			setValid3(true)
		} else {
			setValid3(false)
		}
	}, [dataUser, word1, word2, word3])

	const onCheckPhrase = () => {
		if (!disabledBtn) {
			if (valid1 && valid2 && valid3) {
				setIsOpen(true)
				dispatch(setBackup(true))
			} else {
				setIsOpenErr(true)
			}
		}
	}

	React.useEffect(() => {
		if (word1 !== '' && word2 !== '' && word3 !== '') {
			setDisabledBtn(false)
		} else {
			setDisabledBtn(true)
		}
	}, [word1, word2, word3])

	const goAccountScreen = () => {
		navigation.reset({
			index: 0,
			routes: [{ name: 'Home' }],
		})
		setTimeout(() => {
			setIsOpen(false)
		}, 300)
	}

	return (
		<ScrollView
			contentContainerStyle={{
				flexGrow: 1,
				justifyContent: 'space-between',
				paddingHorizontal: 20,
				marginTop: 20,
			}}>
			<View>
				<WalletText color='white-dark' size='m' center>
					Check you have made a correct backup by entering the corresponding
					words from your recovery phrase below.
				</WalletText>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						flexWrap: 'wrap',
						marginTop: 30,
					}}>
					<View style={styles.itemInput}>
						<WalletText>1.</WalletText>
						<TextInput
							style={styles.input}
							value={word1}
							onChangeText={setWord1}
						/>
					</View>
					<View style={styles.itemInput}>
						<WalletText>7.</WalletText>
						<TextInput
							style={styles.input}
							value={word1}
							onChangeText={setWord1}
						/>
					</View>
					<View style={styles.itemInput}>
						<WalletText>2.</WalletText>
						<TextInput
							style={styles.input}
							value={word1}
							onChangeText={setWord1}
						/>
					</View>
					<View style={styles.itemInput}>
						<WalletText>8.</WalletText>
						<TextInput
							style={styles.input}
							value={word1}
							onChangeText={setWord1}
						/>
					</View>
				</View>
				<WordsComponent />
			</View>
			<View style={{ marginTop: 40, marginBottom: 40 }}>
				<WalletButton onPress={onCheckPhrase} disabled={disabledBtn}>
					Done
				</WalletButton>
			</View>
			<WalletModal isVisible={isOpen}>
				<WalletText center fw='bold' size='m' style={{ marginBottom: 15 }}>
					Backup completed successfully!
				</WalletText>
				<WalletText
					style={{ fontSize: 12, lineHeight: 14, marginBottom: 30 }}
					center>
					Never share recovery phrase with {'\n'}anyone, store it securely!
				</WalletText>
				<WalletButton onPress={goAccountScreen} size='m'>
					Done
				</WalletButton>
			</WalletModal>
			<WalletModal styleBody={{ paddingHorizontal: 40 }} isVisible={isOpenErr}>
				<WalletText center fw='bold' size='m' style={{ marginBottom: 15 }}>
					Something went wrong!
				</WalletText>
				<WalletText
					style={{ fontSize: 12, lineHeight: 14, marginBottom: 30 }}
					center>
					You entered the wrong words, please{'\n'}check again anyone, store it
				</WalletText>
				<WalletButton onPress={() => setIsOpenErr(false)} size='m'>
					Close
				</WalletButton>
			</WalletModal>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	itemInput: {
		paddingVertical: 8,
		paddingHorizontal: 16,
		backgroundColor: THEME.BLACK,
		borderRadius: 16,
		flexBasis: '47.4%',
		marginBottom: 10,
		flexDirection: 'row',
		alignItems: 'center',
	},
	input: {
		paddingLeft: 10,
		color: THEME.WHITE,
	},
})
