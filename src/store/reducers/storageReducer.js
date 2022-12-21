import { CREATE_PASSWORD } from '../type'
const initialState = {
	password: '111111',
}

export const storageReducer = (state = initialState, action) => {
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
