import { combineReducers } from 'redux'
import walletSlice from './slices/walletSlice'
import storageSlice from './slices/storageSlice'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { persistStore, persistReducer } from 'redux-persist'
import { configureStore } from '@reduxjs/toolkit'
import { getDefaultMiddleware } from '@reduxjs/toolkit'

const customizedMiddleware = getDefaultMiddleware({
	serializableCheck: false,
})
const rootReducer = combineReducers({
	wallet: walletSlice,
	storage: storageSlice,
})

const rootPersistConfig = {
	key: 'root',
	timeout: null,
	storage: AsyncStorage,
	blacklist: ['wallet'],
}
const persistedReducer = persistReducer(rootPersistConfig, rootReducer)
export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
})
export const persistor = persistStore(store)
