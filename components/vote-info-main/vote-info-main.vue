<!-- 点击选手卡片后中的投票首页中的选手卡片 -->
<template>
	<view>
		<view class="container">
			<view class="main-grid">
				<view class="box-img">
					<view class="pic-all-image"><image style="width: 338rpx; height: 262rpx;" :src="infoItem.img"></image></view>
				</view>
				<view class="box-text">
					<view class="box-all-up">
						<van-row class="box-main-text">
							<van-col span="10" offset="2">{{ infoItem.userName }}</van-col>
							<van-col span="8" offset="4">
								<text style="color: #626262;">{{ tNum }}票</text>
							</van-col>
						</van-row>
					</view>
					<view class="box-all-down">
						<van-row class="box-part-text">
							<van-col span="10" offset="2">
								<view class="box-part-text-first">{{ infoItem.userNo }}号选手</view>
							</van-col>
							<van-col span="10" offset="2">
								<!-- <navigator :url="infoItem.url"> -->
								<van-button size="small" type="info" @tap="onClickTicket()">投票</van-button>
								<!-- </navigator> -->
							</van-col>
							<!-- {{ infoItem.playerId }}  测试用可以获取该用户playerid-->
						</van-row>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'vote-info-main',
	props: {
		infoItem: {
			type: Object
		}
	},
	data() {
		return {
			tNum: this.infoItem.ticketNum
		}
	},
	methods: {
		onClickTicket() {
			let that = this
			console.log('this.infoItem', this.infoItem)
			uni.request({
				url: 'http://localhost:8081/v1/user/takeVoteUpdate',
				method: 'POST',
				header: {
					'content-type': 'application/json'
				},
				data: {
					userId: this.infoItem.userId,
					playerId: this.infoItem.playerId,
					voteId: this.infoItem.voteId
				},
				success(res) {
					console.log('vote-info-main-选手卡片', res)
					if (res.statusCode === 200 && res.data.code !== 5) {
						that.tNum += 1
						uni.showToast({
							title: '为' + that.infoItem.userNo + '号投票成功',
							icon: 'success',
							// 持续时间
							duration: 1000
						})
					}else{
						uni.showToast({
							title: '已达上限次数',
							icon: 'error',
							// 持续时间
							duration: 1000
						})
					}
				}
			})
		}
	}
}
</script>

<style>
@import url('vote-info-main.less');
</style>
