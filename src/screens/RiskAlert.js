import React from 'react'
import { View } from 'react-native'
import { WalletText, WalletButton } from '../Components/UI'
import { resetWallet } from '../store/slices/storageSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-native'

export const RiskAlert = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const [timer, setTimer] = React.useState(10)
	const [timerIDs, setTimerIDs] = React.useState(null)
	const [activeBtn, setActiveBtn] = React.useState(false)

	React.useEffect(() => {
		setTimer(10)
		setTimerIDs(setInterval(timerDisabled, 1000))
		function timerDisabled() {
			setTimer((state) => {
				if (state == 0) {
					setActiveBtn(true)
					clearInterval(timerIDs)
					return 0
				} else {
					return state - 1
				}
			})
		}
		return () => {
			clearInterval(timerIDs)
			setActiveBtn(false)
		}
	}, [])

	const goClear = () => {
		if (activeBtn) {
			dispatch(resetWallet())
			navigate('/')
		}
	}

	return (
		<View style={{ flex: 1, paddingHorizontal: 24, justifyContent: 'center' }}>
			<WalletText
				color='red'
				fw='bold'
				center
				size='m'
				style={{ marginBottom: 20 }}>
				Risk Alert
			</WalletText>
			<WalletText style={{ marginBottom: 30 }}>
				All your existing wallets will be removed and replaced with the new one.
				{'\n'}
				{'\n'}
				Please make sure you have backed up your mnemonic phrases or private
				keys, otherwise you will not be able to recover the assets in your
				wallets.
			</WalletText>
			<WalletButton onPress={goClear}>
				Continue {timer !== 0 ? `(${timer} s)` : ''}
			</WalletButton>
			<WalletButton to={-1} style={{ marginTop: 10 }}>
				Back
			</WalletButton>
		</View>
	)
}
