export const filterData = (type, list, setData) => {
	let sortedArr = []
	if (type == 'name' || type == '姓名') {
		sortedArr = list.sort(function (a, b) {
			if (a.symbol.toUpperCase() > b.symbol.toUpperCase()) {
				return 1
			}
			if (a.symbol.toUpperCase() < b.symbol.toUpperCase()) {
				return -1
			}
			return 0
		})
	} else if (type == 'value' || type == '价值') {
		sortedArr = list.sort(function (a, b) {
			if (a.market_data.balance_crypto.usd > b.market_data.balance_crypto.usd) {
				return -1
			}
			if (a.market_data.balance_crypto.usd < b.market_data.balance_crypto.usd) {
				return 1
			}
			return 0
		})
	} else if (type == 'change' || type == '改变') {
		sortedArr = list.sort(function (a, b) {
			if (
				(a.market_data.relativeChange
					? a.market_data.relativeChange
					: (Number(a.market_data.current_price.usd) /
							Number(a.market_data.high_24h.usd)) *
							100 -
					  100) >
				(b.market_data.relativeChange
					? b.market_data.relativeChange
					: (Number(b.market_data.current_price.usd) /
							Number(b.market_data.high_24h.usd)) *
							100 -
					  100)
			) {
				return -1
			}
			if (
				(a.market_data.relativeChange
					? a.market_data.relativeChange
					: (Number(a.market_data.current_price.usd) /
							Number(a.market_data.high_24h.usd)) *
							100 -
					  100) <
				(b.market_data.relativeChange
					? b.market_data.relativeChange
					: (Number(b.market_data.current_price.usd) /
							Number(b.market_data.high_24h.usd)) *
							100 -
					  100)
			) {
				return 1
			}
			return 0
		})
	} else {
		sortedArr = list
	}
	setData(sortedArr)
}
