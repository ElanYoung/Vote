<!-- 我的界面 -->
<template>
	<view>
		<view class="container">
			<!-- 顶部头像 -->
			<view class="top-card">
				<van-row>
					<van-col span="5" offset="1">
						<view class="top-card-img"><van-image round width="128rpx" height="128rpx" :src="user.imgUrl" /></view>
					</van-col>
					<van-col span="12">
						<view class="top-card-nd">
							<view class="top-card-name">
								<van-row>
									<van-col offset="2">{{ user.name }}</van-col>
									<van-col offset="1"><image src="/static/imgMy/secure.svg" id="name-icon"></image></van-col>
								</van-row>
							</view>
							<view class="top-card-data">
								<van-row>
									<van-button custom-class="top-card-data-btn" size="small">
										<text>{{ user.privilegeData }} &nbsp;到期</text>
									</van-button>
								</van-row>
							</view>
						</view>
					</van-col>
					<van-col span="5" offset="1">
						<view class="invest-btn"><van-button custom-class="invest-btn-diy">续费</van-button></view>
					</van-col>
				</van-row>
			</view>
			<!-- 中部管理 -->
			<view class="mid-card">
				<!-- 网格导航 -->
				<view class="van-grid-icon">
					<van-grid column-num="4" :border="false">
						<van-grid-item use-slot="false" v-for="(item, index) in images" :key="index">
							<view class="van-grid-btn" @tap="onJumpTo(item.url)">
								<view><image style="width: 100rpx; height: 100rpx;" :src="item.imgUrl"></image></view>
								<view>
									<text class="van-grid-font">{{ item.name }}</text>
								</view>
							</view>
						</van-grid-item>
					</van-grid>
				</view>
				<!-- 单元格 -->
				<view class="mid-card-all-cell">
					<van-cell size="large" value="" icon="/static/imgMy/cell/c1.svg" is-link>
						<view slot="title"><view class="van-cell-text">草稿箱</view></view>
					</van-cell>
					<van-cell size="large" value="" icon="/static/imgMy/cell/c2.svg" is-link>
						<view slot="title"><view class="van-cell-text">回收站</view></view>
					</van-cell>
				</view>
			</view>
			<!-- 底部单元格 -->
			<view class="floor-card">
				<view class="floor-card-all-cell">
					<van-cell size="large" value="" icon="/static/imgMy/cell/c5.svg" is-link>
						<view slot="title"><view class="van-cell-text">设置</view></view>
					</van-cell>
					<van-cell size="large" value="" icon="/static/imgMy/cell/c4.svg" is-link>
						<view slot="title"><view class="van-cell-text">帮助中心</view></view>
					</van-cell>
					<van-cell size="large" value="200-100-0000" icon="/static/imgMy/cell/c6.svg" is-link>
						<view slot="title"><view class="van-cell-text">联系客服</view></view>
					</van-cell>
					<van-cell size="large" value="" icon="/static/imgMy/cell/c3.svg" is-link>
						<view slot="title"><view class="van-cell-text">关于我们</view></view>
					</van-cell>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			user: {
				name: '纸素画笺',
				imgUrl: '/static/imgMy/headImg.png',
				privilegeData: '2020-5-1'
			},
			images: [
				{
					name: '投票管理',
					imgUrl: '/static/imgMy/z1.png',
					url: '/pages/myChildren/myManageVote/myManageVote'
				},
				{
					name: '我参与的',
					imgUrl: '/static/imgMy/z2.png',
					url: '/pages/myChildren/myJoinVote/myJoinVote'
				},
				{
					name: '我的助力',
					imgUrl: '/static/imgMy/z3.png',
					url: '/pages/homeChildren/manageVote/manageVote'
				},
				{
					name: '我的账单',
					imgUrl: '/static/imgMy/z4.png',
					url: '/pages/homeChildren/helpCenter/helpCenter'
				}
			]
		}
	},
	methods:{
		onJumpTo(url) {
			uni.navigateTo({
				url,
				success(res) {
					console.log(res)
				}
			})
		}
	}
}
</script>

<style>
@import url('my.less');
</style>
