import { ethers } from 'ethers'

export default function generateWallet(mnemonic) {
	let privateKey = ethers.Wallet.fromMnemonic(mnemonic).privateKey.slice(0, 2)
	return privateKey
}
