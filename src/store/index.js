import { combineReducers, createStore } from 'redux'

import { walletReducer } from './reducers/walletReducer'

const rootReducer = combineReducers({ wallet: walletReducer })

export default createStore(rootReducer)
