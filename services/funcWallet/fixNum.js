export default function fixNum(num) {
	let numArr = Number(num).toFixed(18).toString().split('.')
	let length = 0
	numArr[1].split('').some(function (el) {
		length++
		return el !== '0'
	})
	if (numArr[0].length == 1 && numArr[0] != 1 && --length > 0 && num > 0) {
		return Number(num).toFixed(length + 2)
	} else if (numArr[0].length == 1) {
		return Number(num).toFixed(2)
	} else if (numArr[0].length == 2) {
		return Number(num).toFixed(2)
	} else {
		return Number(num).toFixed(2)
	}
}
