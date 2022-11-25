import { DATA } from '../../data'
import { LOAD_POSTS } from './../type'
export const loadPosts = () => {
	return {
		type: LOAD_POSTS,
		payload: DATA,
	}
}
