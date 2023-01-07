import {
	SET_CHOOSE_COIN,
	SET_NAVIGATION,
	SET_ALL_COINS,
	SET_PORTFOLIO_COINS,
	SET_PORTFOLIO_TRANSACTIONS,
	SET_DATE_TRANSACTION,
	SET_PORTFOLIO_BALANCE,
	SET_PHRASE,
	SET_PRIVATE_KEY,
	SET_PORTFOLIO_OPEN,
	SET_PORTFOLIO_SORT,
	SET_ACCOUNT_NAME,
	SET_ADDRESS_TO,
	SET_AMOUNT_SEND,
	SET_CHOOSE_COIN_SWAP_SECOND,
	SET_LOADER,
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

export const setPortfolioBalance = (balance) => {
	return {
		type: SET_PORTFOLIO_BALANCE,
		payload: balance,
	}
}
export const setPhrase = (phrase) => {
	return {
		type: SET_PHRASE,
		payload: phrase,
	}
}
export const setPrivateKey = (key) => {
	return {
		type: SET_PRIVATE_KEY,
		payload: key,
	}
}
export const setChooseCoin = (coin) => {
	return {
		type: SET_CHOOSE_COIN,
		payload: coin,
	}
}
export const setPortfolioOpen = (coin) => {
	return {
		type: SET_PORTFOLIO_OPEN,
		payload: coin,
	}
}
export const setPortfolioSort = (type) => {
	return {
		type: SET_PORTFOLIO_SORT,
		payload: type,
	}
}
export const setAccountName = (name) => {
	return {
		type: SET_ACCOUNT_NAME,
		payload: name,
	}
}
export const setAddressTo = (address) => {
	return {
		type: SET_ADDRESS_TO,
		payload: address,
	}
}
export const setAmountSend = (amount) => {
	return {
		type: SET_AMOUNT_SEND,
		payload: amount,
	}
}
export const setChooseCoinSwapSecond = (coin) => {
	return {
		type: SET_CHOOSE_COIN_SWAP_SECOND,
		payload: coin,
	}
}
export const setLoader = (loader) => {
	return {
		type: SET_LOADER,
		payload: loader,
	}
}
