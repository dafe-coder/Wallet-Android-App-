import {
	CREATE_PASSWORD,
	SET_CURRENT_NETWORK,
	SET_DATA_USER,
	SET_CURRENT_ACCOUNT,
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
