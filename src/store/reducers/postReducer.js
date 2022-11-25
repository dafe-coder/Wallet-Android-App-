import { LOAD_POSTS } from './../type'
const initialState = {
	allPosts: [],
	bookedPosts: [],
}

export const postReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOAD_POSTS:
			return {
				...state,
				allPosts: action.payload,
				bookedPosts: action.payload.filter((p) => p.booked),
			}
		default:
			return state
	}
}
