import { combineReducers, createStore } from 'redux'
import { walletReducer } from './reducers/walletReducer'
import { storageReducer } from './reducers/storageReducer'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { persistStore, persistReducer } from 'redux-persist'

const rootReducer = combineReducers({
	wallet: walletReducer,
	storage: storageReducer,
})

const rootPersistConfig = {
	key: 'root',
	storage: AsyncStorage,
	blacklist: ['wallet'],
}

export const store = createStore(persistReducer(rootPersistConfig, rootReducer))
export const persistor = persistStore(store)
