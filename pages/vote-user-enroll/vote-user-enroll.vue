<!-- 选手报名界面 -->
<template>
	<view>
		<view class="container">
			<view class="top-uploader"><van-uploader :file-list="fileList" preview-size="225rpx" upload-text="上传活动照片" /></view>
			<form>
				<view class="mid-name">
					<van-cell-group>
						<view class="vote-name"><van-field value="" label="选手名称:" placeholder="请输入选手名称" input-align="right" /></view>
					</van-cell-group>
				</view>
				<view class="floor-btn"><van-button custom-class="temp-save-button" plain type="info" @tap="onJumpToInfoMain(InfoUrl)">立即报名</van-button></view>
			</form>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
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
		onJumpToInfoMain(url) {
			uni.request({
				url: 'http://localhost:8080/v1/vote/saveAll',
				method: 'POST',
				header: {
					'content-type': 'application/json'
				},
				data: {
					voteLimit: that.voteStrict,
					voteNumLimit: that.vanStepper,
					description: that.textareaText,
					snapVote: that.snapVote,

					openid: that.openid,
					name: that.name,
					categoryId: that.categoryId,
					startTime: that.startTime,
					endTime: that.endTime,
					status: 1, //表示存在状态
					imageList: that.imgUrl
				},
				success: function(res) {
					//成功后跳转
					console.log(res);
					uni.navigateTo({
						url,
						success(res) {
							console.log(res);
						}
					});
				}
			});
		}
	}
};
</script>

<style>
@import url('vote-user-enroll.less');
</style>
