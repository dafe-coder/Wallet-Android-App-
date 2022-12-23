import { CREATE_PASSWORD, SET_CURRENT_NETWORK } from '../type'

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
