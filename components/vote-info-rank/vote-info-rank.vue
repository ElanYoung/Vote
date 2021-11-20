<!-- 选手排名 -->
<template>
	<view>
		<view class="container">
			<view class="top-text"><text>排行榜</text></view>
			<view class="mid-champion-img">
				<view class="champion-img1">
					<view class=".champion-img-head-text"><text>2</text></view>
					<view><van-image round width="144rpx" height="144rpx" :src="championUser[1].uImg" /></view>
					<view class="champion-img-text">
						<view>{{ championUser[1].uName }}</view>
						<view class="champion-ticket">{{ championUser[1].uTicketNum }} 票</view>
					</view>
				</view>
				<view class="champion-img2">
					<view class="champion-img-head-img"><van-image round width="48rpx" height="48rpx" src="/static/imgVoteRank/no1.svg" /></view>
					<view><van-image round width="144rpx" height="144rpx" :src="championUser[0].uImg" /></view>
					<view class="champion-img-text">
						<view>{{ championUser[0].uName }}</view>
						<view class="champion-ticket">{{ championUser[0].uTicketNum }} 票</view>
					</view>
				</view>
				<view class="champion-img3">
					<view class=".champion-img-head-text"><text>3</text></view>
					<view><van-image round width="144rpx" height="144rpx" :src="championUser[2].uImg" /></view>
					<view class="champion-img-text">
						<view>{{ championUser[2].uName }}</view>
						<view class="champion-ticket">{{ championUser[2].uTicketNum }} 票</view>
					</view>
				</view>
			</view>
			<view class="floor-rank">
				<scroll-view class="floor-card-scroll-y" scroll-y="true">
					<view class="floor-rank-cell" v-for="(item, index) in user" :key="index">
						<view class="floor-rank-cell-card">
							<van-row>
								<van-col span="3" offset="1">
									<view class="floor-rank-cell-no">{{ item.uNo }}</view>
								</van-col>
								<van-col span="4">
									<view class="floor-rank-cell-img"><van-image round width="116rpx" height="116rpx" :src="item.uImg" /></view>
								</van-col>
								<van-col span="4" offset="1">
									<view class="floor-rank-cell-name">{{ item.uName }}</view>
								</van-col>
								<van-col span="7" offset="4">
									<view class="floor-rank-cell-text">{{ item.uTicketNum }} 票</view>
								</van-col>
							</van-row>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			championUser: [
				{
					uImg: '/static/imgVoteRank/imgHead/h1.jpg',
					uName: '迪奥娜',
					uTicketNum: '1454'
				},
				{
					uImg: '/static/imgVoteRank/imgHead/h2.jpg',
					uName: '钟离',
					uTicketNum: '454'
				},
				{
					uImg: '/static/imgVoteRank/imgHead/h3.jpg',
					uName: '甘雨',
					uTicketNum: '354'
				}
			],
			user: [
				{
					uNo: '4',
					uImg: '/static/imgVoteRank/imgHead/h1.jpg',
					uName: '张三',
					uTicketNum: '54'
				},
				{
					uNo: '5',
					uImg: '/static/imgVoteRank/imgHead/h4.jpg',
					uName: '李四',
					uTicketNum: '534'
				},
				{
					uNo: '6',
					uImg: '/static/imgVoteRank/imgHead/h5.jpg',
					uName: '王五',
					uTicketNum: '254'
				},
				{
					uNo: '7',
					uImg: '/static/imgVoteRank/imgHead/h6.jpg',
					uName: '七七',
					uTicketNum: '154'
				},
				{
					uNo: '8',
					uImg: '/static/imgVoteRank/imgHead/h7.jpg',
					uName: '迪卢克',
					uTicketNum: '554'
				},
				{
					uNo: '8',
					uImg: '/static/imgVoteRank/imgHead/h5.jpg',
					uName: '雷恩',
					uTicketNum: '554'
				},
				{
					uNo: '8',
					uImg: '/static/imgVoteRank/imgHead/h8.jpg',
					uName: '娜可露露',
					uTicketNum: '554'
				}
			]
		}
	},
	methods: {}
}
</script>

<style lang="less">
@import url('vote-info-rank.less');
</style>
