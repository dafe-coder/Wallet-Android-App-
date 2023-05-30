import {
	CREATE_PASSWORD,
	SET_CURRENT_NETWORK,
	SET_DATA_USER,
	SET_NEW_ACCOUNT_NAME,
	SET_CURRENT_ACCOUNT,
	SET_DELETE_ACCOUNT,
	SET_CLEAR_DATAUSER,
	SET_CHOOSE_ASSETS,
	SET_SHARE_ANALYTICS,
	SET_INIT_CHOOSE_ASSETS,
	SET_ASK_PIN,
	SWITCH_NOTIFICATIONS,
	SWITCH_TRANSACTIONS,
	SWITCH_WALLET_CONNECTS,
	SET_BACKUP,
	CLEAR_CHOOSE_ASSETS,
} from '../type'
const initialState = {
	password: '',
	currentNetwork: { title: 'Polygon', id: 0 },
	dataUser: [],
	currentAccount: '',
	chooseAssets: ['eth', 'matic'],
	analytics: true,
	askPin: true,
	notifications: true,
	transactions: true,
	walletConnects: false,
	backup: true,
	lockWallet: false, // Fixed its
}

export const storageReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_BACKUP:
			return {
				...state,
				backup: action.payload,
			}
		case SWITCH_NOTIFICATIONS:
			return {
				...state,
				notifications: action.payload,
			}
		case SWITCH_TRANSACTIONS:
			return {
				...state,
				transactions: action.payload,
			}
		case SWITCH_WALLET_CONNECTS:
			return {
				...state,
				walletConnects: action.payload,
			}
		case SET_ASK_PIN:
			return {
				...state,
				askPin: action.payload,
			}
		case CREATE_PASSWORD:
			return {
				...state,
				password: action.payload,
			}
		case SET_CURRENT_NETWORK:
			return {
				...state,
				currentNetwork: action.payload,
			}
		case SET_DATA_USER:
			return {
				...state,
				dataUser: [...state.dataUser, action.payload],
			}
		case SET_CURRENT_ACCOUNT:
			return {
				...state,
				currentAccount: action.payload,
			}
		case SET_SHARE_ANALYTICS:
			return {
				...state,
				analytics: action.payload,
			}

		case SET_CLEAR_DATAUSER:
			return {
				...state,
				dataUser: [],
			}
		case SET_DELETE_ACCOUNT:
			const newArrDelete = {
				first: state.dataUser.first.filter((d) => d.name !== action.payload),
				second: state.dataUser.second,
			}
			return {
				...state,
				dataUser: newArrDelete,
			}
		case CLEAR_CHOOSE_ASSETS:
			return {
				...state,
				chooseAssets: ['eth', 'matic', 'avax', 'wbtc'],
			}
		case SET_INIT_CHOOSE_ASSETS:
			let arrAssetsInit = [
				...action.payload,
				...state.chooseAssets.filter((item) => !action.payload.includes(item)),
			]
			return {
				...state,
				chooseAssets: arrAssetsInit,
			}
		case SET_CHOOSE_ASSETS:
			const newArrAssets =
				state.chooseAssets.includes(action.payload) == false
					? [...state.chooseAssets, action.payload]
					: [...state.chooseAssets.filter((item) => item !== action.payload)]
			return {
				...state,
				chooseAssets: newArrAssets,
			}
		case SET_NEW_ACCOUNT_NAME:
			const newArr = state.dataUser.map((d) => {
				if (d.name == state.currentAccount) {
					return {
						...d,
						name: action.payload,
					}
				}
				return d
			})
			return {
				...state,
				dataUser: newArr,
			}
		default:
			return state
	}
}
