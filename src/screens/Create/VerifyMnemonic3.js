import React from 'react'
import { View } from 'react-native'
import { Header, VerifyBox } from '../../Components'
import { WalletButton, WalletText } from '../../Components/UI'
import { useDispatch, useSelector } from 'react-redux'
import {
	resetValidWords,
	setDataWallet,
	setWalletNew,
} from '../../store/slices/walletSlice'
import { useNavigate } from 'react-router-native'
import {
	WalletModal,
	VerificationSuccess,
	VerificationFail,
} from './../../Components/modal/'
import { setData, setCurrentAccount } from '../../store/slices/storageSlice'

export const VerifyMnemonic3 = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { phrase, privateKey, validWords, walletName, walletAddress } =
		useSelector((state) => state.wallet)
	const [chooseWord, setChooseWord] = React.useState('')
	const [shuffleWords, setShuffleWords] = React.useState([])
	const [disabledBtn, setDisabledBtn] = React.useState(true)
	const [openSuccess, setOpenSuccess] = React.useState(false)
	const [openFail, setOpenFail] = React.useState(false)

	React.useEffect(() => {
		if (chooseWord !== '') {
			setDisabledBtn(false)
		}
	}, [chooseWord])

	React.useEffect(() => {
		console.log(validWords)
	}, [validWords])

	React.useEffect(() => {
		setChooseWord(validWords[2])
	}, [validWords])

	React.useEffect(() => {
		setShuffleWords(shuffle(phrase.split(' ')))
	}, [phrase])

	const confirmVerify = () => {
		const word1 = validWords[0] === phrase.split(' ')[2]
		const word2 = validWords[1] === phrase.split(' ')[11]
		const word3 = validWords[2] === phrase.split(' ')[5]
		if (word1 && word2 && word3) {
			setOpenSuccess(true)
			const newUser = {
				name: walletName,
				phrase: btoa(phrase),
				privateKey: btoa(privateKey),
				address: walletAddress,
			}
			dispatch(setData(newUser))
			dispatch(setCurrentAccount(walletName))
			dispatch(setWalletNew(true))
			dispatch(setDataWallet(null))
			setTimeout(() => {
				setOpenSuccess(false)
				navigate('/wallet')
			}, 2000)
		} else {
			setOpenFail(true)
			dispatch(resetValidWords())
			setTimeout(() => {
				setOpenFail(false)
				navigate('/verify-mnemonic')
			}, 2000)
		}
	}

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
			<View style={{ marginBottom: 30, width: '100%' }}>
				<WalletText style={{ marginBottom: 15 }}>
					Please verify your mnemonic phrase: (3/3)
				</WalletText>
				<VerifyBox data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 21, 31]} />
			</View>
			<View style={{ width: '100%' }}>
				<WalletText style={{ marginBottom: 15 }}>
					Select word number 6:
				</WalletText>
				<VerifyBox
					choose={setChooseWord}
					chooseWord={chooseWord}
					id={2}
					data={shuffleWords}
				/>
			</View>
			<WalletButton
				onPress={confirmVerify}
				disabled={disabledBtn}
				style={{ marginTop: 'auto' }}>
				Next
			</WalletButton>
			<WalletModal isVisible={openSuccess}>
				<VerificationSuccess />
			</WalletModal>
			<WalletModal isVisible={openFail}>
				<VerificationFail />
			</WalletModal>
		</View>
	)
}
