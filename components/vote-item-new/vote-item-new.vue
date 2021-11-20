<!-- 主页卡片组件-最新投票-->
<template>
	<view>
		<view class="main-icon">
			<view class="pic-all-image">
				<image style="width: 338rpx; height: 262rpx;" :src="imgItem.item">
				</image>
				</view>
			<view class="box-all-top">
				<van-row class="box-main-text">
					<van-col span="24">{{ imgItem.name }}</van-col>
				</van-row>
			</view>
			<view class="box-all-down">
				<van-row class="box-part-text">
					<van-col span="10">参与:{{ imgItem.pnum }}</van-col>
					<van-col span="14">票数:{{ imgItem.vnum }}</van-col>
				</van-row>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'vote-item-new',
	props: {
		imgItem: {
			type: Object
		}
	},
	data() {
		return {

		}
	}
}
</script>

<style lang="less">
@import url('vote-item-new.less');
</style>
