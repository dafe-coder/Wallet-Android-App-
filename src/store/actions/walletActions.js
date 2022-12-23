import {
	SET_NAVIGATION,
	SET_ALL_COINS,
	SET_PORTFOLIO_COINS,
	SET_PORTFOLIO_TRANSACTIONS,
	SET_DATE_TRANSACTION,
	SET_PORTFOLIO_BALANCE,
} from '../type'

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

export const setPortfolioTransactions = (transactions) => {
	return {
		type: SET_PORTFOLIO_TRANSACTIONS,
		payload: transactions,
	}
}

export const setDateTransaction = (date) => {
	return {
		type: SET_DATE_TRANSACTION,
		payload: date,
	}
}

export const setPortfolioBalance = (date) => {
	return {
		type: SET_PORTFOLIO_BALANCE,
		payload: date,
	}
}
