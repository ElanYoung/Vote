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
				}
			})
			uni.navigateTo({
				url: '../main/main'
			})
		}
	}
}
</script>

<style>
.container {
	position: absolute;
	top: 40%;
	left: 50%;
	transform: translate(-50%, -50%);
}

.title {
	text-align: center;
	margin-bottom: 180rpx;
	font-family: STXinwei;
	font-weight: bold;
	font-size: 70rpx;
}

/* 通过id强调可以不用在每个样式后加!important */
#login-button .login-button {
	width: 532rpx;
	background-color: #00adff;
	color: #fff;
	text-align: center;
	border-radius: 50rpx;
	box-shadow: 0 2 0 #00adff;
	font-family: Microsoft YaHei;
	font-size: 35rpx;
}

.login-image {
	display: block;
	margin-left: auto;
	margin-right: auto;
	height: 200rpx;
	width: 200rpx;
	margin-bottom: 60rpx;
}
</style>
