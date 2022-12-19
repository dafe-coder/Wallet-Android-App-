import { CREATE_PASSWORD } from '../type'
const initialState = {
	password: '',
}

export const registerReducer = (state = initialState, action) => {
	switch (action.type) {
		case CREATE_PASSWORD:
			return {
				...state,
				password: action.payload,
			}
		default:
			return state
	}
}
