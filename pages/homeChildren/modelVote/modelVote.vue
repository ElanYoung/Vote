<!-- 投票模板 -->
<template>
	<view class="">
		<view class="container">
			<van-grid column-num="2" border="true">
			  <van-grid-item use-slot v-for="(item, index) in images" :key="index">
			    <block ><vote-model :imgItem="item" /></block>
			  </van-grid-item>
			</van-grid>
		</view>
	</view>
</template>

<script>
import VoteModel from '../../../components/vote-model/index_model.vue'
export default {
	components: {
		VoteModel
	},
	data() {
		return {
			images: [
				{
					name: '金江名都杯沁阳市广场舞大赛网络人气大奖评选',
					item: '/static/imgComponents/model/m1.png',
					url: '/pages/homeChildren/manageVote/manageVote'
				},
				{
					name: '佛山市华英中学第四届初三羽毛球比赛',
					item: '/static/imgComponents/model/m2.png',
					url: '/pages/homeChildren/manageVote/manageVote'
				},
				{
					name: '兴业银行厦门马拉松最美的奔跑者评选',
					item: '/static/imgComponents/model/m3.png',
					url: '/pages/homeChildren/manageVote/manageVote'
				},
				{
					name: '朝阳市最美环卫工评选，（城市守护者）',
					item: '/static/imgComponents/model/m4.png',
					url: '/pages/homeChildren/manageVote/manageVote'
				},
				{
					name: '兴业银行厦门马拉松最美的奔跑者评选',
					item: '/static/imgComponents/model/m5.png',
					url: '/pages/homeChildren/manageVote/manageVote'
				},
				{
					name: '朝阳市最美环卫工评选，（城市守护者）',
					item: '/static/imgComponents/model/m6.png',
					url: '/pages/homeChildren/manageVote/manageVote'
				}
			]
		}
	},
	method: {}
}
</script>

<style>
/* 	van-grid-item {
		height: 460rpx;
		width: 332rpx;
	} */
</style>
