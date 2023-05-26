import React from 'react'
import { Route, Routes } from 'react-router-native'
import {
	CopyWords,
	CreateData,
	FirstScreen,
	Submit,
	TakeNoteBook,
} from '../screens'

export const WalletRoutes = () => {
	return (
		<Routes>
			<Route exact path='/' element={<FirstScreen />} />
			<Route exact path='/create-data' element={<CreateData />} />
			<Route exact path='/create-submit' element={<Submit />} />
			<Route exact path='/take-notebook' element={<TakeNoteBook />} />
			<Route exact path='/copy-words' element={<CopyWords />} />
		</Routes>
	)
}
