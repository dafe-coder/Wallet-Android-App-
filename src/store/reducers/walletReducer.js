import { SET_NAVIGATION } from '../type'
const initialState = {
	navigation: null,
}

export const walletReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_NAVIGATION:
			return {
				...state,
				navigation: action.payload,
			}
		default:
			return state
	}
}
