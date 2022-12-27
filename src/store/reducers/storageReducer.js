import {
	CREATE_PASSWORD,
	SET_CURRENT_NETWORK,
	SET_DATA_USER,
	SET_CURRENT_ACCOUNT,
} from '../type'
const initialState = {
	password: '222111',
	currentNetwork: 'Ethereum',
	dataUser: [],
	currentAccount: '',
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
		case SET_DATA_USER:
			return {
				...state,
				dataUser: [...state.dataUser, action.payload],
			}
		case SET_CURRENT_ACCOUNT:
			return {
				...state,
				currentAccount: action.payload,
			}
		default:
			return state
	}
}
