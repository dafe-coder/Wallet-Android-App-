import { SET_NAVIGATION, SET_PORTFOLIO_COINS } from '../type'
const initialState = {
	navigation: null,
	portfolioCoins: [],
	allCoins: [],
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
		default:
			return state
	}
}
