<!-- 选手报名界面 -->
<template>
	<view>
		<view class="container">
			<view class="top-uploader"><van-uploader :file-list="fileList" :after-read="imagesAfterRead" preview-size="225rpx" upload-text="上传活动照片" /></view>
			<form @submit="onJumpToInfoMain">
				<view class="mid-name">
					<van-cell-group>
						<view class="vote-play-name">
							<van-field :value="votePlayName" name="votePlayName" label="选手名称:" placeholder="请输入选手名称" input-align="right" />
						</view>
					</van-cell-group>
				</view>
				<view class="floor-btn"><van-button custom-class="temp-save-button" plain type="info" form-type="submit">立即报名</van-button></view>
			</form>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			userId: 0, //选手的真实id
			voteId: 0, //选手要报名的投票表id
			votePlayName: '',
			fileList: [
				{
					url: '/static/imgVoteRank/imgHead/h11.jpg',
					name: '图片1',
					deletable: false
				},
				// Uploader 根据文件后缀来判断是否为图片文件
				// 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
				{
					url: '/static/imgVoteRank/imgHead/h15.jpg',
					name: '图片2',
					isImage: true,
					deletable: true
				}
			],
			InfoUrl: '/pages/vote-user-info/vote-user-info'
		};
	},
	methods: {
		//图片上传
		imagesAfterRead(event, detail) {
			console.log('imagesAfterRead-event', event);
			console.log('imagesAfterRead-detail', detail);
			const COS = require('../../wxcomponents/txcloud/cos-wx-sdk-v5.js');
			const cos = new COS({
				SecretId: 'AKIDGK8cqnTt2uVoqb5IEtHNDm46sNbYDcka',
				SecretKey: 'auxjETQ6VdV6PRCgtoTrzrSTEivrWu1s'
			});
			let filePath = event.url;
			let fileName = filePath.substr(filePath.lastIndexOf('/') + 1);
			let uploadFileToTencentClound = (fileName, filePath) => {
				return new Promise((resolve, reject) => {
					cos.postObject(
						{
							Bucket: 'hollow-1308706291',
							Region: 'ap-nanjing',
							Key: 'playerImg/' + fileName,
							FilePath: filePath,
							onProgress: function(info) {
								console.log(JSON.stringify(info));
							}
						},
						function(err, data) {
							console.log('[cos.postObject-err]', err || data);
							resolve(data);
						}
					);
				});
			};

			//返回正确数据
			let resolveData = uploadFileToTencentClound(fileName, filePath);
			resolveData.then(function(data) {
				let newFilePath = data.Location;
				// todo 判断是否为空 不为空合并数组concat
				const imageList = uni.getStorageSync('imagePlayer');
				if (imageList.length <= 0) {
					uni.setStorageSync('imagePlayer', [newFilePath]);
				} else {
					uni.setStorageSync('imagePlayer', imageList.concat([newFilePath]));
				}
			});
		},
		onJumpToInfoMain(form) {
			let that = this;
			let imageUrl = uni.getStorageSync('imagePlayer');
			console.log(form);
			console.log();
			uni.request({
				url: 'http://localhost:8080/v1/player/savePlayer',
				method: 'POST',
				header: {
					'content-type': 'application/json'
				},
				data: {
					name: form.detail.value.votePlayName,
					userId: this.userId,
					voteId: this.voteId,
					imageList: imageUrl
				},
				success: function(res) {
					//成功后跳转
					console.log(res);
					//返回上一个栈页面
					//TODO 如何带值进行传送
					uni.navigateBack({
						delta: 2
					})
				}
			});
		}
	},
	onLoad(option) {
		console.log('vote-user-enroll', option);
		this.userId = option.userId;
		this.voteId = option.voteId;
		uni.removeStorageSync('imagePlayer');
	}
};
</script>

<style>
@import url('vote-user-enroll.less');
</style>
