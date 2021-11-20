<!-- 我参与的投票活动显示 -->
<template>
	<view>
		<view class="container">
			<view class="container-card">
				<view class="card-top">
					<van-row>
							<van-col span="20" offset="1" class="text-data">{{ player.title }}</van-col>
							<van-col span="3" class="text-data"><text>></text></van-col>
					</van-row>
				</view>
				<view class="card-body">
					<van-row>
						<view class="cardbody-img">
							<van-col span="8" offset="1">
								<image class="card-img" :src="player.imgUrl"></image>
							</van-col>
						</view>
						<view class="cardbody-info">
							<van-col span="15">
								<view class="carbody-text">
									<view class="carbody-text-c1">
										<van-row>
											<van-col span="24">
												<text>{{ player.name }}</text>
											</van-col>
										</van-row>
									</view>
									<view class="carbody-text-c2">
										<van-row>
											<van-col span="12">{{ player.uNo }}号选手</van-col>
											<van-col span="8" offset="4">{{ player.uCoupon }}票</van-col>
										</van-row>
									</view>
									<view class="carbody-text-data">
										<van-row>
											<van-col>{{ player.data }}</van-col>
										</van-row>
									</view>
								</view>
								<view class="cardbody-btn">
									<van-row>
										<view class="">
											<van-col span="8" offset="16"><van-button size="small" type="info">查看详情</van-button></van-col>
										</view>
									</van-row>
								</view>
							</van-col>
						</view>
					</van-row>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'vote-my-join',
	props: {
		player: {
			type: Object
		}
	},
	data() {
		return {}
	}
}
</script>

<style lang="less">
@import url('vote-my-join.less');
</style>
