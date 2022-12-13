import { SET_NAVIGATION } from '../type'

export const setNavigation = (nav) => {
	return {
		type: SET_NAVIGATION,
		payload: nav,
	}
}
