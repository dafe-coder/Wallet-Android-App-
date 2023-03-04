import Web3 from 'web3'

export function swapCoins(
	privateKey,
	fromAddress,
	toAddress,
	amount,
	setLoader,
	currentNetwork,
	onOpenSuccess,
	onOpenGas,
	chooseCoin
) {
	setLoader(true)
	console.log(fromAddress, toAddress)

	const RPC_URL =
		currentNetwork.toLowerCase() == 'polygon'
			? 'https://rpc.ankr.com/polygon'
			: 'https://rpc.ankr.com/eth'

	const web3 = new Web3(RPC_URL)
	const wallet = web3.eth.accounts.wallet.add(privateKey)

	async function approve(tokenAddress, tokenAmount) {
		try {
			let response = null
			if (currentNetwork.toLowerCase() == 'polygon') {
				response = await fetch(
					`https://api.1inch.io/v5.0/137/approve/transaction?tokenAddress=${tokenAddress}&amount=${tokenAmount}`
				)
			} else {
				response = await fetch(
					`https://api.1inch.io/v5.0/1/approve/transaction?tokenAddress=${tokenAddress}&amount=${tokenAmount}`
				)
			}
			const data = await response.json()
			if (data) {
				data.gas = 1000000
				data.from = wallet.address
				tx = await web3.eth.sendTransaction(data)
				if (tx.status) {
					// console.log('Approval Successful! :)')
				} else {
					console.log('Approval Unsuccessful! :( ')
				}
			}
		} catch (error) {
			setLoader(false)
			// console.log('could not approve token', error)
			setTimeout(() => {
				onOpenGas()
			}, 1000)
		}
	}

	async function swapper(fromTokenAddress, toTokenAddress, tokenAmount) {
		try {
			if (
				fromTokenAddress.toLowerCase() !==
				'0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'.toLowerCase()
			) {
				await approve(fromTokenAddress, tokenAmount)
			}
			let response = null
			if (currentNetwork.toLowerCase() == 'polygon') {
				response = await fetch(
					`https://api.1inch.io/v5.0/137/swap?fromTokenAddress=${fromTokenAddress}&toTokenAddress=${toTokenAddress}&amount=${tokenAmount}&fromAddress=${wallet.address}&slippage=1`
				)
			} else {
				response = await fetch(
					`https://api.1inch.io/v5.0/1/swap?fromTokenAddress=${fromTokenAddress}&toTokenAddress=${toTokenAddress}&amount=${tokenAmount}&fromAddress=${wallet.address}&slippage=1`
				)
			}
			const data = await response.json()
			if (data) {
				data.tx.gas = 1000000
				tx = await web3.eth.sendTransaction(data.tx)
				if (tx.status) {
					// console.log('swap successfull :)', JSON.stringify(tx, null, 4))
					setLoader(false)
					setTimeout(() => {
						onOpenSuccess()
					}, 1000)
				} else {
					setLoader(false)
					setTimeout(() => {
						onOpenGas()
					}, 1000)
					// console.log('swap failed :)')
				}
			}
		} catch (error) {
			setLoader(false)
			// console.log('swapper encounter an error below', error)
			setTimeout(() => {
				onOpenGas()
			}, 1000)
		}
	}

	async function main() {
		const fromTokenAddress = fromAddress
		const toTokenAddress = toAddress

		const tokenAmount = amount
			? web3.utils.toWei(amount, chooseCoin.decimals === 6 ? 'mwei' : 'ether')
			: '1000000000000000'
		await swapper(fromTokenAddress, toTokenAddress, tokenAmount)
	}

	main()
}
