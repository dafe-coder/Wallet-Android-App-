import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import axios from 'axios'
const initialState = {
	items: [],
	status: '',
}

// export const fetchPizzas = createAsyncThunk(
// 	'pizzas/fetchPizzasStatus',
// 	async (params) => {
// 		const { data } = await axios.get(
// 			`https://63f4e1d92213ed989c4cae3b.mockapi.io/items?page=${
// 				params.currentPage + 1
// 			}&limit=4&${params.catId}&sortBy=${params.sortBy}&order=${params.order}${
// 				params.search
// 			}`
// 		)
// 		return data
// 	}
// )

const walletSlice = createSlice({
	name: 'pizzas',
	initialState,
	reducers: {
		setItemsWallet(state, action) {
			state.items = action.payload
		},
	},
	// extraReducers: {
	// 	[fetchPizzas.pending]: (state, action) => {
	// 		state.status = 'loading'
	// 		state.items = []
	// 	},
	// 	[fetchPizzas.fulfilled]: (state, action) => {
	// 		state.status = 'success'
	// 		state.items = action.payload
	// 	},
	// 	[fetchPizzas.rejected]: (state, action) => {
	// 		state.status = 'error'
	// 		state.items = []
	// 	},
	// },
})

export const selectPizzas = (state) => state.pizzas
export const { setItemsWallet } = walletSlice.actions

export default walletSlice.reducer
