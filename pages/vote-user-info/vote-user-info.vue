<!-- 投票全部界面通过底下tabbar来选择界面 -->
<template>
	<view>
		<view class="container">
			<!-- 主体内容 -->
			<view class="main-body">
				<vote-info v-if="tabbarActive === 0" :voteInfos="mainInfo"></vote-info>
				<vote-info-rank v-if="tabbarActive === 1"></vote-info-rank>
				<vote-info-detail v-if="tabbarActive === 2"></vote-info-detail>
			</view>
			<!-- 底部导航栏 -->
			<view class="floor-tabbar">
				<van-tabbar :active="tabbarActive" @change="onTabbarChange()">
					<van-tabbar-item>
						<image slot="icon" :src="icon[0].normal" mode="aspectFit" style="width: 30px; height: 18px;" />
						<image slot="icon-active" :src="icon[0].active" mode="aspectFit" style="width: 30px; height: 18px;" />
						投票首页
					</van-tabbar-item>
					<van-tabbar-item>
						<image slot="icon" :src="icon[1].normal" mode="aspectFit" style="width: 30px; height: 18px;" />
						<image slot="icon-active" :src="icon[1].active" mode="aspectFit" style="width: 30px; height: 18px;" />
						选手排名
					</van-tabbar-item>
					<van-tabbar-item>
						<image slot="icon" :src="icon[2].normal" mode="aspectFit" style="width: 30px; height: 18px;" />
						<image slot="icon-active" :src="icon[2].active" mode="aspectFit" style="width: 30px; height: 18px;" />
						活动详情
					</van-tabbar-item>
				</van-tabbar>
			</view>
		</view>
	</view>
</template>

<script>
import VoteInfo from '../../components/vote-info/vote-info.vue'
import VoteInfoDetail from '../../components/vote-info-detail/vote-info-detail.vue'
import VoteInfoRank from '../../components/vote-info-rank/vote-info-rank.vue'
//时间戳计时工具类
import { intervalTime } from '../../util/time.js'
import { formateDateBack } from '../../util/time.js'
export default {
	components: {
		VoteInfo,
		VoteInfoDetail,
		VoteInfoRank
	},
	name: 'vote-navigate',
	data() {
		return {
			tabbarActive: 0,
			icon: [
				{
					text: '投票首页',
					normal: '/static/imgVoteInfo/tabbar/riFill-magic-fill.svg',
					active: '/static/imgVoteInfo/tabbar/riFill-magic-fill Copy.svg'
				},
				{
					text: '选手排名',
					normal: '/static/imgVoteInfo/tabbar/riFill-table-fill.svg',
					active: '/static/imgVoteInfo/tabbar/riFill-table-fill Copy.svg'
				},
				{
					text: '活动详情',
					normal: '/static/imgVoteInfo/tabbar/riFill-article-fill.svg',
					active: '/static/imgVoteInfo/tabbar/riFill-article-fill Copy.svg'
				}
			],
			mainInfo: {
				voteManNum: 10,
				voteAllNum: 1890,
				visitManNum: 56000,
				deadline: '',
				voteId: 0,
				userId: 0
			}
		}
	},
	methods: {
		// 底部标签栏转变
		// TODO 如何修改不让底部栏全部变蓝色  把主界面变为组件通过隐藏显示即可实现
		onTabbarChange(event) {
			this.tabbarActive = event.detail
		}
	},
	onLoad(option) {
		console.log('option', option)
		let AllDataObj = JSON.parse(decodeURIComponent(option.AllDataObj))
		console.log('AllDataObj格式转换后', AllDataObj)
		this.mainInfo.voteId = AllDataObj.id
		this.mainInfo.userId = AllDataObj.userId
		this.mainInfo.voteManNum = AllDataObj.totalTurnout
		this.mainInfo.voteAllNum = AllDataObj.voteTotal
		this.mainInfo.visitManNum = AllDataObj.visitNum
		setInterval(() => {
			//得到当前时间
			let currTime = new Date().getTime()
			//将数据格式化变为时间戳
			let endTime = new Date(formateDateBack(AllDataObj.endTime)).getTime()
			console.log('currTime', currTime)
			console.log('endTime', endTime)
			if (currTime <= endTime) {
				// 需要格式化后端的数据
				let timeGap = intervalTime(currTime, endTime)
				this.mainInfo.deadline = timeGap
			} else {
				this.mainInfo.deadline = '时间已到，投票结束！'
			}
		}, 1000)
	}
}
</script>

<style lang="less">
@import url('vote-user-info.less');
</style>
