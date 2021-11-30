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
		return {}
	},
	methods: {
		onLogin() {
			// TODO 调用后端接口
			uni.getUserProfile({
				desc: '获取您的信息',
				success(res) {
					console.log(res)
					//获取code
					uni.login({
						// provider: 'weixin',
						success: function(loginRes) {
							console.log('测试测试：')
							console.log(loginRes.code)

							//向后端传数据
							uni.request({
								url: 'http://localhost:8080/v1/user/login',
								method: 'POST',
								header: {
									'content-type': 'application/json'
								},
								data: {
									openid: '',
									unionid: '',
									nickname: res.userInfo.nickName,
									avatarUrl: res.userInfo.avatarUrl,
									session_key: '',
									wxProfile: res.userInfo,
									code: loginRes.code
								},
								success: function(res) {
									console.log(res)
									console.log(res.data)
									if (res.data === 'success') {
										//跳转界面
										uni.switchTab({
											url: '/pages/home/home'
										})
									} else {
										Toast.fail('无法登陆')
									}
								}
							})
						}
					})
				}
			})
		}
	}
}
</script>

<style style="less">
@import url('login.less');
</style>
