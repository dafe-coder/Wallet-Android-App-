import { combineReducers, createStore } from 'redux'
import { walletReducer } from './reducers/walletReducer'
import { storageReducer } from './reducers/storageReducer'
import { restoreReducer } from './reducers/restoreReducer'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { persistStore, persistReducer } from 'redux-persist'

const rootReducer = combineReducers({
	wallet: walletReducer,
	register: storageReducer,
	restore: restoreReducer,
})

const rootPersistConfig = {
	key: 'root',
	storage: AsyncStorage,
	blacklist: ['wallet'],
}

export const store = createStore(persistReducer(rootPersistConfig, rootReducer))
export const persistor = persistStore(store)
