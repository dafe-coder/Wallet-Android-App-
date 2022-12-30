import {
	CREATE_PASSWORD,
	SET_CURRENT_NETWORK,
	SET_DATA_USER,
	SET_NEW_ACCOUNT_NAME,
	SET_CURRENT_ACCOUNT,
	SET_DELETE_ACCOUNT,
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
		case SET_DELETE_ACCOUNT:
			const newArrDelete = state.dataUser.filter(
				(d) => d.name !== action.payload
			)
			return {
				...state,
				dataUser: newArrDelete,
			}
		case SET_NEW_ACCOUNT_NAME:
			const newArr = state.dataUser.map((d) => {
				if (d.name == state.currentAccount) {
					return {
						...d,
						name: action.payload,
					}
				}
				return d
			})
			return {
				...state,
				dataUser: newArr,
			}
		default:
			return state
	}
}
