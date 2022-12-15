import { SET_NAVIGATION, SET_ALL_COINS, SET_PORTFOLIO_COINS } from '../type'

export const setNavigation = (nav) => {
	return {
		type: SET_NAVIGATION,
		payload: nav,
	}
}

export const setAllCoins = (coins) => {
	return {
		type: SET_ALL_COINS,
		payload: coins,
	}
}

export const setPortfolioCoins = (coins) => {
	return {
		type: SET_PORTFOLIO_COINS,
		payload: coins,
	}
}
