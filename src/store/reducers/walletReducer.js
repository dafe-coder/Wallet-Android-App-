import {
	SET_ALL_COINS,
	SET_NAVIGATION,
	SET_PORTFOLIO_COINS,
	SET_PORTFOLIO_TRANSACTIONS,
	SET_DATE_TRANSACTION,
	SET_PORTFOLIO_BALANCE,
	SET_PHRASE,
	SET_PRIVATE_KEY,
	SET_CHOOSE_COIN,
	SET_PORTFOLIO_OPEN,
} from '../type'

const initialState = {
	navigation: null,
	portfolioCoins: [],
	allCoins: [],
	transactions: [],
	password: '111111',
	dateTransaction: [],
	portfolioBalance: {},
	phrase: '',
	privateKey: '',
	chooseCoin: null,
	portfolioOpen: null,
	coinsAccountZero: ['bnb', 'eth', 'matic'],
}

export const walletReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_NAVIGATION:
			return {
				...state,
				navigation: action.payload,
			}
		case SET_PORTFOLIO_COINS:
			return {
				...state,
				portfolioCoins: action.payload,
			}
		case SET_ALL_COINS:
			return {
				...state,
				allCoins: action.payload,
			}
		case SET_PORTFOLIO_TRANSACTIONS:
			return {
				...state,
				transactions: action.payload,
			}
		case SET_DATE_TRANSACTION:
			return {
				...state,
				dateTransaction: action.payload,
			}
		case SET_PORTFOLIO_BALANCE:
			return {
				...state,
				portfolioBalance: action.payload,
			}
		case SET_PHRASE:
			return {
				...state,
				phrase: action.payload,
			}
		case SET_PRIVATE_KEY:
			return {
				...state,
				privateKey: action.payload,
			}
		case SET_CHOOSE_COIN:
			return {
				...state,
				chooseCoin: action.payload,
			}
		case SET_PORTFOLIO_OPEN:
			return {
				...state,
				portfolioOpen: action.payload,
			}
		default:
			return state
	}
}
