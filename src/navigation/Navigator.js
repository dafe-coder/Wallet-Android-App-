import React from 'react'
import { Route, Routes } from 'react-router-native'
import {
	CopyWords,
	CountPhrase,
	CreateData,
	FirstScreen,
	ImportData,
	ImportEnd,
	Receive,
	Submit,
	TakeNoteBook,
	VerifyMnemonic,
	VerifyMnemonic2,
	VerifyMnemonic3,
	Wallet,
	Settings,
} from '../screens'

export const WalletRoutes = () => {
	return (
		<Routes>
			<Route exact path='/' element={<FirstScreen />} />
			<Route exact path='/create-data' element={<CreateData />} />
			<Route exact path='/create-submit' element={<Submit />} />
			<Route exact path='/take-notebook' element={<TakeNoteBook />} />
			<Route exact path='/copy-words' element={<CopyWords />} />
			<Route exact path='/verify-mnemonic' element={<VerifyMnemonic />} />
			<Route exact path='/verify-mnemonic2' element={<VerifyMnemonic2 />} />
			<Route exact path='/verify-mnemonic3' element={<VerifyMnemonic3 />} />
			<Route exact path='/count-phrase' element={<CountPhrase />} />
			<Route exact path='/import-data' element={<ImportData />} />
			<Route exact path='/import-end' element={<ImportEnd />} />
			<Route exact path='/wallet' element={<Wallet />} />
			<Route exact path='/receive' element={<Receive />} />
			<Route exact path='/settings' element={<Settings />} />
		</Routes>
	)
}
