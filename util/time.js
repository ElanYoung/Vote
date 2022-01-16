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
	datatimeformat,
	intervalTime,
	formateDateBack
}
//时间戳转时间格式
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


// 返回格式为xx天xx小时xx分钟xx秒
function intervalTime(faultDate, completeTime) {
	var stime = Date.parse(new Date(faultDate))
	var etime = Date.parse(new Date(completeTime))
	// console.log('stime', stime)
	// console.log('etime', etime)
	// 两个时间戳相差的毫秒数
	var usedTime = etime - stime
	// 计算相差的天数  
	var days = Math.floor(usedTime / (24 * 3600 * 1000))
	// 计算天数后剩余的毫秒数
	var leave1 = usedTime % (24 * 3600 * 1000)
	// 计算出小时数  
	var hours = Math.floor(leave1 / (3600 * 1000))
	// 计算小时数后剩余的毫秒数
	var leave2 = leave1 % (3600 * 1000)
	// 计算相差分钟数
	var minutes = Math.floor(leave2 / (60 * 1000))
	// 计算秒数后剩余的毫秒数
	var leave3 = leave2 % (60 * 1000)
	// 计算相差秒数
	var seconds = Math.floor(leave3 / (1000))
	var time = days + '天' + hours + '时' + minutes + '分' + seconds + '秒'
	return time
}

//转换后台时间格式
let formateDateBack = date => {
	const arr = (date || '').split('T')
	const d = arr[0]
	const darr = (d || '').split('-')

	const t = arr[1]
	const tarr = (t || '').split('.000')
	const marr = (tarr[0] || '').split(':')

	const time =
		parseInt(darr[0]) +
		'-' +
		parseInt(darr[1]) +
		'-' +
		parseInt(darr[2]) +
		' ' +
		parseInt(marr[0]) +
		':' +
		parseInt(marr[1]) +
		':' +
		parseInt(marr[2])
	return time
}
