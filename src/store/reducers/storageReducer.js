import { CREATE_PASSWORD, SET_CURRENT_NETWORK } from '../type'
const initialState = {
	password: '111111',
	currentNetwork: 'Ethereum',
}

export const storageReducer = (state = initialState, action) => {
	switch (action.type) {
		case CREATE_PASSWORD:
			return {
				...state,
				password: action.payload,
			}
		case SET_CURRENT_NETWORK:
			return {
				...state,
				currentNetwork: action.payload,
			}
		default:
			return state
	}
}
