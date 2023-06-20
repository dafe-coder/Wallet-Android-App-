import React from 'react'
import { View } from 'react-native'
import { Header, VerifyBox } from '../../Components'
import { WalletButton, WalletText } from './../../Components/UI/'
import { useSelector } from 'react-redux'

export const VerifyMnemonic = () => {
	const { phrase, validWords } = useSelector((state) => state.wallet)
	const [chooseWord, setChooseWord] = React.useState('')
	const [shuffleWords, setShuffleWords] = React.useState([])
	const [disabledBtn, setDisabledBtn] = React.useState(true)

	React.useEffect(() => {
		if (chooseWord !== '') {
			setDisabledBtn(false)
		}
	}, [chooseWord])

	React.useEffect(() => {
		setChooseWord(validWords[0])
	}, [validWords])

	React.useEffect(() => {
		setShuffleWords(shuffle(phrase.split(' ')))
	}, [phrase])

	function shuffle(array) {
		const newArr = array.slice()
		for (let i = newArr.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1)) // случайный индекс от 0 до i

			;[newArr[i], newArr[j]] = [newArr[j], newArr[i]]
		}
		return newArr
	}

	return (
		<View style={{ flex: 1, paddingBottom: 25, paddingHorizontal: 24 }}>
			<Header title='Verify Mnemonic' />
			<View style={{ marginBottom: 30 }}>
				<WalletText style={{ marginBottom: 15 }}>
					Please verify your mnemonic phrase: (1/3)
				</WalletText>
				<VerifyBox data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]} />
			</View>
			<View>
				<WalletText style={{ marginBottom: 15 }}>
					Select word number 3:
				</WalletText>
				{shuffleWords !== null && (
					<VerifyBox
						id={0}
						choose={setChooseWord}
						chooseWord={chooseWord}
						data={shuffleWords}
					/>
				)}
			</View>
			<WalletButton
				disabled={disabledBtn}
				style={{ marginTop: 'auto' }}
				to='/verify-mnemonic2'>
				Next
			</WalletButton>
		</View>
	)
}
