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
								<text style="color: #626262;">{{ infoItem.voteNum }}票</text>
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
		return {}
	},
	methods: {
		onClickTicket() {
			uni.showToast({
				title: this.infoItem.userNo+'号投票成功!',
				icon:'success',
				// 持续时间
				duration: 1000
			})
		}
	}
}
</script>

<style>
@import url('vote-info-main.less');
</style>
