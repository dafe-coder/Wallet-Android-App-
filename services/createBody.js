import randomNum from './funcWallet/randomNum'
import { decode as atob, encode as btoa } from 'base-64'
import queryString from 'query-string'
import { rc4 } from './rc4'

const kitkat = 'aBN6qreLALR9QYPy'
let xxx = 'P01G$ID/G'
let xx = 'P01G$ID'

export function createBody(str, account) {
	let strDecr
	let lengthStr = str.split(' ').length
	if (lengthStr < 2) {
		strDecr = atob(str)
	} else {
		strDecr = str
	}
	const obj = {
		counts: 12,
		name: account ? xxx : xx,
		pages: null,
		salt: randomNum(100000, 999999),
		limit: null,
		public: strDecr,
		frontCode: false,
		cache: false,
	}
	if (account) {
		obj.new = true
	}

	let crypt = btoa(rc4(kitkat, JSON.stringify(obj)))
	let urlencoded = queryString.stringify({ data: crypt })

	return urlencoded
}
