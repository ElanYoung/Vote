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
		}
	},
	methods: {
		onLogin() {
			// TODO 调用后端接口
			uni.getUserProfile({
				desc: '获取您的信息',
				success(res) {
					//向后端传数据
					uni.request({
						url: 'http://localhost:8080/v1/user/login',
						method: 'POST',
						header: {
							'content-type': 'application/json'
						},
						data: {
							openid:'openid',
							unionid:'unionid',
							nickName:res.userInfo.nickName,
							avatar_url:'avatar_url',
							session_key:'session_key',
							wx_profile:'wx_profile',
						},
						success: function(res) {
							console.log(res)
						}
					})
				}
			})

			//跳转界面
			uni.switchTab({
				url: '/pages/home/home'
			})
		}
	}
}
</script>

<style style="less">
@import url('login.less');
</style>
