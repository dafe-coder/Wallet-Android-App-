import {
	CREATE_PASSWORD,
	SET_CURRENT_NETWORK,
	SET_DATA_USER,
	SET_CURRENT_ACCOUNT,
	SET_NEW_ACCOUNT_NAME,
	SET_DELETE_ACCOUNT,
	SET_CLEAR_DATAUSER,
	SET_SHARE_ANALYTICS,
} from '../type'

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
