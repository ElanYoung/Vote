<!-- 主页 -->
<template>
	<view class="content">
		<view>
			<!-- 上部滑块 -->
			<view class="main-swiper">
				<swiper
					class="swiper"
					:indicator-dots="indicatorDots"
					:autoplay="autoplay"
					:interval="interval"
					:duration="duration"
					:circular="circular"
					indicator-color="rgba(255, 255, 255, .3)"
					indicator-active-color="#FFF"
				>
					<swiper-item><van-image width="100%" height="100%" fit="scale-down" src="/static/imgMain/swiper/d1.png" /></swiper-item>
					<swiper-item><van-image width="100%" height="100%" fit="scale-down" src="/static/imgMain/swiper/d2.png" /></swiper-item>
					<swiper-item><van-image width="100%" height="100%" fit="scale-down" src="/static/imgMain/swiper/d3.png" /></swiper-item>
				</swiper>
			</view>
			<!-- 中间导航按钮 -->
			<view class="main-icon">
				<view class="van-grid-icon">
					<van-grid column-num="4" :border="false">
						<van-grid-item use-slot="false" v-for="(item, index) in images" :key="index">
							<view class="van-grid-btn" @tap="onJumpTo(item.url)">
								<image style="width: 100rpx; height: 100rpx; text-align: center;" :src="item.imgUrl"></image>
								<text class="van-grid-font">{{ item.name }}</text>
							</view>
						</van-grid-item>
					</van-grid>
				</view>
			</view>
			<!--下部导航栏-->
			<!-- TODO 这块导航栏内容可以限制  如何将选中字体加粗-->
			<view class="main-tab">
				<van-tabs animated color="#00aaff" line-width="40rpx" line-height="9rpx">
					<!-- 尝试v-for实现 -->
					<!-- 					<view class="main-tab-for" v-for="(item,index) in Data" :key="index">
					<van-tab :title="item"><vote-item /></van-tab>
					</view> -->
					<van-tab :title="tabData[0]">
						<view class="van-grid-icon">
							<van-grid column-num="2" :border="true">
								<van-grid-item use-slot v-for="(item, index) in imagesCard" :key="index"><vote-item :imgItem="item" /></van-grid-item>
							</van-grid>
						</view>
					</van-tab>
					<van-tab :title="tabData[1]">
						<view class="van-grid-icon">
							<van-grid column-num="2" :border="true">
								<van-grid-item use-slot v-for="(item, index) in imagesCard" :key="index"><vote-item :imgItem="item" /></van-grid-item>
							</van-grid>
						</view>
					</van-tab>
					<van-tab :title="tabData[2]">内容 3</van-tab>
					<van-tab :title="tabData[3]">内容 4</van-tab>
					<van-tab :title="tabData[4]">内容 5</van-tab>
				</van-tabs>
			</view>
		</view>
	</view>
</template>

<script>
// VoteItem  =  vote-item 自动变换驼峰命名
import VoteItem from '../../components/vote-item/vote-item.vue';
export default {
	components: {
		VoteItem
	},
	data() {
		return {
			indicatorDots: true,
			autoplay: true,
			interval: 2000,
			duration: 500,
			circular: true,
			tabData: ['推荐', '生活', '教育', '互联网', '科技'],
			imagesCard: [
				{
					name: '最新投票最新投票最新投票最新新投票最新投票最',
					item: '/static/imgComponents/index/c1.jpg',
					pnum: '10',
					vnum: '130000',
					toUrl: '/pages/vote-user-info/vote-user-info',
					AllData: []
				},
				{
					name: '投票模板',
					item: '/static/imgComponents/index/c2.jpg',
					pnum: '5',
					vnum: '500000',
					toUrl: '/pages/vote-user-info/vote-user-info'
				},
				{
					name: '投票管理',
					item: '/static/imgComponents/index/c3.jpg',
					pnum: '30',
					vnum: '70000',
					toUrl: '/pages/vote-user-info/vote-user-info'
				},
				{
					name: '帮助中心',
					item: '/static/imgComponents/index/c4.jpg',
					pnum: '333',
					vnum: '105000',
					toUrl: '/pages/vote-user-info/vote-user-info'
				},
				{
					name: '帮助中心',
					item: '/static/imgComponents/index/c4.jpg',
					pnum: '333',
					vnum: '105000',
					toUrl: '/pages/vote-user-info/vote-user-info'
				}
			],
			//存储后端的全部数据
			imagesCardData: [],
			images: [
				{
					name: '最新投票',
					imgUrl: '/static/imgMain/van-grid/b1.png',
					url: '/pages/home-item/new-vote/new-vote'
				},
				{
					name: '投票模板',
					imgUrl: '/static/imgMain/van-grid/b2.png',
					url: '/pages/home-item/model-vote/model-vote'
				},
				{
					name: '投票管理',
					imgUrl: '/static/imgMain/van-grid/b3.png',
					url: '/pages/home-item/manage-vote/manage-vote'
				},
				{
					name: '帮助中心',
					imgUrl: '/static/imgMain/van-grid/b4.png',
					url: '/pages/home-item/help-center/help-center'
				}
			]
		};
	},
	onShow() {
		this.imagesCard.length = 0;
		let that = this;
		//TODO 获取数据
		uni.request({
			url: 'http://localhost:8080/v1/vote/list',
			method: 'GET',
			success(res) {
				console.log('res', res);
				//数组长度为0
				let ListArray = [];
				ListArray = res.data.data;
				// console.log(ListArray[0].voteImages[0].image);
				for (var i = 0; i < ListArray.length; i++) {
					that.imagesCard.push({
						name: ListArray[i].name,
						item: 'http://' + ListArray[i].voteImages[0].image,
						pnum: ListArray[i].totalTurnout,
						vnum: ListArray[i].voteTotal,
						toUrl: '/pages/vote-user-info/vote-user-info?AllDataObj=' + encodeURIComponent(JSON.stringify(ListArray[i]))
					});
				}
			}
		});
	},
	onLoad() {},
	methods: {
		onJumpTo(url) {
			uni.navigateTo({
				url,
				success(res) {
					console.log(res);
				}
			});
		}
	}
};
</script>

<style lang="less">
@import url('home.less');
</style>
