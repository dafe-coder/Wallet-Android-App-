import { combineReducers, createStore } from 'redux'
import { walletReducer } from './reducers/walletReducer'
import { registerReducer } from './reducers/registerReducer'
import { restoreReducer } from './reducers/restoreReducer'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { persistStore, persistReducer } from 'redux-persist'

const rootReducer = combineReducers({
	wallet: walletReducer,
	register: registerReducer,
	restore: restoreReducer,
})

const rootPersistConfig = {
	key: 'root',
	storage: AsyncStorage,
	blacklist: ['wallet'],
}

export const store = createStore(persistReducer(rootPersistConfig, rootReducer))
export const persistor = persistStore(store)
