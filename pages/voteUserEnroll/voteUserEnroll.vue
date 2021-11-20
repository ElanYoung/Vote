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
				<view class="floor-btn">
					<van-button custom-class="temp-save-button" plain type="info">立即报名</van-button>
				</view>
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
			]
		}
	},
	methods: {}
}
</script>

<style>
@import url('voteUserEnroll.less');
</style>
