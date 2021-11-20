// ES5写法
// function datatimeformat(value) {
// 	let date = new Date(value) //这个是纳秒的，想要毫秒的可以不用除以1000000
// 	let y = date.getFullYear()
// 	let MM = date.getMonth() + 1
// 	MM = MM < 10 ? ('0' + MM) : MM
// 	let d = date.getDate()
// 	d = d < 10 ? ('0' + d) : d
// 	let h = date.getHours()
// 	h = h < 10 ? ('0' + h) : h
// 	let m = date.getMinutes()
// 	m = m < 10 ? ('0' + m) : m
// 	let s = date.getSeconds()
// 	s = s < 10 ? ('0' + s) : s
// 	return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s

// }
export {
	datatimeformat
}

//ES6写法
let datatimeformat = value => {
		let date = new Date(value) //这个是纳秒的，想要毫秒的可以不用除以1000000
		let y = date.getFullYear()
		let MM = date.getMonth() + 1
		MM = MM < 10 ? ('0' + MM) : MM
		let d = date.getDate()
		d = d < 10 ? ('0' + d) : d
		let h = date.getHours()
		h = h < 10 ? ('0' + h) : h
		let m = date.getMinutes()
		m = m < 10 ? ('0' + m) : m
		let s = date.getSeconds()
		s = s < 10 ? ('0' + s) : s
		return y + '-' + MM + '-' + d + ' ' + h + ':' + m
}
