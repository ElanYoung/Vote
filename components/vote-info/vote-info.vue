<!-- 投票首页 -->
<template>
	<view>
		<view class="container">
			<!-- 顶部照片 -->
			<view class="top-img">
				<view class="top-img-main"><van-image width="100%" height="378rpx" :src="topImg" /></view>
			</view>
			<!-- 中部信息 -->
			<view class="mid-info">
				<view class="mid-info-minfo">
					<van-row style="text-align: center;">
						<van-col span="8">
							<view id="num">
								<text>{{ voteInfos.voteManNum }}</text>
							</view>
							<view id="player"><text>投票选手</text></view>
						</van-col>
						<van-col span="8">
							<view id="num">
								<text>{{ voteInfos.voteAllNum }}</text>
							</view>
							<view id="player"><text>总投票数</text></view>
						</van-col>
						<van-col span="8">
							<view id="num">
								<text>{{ voteInfos.visitManNum }}</text>
							</view>
							<view id="player"><text>总访问数</text></view>
						</van-col>
					</van-row>
				</view>
				<view class="mid-info-time">
					<van-row style="text-align: center;">
						<view class="mid-info-time-text">
							<van-col span="12"><text>距离活动结束还有：</text></van-col>
							<van-col span="12">
								<text style="color: red; font-weight: bold;">{{ voteInfos.deadline }}</text>
							</van-col>
						</view>
					</van-row>
				</view>
				<view class="mid-info-btn">
					<van-row style="text-align: center;">
						<van-col offset="7"><van-button custom-class="enroll-btn" type="info" @tap="onJumpTo()">报名</van-button></van-col>
					</van-row>
				</view>
				<view class="mid-info-select">
					<van-row>
						<van-col span="22" offset="1">
							<van-search :value="searchValue" shape="round" placeholder="输入编号或者名称" use-action-slot @change="onSearchChange()" @search="onSearchClick()">
								<view slot="action" @tap="onSearchClick()" class="search-text">搜索</view>
							</van-search>
						</van-col>
					</van-row>
				</view>
			</view>
			<!-- 选手卡片 -->
			<view class="floor-card">
				<scroll-view class="floor-card-scroll-y" scroll-y="true">
					<van-grid column-num="2" border="true">
						<van-grid-item use-slot v-for="(item, index) in infos" :key="index">
							<block><vote-info-main :infoItem="item" /></block>
						</van-grid-item>
					</van-grid>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'vote-info',
	props: {
		voteInfos: {
			type: Object
		}
	},
	data() {
		return {
			topImg: '/static/imgVoteInfo/vi1.png',
			// voteManNum: 10,
			// voteAllNum: 1890,
			// visitManNum: 56000,
			// deadline: '20天20时12分08秒',
			searchValue: '',
			// tabbarIndex: 0,
			infos: [
				{
					img: '/static/imgVoteInfo/imgPlayer/user1.png',
					userName: '王大雷',
					voteNum: '18',
					userNo: '001'
				},
				{
					img: '/static/imgVoteInfo/imgPlayer/user2.png',
					userName: '陈二狗',
					voteNum: '144',
					userNo: '002',
					url: '/pages/homeChildren/manageVote/manageVote'
				},
				{
					img: '/static/imgVoteInfo/imgPlayer/user1.png',
					userName: '曹三刀',
					voteNum: '1424',
					userNo: '003',
					url: '/pages/homeChildren/manageVote/manageVote'
				},
				{
					img: '/static/imgVoteInfo/imgPlayer/user2.png',
					userName: '范四鬼',
					voteNum: '24',
					userNo: '004',
					url: '/pages/homeChildren/manageVote/manageVote'
				},
				{
					img: '/static/imgVoteInfo/imgPlayer/user2.png',
					userName: '范四鬼',
					voteNum: '24',
					userNo: '004',
					url: '/pages/homeChildren/manageVote/manageVote'
				}
			]
		};
	},
	methods: {
		onSearchChange(e) {
			this.searchValue = e.detail;
		},
		//搜索操作
		onSearchClick() {
			uni.showToast({
				title: '搜索成功' + this.searchValue,
				// 持续时间
				duration: 1000
			});
		},
		//报名跳转
		onJumpTo() {
			console.log('this.voteInfos.Alloption', this.voteInfos.Alloption);
			uni.navigateTo({
				//把voteId和UserId传给player表
				url: '/pages/vote-user-enroll/vote-user-enroll?voteId=' + this.voteInfos.voteId 
				+ '&userId=' + this.voteInfos.userId 
			});
		}
	},
	onLoad() {
		console.log('vote-info测试');
	},
	//vue中的生命周期，子组件无法调用父组件的生命周期（原生小程序周期/uni-app周期）
	//不能用create 因为必须要在数据渲染之后才可以调用到真实的voteid数据
	mounted() {
		this.infos.length = 0;
		let that = this;
		//TODO 获取数据
		uni.request({
			url: 'http://localhost:8080/v1/player/list',
			method: 'POST',
			header: {
				'content-type': 'application/x-www-form-urlencoded'
			},
			data: {
				voteId: this.voteInfos.voteId
			},
			success(res) {
				console.log('vote-info-res', res);
				//数组长度为0
				let ListArray = [];
				ListArray = res.data.data;
				// console.log(ListArray[0].playerImages[0].image);
				for (var i = 0; i < ListArray.length; i++) {
					that.infos.push({
						userName: ListArray[i].name,
						img: 'http://' + ListArray[i].playerImages[0].image,
						voteNum: ListArray[i].ticketNum,
						userNo: i + 1
					});
				}
			}
		});
	}
};
</script>

<style>
@import url('vote-info.less');
</style>
