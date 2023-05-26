import { createSlice } from '@reduxjs/toolkit'
const initialState = {
	dataUser: [],
	statusData: '',
}

const storageSlice = createSlice({
	name: 'pizzas',
	initialState,
	reducers: {
		setItems(state, action) {
			state.dataUser = action.payload
		},
	},
})

export const selectPizzas = (state) => state.pizzas
export const { setItems } = storageSlice.actions

export default storageSlice.reducer
