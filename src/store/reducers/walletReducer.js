import { SET_ALL_COINS, SET_NAVIGATION, SET_PORTFOLIO_COINS } from '../type'
const initialState = {
	navigation: null,
	portfolioCoins: [],
	allCoins: [],
	password: '111111',
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
		default:
			return state
	}
}
