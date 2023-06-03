import { createSlice } from '@reduxjs/toolkit'
const rpcLinks = [
	{
		id: '91',
		title: 'https://eth-mainnet.gateway.pokt.network/sdsdsdsdsds',
		info: {
			ms: '102ms',
			height: 'Height: 16885049',
			status: 'green',
		},
	},
	{
		id: '92',
		title: 'https://mainnet-eth.compound.finance',
		info: {
			ms: '102ms',
			height: 'Height: 16885049',
			status: 'green',
		},
	},
	{
		id: '93',
		title: 'https://rpc.flashbots.net',
		info: {
			ms: '102ms',
			height: 'Height: 16885049',
			status: 'green',
		},
	},
	{
		id: '94',
		title: 'https://rpc.ankr.com/eth',
		info: {
			ms: '102ms',
			height: 'Height: 16885049',
			status: 'green',
		},
	},
	{
		id: '95',
		title: 'https://1rpc.io/eth',
		info: {
			ms: '102ms',
			height: 'Height: 16885049',
			status: 'green',
		},
	},
	{
		id: '96',
		title: 'https://cloudflare-eth.com',
		info: {
			ms: '927ms',
			height: 'Height: 16885049',
			status: 'yellow',
		},
	},
	{
		id: '97',
		title: 'https://api.mycryptoapi.com/eth',
		info: {
			ms: 'Not Available',
			status: 'red',
		},
	},
]
const initialState = {
	dataUser: null,
	password: '',
	showAssets: false,
	isLogin: false,
	autoLock: true,
	lockWallet: true,
	siteLinks: [],
	activeSiteLink: '',
	rpcLinks,
	activeRpcLink: '',
	currentAccount: '',
}

const storageSlice = createSlice({
	name: 'storage',
	initialState,
	reducers: {
		resetWallet(state) {
			state.dataUser = []
			state.password = ''
			state.showAssets = false
			state.isLogin = false
			state.autoLock = true
			state.siteLinks = []
			state.rpcLinks = rpcLinks
			state.activeSiteLink = ''
			state.activeRpcLink = ''
		},
		setDeleteWallet(state, action) {
			const withoutAcc = state.dataUser.filter(
				(item) => item.name !== action.payload
			)
			state.dataUser = withoutAcc
		},
		setCurrentAccount(state, action) {
			state.currentAccount = action.payload
		},
		setData(state, action) {
			if (state.dataUser !== null && state.dataUser.length) {
				state.dataUser = [...state.dataUser, action.payload]
			} else {
				state.dataUser = [action.payload]
			}
		},
		setIsLogin(state, action) {
			state.isLogin = action.payload
		},
		setPassword(state, action) {
			state.password = action.payload
		},
		setShowAssets(state, action) {
			state.showAssets = action.payload
		},
		setSiteLinks(state, action) {
			state.siteLinks =
				state.siteLinks !== undefined && state.siteLinks.length
					? [...state.siteLinks, action.payload]
					: [action.payload]
		},
		setActiveSiteLink(state, action) {
			state.activeSiteLink = action.payload
		},
		setRpcLinks(state, action) {
			state.rpcLinks = [action.payload, ...state.rpcLinks]
		},
		setActiveRpcLink(state, action) {
			state.activeRpcLink = action.payload
		},
		setAutoLock(state, action) {
			state.autoLock = action.payload
		},
		setLockWallet(state, action) {
			state.lockWallet = action.payload
		},
	},
})

export const {
	setData,
	resetWallet,
	setPassword,
	setShowAssets,
	setIsLogin,
	setSiteLinks,
	setActiveSiteLink,
	setRpcLinks,
	setActiveRpcLink,
	setAutoLock,
	setLockWallet,
	setCurrentAccount,
	setDeleteWallet,
} = storageSlice.actions

export default storageSlice.reducer
