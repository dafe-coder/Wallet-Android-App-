import {
	CREATE_PASSWORD,
	SET_CURRENT_NETWORK,
	SET_DATA_USER,
	SET_CURRENT_ACCOUNT,
	SET_NEW_ACCOUNT_NAME,
	SET_DELETE_ACCOUNT,
	SET_CLEAR_DATAUSER,
	SET_SHARE_ANALYTICS,
	SET_CHOOSE_ASSETS,
	SET_INIT_CHOOSE_ASSETS,
	SET_ASK_PIN,
	SWITCH_NOTIFICATIONS,
	SWITCH_TRANSACTIONS,
	SWITCH_WALLET_CONNECTS,
	SET_BACKUP,
	CLEAR_CHOOSE_ASSETS,
} from '../type'

export const setBackup = (boolean) => {
	return {
		type: SET_BACKUP,
		payload: boolean,
	}
}
export const switchWalletConnects = (boolean) => {
	return {
		type: SWITCH_WALLET_CONNECTS,
		payload: boolean,
	}
}
export const switchTransactions = (boolean) => {
	return {
		type: SWITCH_TRANSACTIONS,
		payload: boolean,
	}
}
export const switchNotifications = (boolean) => {
	return {
		type: SWITCH_NOTIFICATIONS,
		payload: boolean,
	}
}
export const setAskPin = (boolean) => {
	return {
		type: SET_ASK_PIN,
		payload: boolean,
	}
}

export const setPassword = (password) => {
	return {
		type: CREATE_PASSWORD,
		payload: password,
	}
}
export const setCurrentNetwork = (network) => {
	return {
		type: SET_CURRENT_NETWORK,
		payload: network,
	}
}
export const setDataUser = (obj) => {
	return {
		type: SET_DATA_USER,
		payload: obj,
	}
}
export const setCurrentAccount = (account) => {
	return {
		type: SET_CURRENT_ACCOUNT,
		payload: account,
	}
}
export const setNewAccountName = (name) => {
	return {
		type: SET_NEW_ACCOUNT_NAME,
		payload: name,
	}
}
export const setDeleteAccount = (account) => {
	return {
		type: SET_DELETE_ACCOUNT,
		payload: account,
	}
}
export const setClearDataUser = () => {
	return {
		type: SET_CLEAR_DATAUSER,
	}
}
export const setShareAnalytics = (boolean) => {
	return {
		type: SET_SHARE_ANALYTICS,
		payload: boolean,
	}
}
export const setChooseAssets = (coin) => {
	return {
		type: SET_CHOOSE_ASSETS,
		payload: coin,
	}
}
export const setInitChooseAssets = (arr) => {
	return {
		type: SET_INIT_CHOOSE_ASSETS,
		payload: arr,
	}
}
export const clearChooseAssets = () => {
	return {
		type: CLEAR_CHOOSE_ASSETS,
	}
}
