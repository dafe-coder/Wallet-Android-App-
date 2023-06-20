import { ethers } from 'ethers'

export default function generateWallet(mnemonic) {
	let wallet = ethers.Wallet.fromMnemonic(mnemonic)
	let privateKey = wallet.privateKey.slice(2)
	let address = wallet.address
	return { privateKey: btoa(privateKey), address }
}
