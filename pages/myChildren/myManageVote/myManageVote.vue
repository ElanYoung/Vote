<template>
	<view>
		<block v-for="(item, index) in manages" :key="index">
			<vote-manage :manage="item" />
		</block>
	</view>
</template>

<script>
import VoteManage from '../../../components/vote-manage/index_manage.vue'

export default {
	components: {
		VoteManage
	},
	data() {
		return {
			manages: [
				{
					data: '2020-4-11至2020-4-11',
					state: '进行中',
					name: '金江名都杯沁阳市广场舞大赛网络人气大奖评选1',
					manNum: '访问:1320',
					couponNum: '票数:19090'
				},
				{
					data: '2020-4-12至2020-4-12',
					state: '进行中',
					name: '金江名都杯沁阳市广场舞大赛网络人气大奖评选2',
					manNum: '访问:1320',
					couponNum: '票数:19090'
				},
				{
					data: '2020-4-13至2020-4-13',
					state: '进行中',
					name: '金江名都杯沁阳市广场舞大赛网络人气大奖评选3',
					manNum: '访问:1320',
					couponNum: '票数:19090'
				},
				{
					data: '2020-4-14至2020-4-14',
					state: '进行中',
					name: '金江名都杯沁阳市广场舞大赛网络人气大奖评选4',
					manNum: '访问:1320',
					couponNum: '票数:19090'
				},
				{
					data: '2020-4-15至2020-4-15',
					state: '进行中',
					name: '金江名都杯沁阳市广场舞大赛网络人气大奖评选5',
					manNum: '访问:1320',
					couponNum: '票数:19090'
				}
			]
		}
	}
}
</script>

<style lang="less">

</style>
