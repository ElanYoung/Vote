<!-- 最新投票 -->
<template>
	<!--主要导航栏-->
	<view class="main-tab">
		<van-tabs animated color="#00aaff" line-width="40rpx" line-height="9rpx">
			<van-tab title="推荐">
				<van-grid column-num="2" :border="true">
					<van-grid-item use-slot v-for="(item, index) in imagesCard" :key="index"><vote-item :imgItem="item" /></van-grid-item>
				</van-grid>
			</van-tab>
			<van-tab title="生活">
				<van-grid column-num="2" :border="true">
					<van-grid-item use-slot v-for="(item, index) in imagesCard" :key="index"><vote-item :imgItem="item" /></van-grid-item>
				</van-grid>
			</van-tab>
			<van-tab title="教育">
				<van-grid column-num="2" :border="true">
					<van-grid-item use-slot v-for="(item, index) in imagesCard" :key="index"><vote-item :imgItem="item" /></van-grid-item>
				</van-grid>
			</van-tab>
			<van-tab title="互联网">
				<van-grid column-num="2" :border="true">
					<van-grid-item use-slot v-for="(item, index) in imagesCard" :key="index"><vote-item :imgItem="item" /></van-grid-item>
				</van-grid>
			</van-tab>
			<van-tab title="科技">
				<van-grid column-num="2" :border="true">
					<van-grid-item use-slot v-for="(item, index) in imagesCard" :key="index"><vote-item :imgItem="item" /></van-grid-item>
				</van-grid>
			</van-tab>
		</van-tabs>
	</view>
</template>

<script>
// VoteItem  =  vote-item 自动变换驼峰命名
import VoteItemNew from '../../../components/vote-item-new/vote-item-new.vue'
export default {
	components: {
		VoteItemNew
	},
	data() {
		return {
			imagesCard: [
				{
					name: '最新投票最新投票最新投票最新新投票最新投票最',
					item: '/static/imgComponents/index/c1.jpg',
					pnum: '10',
					vnum: '130000'
				},
				{
					name: '投票模板',
					item: '/static/imgComponents/index/c2.jpg',
					pnum: '5',
					vnum: '500000'
				},
				{
					name: '投票管理',
					item: '/static/imgComponents/index/c3.jpg',
					pnum: '30',
					vnum: '70000'
				},
				{
					name: '帮助中心',
					item: '/static/imgComponents/index/c4.jpg',
					pnum: '333',
					vnum: '105000'
				},
				{
					name: '帮助中心',
					item: '/static/imgComponents/index/c4.jpg',
					pnum: '333',
					vnum: '105000'
				}
			]
		}
	},
	methods: {}
}
</script>

<style></style>
