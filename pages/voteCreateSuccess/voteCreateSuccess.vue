<!-- 创建成功 -->
<template>
	<view>
		<view class="container">
			<!-- 顶部照片 -->
			<view class="top-img"><image style="width: 602rpx; height: 692rpx;" :src="imgitem"></image></view>
			<view class="mid-btn">
				<van-row>
					<van-col span="6" offset="16"><van-button custom-class="temp-save-button" size="small" plain type="info">保存到手机</van-button></van-col>
				</van-row>
			</view>
			<!-- 底部单元格 -->
			<view class="floor-btn">
				<van-row>
					<van-col span="8" offset="2"><van-button custom-class="look-button" plain type="info" @tap="onJumpToHome(homeUrl)">查看投票</van-button></van-col>
					<van-col span="8" offset="3"><van-button custom-class="manage-button" plain type="info" @tap="onJumpToManage(manageUrl)">投票管理</van-button></van-col>
				</van-row>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			homeUrl: '/pages/home/home',
			manageUrl: '/pages/homeChildren/manageVote/manageVote',
			imgitem: '/static/imgVoteCreateSuccess/s1.png'
		}
	},
	methods: {
		onJumpToHome(url) {
			uni.switchTab({
				url
			})
		},
		onJumpToManage(url) {
			uni.navigateTo({
				url,
				success(res) {
					console.log(res)
				}
			})
		}
	}
}
</script>

<style>
@import url('voteCreateSuccess.less');
</style>
