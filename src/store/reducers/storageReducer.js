import {
	CREATE_PASSWORD,
	SET_CURRENT_NETWORK,
	SET_DATA_USER,
	SET_NEW_ACCOUNT_NAME,
	SET_CURRENT_ACCOUNT,
	SET_DELETE_ACCOUNT,
	SET_CLEAR_DATAUSER,
	SET_LOCK_WALLET,
	SET_SHARE_ANALYTICS,
} from '../type'
const initialState = {
	password: '',
	currentNetwork: 'Polygon',
	dataUser: [],
	currentAccount: '',
	lockWallet: false,
	analytics: true,
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
		case SET_SHARE_ANALYTICS:
			return {
				...state,
				analytics: action.payload,
			}
		case SET_LOCK_WALLET:
			return {
				...state,
				lockWallet: action.payload,
			}
		case SET_CLEAR_DATAUSER:
			return {
				...state,
				dataUser: [],
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
