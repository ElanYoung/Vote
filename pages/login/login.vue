<template>
	<view>
		<view class="container">
			<view class="title">
				<image class="login-image" src="/static/img/login_boxImg.svg"></image>
				<text>投票系统</text>
			</view>
			<van-button id="login-button" custom-class="login-button" size="large" @tap="onLogin">立即登录</van-button>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			voteUrl: 'http://localhost:8081',
			nickName: ''
		};
	},
	methods: {
		onLogin() {
			// TODO 调用后端接口
			uni.getUserProfile({
				desc: '获取您的信息',
				success(res) {
					console.log(res);
					console.log('res.userInfo.nickName:' + res.userInfo.nickName);
					// this.nickName = res.userInfo.nickName;
					//向后端传数据
					uni.request({
						url: 'http://localhost:8081/v1/user/login',
						method: 'POST',
						data: {
							nickName: res.rawData.nickName
						},
						success: function(res) {
							console.log(res);
						}
					});
				}
			});

			//跳转界面
			uni.switchTab({
				url: '/pages/home/home'
			});
		}
	}
};
</script>

<style style="less">
@import url('login.less');
</style>
