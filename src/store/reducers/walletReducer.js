import {
	SET_ALL_COINS,
	SET_NAVIGATION,
	SET_PORTFOLIO_COINS,
	SET_PORTFOLIO_TRANSACTIONS,
	SET_DATE_TRANSACTION,
	SET_PORTFOLIO_BALANCE,
} from '../type'

const initialState = {
	navigation: null,
	portfolioCoins: [],
	allCoins: [],
	transactions: [],
	password: '111111',
	dateTransaction: [],
	portfolioBalance: {},
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
		default:
			return state
	}
}
