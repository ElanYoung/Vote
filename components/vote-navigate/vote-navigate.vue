<!-- 另一种思路 -->
<!-- <template>
	<view>
		<view class="container">
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
</template>

<script>
export default {
	name: 'vote-navigate',
	props: {
		// 接收由主页面传来的值，就是当前页面的索引
		tabbarIndex: {
			type: Number
		}
	},
	data() {
		return {
			tabbarActive: this.tabbarIndex,
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
			]
		}
	},
	methods: {
		// 底部标签栏转变
		// TODO 如何修改不让底部栏全部变蓝色
		onTabbarChange(event) {
			this.tabbarActive = event.detail
			console.log(this.tabbarActive)
			switch (this.tabbarActive) {
				case 0:
					uni.reLaunch({
						url: '/pages/voteInfo/voteInfo',
					})
					break
				case 1:
					uni.reLaunch({
						url: '/pages/voteInfoRank/voteInfoRank',
					})
					break
				case 2:
					uni.reLaunch({
						url: '/pages/voteInfoDetail/voteInfoDetail',
					})
					break
			}
		}
	}
}
</script>

<style lang="less">
@import url('vote-navigate.less');
</style>
 -->