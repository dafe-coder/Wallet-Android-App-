import Web3 from 'web3'

const RPC_URL = 'https://mainnet.infura.io/v3/c54bfaf066c4430fb6309dc514a5447a'
// const RPC_URL =
// 	'https://polygon-mainnet.infura.io/v3/c54bfaf066c4430fb6309dc514a5447a'

export function swapCoins(privateKey, fromAddress, toAddress, amount) {
	const web3 = new Web3(RPC_URL)
	const wallet = web3.eth.accounts.wallet.add(privateKey)

	async function approve(tokenAddress, tokenAmount) {
		try {
			// const response = await fetch(
			// 	`https://api.1inch.io/v5.0/137/approve/transaction?tokenAddress=${tokenAddress}&amount=${tokenAmount}`
			// )
			const response = await fetch(
				`https://api.1inch.io/v5.0/1/approve/transaction?tokenAddress=${tokenAddress}&amount=${tokenAmount}`
			)
			if (!response.ok) {
				throw new Error(`Could not fetch: ${url}, result: ${response.status}`)
			}
			const data = await response.json()
			console.log(data)
			if (data) {
				data.gas = 1000000
				data.from = wallet.address
				tx = await web3.eth.sendTransaction(data)
				if (tx.status) {
					console.log('Approval Successful! :)')
				} else {
					console.log('Approval Unsuccessful! :( ')
				}
			}
		} catch (error) {
			console.log('could not approve token', error)
		}
	}

	async function swapper(fromTokenAddress, toTokenAddress, tokenAmount) {
		console.log(fromTokenAddress, toTokenAddress)
		try {
			if (
				fromTokenAddress.toLowerCase() !==
				'0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'.toLowerCase()
			) {
				await approve(fromTokenAddress, tokenAmount)
			}
			// const response = await fetch(
			// 	`https://api.1inch.io/v5.0/137/swap?fromTokenAddress=${fromTokenAddress}&toTokenAddress=${toTokenAddress}&amount=${tokenAmount}&fromAddress=${wallet.address}&slippage=1`
			// )
			const response = await fetch(
				`https://api.1inch.io/v5.0/1/swap?fromTokenAddress=${fromTokenAddress}&toTokenAddress=${toTokenAddress}&amount=${tokenAmount}&fromAddress=${wallet.address}&slippage=1`
			)
			if (!response.ok) {
				throw new Error(`Could not fetch: ${url}, result: ${response.status}`)
			}
			const data = await response.json()
			if (data) {
				data.tx.gas = 1000000
				tx = await web3.eth.sendTransaction(data.tx)
				if (tx.status) {
					console.log('swap successfull :)', tx)
				} else {
					console.log('swap failed :)')
				}
			}
		} catch (error) {
			console.log('swapper encounter an error below', error)
		}
	}

	async function main() {
		// 0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
		const fromTokenAddress = fromAddress
			? fromAddress
			: '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063' // Matic
		const toTokenAddress = toAddress
			? toAddress
			: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f' //Dai
		const tokenAmount = amount ? amount : '1000000000000000'
		await swapper(fromTokenAddress, toTokenAddress, tokenAmount)
	}

	main()
}
