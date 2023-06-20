import React from 'react'
import {
	View,
	StyleSheet,
	TouchableOpacity,
	Image,
	ScrollView,
} from 'react-native'
import { Header, PercentBlock, SwapDetails } from './../Components/'
import { WalletText, WalletInput } from './../Components/UI'
import { THEME } from '../Theme'
import { SvgIcon } from './../Components/svg/svg'
import { useNavigate, useLocation } from 'react-router-native'
import { WalletButton } from './../Components/UI/WalletButton'
import { ButtonCopySm } from './../Components/UI/ButtonCopySm'
import transactionSend from '../../services/funcWallet/transaction'
import { useSelector } from 'react-redux'
import {
	WalletModal,
	SuccessSwap,
	TransactionFail,
} from './../Components/modal/'

export const Send = () => {
	const navigate = useNavigate()
	const { state } = useLocation()
	const { walletAddress } = useSelector((state) => state.wallet)
	const { dataUser, currentAccount } = useSelector((state) => state.storage)
	const [disabledBtn, setDisabledBtn] = React.useState(true)
	const [address, setAddress] = React.useState('')
	const [amount, setAmount] = React.useState('')
	const [showPaymentsDetails, setShowPaymentsDetails] = React.useState(false)
	const [checkEther, setCheckEther] = React.useState(false)
	const [openSuccess, setOpenSuccess] = React.useState(false)
	const [openGas, setOpenGas] = React.useState(false)
	const [hash, setHash] = React.useState('')
	React.useEffect(() => {
		console.log(hash)
	}, [hash])
	React.useEffect(() => {
		if (state !== null) {
			setCheckEther(state.symbol.toUpperCase().includes('ETH'))
		}
	}, [state])

	React.useEffect(() => {
		if (address !== '' && amount !== '' && state !== null) {
			setShowPaymentsDetails(true)
			setDisabledBtn(false)
		} else {
			setDisabledBtn(true)
			setShowPaymentsDetails(false)
		}
	}, [address, amount])

	const onSendTransaction = () => {
		const privateKey = dataUser.filter((d) => d.name == currentAccount)[0]
			.privateKey
		const amountSend = Number(amount)

		transactionSend(
			walletAddress,
			address,
			state.contract_address,
			amountSend,
			checkEther,
			setHash,
			setOpenSuccess,
			setOpenGas,
			privateKey
		)
	}

	return (
		<ScrollView contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 24 }}>
			<Header backPath='/wallet' title='Sent' />
			<View>
				<WalletText style={{ marginBottom: 10 }}>Asset Name</WalletText>
				<TouchableOpacity
					onPress={() =>
						navigate('/choose-crypto', { state: { page: 'sent' } })
					}
					activeOpacity={0.7}
					style={styles.chooseAsset}>
					{state !== null ? (
						<View style={{ flexDirection: 'row', alignItems: 'center' }}>
							<Image
								resizeMode='cover'
								style={{
									borderRadius: 50,
									overflow: 'hidden',
									width: 24,
									height: 24,
								}}
								source={{ uri: state.image.thumb }}
							/>
							<WalletText style={{ marginLeft: 10 }}>{state.name}</WalletText>
						</View>
					) : (
						<WalletText>Select a token</WalletText>
					)}
					<SvgIcon
						type='angle-down'
						width={12}
						height={19}
						style={{ transform: [{ rotate: '-90deg' }] }}
					/>
				</TouchableOpacity>
				<View>
					<WalletInput
						value={address}
						setValue={setAddress}
						styleInput={{ paddingRight: 60 }}
						placeholder='Enter Address'
					/>
					<ButtonCopySm
						setText={setAddress}
						paste
						style={{ right: 20, bottom: 20 }}
					/>
				</View>
				<WalletInput
					style={{ marginTop: 15, marginBottom: 20 }}
					placeholder='Amount'
					setValue={setAmount}
					value={amount}
				/>
				{state !== null ? (
					<PercentBlock
						style={{ marginBottom: 20 }}
						setValue={setAmount}
						chooseCoin={state}
					/>
				) : (
					<></>
				)}
				{showPaymentsDetails ? (
					<View style={{ marginBottom: 60 }}>
						<WalletText fw='bold' style={{ marginBottom: 15 }}>
							Payment Details
						</WalletText>
						<SwapDetails address={address} />
					</View>
				) : (
					<></>
				)}
			</View>
			<View style={{ marginTop: 'auto', marginBottom: 25 }}>
				<WalletButton onPress={onSendTransaction} disabled={disabledBtn}>
					Next
				</WalletButton>
			</View>
			<WalletModal isVisible={openSuccess}>
				<SuccessSwap close={setOpenSuccess} />
			</WalletModal>
			<WalletModal isVisible={openGas}>
				<TransactionFail close={setOpenGas} />
			</WalletModal>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	chooseAsset: {
		backgroundColor: THEME.GREEN_BG,
		borderColor: THEME.WHITE,
		borderWidth: 1,
		borderRadius: 16,
		marginBottom: 15,
		paddingHorizontal: 20,
		paddingVertical: 16,
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
	},
})
