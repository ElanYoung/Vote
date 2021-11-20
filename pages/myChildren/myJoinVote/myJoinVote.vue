<template>
	<view>
		<view class="container">
			<block v-for="(item, index) in player" :key="index">
				<vote-my-join :player="item" />
			</block>
		</view>
	</view>
</template>

<script>
import VoteMyJoin from '../../../components/vote-my-join/vote-my-join.vue'
export default {
	components: {
		VoteMyJoin
	},
	data() {
		return {
			player: [
				{
					title: '金江名都杯沁阳市广场舞大赛网络人气大奖评选',
					data: '2020-04-13 10：00',
					name: '王大雷的滑板鞋',
					uNo: '001',
					uCoupon: '19090',
					imgUrl:'/static/imgVoteInfo/imgPlayer/user1.png'
				},
				{
					title: '金江名都杯沁阳市广场舞大赛网络人气大奖评选',
					data: '2020-04-13 10：00',
					name: '王大雷的滑板鞋',
					uNo: '001',
					uCoupon: '19090',
					imgUrl:'/static/imgVoteInfo/imgPlayer/user2.png'
				},
				{
					title: '金江名都杯沁阳市广场舞大赛网络人气大奖评选',
					data: '2020-04-13 10：00',
					name: '王大雷的滑板鞋',
					uNo: '001',
					uCoupon: '19090',
					imgUrl:'/static/imgVoteRank/imgHead/h13.jpg'
				},
				{
					title: '金江名都杯沁阳市广场舞大赛网络人气大奖评选',
					data: '2020-04-13 10：00',
					name: '王大雷的滑板鞋',
					uNo: '001',
					uCoupon: '19090',
					imgUrl:'/static/imgVoteRank/imgHead/h5.jpg'
				},
				{
					title: '金江名都杯沁阳市广场舞大赛网络人气大奖评选',
					data: '2020-04-13 10：00',
					name: '王大雷的滑板鞋',
					uNo: '001',
					uCoupon: '19090',
					imgUrl:'/static/imgVoteRank/imgHead/h1.jpg'
				},
			]
		}
	},
	methods: {}
}
</script>

<style style="less">
	.container{
		/* background: #F6F6F6; */
	}
</style>
