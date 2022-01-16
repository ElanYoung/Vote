const COS = require('../wxcomponents/txcloud/cos-wx-sdk-v5.js')
const Bucket = 'hollow-1308706291' //存储桶的名称，命名规则为 BucketName-APPID，此处填写的存储桶名称必须为此格式
const Region = 'ap-nanjing' //存储桶所在地域
//创建一个 COS SDK 实例
// SECRETID 和 SECRETKEY请登录 https://console.cloud.tencent.com/cam/capi 进行查看和管理
const cos = new COS({
	SecretId: 'SecretId',
	SecretKey: 'SecretKey',
})
//创建存储桶
// cos.putBucket({
// 	Bucket: Bucket,
// 	Region: Region,
	
// }, function(err, data) {
// 	console.log(err || data)
// })

// 查询存储桶列表
cos.getService(function(err, data) {
	console.log('[查询存储桶列表]')
	console.log(data && data.Buckets)
})
//删除
// function deleteFileToTencentClound(Key) {
// 	return new Promise((resolve, reject) => {
// 		cos.deleteObject({
// 			Bucket: Bucket,
// 			Region: Region,
// 			Key: Key,
// 		}, function(err, data) {
// 			console.log(err || data)
// 			resolve(data)
// 		})
// 	})
// }
//上传图片到腾讯云
let uploadFileToTencentClound = (filename, filePath) =>{
	return new Promise((resolve, reject) => {
		cos.postObject({
				Bucket: Bucket,
				Region: Region,
				Key: 'voteImg/' + filename,
				FilePath: filePath,
				onProgress: function(info) {
					console.log(JSON.stringify(info))
				}
			},
			function(err, data) {
				console.log('[cos.postObject-err]', err || data)
				resolve(data)
			})
	})
}
export default {
	// COS
	uploadFileToTencentClound,
	// deleteFileToTencentClound
}
