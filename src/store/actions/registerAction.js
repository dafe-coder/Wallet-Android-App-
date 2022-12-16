import { CREATE_PASSWORD } from '../type'

export const setPassword = (password) => {
	return {
		type: CREATE_PASSWORD,
		payload: password,
	}
}
