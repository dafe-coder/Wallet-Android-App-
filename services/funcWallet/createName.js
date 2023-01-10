export default function createName(data) {
	const namesArr = data.map((d) => d.name)
	let nameNum = 1
	while (
		namesArr.includes(`Account ${data.length ? data.length + nameNum : '1'}`)
	) {
		nameNum++
	}
	return `Account ${data.length ? data.length + nameNum : '1'}`
}
